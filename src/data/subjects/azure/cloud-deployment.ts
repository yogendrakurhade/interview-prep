import type { Topic } from "../../../types";

export const azureCloudDeploymentTopic: Topic = {
  id: "azure-cloud-deployment",
  name: "Cloud Deployment",
  questions: [
    {
      id: "q1",
      question: "What is Infrastructure as Code (IaC) and how do you use it in Azure?",
      answer:
        "IaC defines infrastructure in code files (Bicep, ARM templates, Terraform). Version control friendly. Repeatable deployments. Azure-specific: Bicep (recommended, simpler syntax), ARM templates (JSON). Terraform (multi-cloud). Define resources in code, deploy via CLI or pipelines.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Bicep - Infrastructure as Code for Azure

/*
// main.bicep
param location string = resourceGroup().location
param appName string = 'myapp'
param environment string = 'dev'

var resourceGroupName = '\${appName}-\${environment}-rg'
var appServicePlanName = '\${appName}-\${environment}-plan'
var appServiceName = '\${appName}-\${environment}-app'

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: 'S1'
    capacity: 1
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: appServiceName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

resource appServiceConfig 'Microsoft.Web/sites/config@2021-02-01' = {
  parent: appService
  name: 'web'
  properties: {
    alwaysOn: true
    netFrameworkVersion: 'v6.0'
    linuxFxVersion: 'DOTNETCORE|6.0'
  }
}

output appServiceId string = appService.id
output appServiceUrl string = 'https://\${appService.properties.defaultHostName}'
*/

// Parameters file (parameters.json)
/*
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "appName": {
      "value": "myapp"
    },
    "environment": {
      "value": "production"
    },
    "location": {
      "value": "eastus"
    }
  }
}
*/

// Deployment commands
Console.WriteLine("Azure CLI Deployment Commands:");
Console.WriteLine("# Validate Bicep");
Console.WriteLine("az deployment group validate \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --template-file main.bicep \\");
Console.WriteLine("  --parameters parameters.json");
Console.WriteLine("");
Console.WriteLine("# Deploy Bicep");
Console.WriteLine("az deployment group create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --template-file main.bicep \\");
Console.WriteLine("  --parameters parameters.json");
Console.WriteLine("");
Console.WriteLine("# Deploy to subscription level");
Console.WriteLine("az deployment sub create \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --template-file main.bicep");

// Terraform for Azure (multi-cloud)
/*
# main.tf
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "myapp-rg"
  location = "East US"
}

resource "azurerm_app_service_plan" "plan" {
  name                = "myapp-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_app_service" "app" {
  name                = "myapp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.plan.id

  site_config {
    linux_fx_version = "DOTNETCORE|6.0"
  }
}
*/

Console.WriteLine("IaC Benefits:");
Console.WriteLine("✓ Version controlled");
Console.WriteLine("✓ Reproducible deployments");
Console.WriteLine("✓ Environment parity");
Console.WriteLine("✓ Easy rollback");
Console.WriteLine("✓ Team collaboration");
Console.WriteLine("✓ Cost estimation");
Console.WriteLine("✓ Disaster recovery");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Azure DevOps and how do you set up CI/CD pipelines?",
      answer:
        "Azure DevOps provides tools for planning, developing, deploying, operating. Components: Boards (work tracking), Repos (Git), Pipelines (CI/CD), Test Plans, Artifacts. Pipelines: build (compile, test) → release (deploy to environments). YAML-based pipelines stored in repo.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Pipelines - CI/CD Configuration

/*
# azure-pipelines.yml
trigger:
  - main
  - develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'
  dotnetVersion: '8.0'

stages:
- stage: Build
  jobs:
  - job: BuildJob
    steps:
    - task: UseDotNet@2
      inputs:
        packageType: 'sdk'
        version: $(dotnetVersion)
      displayName: 'Install .NET SDK'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'restore'
        projects: '**/*.csproj'
      displayName: 'Restore NuGet packages'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'build'
        arguments: '--configuration $(buildConfiguration) --no-restore'
      displayName: 'Build application'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'test'
        arguments: '--configuration $(buildConfiguration) --no-build'
      displayName: 'Run unit tests'
    
    - task: SonarCloudPrepare@1
      inputs:
        SonarCloud: 'SonarCloud'
        organization: 'myorg'
        scannerMode: 'msbuild'
        projectKey: 'myproject'
      displayName: 'Prepare SonarCloud analysis'
    
    - task: SonarCloudAnalyze@1
      displayName: 'Run SonarCloud analysis'
    
    - task: DotNetCoreCLI@2
      inputs:
        command: 'publish'
        arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)'
      displayName: 'Publish application'
    
    - task: PublishBuildArtifacts@1
      inputs:
        PathtoPublish: '$(Build.ArtifactStagingDirectory)'
        ArtifactName: 'drop'
      displayName: 'Publish artifacts'

- stage: DeployDev
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeployToDev
    environment: 'dev'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Dev'
              appType: 'webAppLinux'
              appName: 'myapp-dev'
              package: '$(Pipeline.Workspace)/drop'
            displayName: 'Deploy to Dev App Service'

- stage: DeployProd
  dependsOn: Build
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  jobs:
  - deployment: DeployToProd
    environment: 'production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Prod'
              appType: 'webAppLinux'
              appName: 'myapp-prod'
              package: '$(Pipeline.Workspace)/drop'
            displayName: 'Deploy to Prod App Service'
*/

// Azure DevOps Components
Console.WriteLine("Azure DevOps:");
Console.WriteLine("Boards - Work item tracking (Agile, Scrum)");
Console.WriteLine("Repos - Git repository (or TFVC)");
Console.WriteLine("Pipelines - CI/CD automation");
Console.WriteLine("Test Plans - Manual test execution");
Console.WriteLine("Artifacts - NuGet, Maven, npm packages");

Console.WriteLine("Pipeline Stages:");
Console.WriteLine("1. Trigger - On code push, PR, schedule");
Console.WriteLine("2. Build - Compile, test, analyze");
Console.WriteLine("3. Deploy Dev - Deploy to development");
Console.WriteLine("4. Deploy Staging - Deploy to staging");
Console.WriteLine("5. Approval - Manual approval");
Console.WriteLine("6. Deploy Prod - Deploy to production");

Console.WriteLine("Self-Hosted Agents:");
Console.WriteLine("- Run on your own machine");
Console.WriteLine("- Full control");
Console.WriteLine("- Access to on-premises resources");
Console.WriteLine("- Azure Pipelines Microsoft-hosted agents also available");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Azure Resource Manager (ARM) and resource groups?",
      answer:
        "ARM is Azure's deployment and management service. Resource groups are containers for related resources (logical grouping). Manage permissions, billing, and lifecycle together. Can't be nested. One resource can only belong to one resource group. Delete resource group deletes all resources.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Resource Manager & Resource Groups

// Create resource group
Console.WriteLine("Resource Group Commands:");
Console.WriteLine("# Create resource group");
Console.WriteLine("az group create \\");
Console.WriteLine("  --name myResourceGroup \\");
Console.WriteLine("  --location eastus");
Console.WriteLine("");
Console.WriteLine("# List resource groups");
Console.WriteLine("az group list");
Console.WriteLine("");
Console.WriteLine("# Delete resource group (deletes all resources)");
Console.WriteLine("az group delete \\");
Console.WriteLine("  --name myResourceGroup \\");
Console.WriteLine("  --yes");

// Resource organization
var resourceGroupStructure = new
{
    ResourceGroup = "myapp-prod-rg",
    Resources = new[]
    {
        "App Service",
        "SQL Database",
        "Storage Account",
        "Key Vault",
        "Application Insights",
        "Virtual Network"
    }
};

Console.WriteLine("Typical Resource Group Structure:");
Console.WriteLine(resourceGroupStructure.ResourceGroup);
foreach (var resource in resourceGroupStructure.Resources)
{
    Console.WriteLine($"  ├─ {resource}");
}

// Tagging resources
Console.WriteLine("Resource Tags (metadata):");
Console.WriteLine("# Set tags");
Console.WriteLine("az resource tag \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --resource-type Microsoft.Web/sites \\");
Console.WriteLine("  --tags environment=production cost-center=engineering team=backend");
Console.WriteLine("");
Console.WriteLine("# Query by tags");
Console.WriteLine("az resource list --tags environment=production");

// Management operations
Console.WriteLine("ARM Operations:");
Console.WriteLine("PUT - Create or update resource");
Console.WriteLine("GET - Get resource details");
Console.WriteLine("DELETE - Delete resource");
Console.WriteLine("PATCH - Update resource");

// Role-Based Access Control (RBAC)
Console.WriteLine("RBAC Examples:");
Console.WriteLine("# Assign Contributor role");
Console.WriteLine("az role assignment create \\");
Console.WriteLine("  --assignee user@example.com \\");
Console.WriteLine("  --role Contributor \\");
Console.WriteLine("  --scope /subscriptions/<subscription-id>/resourceGroups/myRG");
Console.WriteLine("");
Console.WriteLine("# Assign Reader role");
Console.WriteLine("az role assignment create \\");
Console.WriteLine("  --assignee team@example.com \\");
Console.WriteLine("  --role Reader \\");
Console.WriteLine("  --scope /subscriptions/<subscription-id>");

Console.WriteLine("Built-in Roles:");
Console.WriteLine("Owner - Full access including RBAC");
Console.WriteLine("Contributor - Full access, no RBAC");
Console.WriteLine("Reader - Read-only access");
Console.WriteLine("User Access Administrator - Manage RBAC");`,
        },
      ],
    },
  ],
};
