# Git Flow Guide

This project follows the **Git Flow** branching strategy to ensure a clean and organized development process.

## Branch Structure

### 🔗 Main Branches

- **main**: Production-ready code. Only stable and tested code should be merged here.
- **develop**: The default branch for development. New features and fixes are merged here before release.
- **test2**: For testing the application in a secondary test environment before merging into staging.
- **staging**: For testing and quality assurance before deploying to production.

### 🌿 Supporting Branches

- **feature/**: Used for developing new features. Each feature should have its own branch.
  - Example: `feature/add-cart`, `feature/user-authentication`
- **bugfix/**: For fixing specific bugs. Each bug fix should have its own branch.
  - Example: `bugfix/fix-login-error`, `bugfix/resolve-payment-issue`
- **hotfix/**: For urgent fixes on the production code.
  - Example: `hotfix/fix-critical-bug`, `hotfix/security-patch`

## Workflow

### 1. Starting New Work

#### For Features
```bash
# Switch to develop branch
git checkout develop

# Pull latest changes
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name
```

#### For Bug Fixes
```bash
# Switch to develop branch
git checkout develop

# Pull latest changes
git pull origin develop

# Create bugfix branch
git checkout -b bugfix/fix-description
```

#### For Hotfixes
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Create hotfix branch
git checkout -b hotfix/critical-fix-description
```

### 2. Working on Your Branch

```bash
# Make your changes
git add .

# Commit with proper message format (see commit guide)
git commit -m "feat(scope): description of changes"

# Push to remote repository
git push origin feature/your-feature-name
```

### 3. Creating Pull Requests

1. **Push your branch** to the remote repository
2. **Create a Pull Request** via Bitbucket/GitHub interface
3. **Target the correct branch**:
   - Features/Bugfixes → `develop`
   - Hotfixes → `main`
4. **Add reviewers** and request code review
5. **Ensure CI/CD passes** before merging

### 4. Code Review Process

1. **Self-review** your changes before requesting review
2. **Address feedback** from reviewers
3. **Update your branch** if needed:
   ```bash
   git add .
   git commit -m "fix: address review comments"
   git push origin feature/your-feature-name
   ```

### 5. Merging Process

#### Feature/Bugfix Branches
```
feature/bugfix → develop → test2 → staging → main
```

#### Hotfix Branches
```
hotfix → main (and also merge back to develop)
```

### 6. After Merging

```bash
# Switch back to develop
git checkout develop

# Pull latest changes
git pull origin develop

# Delete local feature branch
git branch -d feature/your-feature-name

# Delete remote feature branch (optional)
git push origin --delete feature/your-feature-name
```

## Branch Naming Conventions

### Feature Branches
- `feature/add-user-dashboard`
- `feature/implement-payment-gateway`
- `feature/responsive-mobile-layout`

### Bugfix Branches
- `bugfix/fix-login-validation`
- `bugfix/resolve-memory-leak`
- `bugfix/correct-calculation-error`

### Hotfix Branches
- `hotfix/security-vulnerability`
- `hotfix/critical-performance-issue`
- `hotfix/data-corruption-fix`

## Best Practices

### Do's ✅
- Always create branches from the appropriate base branch
- Keep branches focused on a single feature/fix
- Write descriptive branch names
- Regularly sync with the base branch to avoid conflicts
- Test your changes before creating PR
- Write meaningful commit messages

### Don'ts ❌
- Don't work directly on main or develop branches
- Don't create overly large features in a single branch
- Don't forget to pull latest changes before starting work
- Don't mix unrelated changes in the same branch
- Don't push broken code to shared branches

## Conflict Resolution

### When Conflicts Occur
```bash
# Pull latest changes from base branch
git checkout develop
git pull origin develop

# Switch back to your feature branch
git checkout feature/your-feature-name

# Merge or rebase with develop
git merge develop
# or
git rebase develop

# Resolve conflicts in your editor
# After resolving conflicts:
git add .
git commit -m "resolve: merge conflicts with develop"
git push origin feature/your-feature-name
```

## Release Process

### Regular Releases
1. **develop** → **test2** (QA testing)
2. **test2** → **staging** (Pre-production testing)
3. **staging** → **main** (Production release)

### Hotfix Releases
1. **hotfix** → **main** (Emergency production fix)
2. **main** → **develop** (Back-merge to keep develop updated)

## Branch Protection Rules

Recommended protection rules for main branches:

- **main**: Require PR reviews, status checks, no direct pushes
- **develop**: Require PR reviews, status checks
- **staging**: Require PR reviews from QA team
- **test2**: Require basic status checks

[Back to README](../README.md)