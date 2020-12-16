(function() {var implementors = {};
implementors["openmls"] = [{"text":"impl RefUnwindSafe for ErrorString","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ErrorPayload","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HpkeCiphertext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KdfLabel","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Secret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AeadKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReuseGuard","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AeadNonce","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Signature","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SignaturePrivateKey","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SignaturePublicKey","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SignatureKeypair","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Ciphersuite","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CiphersuiteName","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HKDFError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CryptoError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Cursor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VecSize","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CodecError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CONFIG","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Constants","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PersistentConfig","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConfigError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Certificate","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Credential","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for BasicCredential","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for CredentialBundle","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CredentialType","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSCredentialType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CredentialError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CapabilitiesExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LifetimeExtensionError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CapabilitiesExtensionError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyPackageIdError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParentHashError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RatchetTreeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InvalidExtensionError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyIDExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LifetimeExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParentHashExtension","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for RatchetTreeExtension","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSPlaintext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSCiphertext","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSPlaintextTBS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSSenderData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSCiphertextSenderDataAAD","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSCiphertextContent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSCiphertextContentAAD","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSPlaintextCommitContent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSPlaintextCommitAuthData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContentType","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSPlaintextContentType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSPlaintextError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MLSCiphertextError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sender","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SenderType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ManagedGroupCallbacks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ManagedGroupConfig","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UpdatePolicy","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ManagedGroup&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MlsGroup","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupEpoch","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupContext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for Removal&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageFormat","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InvalidMessageError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ManagedGroupError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PendingProposalsError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UseAfterEviction","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MLSMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WelcomeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplyCommitError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateCommitError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExporterError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SerializedManagedGroup","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for KeyPackage","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for KeyPackageBundle","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyPackageError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Welcome","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncryptedGroupSecrets","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Commit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConfirmationTag","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for GroupInfo","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GroupSecrets","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalQueueError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalOrRefTypeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QueuedProposalError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalReference","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for QueuedProposal&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ProposalQueue&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for AddProposal","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for UpdateProposal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveProposal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProposalOrRefType","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ProposalOrRef","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Proposal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InitSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for JoinerSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MemberSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WelcomeSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EpochSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EncryptionSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExporterSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SenderDataSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EpochSecrets","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExternalPsk","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReinitPsk","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BranchPsk","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PreSharedKeyID","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PreSharedKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PSKType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Psk","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for RatchetTree","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ApplyProposalsValues","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UpdatePathNode","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for UpdatePath","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecretTypeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TreeError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for ParentNodeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for LeafNodeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodeIndex","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LeafIndex","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Node","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParentNode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NodeType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathKeys","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CommitSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrivateTree","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TreeContext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecretTreeNode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecretTree","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecretTreeError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecretType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SenderRatchet","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TreeMathError","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()