import type { Topic } from "../../../types";

export const azureReposTopic: Topic = {
  id: "azure-repos",
  name: "Azure Repos (Git)",
  questions: [
    {
      id: "q1",
      question: "What is Azure Repos and what version control systems does it support?",
      answer:
        "Azure Repos provides cloud-hosted Git repositories with unlimited private repos. Supports Git (distributed) and TFVC (centralized - legacy). Features: branch policies, pull requests, code reviews, branch protection, integration with Azure Pipelines. Free for up to 5 users, unlimited for Visual Studio subscribers.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Repos Overview

Console.WriteLine("Azure Repos Features:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Feature              │ Description                      │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Git Repositories     │ Unlimited private repos          │");
Console.WriteLine("│ Branch Policies      │ Protect branches with rules      │");
Console.WriteLine("│ Pull Requests        │ Code review workflow             │");
Console.WriteLine("│ Code Search          │ Search across all repos          │");
Console.WriteLine("│ Web Editor           │ Edit files in browser            │");
Console.WriteLine("│ SSH Support          │ Clone via SSH                    │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Git vs TFVC
Console.WriteLine("Git vs TFVC:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Git (Recommended)    │ TFVC (Legacy)                    │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Distributed          │ Centralized                      │");
Console.WriteLine("│ Full local history   │ Server-based history             │");
Console.WriteLine("│ Fast branching       │ Slower branching                 │");
Console.WriteLine("│ Offline commits      │ Requires server connection       │");
Console.WriteLine("│ Industry standard    │ Microsoft-specific               │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Clone Repository
Console.WriteLine(@"
# Clone from Azure Repos
git clone https://dev.azure.com/myorg/myproject/_git/myrepo

# Clone with SSH
git clone git@ssh.dev.azure.com:v3/myorg/myproject/myrepo

# Set upstream for existing repo
git remote add origin https://dev.azure.com/myorg/myproject/_git/myrepo
git push -u origin main
");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you configure branch policies in Azure Repos?",
      answer:
        "Branch policies protect important branches. Options: minimum reviewers, linked work items, comment resolution, build validation, status checks, merge strategies. Applied per branch (main, release/*). Prevents direct pushes, requires PRs. Can be bypassed by admins if needed.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Repos Branch Policies

Console.WriteLine("Branch Policy Options:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Policy                        │ Purpose                 │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Require minimum reviewers     │ Code review enforcement │");
Console.WriteLine("│ Check for linked work items   │ Traceability            │");
Console.WriteLine("│ Check for comment resolution  │ Address all feedback    │");
Console.WriteLine("│ Limit merge types             │ Enforce merge strategy  │");
Console.WriteLine("│ Build validation              │ CI must pass            │");
Console.WriteLine("│ Status checks                 │ External validations    │");
Console.WriteLine("│ Automatically include reviewers│ Required reviewers     │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Configure via CLI
Console.WriteLine(@"
# Create minimum reviewers policy
az repos policy approver-count create \
  --branch main \
  --repository-id <repo-id> \
  --project MyProject \
  --minimum-approver-count 2 \
  --creator-vote-counts false \
  --allow-downvotes false \
  --reset-on-source-push true

# Require linked work items
az repos policy work-item-linking create \
  --branch main \
  --repository-id <repo-id> \
  --project MyProject \
  --blocking true

# Add build validation
az repos policy build create \
  --branch main \
  --repository-id <repo-id> \
  --project MyProject \
  --build-definition-id <pipeline-id> \
  --display-name 'CI Build' \
  --queue-on-source-update-only true \
  --valid-duration 720

# Require comment resolution
az repos policy comment-required create \
  --branch main \
  --repository-id <repo-id> \
  --project MyProject \
  --blocking true
");

// Merge Strategies
Console.WriteLine("Merge Strategies:");
Console.WriteLine("• Merge (no fast-forward) - Preserves branch history");
Console.WriteLine("• Squash merge - Combines commits into one");
Console.WriteLine("• Rebase - Linear history, no merge commit");
Console.WriteLine("• Semi-linear merge - Rebase + merge commit");

// Auto-complete
Console.WriteLine("PR Auto-complete:");
Console.WriteLine("• Set when creating PR");
Console.WriteLine("• Merges automatically when all policies pass");
Console.WriteLine("• Optional: delete source branch after merge");`,
        },
      ],
    },
    {
      id: "q3",
      question: "How do you perform effective code reviews using Pull Requests?",
      answer:
        "Pull Requests (PRs) enable code review workflow. Features: diff view, inline comments, threads, suggestions, required reviewers, draft PRs, auto-complete. Link to work items for traceability. Use PR templates for consistency. Reviewers can Approve, Approve with suggestions, Wait for author, or Reject.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Repos Pull Request Workflow

Console.WriteLine("Pull Request Lifecycle:");
Console.WriteLine("1. Create feature branch");
Console.WriteLine("2. Make changes and commit");
Console.WriteLine("3. Push branch to Azure Repos");
Console.WriteLine("4. Create Pull Request");
Console.WriteLine("5. Reviewers provide feedback");
Console.WriteLine("6. Address comments, push updates");
Console.WriteLine("7. Reviewers approve");
Console.WriteLine("8. Merge to target branch");

// Review Vote Options
Console.WriteLine("Reviewer Votes:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Vote                    │ Meaning                       │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Approved                │ LGTM, ready to merge          │");
Console.WriteLine("│ Approved with suggestions│ Minor issues, can merge      │");
Console.WriteLine("│ Wait for author         │ Changes needed before approve │");
Console.WriteLine("│ Rejected                │ Significant issues            │");
Console.WriteLine("│ No vote                 │ Just comments, no decision    │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// CLI Commands
Console.WriteLine(@"
# Create pull request
az repos pr create \
  --source-branch feature/my-feature \
  --target-branch main \
  --title 'Add new feature' \
  --description 'Implements feature X' \
  --work-items 123 456 \
  --reviewers user@example.com

# List active PRs
az repos pr list --status active

# Add reviewer
az repos pr reviewer add --id <pr-id> --reviewers user@example.com

# Approve PR
az repos pr set-vote --id <pr-id> --vote approve

# Complete (merge) PR
az repos pr update --id <pr-id> --status completed

# Create draft PR (not ready for review)
az repos pr create \
  --source-branch feature/wip \
  --target-branch main \
  --title '[WIP] Work in progress' \
  --draft
");

// PR Templates
Console.WriteLine("PR Template (pull_request_template.md):");
Console.WriteLine(@"
## Description
<!-- Describe your changes -->

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated

## Related Work Items
AB#123
");

// Code Review Best Practices
Console.WriteLine("Code Review Best Practices:");
Console.WriteLine("• Keep PRs small and focused");
Console.WriteLine("• Provide constructive feedback");
Console.WriteLine("• Use suggestions for simple fixes");
Console.WriteLine("• Review within 24 hours");
Console.WriteLine("• Automate style checks (linting)");`,
        },
      ],
    },
    {
      id: "q4",
      question: "What are Git hooks and how do you use them with Azure Repos?",
      answer:
        "Git hooks are scripts that run at specific Git events (pre-commit, pre-push, post-merge). Client-side hooks run locally. Server-side hooks not directly supported in Azure Repos - use branch policies and pipelines instead. Husky is popular for managing client-side hooks in Node.js projects.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Git Hooks with Azure Repos

Console.WriteLine("Common Git Hooks:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Hook          │ When it runs                           │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ pre-commit    │ Before commit is created               │");
Console.WriteLine("│ prepare-commit│ Before commit message editor           │");
Console.WriteLine("│ commit-msg    │ After commit message entered           │");
Console.WriteLine("│ pre-push      │ Before push to remote                  │");
Console.WriteLine("│ post-merge    │ After merge completes                  │");
Console.WriteLine("│ pre-rebase    │ Before rebase starts                   │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Pre-commit hook example (bash)
Console.WriteLine(@"
#!/bin/sh
# .git/hooks/pre-commit

# Run linting
echo 'Running ESLint...'
npm run lint
if [ $? -ne 0 ]; then
  echo 'Lint failed. Please fix errors before committing.'
  exit 1
fi

# Run tests
echo 'Running tests...'
npm test
if [ $? -ne 0 ]; then
  echo 'Tests failed. Please fix before committing.'
  exit 1
fi

echo 'Pre-commit checks passed!'
exit 0
");

// Using Husky (Node.js)
Console.WriteLine(@"
// package.json - Husky setup
{
  ""scripts"": {
    ""prepare"": ""husky install"",
    ""lint"": ""eslint src/"",
    ""test"": ""jest""
  },
  ""devDependencies"": {
    ""husky"": ""^8.0.0"",
    ""lint-staged"": ""^13.0.0""
  },
  ""lint-staged"": {
    ""*.{ts,tsx}"": [""eslint --fix"", ""prettier --write""],
    ""*.{json,md}"": ""prettier --write""
  }
}

// .husky/pre-commit
#!/bin/sh
. ""$(dirname ""$0"")/_/husky.sh""
npx lint-staged

// .husky/commit-msg
#!/bin/sh
. ""$(dirname ""$0"")/_/husky.sh""
npx commitlint --edit $1
");

// Commit message validation
Console.WriteLine(@"
// commitlint.config.js - Conventional Commits
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 
      'refactor', 'test', 'chore', 'revert'
    ]],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100]
  }
};

// Valid commit messages:
// feat: add user authentication
// fix: resolve null reference in OrderService
// docs: update API documentation
// refactor: extract validation logic
");

// Server-side alternatives in Azure DevOps
Console.WriteLine("Azure DevOps Alternatives to Server Hooks:");
Console.WriteLine("• Branch policies - Build validation, required reviewers");
Console.WriteLine("• Pipeline triggers - Run on PR creation");
Console.WriteLine("• Service hooks - Notify external services");
Console.WriteLine("• Azure Functions - Custom webhook handlers");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you implement Git branching strategies in Azure Repos?",
      answer:
        "Common strategies: GitFlow (feature/develop/release/hotfix), GitHub Flow (feature branches + main), Trunk-Based (short-lived branches). Azure Repos supports all via branch policies. Choose based on team size, release frequency, CI/CD maturity. Trunk-based recommended for continuous deployment.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Git Branching Strategies

Console.WriteLine("GitFlow Strategy:");
Console.WriteLine(@"
main (production) ─────●─────────────●───────────●────
                        \\           /           /
release/1.0 ─────────────●─────────●           /
                          \\       /           /
develop ──────●────●───────●─────●───────────●────
               \\    \\       /
feature/A ──────●────●─────●
                      \\
feature/B ─────────────●───●
");

Console.WriteLine("GitFlow Branches:");
Console.WriteLine("• main - Production-ready code");
Console.WriteLine("• develop - Integration branch");
Console.WriteLine("• feature/* - New features");
Console.WriteLine("• release/* - Release preparation");
Console.WriteLine("• hotfix/* - Production fixes");

Console.WriteLine("GitHub Flow (Simpler):");
Console.WriteLine(@"
main ──────●─────●─────●─────●─────●────
            \\   /       \\   /
feature/A ───●─●         \\ /
                          X
feature/B ───────────────●─●
");

Console.WriteLine("GitHub Flow Rules:");
Console.WriteLine("• main is always deployable");
Console.WriteLine("• Branch from main for features");
Console.WriteLine("• Open PR for discussion");
Console.WriteLine("• Merge to main and deploy");

Console.WriteLine("Trunk-Based Development:");
Console.WriteLine(@"
main ──●──●──●──●──●──●──●──●──●──●──
        \\  /    \\  /    \\  /
         ●        ●        ●
       (short-lived feature branches)
");

Console.WriteLine("Trunk-Based Rules:");
Console.WriteLine("• Very short-lived branches (< 1 day)");
Console.WriteLine("• Frequent integration to main");
Console.WriteLine("• Feature flags for incomplete work");
Console.WriteLine("• Continuous deployment");

// Branch naming conventions
Console.WriteLine(@"
Branch Naming Conventions:
feature/ABC-123-add-login       # Feature with work item
bugfix/ABC-456-fix-null-ref     # Bug fix
hotfix/critical-security-fix    # Production hotfix
release/v1.2.0                  # Release branch
experiment/new-algorithm        # Experimental work
");

// Configure branch policies for strategy
Console.WriteLine(@"
# Protect main branch (GitFlow/GitHub Flow)
az repos policy approver-count create --branch main --minimum-approver-count 2
az repos policy build create --branch main --build-definition-id <ci-pipeline>

# Protect develop branch (GitFlow)
az repos policy approver-count create --branch develop --minimum-approver-count 1

# Allow only squash merges to main
az repos policy merge-strategy create \
  --branch main \
  --repository-id <repo-id> \
  --allow-squash true \
  --allow-no-fast-forward false \
  --allow-rebase false
");`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you migrate repositories to Azure Repos?",
      answer:
        "Import from GitHub, Bitbucket, GitLab, or any Git URL. Use Import Repository feature in Azure DevOps UI or git commands. Preserves full history. For large repos, use Git LFS for large files. Migrate branch policies and CI/CD separately. Can mirror repos for gradual migration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Repository Migration to Azure Repos

Console.WriteLine("Migration Options:");
Console.WriteLine("1. Import via Azure DevOps UI");
Console.WriteLine("2. Clone and push manually");
Console.WriteLine("3. Use az repos import command");

// Method 1: Azure DevOps UI
Console.WriteLine(@"
Azure DevOps Portal:
1. Go to Repos > Files
2. Click 'Import repository'
3. Select source type (Git, GitHub, etc.)
4. Enter clone URL
5. Provide credentials if private
6. Click 'Import'
");

// Method 2: Manual clone and push
Console.WriteLine(@"
# Clone from source (GitHub example)
git clone --mirror https://github.com/org/repo.git temp-clone
cd temp-clone

# Add Azure Repos as new remote
git remote add azure https://dev.azure.com/myorg/myproject/_git/myrepo

# Push all branches and tags
git push azure --all
git push azure --tags

# Cleanup
cd ..
rm -rf temp-clone
");

// Method 3: Azure CLI
Console.WriteLine(@"
# Import from GitHub
az repos import create \
  --git-source-url https://github.com/org/repo.git \
  --project MyProject \
  --repository MyRepo

# Import from private repo (with PAT)
az repos import create \
  --git-source-url https://github.com/org/private-repo.git \
  --project MyProject \
  --repository MyRepo \
  --requires-authorization
");

// Large File Storage (LFS)
Console.WriteLine(@"
# Install Git LFS
git lfs install

# Track large files before migration
git lfs track '*.zip'
git lfs track '*.psd'
git lfs track 'assets/**'

# .gitattributes
*.zip filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
assets/** filter=lfs diff=lfs merge=lfs -text

# Migrate existing large files to LFS
git lfs migrate import --include='*.zip,*.psd'
");

// Migration Checklist
Console.WriteLine("Migration Checklist:");
Console.WriteLine("☐ Export/document current branch policies");
Console.WriteLine("☐ Document current CI/CD configuration");
Console.WriteLine("☐ Notify team of migration timeline");
Console.WriteLine("☐ Import repository");
Console.WriteLine("☐ Verify all branches and tags");
Console.WriteLine("☐ Set up branch policies");
Console.WriteLine("☐ Recreate CI/CD pipelines");
Console.WriteLine("☐ Update local clones with new remote");
Console.WriteLine("☐ Archive old repository");

// Update local repositories
Console.WriteLine(@"
# For team members - update remote URL
git remote set-url origin https://dev.azure.com/myorg/myproject/_git/myrepo

# Verify
git remote -v
");`,
        },
      ],
    },
  ],
};
