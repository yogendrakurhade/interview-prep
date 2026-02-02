import type { Topic } from "../../../types";

export const azurePipelinesTopic: Topic = {
  id: "azure-pipelines",
  name: "Azure Pipelines (CI/CD)",
  questions: [
    {
      id: "q1",
      question: "What is Azure Pipelines and what are the differences between Classic and YAML pipelines?",
      answer:
        "Azure Pipelines is CI/CD service for building, testing, and deploying code. Classic pipelines use visual designer (UI-based). YAML pipelines define pipeline as code in azure-pipelines.yml. YAML recommended: version controlled, reviewable via PR, portable. Supports any language, platform (Windows, Linux, macOS), cloud (Azure, AWS, GCP).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Pipelines Overview

Console.WriteLine("Pipeline Types:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Type           │ Description                           │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ YAML Pipelines │ Code-based, version controlled        │");
Console.WriteLine("│ Classic Build  │ UI-based build definitions            │");
Console.WriteLine("│ Classic Release│ UI-based release management           │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

Console.WriteLine("YAML vs Classic:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ YAML (Recommended)     │ Classic                        │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Pipeline as code       │ UI configuration               │");
Console.WriteLine("│ Version controlled     │ Stored in Azure DevOps         │");
Console.WriteLine("│ PR review for changes  │ No code review                 │");
Console.WriteLine("│ Templates/reuse        │ Task groups                    │");
Console.WriteLine("│ Multi-stage pipelines  │ Separate build/release         │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Basic YAML Pipeline
Console.WriteLine(@"
# azure-pipelines.yml - Basic .NET Pipeline
trigger:
  - main
  - develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'
  dotnetVersion: '8.0.x'

steps:
- task: UseDotNet@2
  displayName: 'Install .NET SDK'
  inputs:
    version: '$(dotnetVersion)'

- task: DotNetCoreCLI@2
  displayName: 'Restore packages'
  inputs:
    command: 'restore'
    projects: '**/*.csproj'

- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration) --no-restore'

- task: DotNetCoreCLI@2
  displayName: 'Run tests'
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
    arguments: '--configuration $(buildConfiguration) --no-build --collect:""XPlat Code Coverage""'

- task: PublishBuildArtifacts@1
  displayName: 'Publish artifacts'
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: 'drop'
");

Console.WriteLine("Supported Platforms:");
Console.WriteLine("• Windows (windows-latest, windows-2022)");
Console.WriteLine("• Linux (ubuntu-latest, ubuntu-22.04)");
Console.WriteLine("• macOS (macos-latest, macos-13)");
Console.WriteLine("• Self-hosted agents (any OS)");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you create multi-stage YAML pipelines with environments and approvals?",
      answer:
        "Multi-stage pipelines define build, test, and deploy in single YAML file. Stages run sequentially or in parallel. Environments represent deployment targets (dev, staging, prod). Configure approvals and checks on environments. Use deployment jobs for environment-specific deployments with history tracking.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Multi-Stage Pipeline with Environments

Console.WriteLine(@"
# azure-pipelines.yml - Multi-Stage Pipeline
trigger:
  - main

variables:
  vmImage: 'ubuntu-latest'
  buildConfiguration: 'Release'

stages:
# Build Stage
- stage: Build
  displayName: 'Build and Test'
  jobs:
  - job: BuildJob
    pool:
      vmImage: $(vmImage)
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'Build'
      inputs:
        command: 'build'
        projects: '**/*.csproj'
        arguments: '--configuration $(buildConfiguration)'
    
    - task: DotNetCoreCLI@2
      displayName: 'Test'
      inputs:
        command: 'test'
        projects: '**/*Tests.csproj'
    
    - task: DotNetCoreCLI@2
      displayName: 'Publish'
      inputs:
        command: 'publish'
        publishWebProjects: true
        arguments: '--configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)'
    
    - publish: $(Build.ArtifactStagingDirectory)
      artifact: drop

# Deploy to Development
- stage: DeployDev
  displayName: 'Deploy to Development'
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeployDev
    environment: 'development'
    pool:
      vmImage: $(vmImage)
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            displayName: 'Deploy to Dev App Service'
            inputs:
              azureSubscription: 'Azure-Dev-Connection'
              appName: 'myapp-dev'
              package: '$(Pipeline.Workspace)/drop/*.zip'

# Deploy to Staging (with approval)
- stage: DeployStaging
  displayName: 'Deploy to Staging'
  dependsOn: DeployDev
  condition: succeeded()
  jobs:
  - deployment: DeployStaging
    environment: 'staging'  # Configure approval in Azure DevOps
    pool:
      vmImage: $(vmImage)
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Staging-Connection'
              appName: 'myapp-staging'
              package: '$(Pipeline.Workspace)/drop/*.zip'

# Deploy to Production (with approval)
- stage: DeployProd
  displayName: 'Deploy to Production'
  dependsOn: DeployStaging
  condition: succeeded()
  jobs:
  - deployment: DeployProd
    environment: 'production'  # Configure approval in Azure DevOps
    pool:
      vmImage: $(vmImage)
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Prod-Connection'
              appName: 'myapp-prod'
              package: '$(Pipeline.Workspace)/drop/*.zip'
");

Console.WriteLine("Environment Checks & Approvals:");
Console.WriteLine("• Pre-deployment approvals - Manual approval required");
Console.WriteLine("• Business hours - Deploy only during specified hours");
Console.WriteLine("• Branch control - Only from specific branches");
Console.WriteLine("• Required template - Must use specific template");
Console.WriteLine("• Invoke Azure Function - Custom validation");
Console.WriteLine("• Query Azure Monitor - Check health before deploy");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you use pipeline templates for reusability?",
      answer:
        "Templates enable reusable pipeline components. Types: Step templates, Job templates, Stage templates, Variable templates. Store in same repo or separate template repo. Use extends keyword for pipeline inheritance. Parameters allow customization. Promotes consistency across teams.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Pipeline Templates

Console.WriteLine("Template Types:");
Console.WriteLine("• Step Template - Reusable steps");
Console.WriteLine("• Job Template - Reusable jobs");
Console.WriteLine("• Stage Template - Reusable stages");
Console.WriteLine("• Variable Template - Reusable variables");

// Step Template
Console.WriteLine(@"
# templates/dotnet-build-steps.yml
parameters:
- name: buildConfiguration
  type: string
  default: 'Release'
- name: projects
  type: string
  default: '**/*.csproj'

steps:
- task: DotNetCoreCLI@2
  displayName: 'Restore'
  inputs:
    command: 'restore'
    projects: '\${{ parameters.projects }}'

- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '\${{ parameters.projects }}'
    arguments: '--configuration \${{ parameters.buildConfiguration }} --no-restore'

- task: DotNetCoreCLI@2
  displayName: 'Test'
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
    arguments: '--configuration \${{ parameters.buildConfiguration }} --no-build'
");

// Job Template
Console.WriteLine(@"
# templates/dotnet-build-job.yml
parameters:
- name: vmImage
  type: string
  default: 'ubuntu-latest'
- name: buildConfiguration
  type: string
  default: 'Release'

jobs:
- job: Build
  pool:
    vmImage: \${{ parameters.vmImage }}
  steps:
  - template: dotnet-build-steps.yml
    parameters:
      buildConfiguration: \${{ parameters.buildConfiguration }}
  
  - task: PublishBuildArtifacts@1
    inputs:
      pathToPublish: '$(Build.ArtifactStagingDirectory)'
      artifactName: 'drop'
");

// Stage Template
Console.WriteLine(@"
# templates/deploy-stage.yml
parameters:
- name: environment
  type: string
- name: serviceConnection
  type: string
- name: appName
  type: string

stages:
- stage: Deploy_\${{ parameters.environment }}
  displayName: 'Deploy to \${{ parameters.environment }}'
  jobs:
  - deployment: Deploy
    environment: \${{ parameters.environment }}
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            inputs:
              azureSubscription: ` + "${{ parameters.serviceConnection }}" + `
              appName: ` + "${{ parameters.appName }}" + `
              package: '$(Pipeline.Workspace)/drop/*.zip'
");

// Main Pipeline using templates
Console.WriteLine(@"
# azure-pipelines.yml
trigger:
  - main

stages:
- stage: Build
  jobs:
  - template: templates/dotnet-build-job.yml
    parameters:
      vmImage: 'ubuntu-latest'
      buildConfiguration: 'Release'

- template: templates/deploy-stage.yml
  parameters:
    environment: 'development'
    serviceConnection: 'Azure-Dev'
    appName: 'myapp-dev'

- template: templates/deploy-stage.yml
  parameters:
    environment: 'production'
    serviceConnection: 'Azure-Prod'
    appName: 'myapp-prod'
");

// Template from another repository
Console.WriteLine(@"
# Using templates from another repo
resources:
  repositories:
  - repository: templates
    type: git
    name: MyProject/pipeline-templates
    ref: refs/heads/main

stages:
- template: stages/dotnet-ci-cd.yml@templates
  parameters:
    solution: 'MyApp.sln'
    environments:
    - dev
    - prod
");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you manage secrets and variables in Azure Pipelines?",
      answer:
        "Variables store values: pipeline variables, variable groups, YAML variables. Secret variables are encrypted and masked in logs. Variable groups can link to Azure Key Vault. Runtime expressions access variables. Use variable templates for shared config. Secret variables cannot be output to logs.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Variables and Secrets in Azure Pipelines

Console.WriteLine("Variable Types:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Type              │ Scope                               │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ YAML variables    │ Pipeline file                       │");
Console.WriteLine("│ Pipeline variables│ UI-defined, per pipeline            │");
Console.WriteLine("│ Variable groups   │ Shared across pipelines             │");
Console.WriteLine("│ Key Vault secrets │ Azure Key Vault linked              │");
Console.WriteLine("│ Runtime variables │ Set during pipeline execution       │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// YAML Variables
Console.WriteLine(@"
# azure-pipelines.yml
variables:
  # Simple variable
  buildConfiguration: 'Release'
  
  # Variable with different values per stage
  \${{ if eq(variables['Build.SourceBranchName'], 'main') }}:
    environment: 'production'
  \${{ else }}:
    environment: 'development'

# Variable templates
variables:
- template: variables/common.yml
- template: variables/\${{ variables.environment }}.yml

# Variable groups (linked from UI/Library)
variables:
- group: 'my-variable-group'
- group: 'keyvault-secrets'  # Linked to Key Vault
");

// Variable Template
Console.WriteLine(@"
# variables/common.yml
variables:
  vmImage: 'ubuntu-latest'
  dotnetVersion: '8.0.x'
  nugetFeed: 'https://pkgs.dev.azure.com/myorg/_packaging/myfeed/nuget/v3/index.json'

# variables/production.yml
variables:
  appServiceName: 'myapp-prod'
  resourceGroup: 'myapp-prod-rg'
  azureSubscription: 'Azure-Prod-Connection'
");

// Accessing Variables
Console.WriteLine(\`
steps:
# Macro syntax - replaced before task runs
- script: echo 'Config: \$(buildConfiguration)'

# Template expression - compile time
- script: echo 'Environment: \${{ variables.environment }}'

# Runtime expression - evaluated at runtime
- script: echo 'Branch: \$[variables['Build.SourceBranchName']]'

# Set variable for later steps
- bash: |
    echo '##vso[task.setvariable variable=myVar]myValue'
    echo '##vso[task.setvariable variable=mySecret;issecret=true]secretValue'

# Use in later step
- script: echo 'Variable: \$(myVar)'
\`);

// Key Vault Integration
Console.WriteLine(@"
# Create variable group linked to Key Vault (via UI or CLI)
az pipelines variable-group create \
  --name 'keyvault-secrets' \
  --authorize true \
  --variables '' \
  --project MyProject

# Link to Key Vault
az pipelines variable-group variable create \
  --group-id <group-id> \
  --name 'DbConnectionString' \
  --value '' \
  --secret true

# In pipeline
variables:
- group: keyvault-secrets  # Automatically fetches from Key Vault

steps:
- script: |
    # Secret is masked in logs as ***
    echo 'Connecting to database...'
    dotnet run --connection '$(DbConnectionString)'
");

// Secret best practices
Console.WriteLine("Secret Management Best Practices:");
Console.WriteLine("• Never hardcode secrets in YAML");
Console.WriteLine("• Use variable groups with Key Vault");
Console.WriteLine("• Mark variables as secret (masked in logs)");
Console.WriteLine("• Rotate secrets regularly");
Console.WriteLine("• Limit variable group access");
Console.WriteLine("• Use service connections instead of inline credentials");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you set up CI/CD for containerized applications?",
      answer:
        "Build Docker image, push to registry (ACR, Docker Hub), deploy to orchestrator (AKS, ACI, App Service). Use Docker@2 task for build/push. AzureContainerApps@1 for Container Apps. KubernetesManifest@1 for AKS. Multi-stage Dockerfile for optimized images. Use image tags for versioning.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Container CI/CD Pipeline

Console.WriteLine(@"
# azure-pipelines.yml - Container Pipeline
trigger:
  - main

variables:
  dockerRegistry: 'myacr.azurecr.io'
  imageName: 'myapp'
  tag: '$(Build.BuildId)'

stages:
# Build and Push Container
- stage: Build
  displayName: 'Build Container'
  jobs:
  - job: BuildAndPush
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    # Login to ACR
    - task: Docker@2
      displayName: 'Login to ACR'
      inputs:
        command: login
        containerRegistry: 'ACR-Connection'
    
    # Build and push image
    - task: Docker@2
      displayName: 'Build and Push'
      inputs:
        command: buildAndPush
        repository: $(imageName)
        dockerfile: '**/Dockerfile'
        containerRegistry: 'ACR-Connection'
        tags: |
          $(tag)
          latest
    
    # Scan for vulnerabilities (optional)
    - task: trivy@1
      displayName: 'Scan Image'
      inputs:
        image: '$(dockerRegistry)/$(imageName):$(tag)'
        severities: 'CRITICAL,HIGH'

# Deploy to AKS
- stage: DeployAKS
  displayName: 'Deploy to AKS'
  dependsOn: Build
  jobs:
  - deployment: DeployToAKS
    environment: 'aks-production'
    pool:
      vmImage: 'ubuntu-latest'
    strategy:
      runOnce:
        deploy:
          steps:
          # Update Kubernetes manifest with new image tag
          - task: KubernetesManifest@1
            displayName: 'Deploy to AKS'
            inputs:
              action: deploy
              connectionType: azureResourceManager
              azureSubscriptionConnection: 'Azure-Prod'
              azureResourceGroup: 'myapp-rg'
              kubernetesCluster: 'myaks'
              namespace: 'default'
              manifests: |
                k8s/deployment.yml
                k8s/service.yml
              containers: |
                $(dockerRegistry)/$(imageName):$(tag)

# Alternative: Deploy to Azure Container Apps
- stage: DeployContainerApps
  displayName: 'Deploy to Container Apps'
  dependsOn: Build
  jobs:
  - deployment: DeployToContainerApps
    environment: 'container-apps-production'
    pool:
      vmImage: 'ubuntu-latest'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureContainerApps@1
            displayName: 'Deploy to Container Apps'
            inputs:
              azureSubscription: 'Azure-Prod'
              containerAppName: 'myapp'
              resourceGroup: 'myapp-rg'
              imageToDeploy: '$(dockerRegistry)/$(imageName):$(tag)'
");

// Kubernetes Manifests
Console.WriteLine(@"
# k8s/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myacr.azurecr.io/myapp:latest  # Replaced by pipeline
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: '128Mi'
            cpu: '100m'
          limits:
            memory: '256Mi'
            cpu: '500m'
");

// Dockerfile for .NET
Console.WriteLine(@"
# Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY [""MyApp.csproj"", "".""]
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 80
ENTRYPOINT [""dotnet"", ""MyApp.dll""]
");`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you implement deployment strategies like Blue-Green and Canary?",
      answer:
        "Blue-Green: two identical environments, switch traffic instantly. Canary: gradually shift traffic percentage. Azure Pipelines supports via deployment jobs and routing. AKS uses Service mesh or Ingress. App Service uses deployment slots. Rollback by reversing traffic.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Deployment Strategies in Azure Pipelines

Console.WriteLine("Deployment Strategies:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Strategy      │ Description                            │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ runOnce       │ Deploy once, standard deployment       │");
Console.WriteLine("│ rolling       │ Replace instances gradually            │");
Console.WriteLine("│ canary        │ Deploy to subset, then full rollout    │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Canary Deployment
Console.WriteLine(@"
# Canary Deployment Strategy
stages:
- stage: Deploy
  jobs:
  - deployment: DeployCanary
    environment: 'production'
    strategy:
      canary:
        increments: [10, 50]  # 10% then 50% then 100%
        preDeploy:
          steps:
          - script: echo 'Preparing canary deployment'
        deploy:
          steps:
          - task: KubernetesManifest@1
            inputs:
              action: deploy
              strategy: canary
              percentage: $(strategy.increment)
              manifests: 'k8s/*.yml'
        routeTraffic:
          steps:
          - task: KubernetesManifest@1
            inputs:
              action: patch
              resourceName: 'svc/myapp'
              patch: '{""spec"":{""selector"":{""track"":""canary""}}}'
        postRouteTraffic:
          steps:
          - task: Bash@3
            inputs:
              targetType: inline
              script: |
                # Run smoke tests
                ./run-smoke-tests.sh
        on:
          failure:
            steps:
            - task: KubernetesManifest@1
              inputs:
                action: reject
                manifests: 'k8s/*.yml'
          success:
            steps:
            - task: KubernetesManifest@1
              inputs:
                action: promote
                manifests: 'k8s/*.yml'
");

// Blue-Green with App Service Slots
Console.WriteLine(@"
# Blue-Green with Deployment Slots
stages:
- stage: DeployStaging
  jobs:
  - deployment: DeployToStaging
    environment: 'production-staging'
    strategy:
      runOnce:
        deploy:
          steps:
          # Deploy to staging slot
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Azure-Prod'
              appName: 'myapp'
              deployToSlotOrASE: true
              slotName: 'staging'
              package: '$(Pipeline.Workspace)/drop/*.zip'
          
          # Run smoke tests on staging
          - task: Bash@3
            inputs:
              targetType: inline
              script: |
                curl -f https://myapp-staging.azurewebsites.net/health
                ./run-smoke-tests.sh https://myapp-staging.azurewebsites.net

- stage: SwapSlots
  dependsOn: DeployStaging
  jobs:
  - deployment: SwapToProduction
    environment: 'production'  # Manual approval configured here
    strategy:
      runOnce:
        deploy:
          steps:
          # Swap staging to production
          - task: AzureAppServiceManage@0
            inputs:
              azureSubscription: 'Azure-Prod'
              Action: 'Swap Slots'
              WebAppName: 'myapp'
              ResourceGroupName: 'myapp-rg'
              SourceSlot: 'staging'
              TargetSlot: 'production'
          
          # Monitor after swap
          - task: Bash@3
            inputs:
              targetType: inline
              script: |
                echo 'Monitoring production health...'
                sleep 60
                curl -f https://myapp.azurewebsites.net/health
");

// Rolling deployment
Console.WriteLine(@"
# Rolling Deployment (VMs/Scale Sets)
- deployment: RollingDeploy
  environment:
    name: 'production-vms'
    resourceType: VirtualMachine
  strategy:
    rolling:
      maxParallel: 2  # Deploy to 2 VMs at a time
      preDeploy:
        steps:
        - script: echo 'Pre-deploy script'
      deploy:
        steps:
        - task: IISWebAppDeploymentOnMachineGroup@0
          inputs:
            WebSiteName: 'Default Web Site'
            Package: '$(Pipeline.Workspace)/drop/*.zip'
      routeTraffic:
        steps:
        - script: echo 'Route traffic to updated VMs'
      postRouteTraffic:
        steps:
        - script: ./run-health-checks.sh
");`,
        },
      ],
    },
    {
      id: "q7",
      question: "How do you optimize pipeline performance and reduce build times?",
      answer:
        "Strategies: caching (NuGet, npm), parallel jobs, incremental builds, self-hosted agents with pre-installed tools. Use pipeline caching for dependencies. Split large pipelines into stages. Use conditional execution to skip unnecessary steps. Monitor with Pipeline Analytics.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Pipeline Performance Optimization

Console.WriteLine("Optimization Techniques:");
Console.WriteLine("• Caching dependencies (NuGet, npm, pip)");
Console.WriteLine("• Parallel job execution");
Console.WriteLine("• Incremental builds");
Console.WriteLine("• Self-hosted agents with cached tools");
Console.WriteLine("• Conditional step execution");
Console.WriteLine("• Artifact management");

// Pipeline Caching
Console.WriteLine(\`
# Cache NuGet packages
variables:
  NUGET_PACKAGES: \$(Pipeline.Workspace)/.nuget/packages

steps:
- task: Cache@2
  displayName: 'Cache NuGet packages'
  inputs:
    key: 'nuget | "\$(Agent.OS)" | **/packages.lock.json'
    restoreKeys: |
      nuget | "\$(Agent.OS)"
      nuget
    path: \$(NUGET_PACKAGES)

- task: DotNetCoreCLI@2
  inputs:
    command: 'restore'
    projects: '**/*.csproj'

# Cache npm packages
- task: Cache@2
  displayName: 'Cache npm packages'
  inputs:
    key: 'npm | "\$(Agent.OS)" | package-lock.json'
    restoreKeys: |
      npm | "\$(Agent.OS)"
    path: '\$(Pipeline.Workspace)/.npm'

- task: Npm@1
  inputs:
    command: 'ci'
    workingDir: 'src/webapp'
\`);

// Parallel Jobs
Console.WriteLine(@"
# Run tests in parallel across multiple agents
stages:
- stage: Test
  jobs:
  - job: UnitTests
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: DotNetCoreCLI@2
      inputs:
        command: 'test'
        projects: '**/*UnitTests.csproj'
  
  - job: IntegrationTests
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: DotNetCoreCLI@2
      inputs:
        command: 'test'
        projects: '**/*IntegrationTests.csproj'
  
  - job: UITests
    pool:
      vmImage: 'windows-latest'
    steps:
    - task: VSTest@2
      inputs:
        testSelector: 'testAssemblies'
        testAssemblyVer2: '**/*UITests.dll'
");

// Conditional Execution
Console.WriteLine(@"
# Skip steps based on conditions
steps:
# Only run on main branch
- task: DotNetCoreCLI@2
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
  inputs:
    command: 'publish'

# Skip if no changes in specific path
- task: DotNetCoreCLI@2
  condition: |
    and(
      succeeded(),
      ne(variables['Build.Reason'], 'PullRequest'),
      contains(variables['Build.SourceVersionMessage'], '[skip-tests]')
    )
  inputs:
    command: 'test'

# Run only if files changed
trigger:
  paths:
    include:
    - src/*
    exclude:
    - docs/*
    - '*.md'
");

// Self-Hosted Agent optimization
Console.WriteLine("Self-Hosted Agent Benefits:");
Console.WriteLine("• Pre-installed SDKs and tools");
Console.WriteLine("• Persistent cache between builds");
Console.WriteLine("• Access to private network resources");
Console.WriteLine("• Custom hardware (GPU, more RAM)");
Console.WriteLine("• No queue wait time");

// Pipeline Analytics
Console.WriteLine("Monitor with Pipeline Analytics:");
Console.WriteLine("• Build duration trends");
Console.WriteLine("• Task duration breakdown");
Console.WriteLine("• Queue wait times");
Console.WriteLine("• Pass/fail rates");
Console.WriteLine("• Agent utilization");`,
        },
      ],
    },
    {
      id: "q8",
      question: "How do you integrate automated testing in Azure Pipelines?",
      answer:
        "Run unit, integration, UI tests in pipeline. Use test tasks: DotNetCoreCLI@2, VSTest@2, Maven@3, Npm@1. Publish test results for reporting. Code coverage with Cobertura/JaCoCo. Test Impact Analysis runs only affected tests. Flaky test detection identifies unreliable tests.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Automated Testing in Pipelines

Console.WriteLine(@"
# Comprehensive Testing Pipeline
stages:
- stage: Test
  jobs:
  # Unit Tests with Coverage
  - job: UnitTests
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'Run Unit Tests'
      inputs:
        command: 'test'
        projects: '**/*UnitTests.csproj'
        arguments: >
          --configuration Release
          --collect:""XPlat Code Coverage""
          --settings coverlet.runsettings
          --logger trx
          --results-directory $(Agent.TempDirectory)/TestResults
    
    # Publish test results
    - task: PublishTestResults@2
      displayName: 'Publish Test Results'
      inputs:
        testResultsFormat: 'VSTest'
        testResultsFiles: '**/*.trx'
        searchFolder: '$(Agent.TempDirectory)/TestResults'
        mergeTestResults: true
    
    # Publish code coverage
    - task: PublishCodeCoverageResults@2
      displayName: 'Publish Code Coverage'
      inputs:
        summaryFileLocation: '$(Agent.TempDirectory)/**/coverage.cobertura.xml'
        failIfCoverageEmpty: true
  
  # Integration Tests
  - job: IntegrationTests
    pool:
      vmImage: 'ubuntu-latest'
    services:
      sqlserver:
        image: mcr.microsoft.com/mssql/server:2022-latest
        env:
          SA_PASSWORD: YourStrong@Password
          ACCEPT_EULA: Y
      redis:
        image: redis:latest
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'Run Integration Tests'
      inputs:
        command: 'test'
        projects: '**/*IntegrationTests.csproj'
      env:
        ConnectionStrings__Database: 'Server=sqlserver;Database=TestDb;User=sa;Password=YourStrong@Password'
        ConnectionStrings__Redis: 'redis:6379'
  
  # UI/E2E Tests with Playwright
  - job: E2ETests
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '18.x'
    
    - script: |
        npm ci
        npx playwright install --with-deps
      displayName: 'Install dependencies'
    
    - script: npx playwright test
      displayName: 'Run Playwright tests'
      env:
        BASE_URL: '$(WebApp.Url)'
    
    - task: PublishTestResults@2
      inputs:
        testResultsFormat: 'JUnit'
        testResultsFiles: 'playwright-results/*.xml'
    
    # Publish test artifacts (screenshots, videos)
    - publish: playwright-report
      artifact: playwright-report
      condition: always()
");

// Code Coverage Settings
Console.WriteLine(@"
<!-- coverlet.runsettings -->
<?xml version=""1.0"" encoding=""utf-8""?>
<RunSettings>
  <DataCollectionRunSettings>
    <DataCollectors>
      <DataCollector friendlyName=""XPlat Code Coverage"">
        <Configuration>
          <Format>cobertura,opencover</Format>
          <Exclude>[*Tests*]*,[*]*.Migrations.*</Exclude>
          <ExcludeByAttribute>Obsolete,GeneratedCodeAttribute</ExcludeByAttribute>
        </Configuration>
      </DataCollector>
    </DataCollectors>
  </DataCollectionRunSettings>
</RunSettings>
");

// Test Quality Gates
Console.WriteLine(@"
# Fail build if coverage below threshold
- task: BuildQualityChecks@9
  displayName: 'Check Code Coverage'
  inputs:
    checkCoverage: true
    coverageFailOption: 'fixed'
    coverageType: 'lines'
    coverageThreshold: '80'

# SonarQube analysis
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarQube-Connection'
    scannerMode: 'MSBuild'
    projectKey: 'myapp'

- task: DotNetCoreCLI@2
  inputs:
    command: 'build'

- task: DotNetCoreCLI@2
  inputs:
    command: 'test'
    arguments: '--collect:""XPlat Code Coverage""'

- task: SonarQubeAnalyze@5

- task: SonarQubePublish@5
  inputs:
    pollingTimeoutSec: '300'
");`,
        },
      ],
    },
  ],
};
