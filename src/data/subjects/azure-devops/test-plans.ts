import type { Topic } from "../../../types";

export const azureTestPlansTopic: Topic = {
  id: "azure-test-plans",
  name: "Azure Test Plans",
  questions: [
    {
      id: "q1",
      question: "What is Azure Test Plans and what testing capabilities does it provide?",
      answer:
        "Azure Test Plans provides manual and exploratory testing tools. Features: test cases, test suites, test plans, exploratory testing, test runs, test configurations. Links tests to work items and builds. Supports web, desktop, mobile testing. Captures screenshots, video, system info. Integrates with Azure Pipelines for automated tests.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Test Plans Overview

Console.WriteLine("Azure Test Plans Features:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Feature              │ Description                      │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Test Plans           │ Organize testing activities      │");
Console.WriteLine("│ Test Suites          │ Group related test cases         │");
Console.WriteLine("│ Test Cases           │ Step-by-step test instructions   │");
Console.WriteLine("│ Exploratory Testing  │ Ad-hoc testing with capture      │");
Console.WriteLine("│ Test Configurations  │ Different environments/browsers  │");
Console.WriteLine("│ Test Runs            │ Execute and track test results   │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Test Plan Hierarchy
Console.WriteLine("Test Hierarchy:");
Console.WriteLine("Test Plan");
Console.WriteLine("  └── Test Suite (Static/Requirement/Query-based)");
Console.WriteLine("        └── Test Case");
Console.WriteLine("              └── Test Steps");
Console.WriteLine("                    └── Expected Results");

// Test Suite Types
Console.WriteLine("Test Suite Types:");
Console.WriteLine("• Static Suite - Manually add test cases");
Console.WriteLine("• Requirement-based Suite - Auto-linked to user stories");
Console.WriteLine("• Query-based Suite - Dynamic based on work item query");

// Test Configurations
Console.WriteLine("Test Configurations:");
Console.WriteLine("• Browser: Chrome, Firefox, Edge, Safari");
Console.WriteLine("• OS: Windows, macOS, Linux, iOS, Android");
Console.WriteLine("• Environment: Dev, Staging, Production");
Console.WriteLine("• Locale: en-US, de-DE, ja-JP");

// Licensing
Console.WriteLine("Licensing:");
Console.WriteLine("• Basic + Test Plans license required");
Console.WriteLine("• Visual Studio Enterprise subscribers included");
Console.WriteLine("• Stakeholder access for feedback only");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you create and manage test cases in Azure Test Plans?",
      answer:
        "Test cases are work items with test steps. Each step has action and expected result. Steps can include parameters for data-driven testing. Shared steps reuse common sequences. Link test cases to user stories for traceability. Use Test Runner (web or desktop) to execute.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Creating and Managing Test Cases

Console.WriteLine("Test Case Components:");
Console.WriteLine("• Title - Descriptive name");
Console.WriteLine("• Area Path - Organizational hierarchy");
Console.WriteLine("• Iteration - Sprint association");
Console.WriteLine("• State - Design, Ready, Closed");
Console.WriteLine("• Priority - 1 (highest) to 4 (lowest)");
Console.WriteLine("• Steps - Actions and expected results");
Console.WriteLine("• Parameters - Data-driven values");
Console.WriteLine("• Links - Related work items, requirements");

// Test Case Example
Console.WriteLine(@"
Test Case: User Login
Priority: 1
State: Ready

Steps:
┌─────────────────────────────────────────────────────────────────┐
│ # │ Action                         │ Expected Result            │
├─────────────────────────────────────────────────────────────────┤
│ 1 │ Navigate to login page         │ Login form is displayed    │
│ 2 │ Enter username: @Username      │ Username field populated   │
│ 3 │ Enter password: @Password      │ Password field masked      │
│ 4 │ Click Login button             │ User is logged in          │
│ 5 │ Verify dashboard displayed     │ Welcome message shows name │
└─────────────────────────────────────────────────────────────────┘

Parameters:
┌───────────────────────────────────────────┐
│ @Username      │ @Password                │
├───────────────────────────────────────────┤
│ user@test.com  │ ValidPass123             │
│ admin@test.com │ AdminPass456             │
│ invalid@       │ WrongPass                │
└───────────────────────────────────────────┘
");

// Shared Steps
Console.WriteLine(@"
Shared Steps: Login Process
Used by multiple test cases

Steps:
1. Navigate to https://myapp.com/login
2. Enter username in email field
3. Enter password in password field
4. Click 'Sign In' button
5. Wait for dashboard to load

Usage in Test Case:
Step 1: [Shared Steps] Login Process
Step 2: Verify user profile shows correct name
Step 3: Navigate to Settings
");

// CLI for Test Cases
Console.WriteLine(@"
# Create test case
az boards work-item create \
  --type 'Test Case' \
  --title 'Verify user can login' \
  --area 'MyProject\\QA' \
  --iteration 'MyProject\\Sprint 1'

# Add test steps (via REST API)
PATCH https://dev.azure.com/{org}/{project}/_apis/wit/workitems/{id}?api-version=7.0
Content-Type: application/json-patch+json

[
  {
    ""op"": ""add"",
    ""path"": ""/fields/Microsoft.VSTS.TCM.Steps"",
    ""value"": ""<steps>
      <step id='1' type='ActionStep'>
        <parameterizedString>Navigate to login page</parameterizedString>
        <parameterizedString>Login form displayed</parameterizedString>
      </step>
    </steps>""
  }
]
");

// Best Practices
Console.WriteLine("Test Case Best Practices:");
Console.WriteLine("• Write clear, concise steps");
Console.WriteLine("• Include expected results for each step");
Console.WriteLine("• Use parameters for data-driven tests");
Console.WriteLine("• Create shared steps for common sequences");
Console.WriteLine("• Link to user stories/requirements");
Console.WriteLine("• Keep test cases independent");
Console.WriteLine("• Review and update regularly");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you perform exploratory testing with Azure Test Plans?",
      answer:
        "Exploratory testing for ad-hoc, unscripted testing. Use Test & Feedback browser extension. Captures screenshots, screen recordings, system info automatically. Create bugs/tasks directly from findings. Session-based testing with goals. Link findings to work items. Great for finding edge cases and usability issues.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Exploratory Testing with Azure Test Plans

Console.WriteLine("Exploratory Testing Features:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Feature                │ Description                    │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Test & Feedback ext.   │ Browser extension for Chrome   │");
Console.WriteLine("│ Screenshot capture     │ Annotate and highlight         │");
Console.WriteLine("│ Screen recording       │ Record video of session        │");
Console.WriteLine("│ Bug creation           │ Create bugs with evidence      │");
Console.WriteLine("│ Session timeline       │ Track all actions taken        │");
Console.WriteLine("│ System info capture    │ Browser, OS, resolution        │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Exploratory Testing Workflow
Console.WriteLine("Exploratory Testing Workflow:");
Console.WriteLine("1. Install 'Test & Feedback' browser extension");
Console.WriteLine("2. Connect to Azure DevOps organization");
Console.WriteLine("3. Start exploratory session");
Console.WriteLine("4. Explore the application");
Console.WriteLine("5. Capture screenshots/recordings for issues");
Console.WriteLine("6. Create bugs with captured evidence");
Console.WriteLine("7. End session and review findings");

// Session-Based Testing
Console.WriteLine(@"
Session-Based Test Management:

Session Charter:
┌─────────────────────────────────────────────────────────────────┐
│ Mission: Test the checkout process for edge cases               │
│ Area: Shopping Cart → Payment → Confirmation                    │
│ Duration: 60 minutes                                            │
│ Tester: John Smith                                              │
│ Build: 2024.1.15                                                │
└─────────────────────────────────────────────────────────────────┘

Session Notes:
• Found issue with empty cart proceeding to payment
• Discount codes not validated server-side
• No confirmation email for guest checkout

Findings:
• 3 bugs created
• 2 improvement suggestions
• 1 test case added for regression
");

// Bug Created from Exploratory Testing
Console.WriteLine(@"
Bug: Empty cart allows checkout
Created from exploratory session

Repro Steps:
1. Navigate to shopping cart (auto-captured)
2. Remove all items
3. Click 'Proceed to Checkout'
4. Payment page loads (should show error)

Attachments (auto-captured):
• Screenshot: empty-cart-checkout.png
• Screen recording: session-recording.webm
• System Info:
  - Browser: Chrome 120.0.6099.130
  - OS: Windows 11
  - Resolution: 1920x1080
  - URL: https://myapp.com/checkout
");

// Test & Feedback Extension Features
Console.WriteLine("Test & Feedback Capabilities:");
Console.WriteLine("• Connected mode - Link to Azure DevOps");
Console.WriteLine("• Standalone mode - Basic capture without Azure");
Console.WriteLine("• Annotate screenshots with drawing tools");
Console.WriteLine("• Add notes to timeline events");
Console.WriteLine("• Create work items: Bug, Task, Test Case");
Console.WriteLine("• Attach files and URLs");
Console.WriteLine("• Capture page load times");

// Metrics from Exploratory Testing
Console.WriteLine("Session Metrics:");
Console.WriteLine("• Session duration");
Console.WriteLine("• Bugs found per session");
Console.WriteLine("• Areas explored");
Console.WriteLine("• Screenshots/recordings created");
Console.WriteLine("• Test cases generated");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you integrate automated tests with Azure Test Plans?",
      answer:
        "Link automated tests to test cases. Run from pipelines and report results to Test Plans. Use VSTest task or dotnet test. Test case automation status: Not Automated, Planned, Automated. Test runs show both manual and automated results. Use Test Impact Analysis for selective test runs.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Automated Tests Integration

Console.WriteLine("Automation Status in Test Cases:");
Console.WriteLine("• Not Automated - Manual test only");
Console.WriteLine("• Planned - Will be automated");
Console.WriteLine("• Automated - Linked to automated test method");

// Associate Automated Test with Test Case
Console.WriteLine(@"
// 1. Use TestCase attribute with Azure DevOps test case ID
[TestClass]
public class LoginTests
{
    [TestMethod]
    [TestProperty(""TestCaseId"", ""12345"")]  // Azure DevOps Test Case ID
    public void User_Should_Login_Successfully()
    {
        // Arrange
        var loginPage = new LoginPage(driver);
        
        // Act
        loginPage.Login(""user@test.com"", ""ValidPass123"");
        
        // Assert
        Assert.IsTrue(loginPage.IsLoggedIn());
    }
    
    [TestMethod]
    [TestProperty(""TestCaseId"", ""12346"")]
    [DataRow(""admin@test.com"", ""AdminPass"")]
    [DataRow(""user@test.com"", ""UserPass"")]
    public void User_Login_With_Parameters(string username, string password)
    {
        var loginPage = new LoginPage(driver);
        loginPage.Login(username, password);
        Assert.IsTrue(loginPage.IsLoggedIn());
    }
}
");

// Pipeline Configuration
Console.WriteLine(@"
# azure-pipelines.yml
- task: VSTest@2
  displayName: 'Run Automated Tests'
  inputs:
    testSelector: 'testAssemblies'
    testAssemblyVer2: |
      **\\*Tests.dll
      !**\\obj\\**
    searchFolder: '$(System.DefaultWorkingDirectory)'
    runSettingsFile: 'test.runsettings'
    # Link results to Test Plan
    testPlan: 'Sprint 1 Test Plan'
    testSuite: 'Automated Tests Suite'
    testConfiguration: 'Windows Chrome'
    publishRunAttachments: true
    
# Alternative: dotnet test with test plan publishing
- task: DotNetCoreCLI@2
  displayName: 'Run Tests'
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
    arguments: '--configuration Release --logger trx'

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'VSTest'
    testResultsFiles: '**/*.trx'
    testPlanId: 123
    testSuiteId: 456
    testConfigurationId: 789
");

// Test Run Configuration
Console.WriteLine(@"
Test Configuration Setup:
┌─────────────────────────────────────────────────────────────────┐
│ Configuration Name │ Values                                    │
├─────────────────────────────────────────────────────────────────┤
│ Browser            │ Chrome, Firefox, Edge                     │
│ Operating System   │ Windows 11, macOS Ventura                 │
│ Environment        │ Dev, QA, Staging                          │
└─────────────────────────────────────────────────────────────────┘

Matrix Testing:
Run automated tests against all configurations:
- Chrome + Windows 11 + QA
- Firefox + Windows 11 + QA
- Chrome + macOS + QA
");

// Test Impact Analysis
Console.WriteLine("Test Impact Analysis (TIA):");
Console.WriteLine("• Identifies tests affected by code changes");
Console.WriteLine("• Runs only relevant tests in PR validation");
Console.WriteLine("• Reduces test execution time significantly");
Console.WriteLine("• Requires code coverage data from previous runs");

Console.WriteLine(@"
# Enable TIA in pipeline
- task: VSTest@2
  inputs:
    runOnlyImpactedTests: true
    runAllTestsAfterXBuilds: 5  # Run all every 5 builds
");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you track test progress and generate test reports?",
      answer:
        "Test Plans provides built-in progress tracking. Track by test outcome (Passed, Failed, Blocked, Not Run). Charts show trends over time. Export results to CSV/Excel. Use Test Analytics for insights. Integration with dashboard widgets. Query-based reports for custom views.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Test Progress Tracking and Reporting

Console.WriteLine("Test Outcomes:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Outcome     │ Description                               │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Passed      │ Test executed successfully                │");
Console.WriteLine("│ Failed      │ Test found a defect                       │");
Console.WriteLine("│ Blocked     │ Cannot execute (environment issue)        │");
Console.WriteLine("│ Not Run     │ Not yet executed                          │");
Console.WriteLine("│ Not Applicable │ Test doesn't apply to this build       │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Progress Tracking View
Console.WriteLine(@"
Test Plan Progress: Sprint 1 Testing
┌─────────────────────────────────────────────────────────────────┐
│ Suite               │ Passed │ Failed │ Blocked │ Not Run      │
├─────────────────────────────────────────────────────────────────┤
│ Login Tests         │   8    │   1    │    0    │     1        │
│ Checkout Tests      │   5    │   2    │    1    │     2        │
│ User Profile Tests  │   4    │   0    │    0    │     6        │
│ Admin Tests         │   3    │   1    │    0    │     4        │
├─────────────────────────────────────────────────────────────────┤
│ TOTAL               │  20    │   4    │    1    │    13        │
│ Progress            │ 52%    │ 11%    │   3%    │    34%       │
└─────────────────────────────────────────────────────────────────┘
");

// Test Analytics
Console.WriteLine("Test Analytics Reports:");
Console.WriteLine("• Pass rate trends over time");
Console.WriteLine("• Test failure analysis");
Console.WriteLine("• Flaky tests identification");
Console.WriteLine("• Test duration trends");
Console.WriteLine("• Tester productivity metrics");

// Dashboard Widgets
Console.WriteLine("Dashboard Widgets for Testing:");
Console.WriteLine("• Test Results Trend - Pass/fail over builds");
Console.WriteLine("• Test Plans Progress - Outcome summary");
Console.WriteLine("• Requirements Quality - Requirements with tests");
Console.WriteLine("• Code Coverage - Percentage covered");
Console.WriteLine("• Build Quality - Test pass rate per build");

// Query-Based Reports
Console.WriteLine(@"
WIQL Queries for Test Reporting:

-- Test cases without automation
SELECT [System.Id], [System.Title]
FROM WorkItems
WHERE [System.WorkItemType] = 'Test Case'
  AND [Microsoft.VSTS.TCM.AutomationStatus] = 'Not Automated'
  AND [System.State] = 'Ready'

-- Failed test cases in current sprint
SELECT [System.Id], [System.Title], [Microsoft.VSTS.Common.Priority]
FROM WorkItems
WHERE [System.WorkItemType] = 'Test Case'
  AND [System.IterationPath] = @CurrentIteration
  AND [Microsoft.VSTS.TCM.LastTestRunOutcome] = 'Failed'

-- Test cases linked to high priority bugs
SELECT [System.Id], [System.Title]
FROM WorkItemLinks
WHERE ([System.Links.LinkType] = 'Tested By')
  AND ([Target].[System.WorkItemType] = 'Bug')
  AND ([Target].[Microsoft.VSTS.Common.Priority] = 1)
");

// REST API for Test Results
Console.WriteLine(@"
// Get test run results via REST API
GET https://dev.azure.com/{org}/{project}/_apis/test/runs/{runId}/results?api-version=7.0

Response:
{
  ""count"": 50,
  ""value"": [
    {
      ""id"": 1001,
      ""testCase"": { ""id"": ""12345"", ""name"": ""Login Test"" },
      ""outcome"": ""Passed"",
      ""durationInMs"": 1234,
      ""startedDate"": ""2024-01-15T10:00:00Z"",
      ""completedDate"": ""2024-01-15T10:00:01Z""
    }
  ]
}
");

// Export Options
Console.WriteLine("Export Options:");
Console.WriteLine("• Export test plan to Excel/CSV");
Console.WriteLine("• Print test cases for review");
Console.WriteLine("• Generate PDF reports");
Console.WriteLine("• Power BI integration for custom reports");`,
        },
      ],
    },
  ],
};
