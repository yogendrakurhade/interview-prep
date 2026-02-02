import type { Topic } from "../../../types";

export const azureArtifactsTopic: Topic = {
  id: "azure-artifacts",
  name: "Azure Artifacts",
  questions: [
    {
      id: "q1",
      question: "What is Azure Artifacts and what package types does it support?",
      answer:
        "Azure Artifacts is package management service for hosting and sharing packages. Supports NuGet (.NET), npm (Node.js), Maven/Gradle (Java), Python (pip), Universal Packages (any files). Features: upstream sources, feed permissions, retention policies. Free tier: 2GB storage. Integrates with Azure Pipelines for CI/CD.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Artifacts Overview

Console.WriteLine("Supported Package Types:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Package Type    │ Ecosystem       │ File Extension      │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ NuGet           │ .NET            │ .nupkg              │");
Console.WriteLine("│ npm             │ Node.js         │ .tgz                │");
Console.WriteLine("│ Maven           │ Java            │ .jar, .pom          │");
Console.WriteLine("│ Gradle          │ Java/Android    │ .jar, .aar          │");
Console.WriteLine("│ Python          │ Python          │ .whl, .tar.gz       │");
Console.WriteLine("│ Universal       │ Any             │ Any files           │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Feed Concepts
Console.WriteLine("Feed Concepts:");
Console.WriteLine("• Feed - Container for packages");
Console.WriteLine("• View - Filter packages (e.g., @Release, @PreRelease)");
Console.WriteLine("• Upstream Source - Cache from public registries");
Console.WriteLine("• Retention Policy - Auto-delete old versions");

// Feed Visibility
Console.WriteLine("Feed Visibility:");
Console.WriteLine("• Project-scoped - Visible to project members");
Console.WriteLine("• Organization-scoped - Visible across organization");

// Pricing
Console.WriteLine("Pricing:");
Console.WriteLine("• Free: 2 GB storage included");
Console.WriteLine("• Additional: Pay per GB over limit");
Console.WriteLine("• Upstream caching doesn't count toward storage");

// Create Feed via CLI
Console.WriteLine(@"
# Create a new feed
az artifacts feed create \
  --name 'my-feed' \
  --project 'MyProject' \
  --visibility 'project' \
  --description 'Internal packages'

# List feeds
az artifacts feed list --project 'MyProject'

# Show feed details
az artifacts feed show --feed 'my-feed' --project 'MyProject'
");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you publish and consume NuGet packages from Azure Artifacts?",
      answer:
        "Publish: use dotnet nuget push or NuGet CLI with feed URL. Configure nuget.config with feed source. Authenticate using PAT, Azure CLI credential, or credential provider. In pipelines, use NuGetAuthenticate task. Consume by adding feed to package sources. Upstream sources cache nuget.org packages.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// NuGet Package Management with Azure Artifacts

// nuget.config for consuming packages
Console.WriteLine(@"
<?xml version=""1.0"" encoding=""utf-8""?>
<configuration>
  <packageSources>
    <clear />
    <add key=""nuget.org"" value=""https://api.nuget.org/v3/index.json"" />
    <add key=""MyFeed"" value=""https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/nuget/v3/index.json"" />
  </packageSources>
  <packageSourceCredentials>
    <MyFeed>
      <add key=""Username"" value=""anything"" />
      <add key=""ClearTextPassword"" value=""%NUGET_PAT%"" />
    </MyFeed>
  </packageSourceCredentials>
</configuration>
");

// Pack and Publish Commands
Console.WriteLine(@"
# Create NuGet package
dotnet pack -c Release -o ./nupkg

# Push to Azure Artifacts
dotnet nuget push ./nupkg/*.nupkg \
  --source https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/nuget/v3/index.json \
  --api-key az

# Using NuGet CLI
nuget push MyPackage.1.0.0.nupkg \
  -Source https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/nuget/v3/index.json \
  -ApiKey az
");

// Azure Pipelines - Publish NuGet
Console.WriteLine(@"
# azure-pipelines.yml - Publish NuGet Package
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'
  packageVersion: '1.0.$(Build.BuildId)'

steps:
- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration)'

- task: DotNetCoreCLI@2
  displayName: 'Pack'
  inputs:
    command: 'pack'
    packagesToPack: '**/MyLibrary.csproj'
    versioningScheme: 'byEnvVar'
    versionEnvVar: 'packageVersion'
    configuration: '$(buildConfiguration)'

# Authenticate to feed
- task: NuGetAuthenticate@1
  displayName: 'Authenticate to Azure Artifacts'

- task: NuGetCommand@2
  displayName: 'Push to Azure Artifacts'
  inputs:
    command: 'push'
    packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg'
    nuGetFeedType: 'internal'
    publishVstsFeed: 'myproject/my-feed'
    allowPackageConflicts: true
");

// Restore from Azure Artifacts
Console.WriteLine(@"
# Restore in pipeline
- task: DotNetCoreCLI@2
  displayName: 'Restore packages'
  inputs:
    command: 'restore'
    projects: '**/*.csproj'
    feedsToUse: 'select'
    vstsFeed: 'myproject/my-feed'
");

// .NET Project Configuration
Console.WriteLine(@"
<!-- MyLibrary.csproj -->
<Project Sdk=""Microsoft.NET.Sdk"">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <PackageId>MyCompany.MyLibrary</PackageId>
    <Version>1.0.0</Version>
    <Authors>MyCompany</Authors>
    <Description>Internal library for common operations</Description>
    <PackageTags>utilities;common</PackageTags>
    <RepositoryUrl>https://dev.azure.com/myorg/myproject/_git/mylibrary</RepositoryUrl>
  </PropertyGroup>
</Project>
");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you configure upstream sources for package caching?",
      answer:
        "Upstream sources proxy public registries through Azure Artifacts. Benefits: single feed URL, cached packages for faster restores, availability if public registry down. Configure: nuget.org, npmjs.com, Maven Central, PyPI. Packages cached on first request. Order matters for version resolution.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Upstream Sources Configuration

Console.WriteLine("Upstream Source Benefits:");
Console.WriteLine("• Single feed URL for all packages");
Console.WriteLine("• Cached copies for faster restores");
Console.WriteLine("• Continued access if public registry unavailable");
Console.WriteLine("• Audit trail of packages used");
Console.WriteLine("• No storage cost for cached packages");

// Common Upstream Sources
Console.WriteLine("Default Upstream Sources:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Type    │ Name         │ URL                           │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ NuGet   │ nuget.org    │ https://api.nuget.org/v3/...  │");
Console.WriteLine("│ npm     │ npmjs        │ https://registry.npmjs.org    │");
Console.WriteLine("│ Maven   │ Maven Central│ https://repo.maven.apache.org │");
Console.WriteLine("│ Python  │ PyPI         │ https://pypi.org/simple       │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Configure via CLI
Console.WriteLine(@"
# Add upstream source to existing feed
az artifacts feed update \
  --feed 'my-feed' \
  --project 'MyProject' \
  --upstream-sources '[
    {
      ""name"": ""nuget.org"",
      ""protocol"": ""nuget"",
      ""location"": ""https://api.nuget.org/v3/index.json"",
      ""upstreamSourceType"": ""public""
    },
    {
      ""name"": ""npmjs"",
      ""protocol"": ""npm"",
      ""location"": ""https://registry.npmjs.org"",
      ""upstreamSourceType"": ""public""
    }
  ]'
");

// Simplified nuget.config with upstream
Console.WriteLine(@"
<!-- With upstream sources, only need one feed -->
<?xml version=""1.0"" encoding=""utf-8""?>
<configuration>
  <packageSources>
    <clear />
    <!-- Single feed URL - upstreams handle nuget.org -->
    <add key=""AzureArtifacts"" value=""https://pkgs.dev.azure.com/myorg/_packaging/my-feed/nuget/v3/index.json"" />
  </packageSources>
</configuration>
");

// How Upstream Resolution Works
Console.WriteLine(@"
Package Resolution Order:
1. Check local feed for exact package version
2. If not found, check upstream sources in order
3. First upstream with package wins
4. Package is cached in local feed
5. Future requests served from cache

Example:
Request: Newtonsoft.Json 13.0.1
  → Not in 'my-feed'
  → Check 'nuget.org' upstream
  → Found! Cache in 'my-feed'
  → Return to client

Next Request: Newtonsoft.Json 13.0.1
  → Found in 'my-feed' cache
  → Return immediately (faster!)
");

// Upstream Source Priority
Console.WriteLine("Upstream Source Priority:");
Console.WriteLine("• Order determines resolution priority");
Console.WriteLine("• Put internal feeds first");
Console.WriteLine("• Public registries last");
Console.WriteLine("• Can have multiple upstreams per protocol");

// Internal Upstream (Feed-to-Feed)
Console.WriteLine(@"
# Add another Azure Artifacts feed as upstream
Feed: project-feed
  Upstream: organization-shared-feed
  Upstream: nuget.org

This allows:
- Project packages in project-feed
- Shared packages from organization-shared-feed
- Public packages from nuget.org
All through single URL!
");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you manage npm packages in Azure Artifacts?",
      answer:
        "Configure .npmrc with feed URL and auth. Use vsts-npm-auth for authentication. Publish with npm publish. Scoped packages (@org/package) supported. Upstream to npmjs.com for caching. In pipelines, use Npm task with custom registry. npm audit for security scanning.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// npm Package Management with Azure Artifacts

// .npmrc configuration
Console.WriteLine(@"
# .npmrc in project root
registry=https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/
always-auth=true

# For scoped packages
@mycompany:registry=https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/

# User-level .npmrc (for auth)
# ~/.npmrc
//pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/:username=anything
//pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/:_password=BASE64_ENCODED_PAT
//pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/:email=user@example.com
");

// Authentication helper
Console.WriteLine(@"
# Install vsts-npm-auth helper
npm install -g vsts-npm-auth

# Authenticate (interactive)
vsts-npm-auth -config .npmrc

# Or use Azure CLI
az artifacts npm config --feed my-feed --project MyProject
");

// Publishing npm packages
Console.WriteLine(@"
# package.json
{
  ""name"": ""@mycompany/my-library"",
  ""version"": ""1.0.0"",
  ""main"": ""dist/index.js"",
  ""types"": ""dist/index.d.ts"",
  ""files"": [""dist""],
  ""scripts"": {
    ""build"": ""tsc"",
    ""prepublishOnly"": ""npm run build""
  },
  ""publishConfig"": {
    ""registry"": ""https://pkgs.dev.azure.com/myorg/myproject/_packaging/my-feed/npm/registry/""
  }
}

# Publish command
npm publish
");

// Azure Pipelines - npm
Console.WriteLine(@"
# azure-pipelines.yml - npm CI/CD
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  displayName: 'Install Node.js'
  inputs:
    versionSpec: '18.x'

# Authenticate to Azure Artifacts
- task: npmAuthenticate@0
  displayName: 'Authenticate npm'
  inputs:
    workingFile: '.npmrc'

# Install dependencies
- task: Npm@1
  displayName: 'Install packages'
  inputs:
    command: 'ci'
    workingDir: '.'

# Build
- script: npm run build
  displayName: 'Build'

# Test
- script: npm test
  displayName: 'Run tests'

# Publish (on main branch only)
- task: Npm@1
  displayName: 'Publish package'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
  inputs:
    command: 'publish'
    workingDir: '.'
    publishRegistry: 'useFeed'
    publishFeed: 'myproject/my-feed'
");

// Version management
Console.WriteLine(@"
# Bump version before publish
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0

# Prerelease versions
npm version prerelease --preid=beta  # 1.0.0-beta.0

# In pipeline - auto-version with build number
- script: |
    npm version 1.0.$(Build.BuildId) --no-git-tag-version
  displayName: 'Set version'
");

// Consuming packages
Console.WriteLine(@"
# Install from Azure Artifacts
npm install @mycompany/my-library

# Install specific version
npm install @mycompany/my-library@1.2.3

# package.json
{
  ""dependencies"": {
    ""@mycompany/my-library"": ""^1.0.0"",
    ""lodash"": ""^4.17.21""  // From npmjs via upstream
  }
}
");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you use Universal Packages for arbitrary files?",
      answer:
        "Universal Packages store any file type (binaries, tools, datasets). No special format required - just files/folders. Use Azure CLI to publish and download. Version semantically. Great for large files, build tools, ML models, test data. Supports incremental uploads for large packages.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Universal Packages in Azure Artifacts

Console.WriteLine("Universal Package Use Cases:");
Console.WriteLine("• Large binary files (tools, SDKs)");
Console.WriteLine("• Machine learning models");
Console.WriteLine("• Test data sets");
Console.WriteLine("• Configuration bundles");
Console.WriteLine("• Build outputs for release");
Console.WriteLine("• Game assets");

// Publish Universal Package
Console.WriteLine(@"
# Publish a folder as universal package
az artifacts universal publish \
  --organization https://dev.azure.com/myorg \
  --project MyProject \
  --feed my-feed \
  --name my-tool \
  --version 1.0.0 \
  --path ./dist \
  --description 'Internal build tool'

# Publish single file
az artifacts universal publish \
  --organization https://dev.azure.com/myorg \
  --project MyProject \
  --feed my-feed \
  --name ml-model \
  --version 2.1.0 \
  --path ./models/trained-model.onnx

# Publish with latest version auto-increment
az artifacts universal publish \
  --feed my-feed \
  --name my-tool \
  --version 1.0.$(Build.BuildId) \
  --path ./dist
");

// Download Universal Package
Console.WriteLine(@"
# Download to specific folder
az artifacts universal download \
  --organization https://dev.azure.com/myorg \
  --project MyProject \
  --feed my-feed \
  --name my-tool \
  --version 1.0.0 \
  --path ./tools

# Download latest version
az artifacts universal download \
  --feed my-feed \
  --name my-tool \
  --version '*' \
  --path ./tools
");

// Azure Pipelines Integration
Console.WriteLine(@"
# azure-pipelines.yml - Universal Packages
steps:
# Download universal package (e.g., build tools)
- task: UniversalPackages@0
  displayName: 'Download build tools'
  inputs:
    command: 'download'
    downloadDirectory: '$(Agent.ToolsDirectory)/my-tool'
    feedsToUse: 'internal'
    vstsFeed: 'myproject/my-feed'
    vstsFeedPackage: 'my-tool'
    vstsPackageVersion: '1.0.0'

# Use the downloaded tool
- script: |
    chmod +x $(Agent.ToolsDirectory)/my-tool/build.sh
    $(Agent.ToolsDirectory)/my-tool/build.sh
  displayName: 'Run build tool'

# Publish universal package (e.g., release artifacts)
- task: UniversalPackages@0
  displayName: 'Publish release package'
  inputs:
    command: 'publish'
    publishDirectory: '$(Build.ArtifactStagingDirectory)/release'
    feedsToUsePublish: 'internal'
    vstsFeedPublish: 'myproject/my-feed'
    vstsFeedPackagePublish: 'myapp-release'
    versionOption: 'custom'
    versionPublish: '$(Build.BuildNumber)'
    packagePublishDescription: 'Release build $(Build.BuildNumber)'
");

// Large File Handling
Console.WriteLine("Large Package Features:");
Console.WriteLine("• Incremental upload - only changed chunks");
Console.WriteLine("• Resume interrupted uploads");
Console.WriteLine("• Parallel download for faster retrieval");
Console.WriteLine("• Compression during transfer");
Console.WriteLine("• Maximum single file size: 4 TB");
Console.WriteLine("• Maximum package size: No limit");

// Version Patterns
Console.WriteLine(@"
Version Patterns:
• Exact: 1.0.0
• Latest: * (downloads newest version)
• Range: 1.0.* (latest 1.0.x)
• Prerelease: 1.0.0-beta.1
");`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you configure feed permissions and retention policies?",
      answer:
        "Feed permissions control who can read, publish, manage packages. Roles: Reader, Collaborator, Contributor, Owner. Retention policies auto-delete old package versions. Configure by package type, age, version count. Views (@Release, @Prerelease) filter packages. Promote packages between views.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Feed Permissions and Retention

Console.WriteLine("Feed Permission Roles:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Role          │ Read │ Push │ Unlist│ Delete│ Manage   │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Reader        │  ✓   │      │       │       │          │");
Console.WriteLine("│ Collaborator  │  ✓   │  ✓*  │       │       │          │");
Console.WriteLine("│ Contributor   │  ✓   │  ✓   │   ✓   │       │          │");
Console.WriteLine("│ Owner         │  ✓   │  ✓   │   ✓   │   ✓   │    ✓     │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");
Console.WriteLine("* Collaborator can push packages from upstream sources");

// Set Permissions via CLI
Console.WriteLine(@"
# Add user/group permissions
az devops security permission update \
  --namespace-id '2725d2bc-7f2e-4c94-a49b-2e1d9a3d2f5c' \
  --subject 'user@example.com' \
  --token 'project/feed' \
  --allow-bit 7

# Common permission setup
# Project Contributors -> Contributor role
# Build Service account -> Contributor role (for CI/CD)
# Everyone -> Reader role
");

// Feed Views
Console.WriteLine("Feed Views:");
Console.WriteLine("• @Local - All packages (default)");
Console.WriteLine("• @Prerelease - Prerelease versions only");
Console.WriteLine("• @Release - Stable versions only");

Console.WriteLine(@"
# Promote package to Release view
az artifacts feed promote \
  --feed my-feed \
  --package-name my-package \
  --package-version 1.0.0 \
  --view Release

# Consumers can target specific views
# NuGet: https://pkgs.dev.azure.com/myorg/_packaging/my-feed@Release/nuget/v3/index.json
# npm: https://pkgs.dev.azure.com/myorg/_packaging/my-feed@Release/npm/registry/
");

// Retention Policies
Console.WriteLine("Retention Policy Options:");
Console.WriteLine("• Maximum versions per package");
Console.WriteLine("• Days to keep recently downloaded");
Console.WriteLine("• Days to keep recently published");
Console.WriteLine("• Never delete packages in @Release view");

Console.WriteLine(@"
# Configure retention via REST API
PATCH https://feeds.dev.azure.com/{org}/{project}/_apis/packaging/feeds/{feedId}?api-version=7.0
Content-Type: application/json

{
  ""retentionPolicy"": {
    ""countLimit"": 10,              // Keep max 10 versions per package
    ""daysToKeepRecentlyDownloaded"": 30,  // Keep if downloaded in last 30 days
    ""ageLimitInDays"": 180          // Delete versions older than 180 days
  }
}

# Example retention scenarios:
# Scenario 1: Keep only latest 5 versions
countLimit: 5

# Scenario 2: Keep versions used in last 60 days
daysToKeepRecentlyDownloaded: 60

# Scenario 3: Delete very old packages
ageLimitInDays: 365

# Protected packages (won't be deleted):
# - Packages in @Release view
# - Packages with 'pinned' tag
");

// Audit and Compliance
Console.WriteLine("Feed Audit Trail:");
Console.WriteLine("• Package publish events");
Console.WriteLine("• Package download events");
Console.WriteLine("• Permission changes");
Console.WriteLine("• Retention deletions");
Console.WriteLine("• View promotions");

Console.WriteLine(@"
# Query audit logs
az devops audit-log query \
  --start-time 2024-01-01 \
  --filter-type 'Packaging.Package*'
");`,
        },
      ],
    },
  ],
};
