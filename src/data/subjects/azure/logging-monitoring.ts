import type { Topic } from "../../../types";

export const azureLoggingMonitoringTopic: Topic = {
  id: "azure-logging-monitoring",
  name: "Logging & Monitoring",
  questions: [
    {
      id: "q1",
      question: "What is Azure Monitor and what are its main components?",
      answer:
        "Azure Monitor is comprehensive monitoring service for collecting, analyzing, and acting on telemetry. Components: Metrics (numeric data), Logs (structured data in Log Analytics), Alerts (notifications), Application Insights (APM), Workbooks (visualization). Collects from Azure resources, applications, VMs, containers. Enables proactive monitoring and troubleshooting.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Monitor Overview

Console.WriteLine("Azure Monitor - Main Components:");
Console.WriteLine("┌─────────────────────────────────────────────────────┐");
Console.WriteLine("│ Azure Monitor                                       │");
Console.WriteLine("├─────────────────────────────────────────────────────┤");
Console.WriteLine("│ Metrics        - Numeric time-series data           │");
Console.WriteLine("│ Logs           - Structured data in Log Analytics   │");
Console.WriteLine("│ Alerts         - Notifications & automated actions  │");
Console.WriteLine("│ App Insights   - Application performance monitoring │");
Console.WriteLine("│ Workbooks      - Interactive data visualizations    │");
Console.WriteLine("│ Dashboards     - Custom monitoring views            │");
Console.WriteLine("└─────────────────────────────────────────────────────┘");

// Data Sources for Azure Monitor
Console.WriteLine("Data Sources:");
Console.WriteLine("• Application code (via SDK)");
Console.WriteLine("• Operating system (guest OS)");
Console.WriteLine("• Azure resources (platform metrics)");
Console.WriteLine("• Azure subscriptions (activity logs)");
Console.WriteLine("• Azure tenant (AAD audit logs)");
Console.WriteLine("• Custom sources (REST API)");

// Azure Monitor Pricing
Console.WriteLine("Pricing Model:");
Console.WriteLine("• Metrics: Free for platform metrics");
Console.WriteLine("• Logs: Pay per GB ingested + retention");
Console.WriteLine("• Alerts: Pay per alert rule");
Console.WriteLine("• App Insights: Pay per GB ingested");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Application Insights and how do you integrate it with a .NET application?",
      answer:
        "Application Insights is APM (Application Performance Monitoring) service. Tracks requests, dependencies, exceptions, performance, custom events. Auto-collects telemetry with SDK. Provides live metrics, failure analysis, performance counters, user analytics. Integrates via NuGet package and connection string configuration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Application Insights Integration in .NET
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add Application Insights telemetry
builder.Services.AddApplicationInsightsTelemetry(options =>
{
    options.ConnectionString = builder.Configuration["ApplicationInsights:ConnectionString"];
    options.EnableAdaptiveSampling = true;
    options.EnableQuickPulseMetricStream = true; // Live Metrics
});

var app = builder.Build();

// Manual telemetry tracking
public class OrderService
{
    private readonly TelemetryClient _telemetryClient;
    
    public OrderService(TelemetryClient telemetryClient)
    {
        _telemetryClient = telemetryClient;
    }
    
    public async Task ProcessOrder(Order order)
    {
        // Track custom event
        _telemetryClient.TrackEvent("OrderProcessed", new Dictionary<string, string>
        {
            { "OrderId", order.Id.ToString() },
            { "CustomerId", order.CustomerId }
        });
        
        // Track custom metric
        _telemetryClient.TrackMetric("OrderValue", order.TotalAmount);
        
        try
        {
            await ProcessPayment(order);
        }
        catch (Exception ex)
        {
            // Track exception
            _telemetryClient.TrackException(ex, new Dictionary<string, string>
            {
                { "OrderId", order.Id.ToString() }
            });
            throw;
        }
    }
    
    public async Task<Product> GetProduct(int id)
    {
        // Track dependency (external call)
        using var operation = _telemetryClient.StartOperation<DependencyTelemetry>("GetProduct");
        operation.Telemetry.Type = "HTTP";
        operation.Telemetry.Target = "product-api";
        
        var result = await _httpClient.GetAsync($"/api/products/{id}");
        operation.Telemetry.Success = result.IsSuccessStatusCode;
        
        return await result.Content.ReadFromJsonAsync<Product>();
    }
}

// appsettings.json
/*
{
  "ApplicationInsights": {
    "ConnectionString": "InstrumentationKey=xxx;IngestionEndpoint=https://xxx.applicationinsights.azure.com/"
  }
}
*/`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Azure Log Analytics and how do you query logs using KQL?",
      answer:
        "Log Analytics is centralized log storage and query service. Uses Kusto Query Language (KQL) for powerful queries. Workspace stores logs from multiple sources. Common tables: AppRequests, AppExceptions, AppDependencies, AzureActivity, Heartbeat. Query results used for alerts, dashboards, exports.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Log Analytics & KQL Queries

Console.WriteLine("Log Analytics Workspace:");
Console.WriteLine("• Centralized log storage");
Console.WriteLine("• Multi-source log aggregation");
Console.WriteLine("• KQL query language");
Console.WriteLine("• Retention: 30 days free, up to 730 days paid");

// Common KQL Queries
Console.WriteLine("KQL Query Examples:");

// Query 1: Find all exceptions in last 24 hours
Console.WriteLine(@"
// Exceptions in last 24 hours
AppExceptions
| where TimeGenerated > ago(24h)
| summarize count() by ExceptionType, ProblemId
| order by count_ desc
");

// Query 2: Request performance analysis
Console.WriteLine(@"
// Slow requests (>1 second)
AppRequests
| where TimeGenerated > ago(1h)
| where DurationMs > 1000
| project TimeGenerated, Name, DurationMs, ResultCode
| order by DurationMs desc
| take 100
");

// Query 3: Failed requests by endpoint
Console.WriteLine(@"
// Failed requests by endpoint
AppRequests
| where TimeGenerated > ago(24h)
| where Success == false
| summarize FailedCount=count() by Name, ResultCode
| order by FailedCount desc
");

// Query 4: Dependency failures
Console.WriteLine(@"
// External dependency failures
AppDependencies
| where TimeGenerated > ago(1h)
| where Success == false
| summarize count() by Target, Type, ResultCode
| order by count_ desc
");

// Query 5: User activity timeline
Console.WriteLine(@"
// User session timeline
AppPageViews
| where TimeGenerated > ago(7d)
| summarize PageViews=count() by bin(TimeGenerated, 1h)
| render timechart
");

// Query 6: Resource utilization
Console.WriteLine(@"
// Performance counters
Perf
| where TimeGenerated > ago(1h)
| where ObjectName == 'Processor' and CounterName == '% Processor Time'
| summarize AvgCPU=avg(CounterValue) by bin(TimeGenerated, 5m), Computer
| render timechart
");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you configure alerts in Azure Monitor?",
      answer:
        "Azure Monitor Alerts notify when conditions are met. Types: Metric alerts (threshold-based), Log alerts (KQL query), Activity log alerts (Azure events). Action groups define responses: email, SMS, webhook, Azure Function, Logic App, ITSM. Severity levels 0-4 (Critical to Verbose). Smart groups reduce alert noise.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Monitor Alerts Configuration

Console.WriteLine("Alert Types:");
Console.WriteLine("┌───────────────────────────────────────────────────────┐");
Console.WriteLine("│ Type            │ Use Case                           │");
Console.WriteLine("├───────────────────────────────────────────────────────┤");
Console.WriteLine("│ Metric Alert    │ CPU > 80%, Response time > 2s      │");
Console.WriteLine("│ Log Alert       │ Error count > 100 in 5 min         │");
Console.WriteLine("│ Activity Alert  │ VM deleted, Role assigned          │");
Console.WriteLine("│ Smart Detection │ Anomaly detection (App Insights)   │");
Console.WriteLine("└───────────────────────────────────────────────────────┘");

// Alert Severity Levels
Console.WriteLine("Severity Levels:");
Console.WriteLine("Sev 0 - Critical");
Console.WriteLine("Sev 1 - Error");
Console.WriteLine("Sev 2 - Warning");
Console.WriteLine("Sev 3 - Informational");
Console.WriteLine("Sev 4 - Verbose");

// Action Group Configuration
Console.WriteLine("Action Group Actions:");
Console.WriteLine("• Email/SMS/Push/Voice");
Console.WriteLine("• Azure Function");
Console.WriteLine("• Logic App");
Console.WriteLine("• Webhook");
Console.WriteLine("• ITSM (ServiceNow, etc.)");
Console.WriteLine("• Automation Runbook");

// Creating Alert via Azure CLI
Console.WriteLine(@"
# Create metric alert (CPU > 80%)
az monitor metrics alert create \
  --name 'High CPU Alert' \
  --resource-group myRG \
  --scopes '/subscriptions/{sub}/resourceGroups/myRG/providers/Microsoft.Compute/virtualMachines/myVM' \
  --condition 'avg Percentage CPU > 80' \
  --window-size 5m \
  --evaluation-frequency 1m \
  --action /subscriptions/{sub}/resourceGroups/myRG/providers/microsoft.insights/actionGroups/myActionGroup \
  --severity 2
");

// Creating Log Alert
Console.WriteLine(@"
# Create log alert (Error count)
az monitor scheduled-query create \
  --name 'High Error Rate' \
  --resource-group myRG \
  --scopes '/subscriptions/{sub}/resourceGroups/myRG/providers/microsoft.insights/components/myAppInsights' \
  --condition 'count > 100' \
  --condition-query 'AppExceptions | where TimeGenerated > ago(5m)' \
  --action /subscriptions/{sub}/resourceGroups/myRG/providers/microsoft.insights/actionGroups/myActionGroup \
  --severity 1
");`,
        },
      ],
    },
    {
      id: "q5",
      question: "What is structured logging and how do you implement it with Serilog in Azure?",
      answer:
        "Structured logging captures log data as key-value pairs, not just strings. Enables filtering, searching, aggregation. Serilog is popular .NET logging library. Sinks send logs to destinations: Console, File, Application Insights, Seq, Elasticsearch. Message templates preserve structure. Enrichers add context (machine name, thread ID).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Structured Logging with Serilog in Azure
using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("System", LogEventLevel.Warning)
    .Enrich.FromLogContext()
    .Enrich.WithMachineName()
    .Enrich.WithThreadId()
    .Enrich.WithProperty("Application", "MyApp")
    .WriteTo.Console(outputTemplate: 
        "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
    .WriteTo.ApplicationInsights(
        builder.Configuration["ApplicationInsights:ConnectionString"],
        TelemetryConverter.Traces)
    .WriteTo.File(
        path: "logs/app-.log",
        rollingInterval: RollingInterval.Day,
        retainedFileCountLimit: 7)
    .CreateLogger();

builder.Host.UseSerilog();

var app = builder.Build();

// Structured logging examples
public class OrderController : ControllerBase
{
    private readonly ILogger<OrderController> _logger;
    
    public OrderController(ILogger<OrderController> logger)
    {
        _logger = logger;
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateOrder(OrderRequest request)
    {
        // Structured log with properties (NOT string interpolation!)
        _logger.LogInformation(
            "Processing order {OrderId} for customer {CustomerId} with {ItemCount} items",
            request.OrderId,
            request.CustomerId,
            request.Items.Count);
        
        try
        {
            var result = await ProcessOrderAsync(request);
            
            _logger.LogInformation(
                "Order {OrderId} completed successfully. Total: {OrderTotal:C}",
                request.OrderId,
                result.Total);
                
            return Ok(result);
        }
        catch (PaymentException ex)
        {
            _logger.LogError(ex,
                "Payment failed for order {OrderId}. Provider: {PaymentProvider}, Error: {ErrorCode}",
                request.OrderId,
                ex.Provider,
                ex.ErrorCode);
                
            return BadRequest("Payment failed");
        }
    }
}

// Using LogContext for correlation
using (LogContext.PushProperty("CorrelationId", correlationId))
using (LogContext.PushProperty("UserId", userId))
{
    _logger.LogInformation("Starting request processing");
    // All logs within this scope will have CorrelationId and UserId
}

// Query structured logs in Log Analytics
/*
traces
| where customDimensions.OrderId == "12345"
| project timestamp, message, customDimensions.CustomerId, customDimensions.ItemCount
*/`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you implement distributed tracing in microservices with Azure?",
      answer:
        "Distributed tracing tracks requests across microservices. Uses correlation IDs to link spans. Application Insights auto-correlates with W3C Trace Context. Operation ID shared across services. Dependency tracking shows call chain. Application Map visualizes service topology. End-to-end transaction search for debugging.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Distributed Tracing in Microservices
using System.Diagnostics;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;

// Enable W3C Trace Context (default in .NET Core 3.0+)
Activity.DefaultIdFormat = ActivityIdFormat.W3C;
Activity.ForceDefaultIdFormat = true;

// Service A - Order Service
public class OrderService
{
    private readonly HttpClient _httpClient;
    private readonly TelemetryClient _telemetry;
    
    public async Task<Order> CreateOrder(OrderRequest request)
    {
        // Activity automatically propagated via HttpClient
        var activity = Activity.Current;
        
        _telemetry.TrackTrace($"Creating order", SeverityLevel.Information,
            new Dictionary<string, string>
            {
                { "TraceId", activity?.TraceId.ToString() },
                { "SpanId", activity?.SpanId.ToString() }
            });
        
        // Call Inventory Service (trace context auto-propagated)
        var inventory = await _httpClient.GetAsync(
            $"http://inventory-service/api/check/{request.ProductId}");
        
        // Call Payment Service
        var payment = await _httpClient.PostAsJsonAsync(
            "http://payment-service/api/process", 
            new { OrderId = request.Id, Amount = request.Total });
        
        return new Order { Id = request.Id, Status = "Created" };
    }
}

// Service B - Inventory Service (receives trace context automatically)
public class InventoryController : ControllerBase
{
    private readonly ILogger<InventoryController> _logger;
    
    [HttpGet("check/{productId}")]
    public IActionResult CheckInventory(int productId)
    {
        var traceId = Activity.Current?.TraceId.ToString();
        var parentSpanId = Activity.Current?.ParentSpanId.ToString();
        
        _logger.LogInformation(
            "Checking inventory for product {ProductId}. TraceId: {TraceId}, ParentSpan: {ParentSpan}",
            productId, traceId, parentSpanId);
        
        // Same TraceId as Order Service - linked in Application Insights!
        return Ok(new { ProductId = productId, Available = true });
    }
}

// Custom Activity for fine-grained tracing
public async Task ProcessPaymentAsync(PaymentRequest request)
{
    using var activity = new Activity("ProcessPayment").Start();
    activity.SetTag("payment.provider", "Stripe");
    activity.SetTag("payment.amount", request.Amount);
    
    try
    {
        var result = await _stripeClient.ChargeAsync(request);
        activity.SetTag("payment.status", "success");
    }
    catch (Exception ex)
    {
        activity.SetTag("payment.status", "failed");
        activity.SetTag("error.message", ex.Message);
        throw;
    }
}

// View in Application Insights:
// 1. Application Map - See service dependencies
// 2. End-to-end transaction - Trace full request flow
// 3. Failures - See where errors occur in chain`,
        },
      ],
    },
    {
      id: "q7",
      question: "What are Azure Monitor Workbooks and how do you create custom dashboards?",
      answer:
        "Workbooks are interactive reports combining metrics, logs, and text. Templates for common scenarios. Components: text, queries, metrics, parameters, links, groups. Parameters enable filtering. Can embed KQL queries, visualizations (charts, grids, tiles). Share via Azure Portal or export. Dashboards pin specific visualizations for quick view.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Monitor Workbooks & Dashboards

Console.WriteLine("Workbook Components:");
Console.WriteLine("┌─────────────────────────────────────────────────────┐");
Console.WriteLine("│ Component    │ Description                         │");
Console.WriteLine("├─────────────────────────────────────────────────────┤");
Console.WriteLine("│ Text         │ Markdown documentation              │");
Console.WriteLine("│ Query        │ KQL query with visualization        │");
Console.WriteLine("│ Metrics      │ Azure resource metrics chart        │");
Console.WriteLine("│ Parameters   │ Dropdown filters, time range        │");
Console.WriteLine("│ Links        │ Navigation to other workbooks       │");
Console.WriteLine("│ Groups       │ Collapsible sections                │");
Console.WriteLine("└─────────────────────────────────────────────────────┘");

// Example Workbook: Application Health
Console.WriteLine(@"
## Application Health Workbook

### Parameters
- Time Range: {TimeRange}
- Application: {AppName}

### Request Success Rate
AppRequests
| where TimeGenerated {TimeRange}
| where AppName == '{AppName}'
| summarize 
    TotalRequests = count(),
    FailedRequests = countif(Success == false)
| extend SuccessRate = round(100.0 * (TotalRequests - FailedRequests) / TotalRequests, 2)

### Response Time Percentiles
AppRequests
| where TimeGenerated {TimeRange}
| summarize 
    p50 = percentile(DurationMs, 50),
    p90 = percentile(DurationMs, 90),
    p99 = percentile(DurationMs, 99)
    by bin(TimeGenerated, 5m)
| render timechart

### Top Errors
AppExceptions
| where TimeGenerated {TimeRange}
| summarize Count = count() by ExceptionType, ProblemId
| top 10 by Count
| render barchart

### Dependency Health
AppDependencies
| where TimeGenerated {TimeRange}
| summarize 
    Calls = count(),
    Failures = countif(Success == false),
    AvgDuration = avg(DurationMs)
    by Target, Type
| extend FailureRate = round(100.0 * Failures / Calls, 2)
| order by Failures desc
");

// Azure Dashboard - Pin from any visualization
Console.WriteLine("Dashboard Tips:");
Console.WriteLine("• Pin metrics charts directly from resource blades");
Console.WriteLine("• Pin query results from Log Analytics");
Console.WriteLine("• Add Application Insights components");
Console.WriteLine("• Share dashboards with team members");
Console.WriteLine("• Export as ARM template for IaC");`,
        },
      ],
    },
    {
      id: "q8",
      question: "How do you monitor Azure Functions and implement health checks?",
      answer:
        "Azure Functions integrates with Application Insights automatically. Track invocations, duration, failures. Custom telemetry for business metrics. Durable Functions have built-in orchestration tracking. Health checks via HTTP trigger endpoint. Monitor consumption, execution units, scaling. Alerts for function failures, high duration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Functions Monitoring
using Microsoft.ApplicationInsights;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

public class OrderFunctions
{
    private readonly TelemetryClient _telemetry;
    private readonly ILogger<OrderFunctions> _logger;
    
    public OrderFunctions(TelemetryClient telemetry, ILogger<OrderFunctions> logger)
    {
        _telemetry = telemetry;
        _logger = logger;
    }
    
    [Function("ProcessOrder")]
    public async Task ProcessOrder(
        [ServiceBusTrigger("orders", Connection = "ServiceBusConnection")] Order order)
    {
        using var operation = _telemetry.StartOperation<RequestTelemetry>("ProcessOrder");
        operation.Telemetry.Properties["OrderId"] = order.Id;
        
        var stopwatch = Stopwatch.StartNew();
        
        try
        {
            _logger.LogInformation("Processing order {OrderId}", order.Id);
            
            await ValidateOrder(order);
            await ProcessPayment(order);
            await UpdateInventory(order);
            
            stopwatch.Stop();
            
            // Track custom metrics
            _telemetry.TrackMetric("OrderProcessingTime", stopwatch.ElapsedMilliseconds);
            _telemetry.TrackMetric("OrderValue", order.Total);
            
            _telemetry.TrackEvent("OrderCompleted", new Dictionary<string, string>
            {
                { "OrderId", order.Id },
                { "ProcessingTimeMs", stopwatch.ElapsedMilliseconds.ToString() }
            });
            
            operation.Telemetry.Success = true;
        }
        catch (Exception ex)
        {
            operation.Telemetry.Success = false;
            _telemetry.TrackException(ex);
            throw;
        }
    }
    
    // Health Check Endpoint
    [Function("HealthCheck")]
    public async Task<HttpResponseData> HealthCheck(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "health")] 
        HttpRequestData req)
    {
        var response = req.CreateResponse();
        
        var health = new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Checks = new[]
            {
                new { Name = "Database", Status = await CheckDatabase() },
                new { Name = "ServiceBus", Status = await CheckServiceBus() },
                new { Name = "Storage", Status = await CheckStorage() }
            }
        };
        
        var allHealthy = health.Checks.All(c => c.Status == "Healthy");
        response.StatusCode = allHealthy ? HttpStatusCode.OK : HttpStatusCode.ServiceUnavailable;
        
        await response.WriteAsJsonAsync(health);
        return response;
    }
}

// KQL Queries for Function Monitoring
Console.WriteLine(@"
// Function invocation failures
requests
| where cloud_RoleName contains 'func'
| where success == false
| summarize FailureCount = count() by name, resultCode
| order by FailureCount desc

// Function duration percentiles
requests
| where cloud_RoleName contains 'func'
| summarize 
    p50 = percentile(duration, 50),
    p95 = percentile(duration, 95),
    p99 = percentile(duration, 99)
    by name
| order by p99 desc

// Function scaling (concurrent executions)
requests
| where cloud_RoleName contains 'func'
| summarize ConcurrentExecutions = dcount(operation_Id) by bin(timestamp, 1m)
| render timechart
");`,
        },
      ],
    },
  ],
};
