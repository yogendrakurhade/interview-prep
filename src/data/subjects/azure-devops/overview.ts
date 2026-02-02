import type { Topic } from "../../../types";

export const azureDevOpsOverviewTopic: Topic = {
  id: "azure-devops-overview",
  name: "Overview & Boards",
  questions: [
    {
      id: "q1",
      question: "What is Azure DevOps and what are its main components?",
      answer:
        "Azure DevOps is Microsoft's comprehensive DevOps platform providing development tools for planning, developing, testing, and delivering software. Main components: Azure Boards (work tracking), Azure Repos (source control), Azure Pipelines (CI/CD), Azure Test Plans (testing), Azure Artifacts (package management). Available as cloud service or on-premises (Azure DevOps Server).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure DevOps Services Overview

Console.WriteLine("Azure DevOps - Main Components:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Component        │ Purpose                              │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Azure Boards     │ Agile planning & work tracking       │");
Console.WriteLine("│ Azure Repos      │ Git repositories & version control   │");
Console.WriteLine("│ Azure Pipelines  │ CI/CD automation                     │");
Console.WriteLine("│ Azure Test Plans │ Manual & automated testing           │");
Console.WriteLine("│ Azure Artifacts  │ Package management (NuGet, npm)      │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

Console.WriteLine("Deployment Options:");
Console.WriteLine("• Azure DevOps Services (Cloud) - dev.azure.com");
Console.WriteLine("• Azure DevOps Server (On-premises)");

Console.WriteLine("Key Features:");
Console.WriteLine("• Integration with Visual Studio, VS Code, GitHub");
Console.WriteLine("• REST APIs for automation");
Console.WriteLine("• Extensions marketplace");
Console.WriteLine("• Role-based access control");
Console.WriteLine("• Audit logging and compliance");

// Organization Structure
Console.WriteLine("Hierarchy:");
Console.WriteLine("Organization");
Console.WriteLine("  └── Project");
Console.WriteLine("        ├── Repos");
Console.WriteLine("        ├── Boards");
Console.WriteLine("        ├── Pipelines");
Console.WriteLine("        ├── Test Plans");
Console.WriteLine("        └── Artifacts");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Azure Boards and how do you use it for Agile project management?",
      answer:
        "Azure Boards provides Agile planning tools: Work Items (tasks, bugs, user stories, features, epics), Boards (Kanban), Backlogs, Sprints, Queries, Dashboards. Supports Scrum, Kanban, CMMI processes. Work items link to code commits, PRs, builds. Customizable with custom fields, states, and workflows.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Boards Work Item Types

Console.WriteLine("Work Item Hierarchy (Agile Process):");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Epic                                                    │");
Console.WriteLine("│   └── Feature                                           │");
Console.WriteLine("│         └── User Story / Product Backlog Item           │");
Console.WriteLine("│               └── Task                                  │");
Console.WriteLine("│               └── Bug                                   │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

Console.WriteLine("Process Templates:");
Console.WriteLine("• Agile - User Stories, Features, Epics");
Console.WriteLine("• Scrum - Product Backlog Items, Sprints");
Console.WriteLine("• CMMI - Requirements, Change Requests");
Console.WriteLine("• Basic - Issues, Epics (simplified)");

// Work Item States (Agile)
Console.WriteLine("User Story States:");
Console.WriteLine("New → Active → Resolved → Closed");

Console.WriteLine("Bug States:");
Console.WriteLine("New → Active → Resolved → Closed");

// Boards Features
Console.WriteLine("Kanban Board Features:");
Console.WriteLine("• Columns represent workflow states");
Console.WriteLine("• WIP (Work In Progress) limits");
Console.WriteLine("• Swimlanes for categorization");
Console.WriteLine("• Card customization");
Console.WriteLine("• Cumulative flow diagrams");

// Sprint Planning
Console.WriteLine("Sprint Features:");
Console.WriteLine("• Sprint backlog");
Console.WriteLine("• Capacity planning");
Console.WriteLine("• Burndown charts");
Console.WriteLine("• Velocity tracking");
Console.WriteLine("• Sprint retrospectives");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you use Azure DevOps REST API for automation?",
      answer:
        "Azure DevOps provides comprehensive REST APIs for automating tasks. Authenticate using PAT (Personal Access Token), OAuth, or Service Principal. Common operations: create work items, trigger pipelines, manage repos, query builds. Use Azure DevOps CLI or REST calls directly.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure DevOps REST API Examples
using System.Net.Http.Headers;
using System.Text.Json;

public class AzureDevOpsClient
{
    private readonly HttpClient _httpClient;
    private readonly string _organization;
    private readonly string _project;
    
    public AzureDevOpsClient(string organization, string project, string pat)
    {
        _organization = organization;
        _project = project;
        _httpClient = new HttpClient();
        
        // Base URL for Azure DevOps Services
        _httpClient.BaseAddress = new Uri($"https://dev.azure.com/{organization}/");
        
        // Authentication with Personal Access Token (PAT)
        var credentials = Convert.ToBase64String(
            System.Text.Encoding.ASCII.GetBytes($":{pat}"));
        _httpClient.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Basic", credentials);
    }
    
    // Create Work Item
    public async Task<JsonDocument> CreateWorkItemAsync(
        string workItemType, 
        string title, 
        string description)
    {
        var patchDocument = new[]
        {
            new { op = "add", path = "/fields/System.Title", value = title },
            new { op = "add", path = "/fields/System.Description", value = description }
        };
        
        var content = new StringContent(
            JsonSerializer.Serialize(patchDocument),
            System.Text.Encoding.UTF8,
            "application/json-patch+json");
        
        var response = await _httpClient.PostAsync(
            $"{_project}/_apis/wit/workitems/\${workItemType}?api-version=7.0",
            content);
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonDocument.Parse(json);
    }
    
    // Query Work Items
    public async Task<JsonDocument> QueryWorkItemsAsync(string wiql)
    {
        var query = new { query = wiql };
        var content = new StringContent(
            JsonSerializer.Serialize(query),
            System.Text.Encoding.UTF8,
            "application/json");
        
        var response = await _httpClient.PostAsync(
            $"{_project}/_apis/wit/wiql?api-version=7.0",
            content);
        
        return JsonDocument.Parse(await response.Content.ReadAsStringAsync());
    }
    
    // Trigger Pipeline
    public async Task<JsonDocument> TriggerPipelineAsync(int pipelineId, string branch)
    {
        var body = new
        {
            resources = new
            {
                repositories = new
                {
                    self = new { refName = $"refs/heads/{branch}" }
                }
            }
        };
        
        var content = new StringContent(
            JsonSerializer.Serialize(body),
            System.Text.Encoding.UTF8,
            "application/json");
        
        var response = await _httpClient.PostAsync(
            $"{_project}/_apis/pipelines/{pipelineId}/runs?api-version=7.0",
            content);
        
        return JsonDocument.Parse(await response.Content.ReadAsStringAsync());
    }
}

// Usage
var client = new AzureDevOpsClient("myorg", "myproject", "PAT_TOKEN");
var workItem = await client.CreateWorkItemAsync("Task", "Implement feature", "Details...");

// Azure CLI examples
Console.WriteLine(@"
# Azure DevOps CLI
az devops configure --defaults organization=https://dev.azure.com/myorg project=myproject

# Create work item
az boards work-item create --type 'User Story' --title 'New feature'

# Query work items
az boards query --wiql ""SELECT [System.Id] FROM WorkItems WHERE [System.State] = 'Active'""

# Trigger pipeline
az pipelines run --name 'MyPipeline' --branch main
");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you configure Azure DevOps dashboards and reporting?",
      answer:
        "Dashboards display widgets for project visibility. Built-in widgets: burndown charts, velocity, build status, PR status, work item queries. Analytics service provides advanced reporting with OData queries. Power BI integration for custom reports. Create multiple dashboards for different audiences (team, stakeholders).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure DevOps Dashboards & Analytics

Console.WriteLine("Dashboard Widget Categories:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Category         │ Widgets                              │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Boards           │ Burndown, Velocity, CFD, Sprint      │");
Console.WriteLine("│ Repos            │ Code changes, PR stats               │");
Console.WriteLine("│ Pipelines        │ Build history, Deploy status         │");
Console.WriteLine("│ Test Plans       │ Test results, Coverage trends        │");
Console.WriteLine("│ General          │ Markdown, Query results, Charts      │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Common Dashboard Widgets
Console.WriteLine("Essential Widgets:");
Console.WriteLine("• Sprint Burndown - Track sprint progress");
Console.WriteLine("• Velocity - Team capacity over sprints");
Console.WriteLine("• Cumulative Flow - Work item flow visualization");
Console.WriteLine("• Build History - Recent build status");
Console.WriteLine("• Release Pipeline Overview - Deployment status");
Console.WriteLine("• Test Results Trend - Test pass/fail over time");
Console.WriteLine("• Query Results - Custom work item queries");

// Analytics OData Queries
Console.WriteLine(@"
// OData Analytics Query Example
// Get work items completed per sprint

GET https://analytics.dev.azure.com/{org}/{project}/_odata/v3.0/WorkItems?
    $filter=WorkItemType eq 'User Story' and State eq 'Closed'
    &$select=WorkItemId,Title,ClosedDate,IterationPath
    &$orderby=ClosedDate desc
");

// Power BI Integration
Console.WriteLine("Power BI Integration Steps:");
Console.WriteLine("1. Install Azure DevOps connector in Power BI");
Console.WriteLine("2. Connect using Organization URL");
Console.WriteLine("3. Select data tables (WorkItems, Builds, etc.)");
Console.WriteLine("4. Create custom visualizations");
Console.WriteLine("5. Schedule data refresh");

// Work Item Queries (WIQL)
Console.WriteLine(@"
-- WIQL Query Examples

-- Active bugs assigned to me
SELECT [System.Id], [System.Title], [System.State]
FROM WorkItems
WHERE [System.WorkItemType] = 'Bug'
  AND [System.State] = 'Active'
  AND [System.AssignedTo] = @Me

-- Items modified in last 7 days
SELECT [System.Id], [System.Title], [System.ChangedDate]
FROM WorkItems
WHERE [System.ChangedDate] >= @Today - 7
ORDER BY [System.ChangedDate] DESC

-- Sprint backlog
SELECT [System.Id], [System.Title], [System.State]
FROM WorkItems
WHERE [System.IterationPath] = @CurrentIteration
  AND [System.WorkItemType] IN ('User Story', 'Bug', 'Task')
");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you manage permissions and security in Azure DevOps?",
      answer:
        "Azure DevOps uses role-based access control (RBAC). Levels: Organization, Project, Object (repo, pipeline). Built-in groups: Project Administrators, Contributors, Readers. Security namespaces control granular permissions. Service connections for external service access. Audit logs track all actions.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure DevOps Security & Permissions

Console.WriteLine("Permission Levels:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Level          │ Scope                                 │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Organization   │ All projects, billing, policies       │");
Console.WriteLine("│ Project        │ Repos, pipelines, boards in project   │");
Console.WriteLine("│ Object         │ Specific repo, pipeline, area path    │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Built-in Security Groups
Console.WriteLine("Built-in Groups (Project Level):");
Console.WriteLine("• Project Administrators - Full control");
Console.WriteLine("• Contributors - Add/edit work items, code, pipelines");
Console.WriteLine("• Readers - View only");
Console.WriteLine("• Build Administrators - Manage build pipelines");
Console.WriteLine("• Release Administrators - Manage release pipelines");

// Organization-level Groups
Console.WriteLine("Organization Groups:");
Console.WriteLine("• Project Collection Administrators - Full org control");
Console.WriteLine("• Project Collection Build Administrators");
Console.WriteLine("• Project Collection Valid Users");

// Branch Policies
Console.WriteLine(@"
Branch Policies for main branch:
┌─────────────────────────────────────────────────────────┐
│ Policy                        │ Setting                 │
├─────────────────────────────────────────────────────────┤
│ Require minimum reviewers     │ 2 reviewers             │
│ Check for linked work items   │ Required                │
│ Check for comment resolution  │ Required                │
│ Build validation              │ Required (CI pipeline)  │
│ Require merge strategy        │ Squash merge            │
└─────────────────────────────────────────────────────────┘
");

// Service Connections
Console.WriteLine("Service Connections:");
Console.WriteLine("• Azure Resource Manager - Deploy to Azure");
Console.WriteLine("• Docker Registry - Push/pull images");
Console.WriteLine("• Kubernetes - Deploy to AKS");
Console.WriteLine("• GitHub - Access GitHub repos");
Console.WriteLine("• Generic - Custom service with URL/credentials");

// CLI Commands for Security
Console.WriteLine(@"
# List project groups
az devops security group list --project MyProject

# Add user to group
az devops security group membership add \
  --group-id <group-id> \
  --member-id <user-id>

# Set repository permission
az repos policy approver-count create \
  --branch main \
  --repository-id <repo-id> \
  --minimum-approver-count 2 \
  --creator-vote-counts false

# View audit logs
az devops audit-log query --start-time 2024-01-01
");

// Conditional Access
Console.WriteLine("Security Best Practices:");
Console.WriteLine("• Enable Azure AD Conditional Access");
Console.WriteLine("• Require MFA for all users");
Console.WriteLine("• Use service principals, not PATs, for automation");
Console.WriteLine("• Rotate secrets regularly");
Console.WriteLine("• Review audit logs periodically");
Console.WriteLine("• Apply principle of least privilege");`,
        },
      ],
    },
  ],
};
