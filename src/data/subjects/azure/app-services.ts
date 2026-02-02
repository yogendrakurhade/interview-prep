import type { Topic } from "../../../types";

export const azureAppServicesTopic: Topic = {
  id: "azure-app-services",
  name: "App Services",
  questions: [
    {
      id: "q1",
      question: "What is Azure App Service and what types of applications can you host?",
      answer:
        "Azure App Service is a fully managed platform for building and hosting web apps, mobile backends, and RESTful APIs. Types: Web Apps (.NET, Node, Python, Java, PHP), Mobile Apps, API Apps, Function Apps. Provides auto-scaling, built-in CI/CD, SSL/TLS, monitoring. Pricing tiers: Free, Shared, Basic, Standard, Premium, Isolated.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure App Service - Deployment from Program.cs
using Microsoft.AspNetCore.Builder;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var builder = WebApplication.CreateBuilder(args);

// App Service environment detection
var isAppService = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID"));

if (isAppService)
{
    Console.WriteLine("Running in Azure App Service");
    
    // Use Key Vault for secrets in production
    var keyVaultUrl = new Uri(builder.Configuration["KeyVault:Url"]);
    builder.Configuration.AddAzureKeyVault(
        keyVaultUrl,
        new DefaultAzureCredential()
    );
}

builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();
app.UseRouting();
app.MapControllers();

await app.RunAsync();

// App Service Tiers Comparison
Console.WriteLine("App Service Pricing Tiers:");
Console.WriteLine("Tier         Auto-scale  SSL  Slots  Cost");
Console.WriteLine("Free         No          No   No     $0");
Console.WriteLine("Shared       No          No   No     ~$10");
Console.WriteLine("Basic        No          Yes  No     ~$55");
Console.WriteLine("Standard     Yes         Yes  Yes    ~$100");
Console.WriteLine("Premium      Yes         Yes  Yes    ~$300");
Console.WriteLine("Isolated     Yes         Yes  Yes    ~$600+");

// Health Check - App Service expects 200 response
app.MapGet("/health", () => Results.Ok("Healthy"));
app.MapGet("/health/live", () => Results.Ok("Live"));
app.MapGet("/health/ready", () => Results.Ok("Ready"));

// App Service runs your code with these benefits:
// - Auto-scaling based on metrics
// - Built-in authentication (Easy Auth)
// - Deployment slots (staging)
// - Traffic routing
// - Monitoring & diagnostics
// - SSL/TLS certificates
// - Custom domains
// - Backups and restore`,
        },
      ],
    },
    {
      id: "q2",
      question: "What are deployment slots in Azure App Service and how do you use them?",
      answer:
        "Deployment slots are separate instances of your app for staging/testing before production. Each slot has unique URL. Common setup: Production + Staging. Test in staging slot, then swap to production (zero downtime). Slots share settings and have separate DNS. Perfect for testing updates, A/B testing, canary releases.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Deployment Slots Strategy
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Get slot name
var slotName = Environment.GetEnvironmentVariable("WEBSITE_DEPLOYMENT_ID") ?? "Production";

// Slot-specific logging
Console.WriteLine($"Deployed to slot: {slotName}");

// Return slot info in response
app.MapGet("/api/info", () => new
{
    Slot = slotName,
    Environment = builder.Environment.EnvironmentName,
    Version = "1.0.0",
    Timestamp = DateTime.UtcNow
});

// Warm up logic for slot swap
app.MapPost("/api/warmup", async (HttpContext context) =>
{
    Console.WriteLine("Warmup request received");
    
    // Initialize resources
    await Task.Delay(1000); // Simulate init
    
    return Results.Ok("Warmed up");
});

// Slot swap workflow:
// 1. Create Staging slot (copy of Production)
// 2. Deploy new version to Staging
// 3. Test in Staging at: myapp-staging.azurewebsites.net
// 4. Run warmup on Staging slot
// 5. Swap Staging ↔ Production (instant!)
// 6. If issues, swap back (instant rollback!)

// Slot swap is instant with zero downtime
// Before swap:
//   Production: v1.0 (myapp.azurewebsites.net)
//   Staging: v2.0 (myapp-staging.azurewebsites.net)

// After swap:
//   Production: v2.0 (myapp.azurewebsites.net)
//   Staging: v1.0 (myapp-staging.azurewebsites.net)

// Sticky slots configuration
var stickySettings = new Dictionary<string, bool>
{
    { "ASPNETCORE_ENVIRONMENT", true }, // Don't swap
    { "ConnectionStrings:Default", true }, // Don't swap
    { "API_KEY", false } // Do swap
};

Console.WriteLine("Sticky Settings (don't swap during slot swap):");
foreach (var setting in stickySettings.Where(x => x.Value))
{
    Console.WriteLine($"  - {setting.Key}");
}

// Azure CLI commands for slots:
// az webapp deployment slot create --resource-group myRG --name myApp --slot staging
// az webapp deployment slot swap --resource-group myRG --name myApp --slot staging
// az webapp deployment slot list --resource-group myRG --name myApp

// Benefits of slots:
Console.WriteLine("Deployment Slots Benefits:");
Console.WriteLine("✓ Zero-downtime deployments");
Console.WriteLine("✓ Easy rollback");
Console.WriteLine("✓ Test before production");
Console.WriteLine("✓ A/B testing");
Console.WriteLine("✓ Warmup before swap");
Console.WriteLine("✓ Canary deployments");
Console.WriteLine("✓ Blue-Green deployments");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Azure App Service Plan and how does scaling work?",
      answer:
        "App Service Plan defines resources for one or more apps. Contains: compute size (CPU, RAM), instance count, pricing tier. Auto-scale rules: scale out (add instances) or scale up (bigger VM). Metrics: CPU %, memory, HTTP queue, disk I/O. Scale set: min/max instances, rules when to scale.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Auto-Scaling in Azure App Service

// Azure provides these scaling options:
// 1. Scale UP (Vertical) - Bigger machine
// 2. Scale OUT (Horizontal) - More instances

Console.WriteLine("Azure App Service Scaling:");
Console.WriteLine("Scale UP (Vertical):");
Console.WriteLine("  Free → Shared → Basic → Standard → Premium → Isolated");
Console.WriteLine("  Same number of instances, but bigger resources");
Console.WriteLine("");
Console.WriteLine("Scale OUT (Horizontal):");
Console.WriteLine("  Add more instances of same size");
Console.WriteLine("  Requires Standard tier or higher");

// Auto-Scale Rules Example
/*
Rule 1: Scale OUT when CPU > 70% for 5 minutes
  - Add 1 instance
  - Max instances: 10

Rule 2: Scale IN when CPU < 30% for 10 minutes
  - Remove 1 instance
  - Min instances: 1
*/

// Application code benefits from scaling:
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Get instance ID (each instance has unique ID)
var instanceId = Environment.MachineName;

app.MapGet("/api/instance", () => new
{
    InstanceId = instanceId,
    Cores = Environment.ProcessorCount,
    WorkingMemory = GC.GetTotalMemory(false) / 1024 / 1024 // MB
});

// Multiple instances require:
app.UseSession(); // Distributed session (use cache)

// Connect to Distributed Cache (Redis)
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration.GetConnectionString("Redis");
});

// Store session in Redis (not in-memory)
app.UseSession();

// Each instance can handle requests independently
// Load balancer distributes requests across instances

app.MapPost("/api/process", async (HttpContext context) =>
{
    var sessionId = context.Session.Id;
    context.Session.SetString("ProcessedBy", Environment.MachineName);
    
    return Results.Ok(new
    {
        Message = "Processing...",
        SessionId = sessionId,
        Instance = Environment.MachineName
    });
});

// Sticky Sessions (Session Affinity)
// Default: Requests from same client go to same instance (via ARR cookie)
// This is usually NOT recommended for scalability
// Better: Use distributed cache (Redis, Cosmos DB)

Console.WriteLine("Scaling Best Practices:");
Console.WriteLine("1. Use distributed session/cache (Redis)");
Console.WriteLine("2. Make apps stateless");
Console.WriteLine("3. Store state in database or cache");
Console.WriteLine("4. Monitor scale metrics");
Console.WriteLine("5. Test with multiple instances");
Console.WriteLine("6. Set up auto-scale rules");
Console.WriteLine("7. Configure health checks");
Console.WriteLine("8. Implement graceful shutdown");

// Health checks for auto-scaling
app.MapGet("/health", () =>
{
    var healthy = new
    {
        Status = "Healthy",
        Uptime = Environment.TickCount64,
        Connections = GC.GetTotalMemory(false)
    };
    
    return Results.Ok(healthy);
});

// Common scaling patterns
Console.WriteLine("Scaling Patterns:");
Console.WriteLine("1. Predictable: Scale on schedule");
Console.WriteLine("2. Metric-based: Scale on CPU/Memory");
Console.WriteLine("3. Queue-based: Scale on queue length");
Console.WriteLine("4. Custom: Scale on application metrics");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you configure continuous deployment/continuous integration (CI/CD) with Azure App Service?",
      answer:
        "Azure App Service integrates with GitHub, Azure Repos, Bitbucket, OneDrive. Supported build providers: Azure Pipelines, GitHub Actions. On code push: build → test → deploy automatically. For advanced: use Azure Pipelines with custom steps. Can deploy Docker containers automatically on build.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure App Service - CI/CD Configuration

// 1. GitHub Actions Workflow
/*
.github/workflows/azure-deploy.yml

name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0'
      
      - name: Build
        run: dotnet build --configuration Release
      
      - name: Test
        run: dotnet test
      
      - name: Publish
        run: dotnet publish -c Release -o ./publish
      
      - name: Deploy to Azure App Service
        uses: azure/webapps-deploy@v2
        with:
          app-name: myapp
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: ./publish
*/

// 2. Azure Pipelines (azure-pipelines.yml)
/*
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: UseDotNet@2
    inputs:
      version: '8.0'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'build'
      arguments: '--configuration Release'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'test'
  
  - task: DotNetCoreCLI@2
    inputs:
      command: 'publish'
      publishWebProjects: true
      arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)'
  
  - task: PublishBuildArtifacts@1
    inputs:
      PathtoPublish: '$(Build.ArtifactStagingDirectory)'
  
  - task: AzureWebApp@1
    inputs:
      azureSubscription: 'Azure Service Connection'
      appType: 'webAppLinux'
      appName: 'myapp'
      package: '$(Build.ArtifactStagingDirectory)'
*/

// 3. Local deployment using Azure CLI
Console.WriteLine("Azure CLI Deployment Commands:");
Console.WriteLine("# Build the application");
Console.WriteLine("dotnet build --configuration Release");
Console.WriteLine("");
Console.WriteLine("# Publish to folder");
Console.WriteLine("dotnet publish -c Release -o ./publish");
Console.WriteLine("");
Console.WriteLine("# Deploy to App Service");
Console.WriteLine("az webapp deployment source config-zip \\");
Console.WriteLine("  --resource-group myResourceGroup \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --src publish.zip");
Console.WriteLine("");
Console.WriteLine("# Or deploy from folder directly");
Console.WriteLine("az webapp up --name myapp --resource-group myRG");

// 4. Continuous deployment settings
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Deployment info endpoint
app.MapGet("/api/deployment-info", () =>
{
    var info = new
    {
        DeploymentTime = System.IO.File.GetLastWriteTimeUtc(typeof(Program).Assembly.Location),
        Version = typeof(Program).Assembly.GetName().Version.ToString(),
        EnvironmentName = builder.Environment.EnvironmentName,
        ContentRootPath = builder.Environment.ContentRootPath
    };
    
    return Results.Ok(info);
});

// Health check for CI/CD
app.MapGet("/health/startup", () => Results.Ok("Ready"));

Console.WriteLine("CI/CD Pipeline Stages:");
Console.WriteLine("1. Trigger: Code push to main branch");
Console.WriteLine("2. Build: Compile code");
Console.WriteLine("3. Test: Run unit tests");
Console.WriteLine("4. Package: Create deployment package");
Console.WriteLine("5. Deploy: Deploy to App Service");
Console.WriteLine("6. Verify: Health checks pass");

// Pre-deployment checks
Console.WriteLine("Pre-Deployment Checks:");
Console.WriteLine("✓ All tests pass");
Console.WriteLine("✓ Code quality gates pass");
Console.WriteLine("✓ Build succeeds");
Console.WriteLine("✓ Deployment slot created");
Console.WriteLine("✓ Health checks configured");

// Post-deployment verification
Console.WriteLine("Post-Deployment Verification:");
Console.WriteLine("✓ Application starts");
Console.WriteLine("✓ Database migrations succeed");
Console.WriteLine("✓ Health endpoint responds");
Console.WriteLine("✓ Slot swap successful");
Console.WriteLine("✓ Monitoring shows no errors");`,
        },
      ],
    },
  ],
};
