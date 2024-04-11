mod kv_store {
    pub trait KvStore {
        type InternalError: core::fmt::Debug;

        fn get(&self, key: &[u8]) -> Result<Vec<u8>, KvGetError<Self::InternalError>>;
        fn insert(
            &mut self,
            key: Vec<u8>,
            value: Vec<u8>,
        ) -> Result<(), KvInsertError<Self::InternalError>>;
        fn delete(&mut self, key: &[u8]) -> Result<(), KvDeleteError<Self::InternalError>>;
    }

    #[derive(Debug)]
    pub enum Infallible {}

    #[derive(Debug)]
    pub enum KvGetError<InternalError> {
        NotFound(Vec<u8>),
        Internal(InternalError),
    }

    #[derive(Debug)]
    pub enum KvInsertError<InternalError> {
        AlreadyExists(Vec<u8>, Vec<u8>),
        Internal(InternalError),
    }

    #[derive(Debug)]
    pub enum KvDeleteError<InternalError> {
        NotFound(Vec<u8>),
        Internal(InternalError),
    }
}

pub mod mem_kv_store {
    pub use super::kv_store::*;

    #[derive(Debug, Clone, Default)]
    pub struct HashMapKv(std::collections::HashMap<Vec<u8>, Vec<u8>>);

    impl KvStore for HashMapKv {
        type InternalError = Infallible;

        fn get(&self, key: &[u8]) -> Result<Vec<u8>, KvGetError<Infallible>> {
            self.0
                .get(key)
                .cloned()
                .ok_or(KvGetError::NotFound(key.to_vec()))
        }

        fn insert(
            &mut self,
            key: Vec<u8>,
            value: Vec<u8>,
        ) -> Result<(), KvInsertError<Infallible>> {
            match self.0.insert(key.clone(), value) {
                Some(old_value) => Err(KvInsertError::AlreadyExists(key, old_value)),
                None => Ok(()),
            }
        }

        fn delete(&mut self, key: &[u8]) -> Result<(), KvDeleteError<Infallible>> {
            match self.0.remove(key) {
                Some(_) => Ok(()),
                None => Err(KvDeleteError::NotFound(key.to_vec())),
            }
        }
    }
}

use mem_kv_store::{KvGetError, KvInsertError};
use openmls_traits::storage::Types as TypesTrait;
use openmls_traits::storage::*;

const V1: usize = 1;

#[derive(Debug, Clone, Default)]
pub struct KvStoreStorage<KvStore: kv_store::KvStore, Ts: Types<V1>>(KvStore, Ts);

#[derive(Debug)]
pub enum KvStorageGetError<InternalError> {
    NotFound(Vec<u8>),
    KeyEncodeError(serde_json::Error),
    ValueDecodeError(serde_json::Error),
    KvGetError(KvGetError<InternalError>),
}

#[derive(Debug)]
pub enum KvStorageUpdateError<InternalError> {
    KeyEncodeError(serde_json::Error),
    ValueEncodeError(serde_json::Error),
    ValueDecodeError(serde_json::Error),
    KvInsertError(KvInsertError<InternalError>),
    GetError(KvStorageGetError<InternalError>),
}

enum Key<'a, Types: TypesTrait<V1>> {
    QueuedProposal(&'a Types::GroupId, &'a Types::ProposalRef),
    QueuedProposalsRefList(&'a Types::GroupId),
}

impl<'a, Types: TypesTrait<V1>> Key<'a, Types> {
    fn domain_prefix(&self) -> [u8; 2] {
        match self {
            Self::QueuedProposalsRefList(_) => [0, 1],
            Self::QueuedProposal(_, _) => [0, 0],
        }
    }

    fn key(&self) -> Result<Vec<u8>, serde_json::Error> {
        let mut out = Vec::with_capacity(256);

        match self {
            Self::QueuedProposal(group_id, proposal_ref) => {
                out.extend_from_slice(&self.domain_prefix());
                // TODO: This is not necessarily injective! Use better encoding
                //          Though tbf it's mostly a problem if both are numbers I think
                serde_json::to_writer(&mut out, group_id)?;
                serde_json::to_writer(&mut out, proposal_ref)?;
            }
            Self::QueuedProposalsRefList(group_id) => {
                out.extend_from_slice(&self.domain_prefix());
                serde_json::to_writer(&mut out, group_id)?;
            }
        }

        Ok(out)
    }
}

impl<KvStore: kv_store::KvStore, Types: TypesTrait<V1>> StorageProvider<V1>
    for KvStoreStorage<KvStore, Types>
{
    type Types = Types;
    type GetErrorSource = KvStorageGetError<KvStore::InternalError>;
    type UpdateErrorSource = KvStorageUpdateError<KvStore::InternalError>;

    fn apply_update(
        &mut self,
        update: Update<V1, Types>,
    ) -> Result<(), UpdateError<Self::UpdateErrorSource>> {
        match update {
            Update::QueueProposal(group_id, proposal_ref, queued_proposal) => {
                let proposal_key = Key::<Types>::QueuedProposal(&group_id, &proposal_ref)
                    .key()
                    .map_err(KvStorageUpdateError::KeyEncodeError)?;
                let proposal_refs_key = Key::<Types>::QueuedProposalsRefList(&group_id)
                    .key()
                    .map_err(KvStorageUpdateError::KeyEncodeError)?;

                let proposal_value = serde_json::to_vec(&queued_proposal)
                    .map_err(KvStorageUpdateError::ValueEncodeError)?;

                let mut proposal_refs: Vec<_> =
                    match StorageProvider::get_queued_proposal_refs(self, &group_id) {
                        Ok(proposal_refs) => Ok(proposal_refs),
                        Err(GetError {
                            kind: GetErrorKind::NotFound,
                            ..
                        }) => Ok(vec![]),
                        Err(GetError { kind, source }) => {
                            let kind = match kind {
                                GetErrorKind::NotFound => unreachable!(),
                                GetErrorKind::Encoding => UpdateErrorKind::Encoding,
                                GetErrorKind::Internal => UpdateErrorKind::Internal,
                            };
                            let source = KvStorageUpdateError::GetError(source);

                            Err(UpdateError { kind, source })
                        }
                    }?;

                proposal_refs.push(proposal_ref);

                let proposal_refs_bytes = serde_json::to_vec(&proposal_refs)
                    .map_err(KvStorageUpdateError::ValueEncodeError)?;

                self.0
                    .insert(proposal_refs_key, proposal_refs_bytes)
                    .map_err(KvStorageUpdateError::KvInsertError)?;

                self.0
                    .insert(proposal_key, proposal_value)
                    .map_err(KvStorageUpdateError::KvInsertError)?;

                Ok(())
            }
        }
    }

    fn apply_updates(
        &mut self,
        updates: Vec<Update<V1, Types>>,
    ) -> Result<(), UpdateError<Self::UpdateErrorSource>> {
        for update in updates {
            self.apply_update(update)?
        }

        Ok(())
    }

    fn get_queued_proposals(
        &self,
        group_id: &Types::GroupId,
    ) -> Result<Vec<Types::QueuedProposal>, GetError<Self::GetErrorSource>> {
        StorageProvider::get_queued_proposal_refs(self, group_id)?
            .into_iter()
            .map(|proposal_ref| {
                let proposal_key = Key::<Types>::QueuedProposal(group_id, &proposal_ref)
                    .key()
                    .map_err(|e| GetError {
                        kind: GetErrorKind::Encoding,
                        source: KvStorageGetError::KeyEncodeError(e),
                    })?;
                let value_bytes = self.0.get(&proposal_key).map_err(|e| match e {
                    kv_store::KvGetError::NotFound(key) => GetError {
                        kind: GetErrorKind::NotFound,
                        source: KvStorageGetError::NotFound(key),
                    },
                    kv_store::KvGetError::Internal(_) => GetError {
                        kind: GetErrorKind::Internal,
                        source: KvStorageGetError::KvGetError(e),
                    },
                })?;

                serde_json::from_slice(&value_bytes).map_err(|e| GetError {
                    kind: GetErrorKind::Encoding,
                    source: KvStorageGetError::ValueDecodeError(e),
                })
            })
            .collect()
    }

    fn get_queued_proposal_refs(
        &self,
        group_id: &Types::GroupId,
    ) -> Result<Vec<Types::ProposalRef>, GetError<Self::GetErrorSource>> {
        let key = Key::<Types>::QueuedProposalsRefList(group_id)
            .key()
            .map_err(|e| GetError {
                kind: GetErrorKind::Encoding,
                source: KvStorageGetError::KeyEncodeError(e),
            })?;

        let value_bytes = self.0.get(&key).map_err(|e| match e {
            kv_store::KvGetError::NotFound(key) => GetError {
                kind: GetErrorKind::NotFound,
                source: KvStorageGetError::NotFound(key),
            },
            kv_store::KvGetError::Internal(_) => GetError {
                kind: GetErrorKind::Internal,
                source: KvStorageGetError::KvGetError(e),
            },
        })?;

        serde_json::from_slice(&value_bytes).map_err(|e| GetError {
            kind: GetErrorKind::Encoding,
            source: KvStorageGetError::ValueDecodeError(e),
        })
    }
}

impl<E> From<KvStorageUpdateError<E>> for UpdateError<KvStorageUpdateError<E>> {
    fn from(source: KvStorageUpdateError<E>) -> Self {
        let kind = match &source {
            KvStorageUpdateError::KeyEncodeError(_)
            | KvStorageUpdateError::ValueEncodeError(_)
            | KvStorageUpdateError::ValueDecodeError(_) => UpdateErrorKind::Encoding,
            KvStorageUpdateError::KvInsertError(_) | KvStorageUpdateError::GetError(_) => {
                UpdateErrorKind::Internal
            }
        };

        UpdateError { kind, source }
    }
}