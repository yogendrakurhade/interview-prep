import type { Topic } from "../../../types";

export const azureDurableFunctionsTopic: Topic = {
  id: "azure-durable-functions",
  name: "Durable Functions",
  questions: [
    {
      id: "q1",
      question: "What are Azure Durable Functions and what problems do they solve?",
      answer:
        "Azure Durable Functions extend Azure Functions with stateful workflow capabilities. They solve problems: 1) Function orchestration - coordinating multiple functions with dependencies. 2) Long-running processes - workflows lasting hours/days without timeout. 3) Distributed transactions - managing state across function calls. 4) Retry logic - built-in with exponential backoff. 5) Checkpointing - automatic resumption from failure point. 6) Fan-out/fan-in - parallel task execution and aggregation. Key patterns: Orchestrator functions coordinate work, Activity functions do the work, Entity functions maintain state. Uses event sourcing internally, enabling replaying from checkpoints.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Durable Functions - Core Concepts
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= ORCHESTRATOR FUNCTION =============
// Coordinates workflow, schedules tasks, manages state
// Note: Must be deterministic (same input = same execution path)

[FunctionName("OrderProcessingOrchestrator")]
public static async Task RunOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var order = context.GetInput<Order>();
    var results = new List<string>();

    try
    {
        // Step 1: Validate order (calls activity function)
        var isValid = await context.CallActivityAsync<bool>(
            "ValidateOrderActivity",
            order
        );

        if (!isValid)
        {
            throw new InvalidOperationException("Order validation failed");
        }

        // Step 2: Process payment
        var paymentResult = await context.CallActivityAsync<string>(
            "ProcessPaymentActivity",
            order.Total
        );
        results.Add(paymentResult);

        // Step 3: Send confirmation email
        await context.CallActivityAsync(
            "SendConfirmationEmailActivity",
            order.CustomerEmail
        );

        // Step 4: Update inventory
        await context.CallActivityAsync(
            "UpdateInventoryActivity",
            order.Items
        );

        await context.CallActivityAsync(
            "LogSuccessActivity",
            $"Order {order.OrderId} completed successfully"
        );
    }
    catch (Exception ex)
    {
        await context.CallActivityAsync(
            "LogErrorActivity",
            ex.Message
        );
        throw;
    }
}

// ============= ACTIVITY FUNCTIONS =============
// Do the actual work (HTTP calls, database operations, etc.)
// Can be retried, can fail, no side-effect restrictions

[FunctionName("ValidateOrderActivity")]
public static async Task<bool> ValidateOrder(
    [ActivityTrigger] Order order)
{
    Console.WriteLine($"Validating order {order.OrderId}");
    await Task.Delay(500);
    return order.Total > 0 && !string.IsNullOrEmpty(order.CustomerEmail);
}

[FunctionName("ProcessPaymentActivity")]
public static async Task<string> ProcessPayment(
    [ActivityTrigger] decimal paymentAmount)
{
    Console.WriteLine($"Processing payment of \${paymentAmount}");
    await Task.Delay(1000); // Simulate payment gateway
    return $"Payment processed: \${paymentAmount}";
}

[FunctionName("SendConfirmationEmailActivity")]
public static async Task SendConfirmationEmail(
    [ActivityTrigger] string email)
{
    Console.WriteLine($"Sending confirmation to {email}");
    await Task.Delay(300);
}

[FunctionName("UpdateInventoryActivity")]
public static async Task UpdateInventory(
    [ActivityTrigger] List<OrderItem> items)
{
    Console.WriteLine($"Updating inventory for {items.Count} items");
    await Task.Delay(400);
}

[FunctionName("LogSuccessActivity")]
public static void LogSuccess([ActivityTrigger] string message)
{
    Console.WriteLine($"✓ {message}");
}

[FunctionName("LogErrorActivity")]
public static void LogError([ActivityTrigger] string error)
{
    Console.WriteLine($"✗ Error: {error}");
}

// ============= CLIENT FUNCTION =============
// Starts the orchestrator

[FunctionName("StartOrderProcessing")]
public static async Task<string> StartOrchestrator(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "orders")] Order order,
    [DurableClient] IDurableOrchestrationClient client)
{
    string instanceId = await client.StartNewAsync(
        "OrderProcessingOrchestrator",
        order
    );

    Console.WriteLine($"Started orchestration with ID: {instanceId}");
    return instanceId;
}

// ============= CHECK STATUS =============
[FunctionName("GetOrchestrationStatus")]
public static async Task<IActionResult> GetStatus(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orders/{instanceId}")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client)
{
    var status = await client.GetStatusAsync(instanceId);
    
    return new OkObjectResult(new
    {
        InstanceId = instanceId,
        Status = status.RuntimeStatus,
        Input = status.Input,
        Output = status.Output,
        CreatedTime = status.CreatedTime,
        LastUpdatedTime = status.LastUpdatedTime
    });
}

// ============= KEY BENEFITS =============
Console.WriteLine("Durable Functions Benefits:");
Console.WriteLine("✓ Automatic checkpointing - resume from failure point");
Console.WriteLine("✓ Long-running workflows - hours/days, no timeout");
Console.WriteLine("✓ Built-in retry logic - exponential backoff");
Console.WriteLine("✓ Fan-out/fan-in patterns - parallel execution");
Console.WriteLine("✓ State management - automatic");
Console.WriteLine("✓ Event sourcing - full execution history");

class Order
{
    public string OrderId { get; set; }
    public decimal Total { get; set; }
    public string CustomerEmail { get; set; }
    public List<OrderItem> Items { get; set; }
}

class OrderItem
{
    public string ProductId { get; set; }
    public int Quantity { get; set; }
}`,
        },
      ],
    },
    {
      id: "q2",
      question: "What are the different Durable Functions patterns (Fan-out/Fan-in, Chaining, etc.)?",
      answer:
        "Main patterns: 1) Function Chaining - sequential execution where output of one is input to next. 2) Fan-out/Fan-in - call multiple activities in parallel, then aggregate results. 3) Async HTTP APIs - long-running workflows with polling mechanism. 4) Monitor - recurring operations checking conditions. 5) Human interaction - workflows waiting for human approval. 6) Sub-orchestrations - orchestrators calling other orchestrators. 7) Entity functions - durable state management for counters, voting, etc. Each pattern solves specific workflow challenges.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Durable Functions - Common Patterns
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// ============= PATTERN 1: FUNCTION CHAINING =============
// Sequential execution: A → B → C
// Output of A becomes input to B, etc.

[FunctionName("ChainingOrchestrator")]
public static async Task<string> Chaining(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string input)
{
    try
    {
        // Step 1: Get user
        var user = await context.CallActivityAsync<User>(
            "GetUserActivity",
            input
        );
        Console.WriteLine($"Step 1: Got user {user.Name}");

        // Step 2: Get user orders (uses user from step 1)
        var orders = await context.CallActivityAsync<List<Order>>(
            "GetUserOrdersActivity",
            user.UserId
        );
        Console.WriteLine($"Step 2: Got {orders.Count} orders");

        // Step 3: Calculate total spent (uses orders from step 2)
        var totalSpentAmount = await context.CallActivityAsync<decimal>(
            "CalculateTotalSpentActivity",
            orders
        );
        Console.WriteLine($"Step 3: Total spent: \${totalSpentAmount}");

        // Step 4: Award loyalty points (uses totalSpent from step 3)
        var loyaltyPoints = await context.CallActivityAsync<int>(
            "AwardLoyaltyPointsActivity",
            new { UserId = user.UserId, TotalSpent = totalSpentAmount }
        );

        return $"Chaining complete. User earned {loyaltyPoints} points";
    }
    catch (Exception ex)
    {
        return $"Chaining failed: {ex.Message}";
    }
}

// ============= PATTERN 2: FAN-OUT/FAN-IN =============
// Call multiple tasks in PARALLEL, then aggregate results
// Parallel execution = faster than sequential

[FunctionName("FanOutFanInOrchestrator")]
public static async Task<ParallelResults> FanOutFanIn(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string orderId)
{
    try
    {
        // Start multiple tasks in PARALLEL
        var tasks = new List<Task>();

        // Task 1: Validate order
        tasks.Add(context.CallActivityAsync("ValidateOrderActivity", orderId));

        // Task 2: Check inventory (runs in parallel!)
        tasks.Add(context.CallActivityAsync("CheckInventoryActivity", orderId));

        // Task 3: Verify payment method (runs in parallel!)
        tasks.Add(context.CallActivityAsync("VerifyPaymentActivity", orderId));

        // Task 4: Check fraud (runs in parallel!)
        tasks.Add(context.CallActivityAsync("CheckFraudActivity", orderId));

        // Wait for ALL tasks to complete
        await Task.WhenAll(tasks);

        // FAN-IN: Aggregate results
        var results = await context.CallActivityAsync<ParallelResults>(
            "AggregateResultsActivity",
            orderId
        );

        return results;
    }
    catch (Exception ex)
    {
        throw;
    }
}

// ============= PATTERN 3: ASYNC HTTP APIS =============
// Long-running workflow with status checking

[FunctionName("ReportOrchestrator")]
public static async Task<string> GenerateReportOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ReportRequest request)
{
    // This orchestrator runs for hours
    var location = await context.CallActivityAsync<string>(
        "GenerateLargeReportActivity",
        request
    );

    return location;
}

[FunctionName("GenerateLargeReportActivity")]
public static async Task<string> GenerateLargeReport(
    [ActivityTrigger] ReportRequest request)
{
    // Simulate long-running report generation (1 hour+)
    await Task.Delay(TimeSpan.FromHours(1));
    return $"https://storage.blob.core.windows.net/reports/{request.ReportName}.pdf";
}

[FunctionName("StartReportGeneration")]
public static async Task<DurableOrchestrationStatus> StartReport(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "reports")] ReportRequest request,
    [DurableClient] IDurableOrchestrationClient client)
{
    string instanceId = await client.StartNewAsync(
        "ReportOrchestrator",
        request
    );

    // Return status URL for polling
    return new DurableOrchestrationStatus
    {
        InstanceId = instanceId,
        StatusQueryGetUri = $"/api/reports/{instanceId}"
    };
}

// ============= PATTERN 4: MONITOR =============
// Continuously check a condition, retry on failure

[FunctionName("MonitorOrchestrator")]
public static async Task Monitor(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string deploymentId)
{
    var retryPolicy = new RetryOptions(
        firstRetryInterval: TimeSpan.FromSeconds(5),
        maxNumberOfAttempts: 30 // Try for 2.5 minutes
    )
    {
        BackoffCoefficient = 1.5
    };

    while (true)
    {
        try
        {
            // Check deployment status every 5 seconds
            var status = await context.CallActivityWithRetryAsync<string>(
                "CheckDeploymentStatusActivity",
                retryPolicy,
                deploymentId
            );

            if (status == "Completed")
            {
                Console.WriteLine("Deployment completed!");
                break;
            }

            // Wait before next check
            var nextCheckTime = context.CurrentUtcDateTime.AddSeconds(5);
            await context.CreateTimer(nextCheckTime, CancellationToken.None);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Deployment failed: {ex.Message}");
            throw;
        }
    }
}

// ============= PATTERN 5: HUMAN INTERACTION =============
// Workflow waiting for human approval

[FunctionName("ApprovalOrchestrator")]
public static async Task<string> HumanApproval(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    PurchaseOrder po)
{
    // Request human approval
    await context.CallActivityAsync("RequestApprovalActivity", po);

    // Wait for approval (timeout after 48 hours)
    var approvalTimeout = context.CreateTimer(
        context.CurrentUtcDateTime.AddHours(48),
        CancellationToken.None
    );

    var approvalTask = context.WaitForExternalEvent<bool>("ApprovalSubmitted");

    var winner = await Task.WhenAny(approvalTask, approvalTimeout);

    if (winner == approvalTask)
    {
        // Approval received before timeout
        bool isApproved = approvalTask.Result;

        if (isApproved)
        {
            await context.CallActivityAsync("ProcessPurchaseActivity", po);
            return "Purchase approved and processed";
        }
        else
        {
            await context.CallActivityAsync("RejectPurchaseActivity", po);
            return "Purchase rejected";
        }
    }
    else
    {
        // Timeout
        return "Approval request timed out";
    }
}

[FunctionName("SubmitApproval")]
public static async Task SubmitApproval(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "approve/{instanceId}")] string instanceId,
    bool approved,
    [DurableClient] IDurableOrchestrationClient client)
{
    // Send approval decision to waiting orchestrator
    await client.RaiseEventAsync(instanceId, "ApprovalSubmitted", approved);
}

// ============= PATTERN 6: SUB-ORCHESTRATIONS =============
// Orchestrator calling another orchestrator

[FunctionName("ParentOrchestrator")]
public static async Task<string> ParentOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    int orderId)
{
    // Call sub-orchestrator
    var paymentResult = await context.CallSubOrchestratorAsync<string>(
        "PaymentSubOrchestrator",
        orderId
    );

    var shipmentResult = await context.CallSubOrchestratorAsync<string>(
        "ShipmentSubOrchestrator",
        orderId
    );

    return $"Parent: {paymentResult}, {shipmentResult}";
}

[FunctionName("PaymentSubOrchestrator")]
public static async Task<string> PaymentSubOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    int orderId)
{
    var result = await context.CallActivityAsync<string>(
        "ProcessPaymentActivity",
        orderId
    );
    return result;
}

// ============= PATTERN 7: ENTITY FUNCTIONS =============
// Durable state management (counters, flags, etc.)

[FunctionName("CounterEntity")]
public static void Counter(
    [EntityFunctionInput] IDurableEntityContext context)
{
    var currentValue = context.State<int>();

    switch (context.OperationName.ToLowerInvariant())
    {
        case "add":
            currentValue += (int)context.GetInput<int>();
            break;
        case "get":
            context.SetResult(currentValue);
            break;
        case "set":
            currentValue = (int)context.GetInput<int>();
            break;
    }

    context.State = currentValue;
}

// Use entity in orchestrator
[FunctionName("CounterOrchestrator")]
public static async Task UseCounter(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var entityId = new EntityId("CounterEntity", "myCounter");

    // Call entity operations
    await context.CallEntityAsync(entityId, "add", 5);
    await context.CallEntityAsync(entityId, "add", 3);
    var value = await context.CallEntityAsync<int>(entityId, "get");

    Console.WriteLine($"Counter value: {value}"); // 8
}

// ============= PATTERN SUMMARY =============
Console.WriteLine("Durable Functions Patterns:");
Console.WriteLine("1. Chaining        - Sequential A→B→C");
Console.WriteLine("2. Fan-out/Fan-in  - Parallel tasks then aggregate");
Console.WriteLine("3. Async HTTP APIs - Long-running with status polling");
Console.WriteLine("4. Monitor         - Repeated checks with backoff");
Console.WriteLine("5. Human Approval  - Wait for external approval event");
Console.WriteLine("6. Sub-orchestrations - Nested orchestrator calls");
Console.WriteLine("7. Entity Functions - Durable state management");

class User { public string UserId { get; set; } public string Name { get; set; } }
class Order { public string OrderId { get; set; } }
class ReportRequest { public string ReportName { get; set; } }
class PurchaseOrder { public string PONumber { get; set; } public decimal Amount { get; set; } }
class ParallelResults { public bool ValidationPassed { get; set; } }
class DurableOrchestrationStatus { public string InstanceId { get; set; } public string StatusQueryGetUri { get; set; } }`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you handle retries and error handling in Durable Functions?",
      answer:
        "Durable Functions provide RetryOptions for automatic retry with exponential backoff. Configure firstRetryInterval, maxNumberOfAttempts, and backoffCoefficient. Activity functions can fail and retry automatically. Use try-catch in orchestrators to handle exceptions. Failed activity calls throw exceptions. Orchestrators are replayed from checkpoints on failure, so they must be deterministic (no DateTime.Now, no random). Automatic state management means retries don't duplicate side effects. Dead-letter pattern: move failed messages to separate queue after exhausting retries.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Durable Functions - Retry & Error Handling
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= RETRY OPTIONS =============
// Automatic retry with exponential backoff

[FunctionName("RetryOrchestrator")]
public static async Task RetryExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    // Configure retry policy
    var retryOptions = new RetryOptions(
        firstRetryInterval: TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    )
    {
        BackoffCoefficient = 2.0, // Exponential backoff: 1s, 2s, 4s
        Handle = ex => ex is TimeoutException or HttpRequestException // Retry only these
    };

    try
    {
        // Call with retry
        var result = await context.CallActivityWithRetryAsync<string>(
            "UnreliableApiCallActivity",
            retryOptions,
            "data"
        );

        Console.WriteLine($"Success: {result}");
    }
    catch (FunctionFailedException ex)
    {
        // After 3 retries, still failed
        Console.WriteLine($"Failed after retries: {ex.InnerException?.Message}");
    }
}

// ============= CUSTOM RETRY LOGIC =============

[FunctionName("CustomRetryOrchestrator")]
public static async Task CustomRetry(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string orderId)
{
    int maxAttempts = 5;
    int attempt = 0;
    Exception lastException = null;

    while (attempt < maxAttempts)
    {
        try
        {
            attempt++;
            Console.WriteLine($"Attempt {attempt} of {maxAttempts}");

            var result = await context.CallActivityAsync<string>(
                "ProcessOrderActivity",
                orderId
            );

            Console.WriteLine($"Success on attempt {attempt}");
            return;
        }
        catch (Exception ex)
        {
            lastException = ex;
            Console.WriteLine($"Attempt {attempt} failed: {ex.Message}");

            if (attempt < maxAttempts)
            {
                // Exponential backoff: 2^attempt seconds
                var backoffSeconds = Math.Pow(2, attempt);
                var nextRetryTime = context.CurrentUtcDateTime.AddSeconds(backoffSeconds);

                // Wait before retry
                await context.CreateTimer(nextRetryTime, CancellationToken.None);
            }
        }
    }

    // All retries exhausted
    throw new InvalidOperationException(
        $"Failed after {maxAttempts} attempts",
        lastException
    );
}

// ============= DEAD-LETTER PATTERN =============
// Move permanently failed messages to separate queue

[FunctionName("DeadLetterOrchestrator")]
public static async Task DeadLetterPattern(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    OrderMessage message)
{
    var retryOptions = new RetryOptions(
        TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    );

    try
    {
        await context.CallActivityWithRetryAsync(
            "ProcessOrderActivity",
            retryOptions,
            message
        );
    }
    catch (FunctionFailedException ex)
    {
        // Send to dead-letter queue for manual review
        await context.CallActivityAsync(
            "SendToDeadLetterActivity",
            new { Message = message, Error = ex.InnerException?.Message }
        );
    }
}

[FunctionName("SendToDeadLetterActivity")]
public static async Task SendToDeadLetter(
    [ActivityTrigger] IDictionary<string, object> failedData,
    [Queue("order-deadletter")] IAsyncCollector<string> deadLetterQueue)
{
    await deadLetterQueue.AddAsync(System.Text.Json.JsonSerializer.Serialize(failedData));
    Console.WriteLine("Message sent to dead-letter queue for review");
}

// ============= HANDLE SPECIFIC EXCEPTIONS =============

[FunctionName("SelectiveRetryOrchestrator")]
public static async Task SelectiveRetry(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string paymentId)
{
    var retryOptions = new RetryOptions(
        TimeSpan.FromSeconds(1),
        maxNumberOfAttempts: 3
    )
    {
        // Only retry transient errors (network, timeout)
        // Don't retry validation errors
        Handle = ex =>
        {
            var innerEx = ex.InnerException;
            if (innerEx is TimeoutException) return true;
            if (innerEx is HttpRequestException) return true;
            if (innerEx is InvalidOperationException) return false; // Validation error, don't retry

            return false;
        }
    };

    try
    {
        await context.CallActivityWithRetryAsync(
            "ProcessPaymentActivity",
            retryOptions,
            paymentId
        );
    }
    catch (FunctionFailedException ex)
    {
        var innerException = ex.InnerException;

        if (innerException is InvalidOperationException)
        {
            // Validation failed, don't retry
            Console.WriteLine($"Validation error (permanent): {innerException.Message}");
            throw;
        }

        if (innerException is TimeoutException)
        {
            // Timeout, already retried
            Console.WriteLine($"Timeout after retries: {innerException.Message}");
            throw;
        }
    }
}

// ============= ORCHESTRATOR MUST BE DETERMINISTIC =============
// These will cause issues with replaying!

[FunctionName("NonDeterministicOrchestrator")]
public static async Task BadPractices(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    // ❌ BAD: Using DateTime.Now - not deterministic
    // var now = DateTime.Now;

    // ✓ GOOD: Use context.CurrentUtcDateTime
    var now = context.CurrentUtcDateTime;

    // ❌ BAD: Using Random
    // var random = new Random().Next(10);

    // ✓ GOOD: Pass randomness from activity
    // var random = await context.CallActivityAsync<int>("GetRandomActivity", null);

    // ❌ BAD: Using GUID directly
    // var id = Guid.NewGuid();

    // ✓ GOOD: Get GUID from activity
    // var id = await context.CallActivityAsync<Guid>("GenerateGuidActivity", null);

    // ❌ BAD: Direct I/O operations
    // File.WriteAllText("log.txt", "message");

    // ✓ GOOD: Use activity function
    // await context.CallActivityAsync("LogActivity", "message");
}

// ============= TIMEOUT HANDLING =============

[FunctionName("TimeoutOrchestrator")]
public static async Task<string> HandleTimeout(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string reportId)
{
    try
    {
        // Set timeout of 30 minutes
        var timeoutAttempt = context.CreateTimer(
            context.CurrentUtcDateTime.AddMinutes(30),
            CancellationToken.None
        );

        var reportTask = context.CallActivityAsync<string>(
            "GenerateReportActivity",
            reportId
        );

        // Race: either report completes or timeout fires
        var winner = await Task.WhenAny(reportTask, timeoutAttempt);

        if (winner == reportTask)
        {
            return reportTask.Result;
        }
        else
        {
            return "Report generation timed out after 30 minutes";
        }
    }
    catch (FunctionFailedException ex)
    {
        Console.WriteLine($"Error: {ex.InnerException?.Message}");
        throw;
    }
}

// ============= BEST PRACTICES =============
Console.WriteLine("Retry & Error Handling Best Practices:");
Console.WriteLine("✓ Use RetryOptions for automatic exponential backoff");
Console.WriteLine("✓ Configure maxNumberOfAttempts appropriate to SLA");
Console.WriteLine("✓ Use Handle predicate to filter retryable exceptions");
Console.WriteLine("✓ Use dead-letter pattern for permanently failed messages");
Console.WriteLine("✓ Keep orchestrators deterministic (no DateTime.Now, Random, I/O)");
Console.WriteLine("✓ Use activity functions for side effects");
Console.WriteLine("✓ Handle FunctionFailedException to access inner exception");
Console.WriteLine("✓ Set appropriate timeouts with CreateTimer");
Console.WriteLine("✓ Log failures for monitoring and alerting");
Console.WriteLine("✓ Test retry scenarios in development");

class OrderMessage { public string OrderId { get; set; } }`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is event sourcing in Durable Functions and how is it used internally?",
      answer:
        "Event sourcing is the internal mechanism Durable Functions uses for reliability. Instead of storing function state directly, it stores all events (actions) that happened: 'orchestrator called activity X', 'activity X returned result Y', etc. On failure, the orchestrator replays all events to restore to the exact point of failure, then continues. This enables zero data loss, automatic checkpointing, and instant recovery. History is stored in storage account (table storage or SQL database). Replay is deterministic if orchestrator is pure (same inputs always produce same execution path). This is why orchestrators must be deterministic.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Durable Functions - Event Sourcing Internals
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= HOW EVENT SOURCING WORKS =============

[FunctionName("EventSourcingExampleOrchestrator")]
public static async Task EventSourcingExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    OrderData order)
{
    // Every action generates an event that is stored

    // Event 1: Orchestrator started
    Console.WriteLine("[Event 1] Orchestrator started");

    // Event 2: Call ValidateOrder activity
    var isValid = await context.CallActivityAsync<bool>(
        "ValidateOrderActivity",
        order
    );
    // Event stored: { Type: "TaskScheduled", Activity: "ValidateOrder", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "ValidateOrder", Result: true }
    Console.WriteLine("[Event 2] Validate order returned: " + isValid);

    // Event 3: Call ProcessPayment activity
    var paymentId = await context.CallActivityAsync<string>(
        "ProcessPaymentActivity",
        order.Amount
    );
    // Event stored: { Type: "TaskScheduled", Activity: "ProcessPayment", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "ProcessPayment", Result: "PAY-123" }
    Console.WriteLine("[Event 3] Payment processed: " + paymentId);

    // Event 4: Call UpdateInventory activity
    await context.CallActivityAsync(
        "UpdateInventoryActivity",
        order.Items
    );
    // Event stored: { Type: "TaskScheduled", Activity: "UpdateInventory", ... }
    // Event stored: { Type: "TaskCompleted", Activity: "UpdateInventory" }
    Console.WriteLine("[Event 4] Inventory updated");

    // Event 5: Orchestrator completed
    Console.WriteLine("[Event 5] Orchestrator completed successfully");

    /* HISTORY STORAGE in Azure Table Storage:
     * 
     * InstanceId: ORDER-001
     * 
     * Event History:
     * {
     *   "InstanceId": "ORDER-001",
     *   "ExecutionId": "1",
     *   "Sequence": 0,
     *   "EventType": "OrchestratorStarted",
     *   "Timestamp": "2024-01-15T10:00:00Z"
     * },
     * {
     *   "InstanceId": "ORDER-001",
     *   "Sequence": 1,
     *   "EventType": "TaskScheduled",
     *   "Name": "ValidateOrderActivity",
     *   "Input": "{ OrderId: 'ORD-001' }"
     * },
     * {
     *   "InstanceId": "ORDER-001",
     *   "Sequence": 2,
     *   "EventType": "TaskCompleted",
     *   "Result": "true"
     * },
     * ...
     */
}

// ============= REPLAY MECHANISM ON FAILURE =============

[FunctionName("ReplayOnFailureOrchestrator")]
public static async Task ReplayMechanism(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string itemId)
{
    try
    {
        // Step 1: Get inventory
        var inventory = await context.CallActivityAsync<int>(
            "GetInventoryActivity",
            itemId
        );

        // If this crashes here ↓, the whole orchestration restarts

        // Step 2: Check stock
        if (inventory < 10)
        {
            throw new InvalidOperationException("Low stock!");
        }

        // Step 3: Reorder
        var orderId = await context.CallActivityAsync<string>(
            "PlaceReorderActivity",
            itemId
        );

        // REPLAY FLOW ON FAILURE:
        // 1. Orchestrator restarts from beginning
        // 2. Events replayed: GetInventory activity ran, returned same result (cached)
        // 3. Stock check runs again (using cached result, not calling activity again)
        // 4. Reaches the point where it crashed
        // 5. Continues from there (PlaceReorder now executes)
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
}

// ============= WHY DETERMINISTIC? =============

[FunctionName("DeterministicRequirementOrchestrator")]
public static async Task DeterministicRequirement(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    string processId)
{
    // SCENARIO: First execution completes up to step 2, then fails

    // ❌ WRONG: Using DateTime.Now
    // First execution:
    //   Step 1: now = 2024-01-15 10:00:00
    //   Step 2: CRASH
    // Replay:
    //   Step 1: now = 2024-01-15 10:00:05 (different time!)
    //   This causes different behavior, breaking replay guarantee

    // ✓ CORRECT: Use context.CurrentUtcDateTime
    var now = context.CurrentUtcDateTime;
    // First execution:
    //   Step 1: now = 2024-01-15 10:00:00
    //   Step 2: CRASH
    // Replay:
    //   Step 1: now = 2024-01-15 10:00:00 (same time!)
    //   Replay produces identical behavior

    // ❌ WRONG: Using Random
    // var randomValue = new Random().Next(100);
    // First execution: randomValue = 42
    // Replay: randomValue = 73 (different!)

    // ✓ CORRECT: Get random from activity
    // var randomValue = await context.CallActivityAsync<int>("GetRandomActivity", null);
    // Deterministic because activity result is replayed

    // ❌ WRONG: Direct I/O
    // var data = File.ReadAllText("data.json");
    // File may have changed!

    // ✓ CORRECT: Use activity
    // var data = await context.CallActivityAsync<string>("ReadFileActivity", "data.json");
}

// ============= CHECKING EXECUTION HISTORY =============

[FunctionName("CheckExecutionHistory")]
public static async Task CheckHistory(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "history/{instanceId}")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client)
{
    var status = await client.GetStatusAsync(instanceId);

    Console.WriteLine($"Instance ID: {instanceId}");
    Console.WriteLine($"Status: {status.RuntimeStatus}");
    Console.WriteLine($"Created: {status.CreatedTime}");
    Console.WriteLine($"Completed: {status.CompletedTime}");
    Console.WriteLine($"\\nExecution History:");

    var history = status.History;
    for (int i = 0; i < history.Count; i++)
    {
        var item = history[i];
        Console.WriteLine($"  Event {i}: {item}");
    }

    // Example output:
    // Event 0: { "EventType": "OrchestratorStarted" }
    // Event 1: { "EventType": "TaskScheduled", "Name": "ValidateOrder" }
    // Event 2: { "EventType": "TaskCompleted", "Result": "true" }
    // Event 3: { "EventType": "TaskScheduled", "Name": "ProcessPayment" }
    // Event 4: { "EventType": "TaskCompleted", "Result": "payment-123" }
}

// ============= EVENT SOURCING BENEFITS =============
Console.WriteLine("Event Sourcing Benefits in Durable Functions:");
Console.WriteLine("✓ Automatic checkpointing - save to storage after each step");
Console.WriteLine("✓ Deterministic replay - exact restoration to failure point");
Console.WriteLine("✓ Zero data loss - all work is recorded");
Console.WriteLine("✓ Instant recovery - continue from last checkpoint");
Console.WriteLine("✓ Full history - complete audit trail of execution");
Console.WriteLine("✓ Failure handling - transparent automatic recovery");

// ============= CONFIGURING STORAGE =============
Console.WriteLine("\\nEvent Storage Backends:");
Console.WriteLine("- Table Storage (default, cost-effective)");
Console.WriteLine("- SQL Database (better for analysis)");
Console.WriteLine("- Netherite (faster, event log only)");

class OrderData { public string OrderId { get; set; } public decimal Amount { get; set; } public List<string> Items { get; set; } }`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you monitor, debug, and troubleshoot Durable Functions?",
      answer:
        "Monitor using Application Insights with custom metrics and traces. Track orchestrator status: Pending, Running, Completed, Failed, Terminated. Use IDurableOrchestrationClient.GetStatusAsync() to check instance status and execution history. Debug: enable verbose logging, inspect history in storage table, replay execution in local emulator. Common issues: orchestrator not deterministic (changes cause mismatches), activity timeouts (configure with RetryOptions), storage account connectivity. Use Durable Functions monitoring extension in Azure Portal to visualize workflow execution. Set up alerts for failures.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Durable Functions - Monitoring, Debugging, Troubleshooting
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.DurableTask;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// ============= MONITORING WITH APPLICATION INSIGHTS =============

[FunctionName("MonitoredOrchestrator")]
public static async Task MonitoredWorkflow(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ILogger log,
    string orderId)
{
    try
    {
        // Log orchestrator events
        context.SetCustomStatus("Starting order processing");

        var isValid = await context.CallActivityAsync<bool>(
            "ValidateOrderActivity",
            orderId
        );

        if (!isValid)
        {
            context.SetCustomStatus("Validation failed");
            throw new InvalidOperationException("Invalid order");
        }

        context.SetCustomStatus("Processing payment");
        var paymentId = await context.CallActivityAsync<string>(
            "ProcessPaymentActivity",
            orderId
        );

        context.SetCustomStatus("Updating inventory");
        await context.CallActivityAsync("UpdateInventoryActivity", orderId);

        context.SetCustomStatus("Order completed");
    }
    catch (Exception ex)
    {
        context.SetCustomStatus($"Failed: {ex.Message}");
        throw;
    }
}

// ============= DETAILED LOGGING IN ACTIVITIES =============

[FunctionName("LoggedActivity")]
public static async Task<string> ActivityWithLogging(
    [ActivityTrigger] string orderId,
    ILogger log)
{
    log.LogInformation($"Processing order: {orderId}");

    try
    {
        // Simulate work
        await Task.Delay(1000);

        log.LogInformation($"Order {orderId} processed successfully");
        return $"Completed-{orderId}";
    }
    catch (Exception ex)
    {
        log.LogError($"Error processing order {orderId}: {ex.Message}");
        throw;
    }
}

// ============= CHECK INSTANCE STATUS =============

[FunctionName("CheckInstanceStatus")]
public static async Task<object> CheckStatus(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orchestration/{instanceId}/status")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    var status = await client.GetStatusAsync(instanceId);

    if (status == null)
    {
        return new { Error = "Instance not found" };
    }

    log.LogInformation($"Instance {instanceId} status: {status.RuntimeStatus}");

    return new
    {
        InstanceId = instanceId,
        Status = status.RuntimeStatus.ToString(), // Pending, Running, Completed, Failed, etc.
        Input = status.Input,
        Output = status.Output,
        CreatedTime = status.CreatedTime,
        LastUpdatedTime = status.LastUpdatedTime,
        CompletedTime = status.CompletedTime,
        IsRuntimeStatus = status.IsRuntimeStatus,
        
        // History of all events
        History = status.History,
        
        // Custom status set by orchestrator
        CustomStatus = status.CustomStatus
    };
}

// ============= EXECUTION HISTORY ANALYSIS =============

[FunctionName("AnalyzeExecutionHistory")]
public static async Task AnalyzeHistory(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "orchestration/{instanceId}/history")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    var status = await client.GetStatusAsync(instanceId);

    if (status?.History == null)
        return;

    var taskDurations = new Dictionary<string, TimeSpan>();
    DateTime? previousTimestamp = null;

    foreach (var historyItem in status.History)
    {
        // Each history item contains execution details
        var json = historyItem.ToString();
        
        // Parse to find task completions
        if (json.Contains("TaskCompleted"))
        {
            log.LogInformation($"Task completed: {json}");
        }

        if (json.Contains("TaskFailed"))
        {
            log.LogError($"Task failed: {json}");
        }

        if (json.Contains("OrchestratorStarted"))
        {
            log.LogInformation("Orchestrator started");
        }
    }

    log.LogInformation($"Total events in history: {status.History.Count}");
}

// ============= TERMINATE STUCK ORCHESTRATION =============

[FunctionName("TerminateOrchestration")]
public static async Task Terminate(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "orchestration/{instanceId}/terminate")] string instanceId,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    await client.TerminateAsync(instanceId, "Manually terminated");
    log.LogWarning($"Orchestration {instanceId} terminated");
}

// ============= PURGE INSTANCE HISTORY =============

[FunctionName("PurgeHistory")]
public static async Task PurgeOldInstances(
    [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "purge")] object input,
    [DurableClient] IDurableOrchestrationClient client,
    ILogger log)
{
    // Clean up instances older than 30 days
    var cutoffTime = DateTime.UtcNow.AddDays(-30);

    await client.PurgeInstanceHistoryAsync(
        createdTimeFrom: DateTime.MinValue,
        createdTimeTo: cutoffTime,
        runtimeStatus: new[] { OrchestrationRuntimeStatus.Completed }
    );

    log.LogInformation("Purged completed instances older than 30 days");
}

// ============= COMMON ISSUES & SOLUTIONS =============

[FunctionName("TroubleshootingGuide")]
public static void TroubleshootingGuide()
{
    Console.WriteLine("Durable Functions Troubleshooting:");
    Console.WriteLine("");

    Console.WriteLine("Issue 1: Orchestration stuck in 'Running' state");
    Console.WriteLine("  Cause: Activity function crashed, orchestrator waiting");
    Console.WriteLine("  Solution: Check activity function logs in Application Insights");
    Console.WriteLine("  Action: Fix activity bug and redeploy");
    Console.WriteLine("");

    Console.WriteLine("Issue 2: 'Orchestration violated deterministic constraint'");
    Console.WriteLine("  Cause: Orchestrator code changed or non-deterministic operation used");
    Console.WriteLine("  Solution: Don't modify orchestrator logic mid-flight, use DateTime.UtcNow");
    Console.WriteLine("  Action: Deploy orchestrator change only after current instances complete");
    Console.WriteLine("");

    Console.WriteLine("Issue 3: Activity function timeouts");
    Console.WriteLine("  Cause: Activity takes longer than expected");
    Console.WriteLine("  Solution: Configure RetryOptions with longer timeout");
    Console.WriteLine("  Action: await context.CallActivityWithRetryAsync() with RetryOptions");
    Console.WriteLine("");

    Console.WriteLine("Issue 4: Storage account connection errors");
    Console.WriteLine("  Cause: Connection string misconfigured");
    Console.WriteLine("  Solution: Check AzureWebJobsStorage setting in local.settings.json");
    Console.WriteLine("  Action: Verify storage account access keys in Azure Portal");
    Console.WriteLine("");

    Console.WriteLine("Issue 5: Instance history not updating");
    Console.WriteLine("  Cause: Storage account permissions issue");
    Console.WriteLine("  Solution: Ensure managed identity has Storage Contributor role");
    Console.WriteLine("  Action: Check RBAC assignments in Azure Portal");
    Console.WriteLine("");

    Console.WriteLine("Issue 6: Duplicate execution of activity");
    Console.WriteLine("  Cause: Activity called twice due to wrong code");
    Console.WriteLine("  Solution: Implement idempotent activities");
    Console.WriteLine("  Action: Use idempotency keys to prevent duplicate processing");
}

// ============= CUSTOM METRICS =============

[FunctionName("MetricsOrchestrator")]
public static async Task MetricsExample(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var startTime = context.CurrentUtcDateTime;

    try
    {
        await context.CallActivityAsync("LongRunningActivity", null);

        var duration = context.CurrentUtcDateTime - startTime;
        context.SetCustomStatus($"Completed in {duration.TotalSeconds}s");
    }
    catch (Exception ex)
    {
        context.SetCustomStatus($"Failed after {(context.CurrentUtcDateTime - startTime).TotalSeconds}s");
    }
}

// ============= STRUCTURED LOGGING =============

[FunctionName("StructuredLoggingActivity")]
public static async Task StructuredLogging(
    [ActivityTrigger] IDictionary<string, object> data,
    ILogger log)
{
    // Structured logging for better querying in Application Insights
    using (log.BeginScope(new Dictionary<string, object>
    {
        { "OrderId", data["OrderId"] },
        { "CustomerId", data["CustomerId"] },
        { "Amount", data["Amount"] }
    }))
    {
        log.LogInformation("Processing order with structured logging");
        // Logs will include OrderId, CustomerId, Amount for correlation
    }
}

// ============= MONITORING BEST PRACTICES =============
Console.WriteLine("\\nMonitoring Best Practices:");
Console.WriteLine("✓ Use SetCustomStatus() for workflow visibility");
Console.WriteLine("✓ Track orchestration instances with tags");
Console.WriteLine("✓ Set up alerts for failed orchestrations");
Console.WriteLine("✓ Monitor storage account metrics (latency, failures)");
Console.WriteLine("✓ Use Application Insights for distributed tracing");
Console.WriteLine("✓ Implement activity function timeouts");
Console.WriteLine("✓ Regular purge of old instance history");
Console.WriteLine("✓ Test disaster scenarios (storage failure, activity timeout)");
Console.WriteLine("✓ Document retry policies and timeouts");
Console.WriteLine("✓ Use correlation IDs for end-to-end tracing");`,
        },
      ],
    },
  ],
};
