import type { Topic } from "../../../types";

export const azureStorageServicesTopic: Topic = {
  id: "azure-storage-services",
  name: "Storage Services",
  questions: [
    {
      id: "q1",
      question: "What are the main Azure Storage services and their use cases?",
      answer:
        "Azure Storage consists of four main services: 1) Blob Storage - for unstructured data (files, images, videos, backups). 2) File Shares - for managed SMB/NFS file shares accessible from multiple VMs. 3) Queue Storage - for asynchronous message queuing between services. 4) Table Storage - for NoSQL structured data (now mostly replaced by Cosmos DB). All support redundancy options: LRS (3 copies locally), GRS (3 locally + 3 in region pair), RA-GRS (GRS + read access). Pricing tiers: Hot (frequent access), Cool (infrequent), Archive (rare access).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Storage Services Overview
using Azure.Storage.Blobs;
using Azure.Storage.Files.Shares;
using Azure.Storage.Queues;
using Azure.Data.Tables;
using Azure.Identity;

var storageAccountName = "mystorageaccount";
var storageUri = new Uri($"https://{storageAccountName}.blob.core.windows.net");

// 1. Blob Storage - Unstructured data (images, documents, videos)
var blobClient = new BlobContainerClient(
    new Uri($"https://{storageAccountName}.blob.core.windows.net/mycontainer"),
    new DefaultAzureCredential()
);

await blobClient.UploadBlobAsync("file.txt", BinaryData.FromString("content"));
BlobDownloadInfo download = await blobClient.GetBlobClient("file.txt").DownloadAsync();

// 2. File Shares - SMB/NFS file shares for VMs
var fileShareUri = new Uri($"https://{storageAccountName}.file.core.windows.net/myshare");
var shareClient = new ShareClient(fileShareUri, new DefaultAzureCredential());

ShareDirectoryClient dirClient = shareClient.GetRootDirectoryClient();
await dirClient.UploadFileAsync("document.txt", BinaryData.FromString("data"));

// 3. Queue Storage - Asynchronous messaging
var queueUri = new Uri($"https://{storageAccountName}.queue.core.windows.net/myqueue");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

await queueClient.SendMessageAsync("order-12345");
QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(1);

// 4. Table Storage - NoSQL structured data
var tableUri = new Uri($"https://{storageAccountName}.table.core.windows.net");
var tableClient = new TableClient(tableUri, "Products", new DefaultAzureCredential());

// Storage Tiers
Console.WriteLine("Azure Storage Tiers:");
Console.WriteLine("Hot    - Frequent access, highest cost, instant retrieval");
Console.WriteLine("Cool   - Infrequent access (30+ days), lower cost");
Console.WriteLine("Archive - Rare access (90+ days), lowest cost, rehydration needed");

// Redundancy Options
Console.WriteLine("\\nRedundancy Options:");
Console.WriteLine("LRS  - Locally Redundant (3 copies in same datacenter)");
Console.WriteLine("GRS  - Geo-Redundant (3 local + 3 in secondary region)");
Console.WriteLine("RA-GRS - Read-Access Geo-Redundant (can read from secondary)");
Console.WriteLine("GZRS - Geo-Zone-Redundant (zone redundancy + geo)");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you implement Blob Storage with access tiers and lifecycle management?",
      answer:
        "Blob Storage supports access tiers (Hot, Cool, Archive) for cost optimization. Hot tier is for frequent access. Cool tier for infrequent access (30+ days minimum), cheaper but retrieval slightly slower. Archive tier for rare access (90+ days), cheapest but requires rehydration. Lifecycle policies automatically move blobs between tiers based on age. Can specify rules like: move to Cool after 30 days, to Archive after 90 days. Supports blob versioning and soft delete for protection.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Blob Storage - Access Tiers & Lifecycle
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Identity;

var blobContainerUri = new Uri("https://mystorageaccount.blob.core.windows.net/mycontainer");
var containerClient = new BlobContainerClient(blobContainerUri, new DefaultAzureCredential());

// 1. Upload to different tiers
var blobClient = containerClient.GetBlobClient("report.pdf");

// Upload to Hot tier (default)
using (var stream = new MemoryStream(File.ReadAllBytes("large-file.pdf")))
{
    await blobClient.UploadAsync(stream, overwrite: true);
}

// Move to Cool tier
await blobClient.SetAccessTierAsync(AccessTier.Cool);

// Move to Archive tier (requires rehydration to access)
await blobClient.SetAccessTierAsync(AccessTier.Archive);

// 2. Rehydrate from Archive
await blobClient.SetAccessTierAsync(AccessTier.Hot, RehydratePriority.High);
// High priority: 1 hour, Standard priority: 15 hours

// 3. Download and check tier
BlobDownloadInfo download = await blobClient.DownloadAsync();
Console.WriteLine($"Blob tier: {download.Details.AccessTier}");

// 4. List blobs with properties
await foreach (BlobItem blobItem in containerClient.GetBlobsAsync(
    BlobTraits.None,
    BlobStates.None))
{
    Console.WriteLine($"Name: {blobItem.Name}");
    Console.WriteLine($"Size: {blobItem.Properties.ContentLength} bytes");
    Console.WriteLine($"Tier: {blobItem.Properties.AccessTier}");
    Console.WriteLine($"Created: {blobItem.Properties.CreatedOn}");
}

// 5. Lifecycle Management Policy (JSON config for Azure Portal or CLI)
var lifecyclePolicy = @"
{
  'rules': [
    {
      'name': 'AutoTiering',
      'enabled': true,
      'type': 'Lifecycle',
      'definition': {
        'actions': {
          'baseBlob': {
            'tierToCool': {
              'daysAfterModificationGreaterThan': 30
            },
            'tierToArchive': {
              'daysAfterModificationGreaterThan': 90
            },
            'delete': {
              'daysAfterModificationGreaterThan': 365
            }
          }
        },
        'filters': {
          'blobTypes': ['blockBlob']
        }
      }
    }
  ]
}";

// CLI to set lifecycle policy:
// az storage account management-policy create --account-name mystorageaccount 
// --resource-group myRG --policy @policy.json

// 6. Soft Delete & Versioning
var containerProperties = new BlobContainerProperties();
// Enable soft delete (items recoverable for 7 days after deletion)
// Enable versioning (keeps previous versions)

// Cost Optimization Example
Console.WriteLine("Storage Cost Optimization Strategy:");
Console.WriteLine("- New data (0-30 days) → Hot tier");
Console.WriteLine("- Aged data (30-90 days) → Cool tier");
Console.WriteLine("- Old backups (90+ days) → Archive tier");
Console.WriteLine("- Never accessed (365+ days) → Delete");
Console.WriteLine("\\nThis can reduce storage costs by 50-80%");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is the difference between Blob Storage, File Shares, and Queue Storage?",
      answer:
        "Blob Storage: Unstructured data storage (images, videos, documents, backups), REST API access, optimal for massive scale data. File Shares: Managed SMB/NFS shares for network access, mount like network drives, supports Windows/Linux, good for legacy apps sharing files. Queue Storage: Asynchronous message queuing for decoupling services, FIFO, messages expire after 7 days (default), small payload size (64KB). Choose Blob for files, File Shares for shared network access, Queue for async communication.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Comparison: Blob vs File Shares vs Queue Storage
using Azure.Storage.Blobs;
using Azure.Storage.Files.Shares;
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Azure.Identity;

var accountName = "mystorageaccount";

// ============= BLOB STORAGE =============
// Use Case: Large files, images, backups, unstructured data
// Access: REST API, HTTP/HTTPS, SDKs
// Scale: Petabytes, millions of files

var blobUri = new Uri($"https://{accountName}.blob.core.windows.net/files");
var blobContainer = new BlobContainerClient(blobUri, new DefaultAzureCredential());

// Upload large file
var blockBlobClient = blobContainer.GetBlockBlobClient("large-video.mp4");
await blockBlobClient.UploadAsync("video.mp4", overwrite: true);

// Upload with metadata
var blobHttpHeaders = new BlobHttpHeaders { ContentType = "image/jpeg" };
var metadata = new Dictionary<string, string> { { "department", "marketing" } };
await blockBlobClient.SetHttpHeadersAsync(blobHttpHeaders);
await blockBlobClient.SetMetadataAsync(metadata);

Console.WriteLine("✓ Blob Storage: Best for unstructured large data");

// ============= FILE SHARES =============
// Use Case: Shared file access, legacy apps, SMB protocol
// Access: SMB 3.0 (Windows/Linux/macOS), NFS 4.1
// Scale: Up to 100TB per share

var fileShareUri = new Uri($"https://{accountName}.file.core.windows.net");
var fileShareClient = new ShareClient(fileShareUri, new DefaultAzureCredential());

var shareRootDir = fileShareClient.GetRootDirectoryClient();
var subdirectory = shareRootDir.GetSubdirectoryClient("documents");
await subdirectory.CreateIfNotExistsAsync();

// Upload file to share
using (var stream = File.OpenRead("report.docx"))
{
    await subdirectory.GetFileClient("report.docx").UploadAsync(stream, overwrite: true);
}

// Can be mounted like network drive:
// Windows: net use Z: \\\\mystorageaccount.file.core.windows.net\\fileshare password /user:azure\\mystorageaccount
// Linux: mount -t cifs //mystorageaccount.file.core.windows.net/fileshare /mnt/share -o username=mystorageaccount

Console.WriteLine("✓ File Shares: Best for shared network file access");

// ============= QUEUE STORAGE =============
// Use Case: Asynchronous job queuing, decoupling services
// Access: REST API, message-based
// Message Size: Up to 64KB, TTL 7 days default

var queueUri = new Uri($"https://{accountName}.queue.core.windows.net");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

// Producer: Enqueue message
await queueClient.SendMessageAsync("process-order-12345");
await queueClient.SendMessageAsync("send-email-user-456");

// Consumer: Dequeue and process
QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(
    maxMessages: 10,
    visibilityTimeout: TimeSpan.FromMinutes(5)
);

foreach (QueueMessage message in messages)
{
    Console.WriteLine($"Processing: {message.Body}");
    
    // Process the message
    await ProcessOrderAsync(message.Body.ToString());
    
    // Delete from queue when done
    await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
}

// If processing fails, message becomes visible again after visibilityTimeout
// Max retries: message TTL (default 7 days)

Console.WriteLine("✓ Queue Storage: Best for asynchronous task queuing");

// ============= COMPARISON TABLE =============
var comparison = new[]
{
    new { Service = "Blob", Use = "Large files/images/backups", Protocol = "REST/HTTP", Scale = "Petabytes", Cost = "$" },
    new { Service = "File Shares", Use = "Shared network access", Protocol = "SMB/NFS", Scale = "100TB/share", Cost = "$" },
    new { Service = "Queue", Use = "Async messaging", Protocol = "REST/HTTP", Scale = "Millions msg", Cost = "$" }
};

Console.WriteLine("\\nComparison:");
Console.WriteLine("Service      | Use Case               | Protocol    | Scale         | Cost");
Console.WriteLine("-------------|------------------------|-------------|---------------|------");
foreach (var row in comparison)
{
    Console.WriteLine($"{row.Service,-12} | {row.Use,-22} | {row.Protocol,-11} | {row.Scale,-13} | {row.Cost}");
}

async Task ProcessOrderAsync(string orderId)
{
    await Task.Delay(1000);
    Console.WriteLine($"Order {orderId} processed successfully");
}`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you secure Azure Storage with SAS tokens and managed identities?",
      answer:
        "Azure Storage can be secured using: 1) Storage Account Keys (not recommended for production, full access). 2) Shared Access Signatures (SAS) - time-limited tokens with specific permissions, can be Account-level or Service-level. 3) Managed Identities - best practice, Azure AD integration, no credentials to manage, automatic rotation. 4) Azure RBAC - role-based access control with fine-grained permissions. SAS tokens include expiration, IP restrictions, protocol constraints. Managed identities with Azure.Identity DefaultAzureCredential is production-recommended.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Storage Security - SAS Tokens & Managed Identities
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Sas;
using Azure.Storage.Sas;
using Azure.Identity;
using Azure;

var accountName = "mystorageaccount";
var accountKey = "your-account-key";
var containerName = "mycontainer";

// ============= APPROACH 1: Managed Identity (RECOMMENDED) =============
// Best practice: No credentials needed, automatic rotation
// Requirements: Enable Managed Identity on your Azure resource (VM, App Service, Function, etc.)

var blobUri = new Uri($"https://{accountName}.blob.core.windows.net/{containerName}");
var blobContainerClient = new BlobContainerClient(
    blobUri,
    new DefaultAzureCredential() // Uses Managed Identity automatically
);

// Access blob without any credentials!
var blobClient = blobContainerClient.GetBlobClient("data.json");
BlobDownloadInfo download = await blobClient.DownloadAsync();
Console.WriteLine("✓ Accessed blob using Managed Identity");

// ============= APPROACH 2: Account-Level SAS Token =============
// Temporary token with expiration, specific permissions, IP/protocol restrictions

var sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Create Account SAS (high privilege, access to all services)
AccountSasBuilder sasBuilder = new AccountSasBuilder()
{
    Services = AccountSasServices.Blobs | AccountSasServices.Queues,
    ResourceTypes = AccountSasResourceTypes.All,
    ExpiresOn = DateTimeOffset.UtcNow.AddHours(1),
    Protocol = SasProtocol.Https,
    IPRange = new SasIPRange(System.Net.IPAddress.Parse("203.0.113.0"), System.Net.IPAddress.Parse("203.0.113.100"))
};

sasBuilder.SetPermissions(AccountSasPermissions.All);

string accountSasToken = sasBuilder.ToSasQueryParameters(sharedKeyCredential).ToString();
Console.WriteLine($"Account SAS Token: {accountSasToken}");

// ============= APPROACH 3: Service-Level SAS Token =============
// Specific to a container or blob, more secure than account SAS

BlobSasBuilder blobSasBuilder = new BlobSasBuilder()
{
    BlobContainerName = containerName,
    BlobName = "data.json",
    ExpiresOn = DateTimeOffset.UtcNow.AddMinutes(30), // Expires in 30 minutes
    Protocol = SasProtocol.Https
};

// Read-only permissions
blobSasBuilder.SetPermissions(BlobSasPermissions.Read);

string blobSasToken = blobSasBuilder.ToSasQueryParameters(sharedKeyCredential).ToString();
string sasUri = new UriBuilder(blobUri)
{
    Query = blobSasToken
}.Uri.ToString();

Console.WriteLine($"Blob SAS URI: {sasUri}");

// Grant write permission for 1 hour
var writeSasBuilder = new BlobSasBuilder()
{
    BlobContainerName = containerName,
    ExpiresOn = DateTimeOffset.UtcNow.AddHours(1)
};
writeSasBuilder.SetPermissions(BlobSasPermissions.Write | BlobSasPermissions.Create | BlobSasPermissions.Delete);

// ============= APPROACH 4: Azure RBAC (Recommended for production) =============
// Assign roles to Managed Identity or users
// Roles: Storage Blob Data Owner, Storage Blob Data Contributor, Storage Blob Data Reader

// Example: Assign 'Storage Blob Data Reader' role to app's Managed Identity
// az role assignment create \\
//   --role "Storage Blob Data Reader" \\
//   --assignee-object-id <managed-identity-object-id> \\
//   --scope /subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<account>

// ============= SECURITY BEST PRACTICES =============
Console.WriteLine("\\nSecurity Best Practices:");
Console.WriteLine("1. ✓ Use Managed Identity for Azure services (no credentials)");
Console.WriteLine("2. ✓ Use SAS tokens for temporary/external access (time-limited)");
Console.WriteLine("3. ✓ Apply IP restrictions to SAS tokens");
Console.WriteLine("4. ✓ Use HTTPS only (SasProtocol.Https)");
Console.WriteLine("5. ✓ Never expose account keys in code");
Console.WriteLine("6. ✓ Rotate keys regularly (if using)");
Console.WriteLine("7. ✓ Use RBAC for permanent role-based access");
Console.WriteLine("8. ✓ Enable firewall rules (allow specific VNets/IPs)");
Console.WriteLine("9. ✓ Monitor access logs and alerts");
Console.WriteLine("10. ✓ Use private endpoints (deny public access)");

// ============= PRIVATE ENDPOINT EXAMPLE =============
// Block public internet, only allow from private VNet
Console.WriteLine("\\nPrivate Endpoint Setup:");
Console.WriteLine("az network private-endpoint create \\\\");
Console.WriteLine("  --name myPrivateEndpoint \\\\");
Console.WriteLine("  --resource-group myRG \\\\");
Console.WriteLine("  --vnet-name myVNet \\\\");
Console.WriteLine("  --subnet mySubnet \\\\");
Console.WriteLine("  --private-connection-resource-id /subscriptions/.../storageAccounts/mystorageaccount \\\\");
Console.WriteLine("  --group-ids blob");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you implement Queue Storage for producer-consumer patterns?",
      answer:
        "Queue Storage enables decoupling of services using producer-consumer pattern. Producer sends messages, consumer processes them. Messages have TTL (7 days default), visibility timeout (how long message hidden after receive), and dead-letter handling. Implement polling or use Azure Functions with Queue trigger for automatic scaling. Use message batching for efficiency. Implement idempotent processing for reliability (same message processed multiple times shouldn't cause issues).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Queue Storage - Producer-Consumer Pattern
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Azure.Identity;
using System.Text.Json;

var queueUri = new Uri("https://mystorageaccount.queue.core.windows.net/orders");
var queueClient = new QueueClient(queueUri, new DefaultAzureCredential());

// ============= PRODUCER: Send Orders =============
async Task ProduceOrdersAsync()
{
    var orders = new[]
    {
        new Order { OrderId = "ORD-001", CustomerId = "CUST-100", Total = 99.99m },
        new Order { OrderId = "ORD-002", CustomerId = "CUST-101", Total = 149.99m },
        new Order { OrderId = "ORD-003", CustomerId = "CUST-102", Total = 79.99m }
    };

    foreach (var order in orders)
    {
        // Serialize order to JSON
        string messageText = JsonSerializer.Serialize(order);
        
        // Send to queue
        await queueClient.SendMessageAsync(messageText);
        Console.WriteLine($"✓ Enqueued order: {order.OrderId}");
    }
}

// ============= CONSUMER: Process Orders (Polling) =============
async Task ConsumeOrdersAsync(CancellationToken cancellationToken)
{
    Console.WriteLine("Consumer started, waiting for messages...");
    
    while (!cancellationToken.IsCancellationRequested)
    {
        try
        {
            // Receive up to 10 messages
            QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(
                maxMessages: 10,
                visibilityTimeout: TimeSpan.FromMinutes(5) // Hidden for 5 min while processing
            );

            if (messages.Length == 0)
            {
                Console.WriteLine("No messages, waiting...");
                await Task.Delay(TimeSpan.FromSeconds(10));
                continue;
            }

            foreach (QueueMessage message in messages)
            {
                try
                {
                    // Deserialize message
                    var order = JsonSerializer.Deserialize<Order>(message.Body.ToString());
                    Console.WriteLine($"Processing order: {order?.OrderId}");

                    // Process order (simulate work)
                    await ProcessOrderAsync(order);

                    // Delete message on successful processing
                    await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
                    Console.WriteLine($"✓ Order processed and removed from queue");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error processing message: {ex.Message}");
                    // Message visibility resets, will be retried
                    // After max retries (TTL expires), goes to dead-letter queue
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Consumer error: {ex.Message}");
            await Task.Delay(TimeSpan.FromSeconds(5));
        }
    }
}

// ============= DEAD-LETTER QUEUE =============
async Task HandleDeadLettersAsync()
{
    var dlqClient = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-deadletter"),
        new DefaultAzureCredential()
    );

    var messages = await dlqClient.ReceiveMessagesAsync(maxMessages: 1);
    if (messages.Length > 0)
    {
        Console.WriteLine($"Dead-letter message: {messages[0].Body}");
        // Manual review or retry logic
    }
}

// ============= IDEMPOTENT PROCESSING =============
async Task ProcessOrderIdempotentAsync(Order order)
{
    // Check if already processed (idempotency key)
    string idempotencyKey = $"order-{order.OrderId}";
    
    if (await IsAlreadyProcessedAsync(idempotencyKey))
    {
        Console.WriteLine($"Order {order.OrderId} already processed, skipping");
        return;
    }

    // Process order
    await ProcessOrderAsync(order);

    // Mark as processed
    await MarkAsProcessedAsync(idempotencyKey);
}

// ============= BATCH PROCESSING =============
async Task ProcessBatchAsync()
{
    int batchSize = 10;
    var messages = await queueClient.ReceiveMessagesAsync(maxMessages: batchSize);

    if (messages.Length > 0)
    {
        var orders = messages
            .Select(m => JsonSerializer.Deserialize<Order>(m.Body.ToString()))
            .ToList();

        // Batch database insert (more efficient)
        await BatchInsertOrdersAsync(orders);

        // Delete all messages at once
        foreach (var message in messages)
        {
            await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
        }
    }
}

// ============= PRIORITY QUEUES =============
async Task PriorityQueuePatternAsync()
{
    var highPriorityQueue = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-high-priority"),
        new DefaultAzureCredential()
    );

    var normalQueue = new QueueClient(
        new Uri("https://mystorageaccount.queue.core.windows.net/orders-normal"),
        new DefaultAzureCredential()
    );

    // Consumer processes high-priority first
    var highPriorityMessages = await highPriorityQueue.ReceiveMessagesAsync(maxMessages: 5);
    if (highPriorityMessages.Length > 0)
    {
        Console.WriteLine("Processing high-priority orders first!");
    }

    var normalMessages = await normalQueue.ReceiveMessagesAsync(maxMessages: 5);
    Console.WriteLine("Then processing normal orders");
}

// ============= HELPER METHODS =============
async Task ProcessOrderAsync(Order order)
{
    await Task.Delay(1000); // Simulate processing
    Console.WriteLine($"Order {order.OrderId} processed successfully");
}

async Task<bool> IsAlreadyProcessedAsync(string idempotencyKey)
{
    await Task.Delay(100);
    return false; // Check in database
}

async Task MarkAsProcessedAsync(string idempotencyKey)
{
    await Task.Delay(100);
    Console.WriteLine($"Marked {idempotencyKey} as processed");
}

async Task BatchInsertOrdersAsync(List<Order> orders)
{
    await Task.Delay(500);
    Console.WriteLine($"Batch inserted {orders.Count} orders");
}

// ============= QUEUE CONFIGURATION =============
Console.WriteLine("Queue Storage Configuration:");
Console.WriteLine("- Max message size: 64 KB");
Console.WriteLine("- Default TTL: 7 days");
Console.WriteLine("- Visibility timeout: Configurable per receive (max 12 hours)");
Console.WriteLine("- Max queue size: 500 TB");
Console.WriteLine("- Throughput: Millions of messages per day");

// Main execution
var cts = new CancellationTokenSource();

// Start producer
await ProduceOrdersAsync();

// Start consumer
_ = ConsumeOrdersAsync(cts.Token);

// Run for 30 seconds
await Task.Delay(TimeSpan.FromSeconds(30));
cts.Cancel();

class Order
{
    public string OrderId { get; set; }
    public string CustomerId { get; set; }
    public decimal Total { get; set; }
}`,
        },
      ],
    },
  ],
};
