import type { Topic } from "../../../types";

export const keyVaultTopic: Topic = {
  id: "azure-key-vault",
  name: "Azure Key Vault",
  questions: [
    {
      id: "q1",
      question: "What is Azure Key Vault and what are its main features?",
      answer:
        "Azure Key Vault is a cloud service that safeguards cryptographic keys and secrets used by cloud applications and services. It provides centralized secret management, key management, and certificate management.\n\nMain features include:\n• Secrets management: Store sensitive data like connection strings, API keys, passwords\n• Key management: Create and control encryption keys used in applications\n• Certificate management: Provision, manage, and deploy SSL/TLS certificates\n• Hardware security module (HSM): Premium tier offers FIPS 140-2 Level 3 validated HSMs\n• Audit logging: Track all access and modifications\n• Automatic key rotation policies: Enforce regular key updates\n• Soft delete and purge protection: Prevent accidental deletion\n• Network isolation: Private endpoints and firewall rules\n\nKey Vault is accessible via REST API, SDKs, and Azure Portal, making it easy to integrate with applications.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Storing and Retrieving Secrets
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var keyVaultUrl = new Uri("https://<vault-name>.vault.azure.net/");
var client = new SecretClient(keyVaultUrl, new DefaultAzureCredential());

await client.SetSecretAsync("db-password", "MySecurePassword123!");
KeyVaultSecret secret = await client.GetSecretAsync("db-password");
string password = secret.Value;
Console.WriteLine($"Retrieved password: {password}");`,
        },
        {
          language: "csharp",
          code: `// Working with Keys and Encryption
using Azure.Security.KeyVault.Keys;
using Azure.Security.KeyVault.Keys.Cryptography;

var keyClient = new KeyClient(keyVaultUrl, new DefaultAzureCredential());
KeyProperties key = await keyClient.CreateKeyAsync("my-encryption-key", KeyType.Rsa);

var cryptoClient = new CryptographyClient(key.Id, new DefaultAzureCredential());
byte[] plaintext = System.Text.Encoding.UTF8.GetBytes("Sensitive data");
EncryptResult encryptResult = await cryptoClient.EncryptAsync(EncryptionAlgorithm.RsaOaep, plaintext);

DecryptResult decryptResult = await cryptoClient.DecryptAsync(EncryptionAlgorithm.RsaOaep, encryptResult.Ciphertext);
string decrypted = System.Text.Encoding.UTF8.GetString(decryptResult.Plaintext);
Console.WriteLine($"Decrypted: {decrypted}");`,
        },
      ],
    },
    {
      id: "q2",
      question: "Explain the differences between secrets, keys, and certificates in Key Vault",
      answer:
        "Azure Key Vault manages three distinct types of cryptographic and sensitive data:\n\n1. Secrets: Arbitrary sensitive data stored as key-value pairs\n   • Examples: connection strings, API keys, passwords, tokens\n   • Format: stored as raw strings\n   • Use case: for sensitive configuration data that applications need\n   • Limited to 25 KB per secret\n\n2. Keys: Cryptographic keys used for encryption/decryption operations\n   • Types: RSA, EC (Elliptic Curve), Oct (symmetric), OKP\n   • Operations: sign, verify, encrypt, decrypt, wrap, unwrap\n   • Format: stored in JWK (JSON Web Key) format\n   • Use case: data encryption, digital signatures, key wrapping\n   • Supports key versions for rotation\n\n3. Certificates: X.509 certificates with associated private and public keys\n   • Contains certificate details, public key, and optionally private key\n   • Can be imported or auto-renewed through certificate provider partnerships\n   • Format: stored as PEM or PKCS12\n   • Use case: SSL/TLS certificates for HTTPS, client authentication\n   • Supports certificate lifecycle management and auto-renewal\n\nEach type has separate storage, access control, and operations within Key Vault.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Accessing Secrets, Keys, and Certificates
using Azure.Security.KeyVault.Secrets;
using Azure.Security.KeyVault.Keys;
using Azure.Security.KeyVault.Certificates;

var secretClient = new SecretClient(keyVaultUrl, new DefaultAzureCredential());
var keyClient = new KeyClient(keyVaultUrl, new DefaultAzureCredential());
var certificateClient = new CertificateClient(keyVaultUrl, new DefaultAzureCredential());

KeyVaultSecret secret = await secretClient.GetSecretAsync("my-secret");
KeyVaultKey key = await keyClient.GetKeyAsync("my-key");
KeyVaultCertificate cert = await certificateClient.GetCertificateAsync("my-cert");

Console.WriteLine($"Secret Value: {secret.Value}");
Console.WriteLine($"Key Type: {key.KeyType}");
Console.WriteLine($"Certificate Thumb: {cert.Properties.X509Thumbprint}");`,
        },
        {
          language: "csharp",
          code: `// Certificate Management
var certificatePem = "-----BEGIN CERTIFICATE-----\\\\n...\\\\n-----END CERTIFICATE-----";
var certificateProperties = new ImportCertificateOptions("imported-cert", certificatePem);
KeyVaultCertificate importedCert = await certificateClient.ImportCertificateAsync(certificateProperties);

await foreach (CertificateProperties certProp in certificateClient.GetPropertiesOfCertificateVersionsAsync("my-cert"))
{
    Console.WriteLine($"Version: {certProp.Version}, Created: {certProp.CreatedOn}");
}

CertificatePolicy policy = await certificateClient.GetCertificatePolicyAsync("my-cert");
Console.WriteLine($"Renewal days before expiry: {policy.RenewBeforeExpiry}");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you authenticate and authorize access to Azure Key Vault?",
      answer:
        "Azure Key Vault provides multiple authentication and authorization mechanisms:\n\n1. Authentication Methods:\n   • Managed Identity: Recommended for Azure resources (VMs, App Services, AKS)\n   • Service Principal: For applications outside Azure\n   • User Principal: For interactive access (CLI, Portal)\n   • Certificate-based: Mutual TLS authentication\n\n2. Authorization Methods (Access Control):\n   • Azure RBAC (Role-Based Access Control): Uses Azure role assignments\n     - Managed at resource/subscription level\n     - Supports custom roles\n     - Good for enterprise governance\n   • Vault Access Policies (Legacy): Key Vault-specific policies\n     - Granular object-level permissions (secrets, keys, certificates)\n     - Specified directly in Key Vault\n     - Being deprecated in favor of RBAC\n   • Hybrid model: Both RBAC and Access Policies can work together\n\n3. Permissions Hierarchy:\n   • Secret permissions: Get, List, Set, Delete, Backup, Restore, Recover, Purge\n   • Key permissions: Decrypt, Encrypt, UnwrapKey, WrapKey, Verify, Sign, Get, List, Update, Create, Import, Delete, Backup, Restore, Recover, Purge\n   • Certificate permissions: Get, List, Delete, Create, Import, Update, Backup, Restore, Recover, Purge, ManageContacts, ManageIssuers, GetIssuers, ListIssuers, SetIssuers\n\n4. Network Security:\n   • Firewall rules: Restrict access to specific IPs/networks\n   • Private endpoints: Access Key Vault through private IP\n   • Service endpoints: Restrict traffic to Azure resources",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Authenticating with Managed Identity
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var keyVaultUrl = new Uri("https://<vault-name>.vault.azure.net/");
var credential = new DefaultAzureCredential();
var secretClient = new SecretClient(keyVaultUrl, credential);

try
{
    KeyVaultSecret secret = await secretClient.GetSecretAsync("db-connection");
    Console.WriteLine($"Successfully retrieved secret: {secret.Name}");
}
catch (Azure.RequestFailedException ex)
{
    Console.WriteLine($"Authorization error: {ex.Status} - {ex.Message}");
}`,
        },
        {
          language: "csharp",
          code: `// Using Service Principal Authentication
using Azure.Identity;

var tenantId = "<tenant-id>";
var clientId = "<client-id>";
var clientSecret = "<client-secret>";

var credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
var secretClient = new SecretClient(keyVaultUrl, credential);

var certificatePath = "/path/to/certificate.pfx";
var clientCertCredential = new ClientCertificateCredential(tenantId, clientId, certificatePath);
var secretClientCert = new SecretClient(keyVaultUrl, clientCertCredential);`,
        },
        {
          language: "csharp",
          code: `// Assigning RBAC Roles
using Azure.ResourceManager;
using Azure.ResourceManager.Authorization;
using Azure.ResourceManager.Authorization.Models;

var subscription = await client.GetDefaultSubscriptionAsync();
var keyVaultResourceId = "/subscriptions/{sub-id}/resourceGroups/{rg}/providers/Microsoft.KeyVault/vaults/{vault-name}";
var resource = await client.GetGenericResources().GetAsync(keyVaultResourceId);

var principalId = "<object-id-of-user-or-app>";
var roleDefinitionId = "/subscriptions/{sub-id}/providers/Microsoft.Authorization/roleDefinitions/00482a5a-887f-4fb3-b363-3b7fe8e74483";
var roleAssignmentCreateParams = new RoleAssignmentCreateParameters(roleDefinitionId, principalId);

var roleAssignment = await resource.GetRoleAssignments().CreateAsync(
    WaitUntil.Completed,
    System.Guid.NewGuid().ToString(),
    roleAssignmentCreateParams
);`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are key rotation policies and how do they work?",
      answer:
        "Key rotation policies in Azure Key Vault automate the process of creating new versions of keys and marking old ones as expired. This ensures cryptographic agility and reduces exposure to compromised keys.\n\nKey Rotation Policy Features:\n• Automatic Version Creation: Creates new key versions on schedule\n• Expiration Management: Automatically marks keys as expired after defined period\n• Notification Triggers: Sends alerts before expiration\n• Flexible Scheduling: Set rotation intervals (daily, weekly, monthly, or exact days)\n• Version History: Maintains all key versions for backward compatibility\n\nPolicy Configuration:\n• Expiration Time: Duration after which key versions are marked expired\n• Time Before Expiration: Duration before a key version expires\n• Rotation Interval: How frequently new versions are created\n\nRotation Lifecycle:\n1. New key version is automatically created at scheduled interval\n2. Applications gradually migrate to new version (old remains accessible)\n3. After expiration period, key is marked as expired\n4. Old versions can still decrypt data encrypted with them\n5. Access controls ensure only authorized operations on expired keys\n\nBest Practices:\n• Rotate keys based on compliance requirements (often annually)\n• For encryption keys: shorter rotation intervals (quarterly or monthly)\n• For signing keys: longer intervals (yearly)\n• Enable automatic rotation to reduce manual overhead\n• Monitor rotation events in audit logs\n• Plan application updates to handle key version transitions\n• Maintain backward compatibility during rotation",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Creating and Managing Key Rotation Policies
using Azure.Security.KeyVault.Keys;

var keyClient = new KeyClient(keyVaultUrl, new DefaultAzureCredential());

var keyRotationPolicy = new KeyRotationPolicy()
{
    RotationIntervalTime = TimeSpan.FromDays(90),
    ExpiryTime = TimeSpan.FromDays(30)
};

KeyRotationPolicy result = await keyClient.UpdateKeyRotationPolicyAsync("my-encryption-key", keyRotationPolicy);
Console.WriteLine($"Rotation interval: {result.RotationIntervalTime}");
Console.WriteLine($"Expiry time: {result.ExpiryTime}");

KeyRotationPolicy retrievedPolicy = await keyClient.GetKeyRotationPolicyAsync("my-encryption-key");
Console.WriteLine($"Policy created on: {retrievedPolicy.CreatedOn}");`,
        },
        {
          language: "csharp",
          code: `// Handling Key Versions During Rotation
await foreach (KeyProperties keyVersion in keyClient.GetPropertiesOfKeyVersionsAsync("my-encryption-key"))
{
    Console.WriteLine($"Version ID: {keyVersion.Id}");
    Console.WriteLine($"Created: {keyVersion.CreatedOn}");
    Console.WriteLine($"Expires: {keyVersion.ExpiresOn}");
    Console.WriteLine($"Enabled: {keyVersion.Enabled}");
}

KeyVaultKey latestKey = await keyClient.GetKeyAsync("my-encryption-key");
Console.WriteLine($"Latest Version: {latestKey.Properties.Version}");

var keyVersion = "abc123def456";
KeyVaultKey specificKey = await keyClient.GetKeyAsync("my-encryption-key", keyVersion);
var cryptoClient = new CryptographyClient(specificKey.Id, new DefaultAzureCredential());
DecryptResult decrypted = await cryptoClient.DecryptAsync(EncryptionAlgorithm.RsaOaep, ciphertextBytes);`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you implement certificate auto-renewal in Key Vault?",
      answer:
        "Azure Key Vault supports automatic certificate renewal through partnerships with certificate providers (like DigiCert). This eliminates manual renewal and prevents certificate expiration incidents.\n\nCertificate Auto-Renewal Components:\n• Certificate Policy: Defines renewal rules and provider details\n• Certificate Provider: Third-party issuer (DigiCert, GlobalSign, etc.)\n• Issuer Contact: Details for certificate renewal notifications\n• Renewal Threshold: Days before expiration to trigger renewal\n• Subject DN: Distinguished Name for certificate request\n\nAuto-Renewal Process:\n1. Certificate policy is configured with auto-renewal settings\n2. On specified interval before expiration, Key Vault contacts the provider\n3. Provider issues new certificate\n4. New version is created in Key Vault\n5. Applications can access new certificate with same name\n6. Old version remains accessible for existing connections\n\nSupported Certificate Providers:\n• DigiCert: Primary provider with direct integration\n• GlobalSign: Supported through partnerships\n• Custom providers: Can import certificates manually\n\nRenewal Status:\n• Pending: Renewal request submitted to provider\n• Inprogress: Provider processing certificate\n• Completed: New certificate received and stored\n• Renewal failed: Notification sent for manual intervention\n\nBest Practices:\n• Set renewal threshold 30-90 days before expiration\n• Configure issuer contacts for renewal notifications\n• Monitor certificate expiration dates\n• Test certificate deployment before production use\n• Automate certificate deployment to applications\n• Maintain audit logs for compliance\n• Plan for renewal failures with fallback certificates",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Configuring Certificate Auto-Renewal Policy
using Azure.Security.KeyVault.Certificates;

var certificateClient = new CertificateClient(keyVaultUrl, new DefaultAzureCredential());

var policy = new CertificatePolicy
{
    IssuerName = "Self",
    Subject = "CN=myapp.example.com",
    ValidityInMonths = 12,
    RenewBeforeExpiry = 30,
    KeyType = CertificateKeyType.Rsa,
    KeySize = 2048,
    ContentType = CertificateContentType.Pkcs12,
    LifetimeActions = new List<LifetimeAction>
    {
        new LifetimeAction(CertificatePolicyAction.AutoRenew, CertificatePolicyTrigger.LifetimePercentage(80))
    }
};

var operation = await certificateClient.StartCreateCertificateAsync("my-auto-renew-cert", policy);
var createdCertificate = await operation.WaitForCompletionAsync();
Console.WriteLine($"Certificate created: {createdCertificate.Value.Name}");
Console.WriteLine($"Auto-renewal enabled: {createdCertificate.Value.Policy.LifetimeActions.Count > 0}");`,
        },
        {
          language: "csharp",
          code: `// Monitoring Certificate Renewal Status
CertificatePolicy certPolicy = await certificateClient.GetCertificatePolicyAsync("my-auto-renew-cert");
Console.WriteLine($"Certificate Subject: {certPolicy.Subject}");
Console.WriteLine($"Validity: {certPolicy.ValidityInMonths} months");
Console.WriteLine($"Renew before expiry: {certPolicy.RenewBeforeExpiry} days");

foreach (LifetimeAction action in certPolicy.LifetimeActions)
{
    Console.WriteLine($"Action: {action.Action}");
    Console.WriteLine($"Trigger: {action.Trigger}");
}

KeyVaultCertificate certificate = await certificateClient.GetCertificateAsync("my-auto-renew-cert");
Console.WriteLine($"Certificate Name: {certificate.Name}");
Console.WriteLine($"Issued On: {certificate.Properties.CreatedOn}");
Console.WriteLine($"Expires On: {certificate.Properties.ExpiresOn}");`,
        },
        {
          language: "csharp",
          code: `// Setting up DigiCert Provider for Auto-Renewal
var issuerProperties = new CertificateIssuerProperties
{
    Name = "DigiCert",
    Provider = "DigiCert",
    AccountId = "your-digicert-account-id",
    Password = "your-digicert-api-key"
};

var adminContact = new CertificateContact
{
    Email = "admin@example.com",
    Name = "Admin Name",
    Phone = "+1-555-0123"
};

await certificateClient.SetIssuerAsync(issuerProperties);
await certificateClient.SetCertificateContactsAsync(new[] { adminContact });

var digicertPolicy = new CertificatePolicy
{
    IssuerName = "DigiCert",
    Subject = "CN=myapp.example.com",
    DnsNames = new[] { "myapp.example.com", "www.myapp.example.com" },
    ValidityInMonths = 12,
    RenewBeforeExpiry = 45
};

var operation = await certificateClient.StartCreateCertificateAsync("my-digicert-cert", digicertPolicy);
var certificate = await operation.WaitForCompletionAsync();
Console.WriteLine($"DigiCert auto-renewal certificate created: {certificate.Value.Name}");`,
        },
      ],
    },
  ],
};
