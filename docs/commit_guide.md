# Commit Message Guide

This project uses **commitlint** to enforce conventional commit messages for consistency and readability.

## Format

```
<type>(scope): <description>
```

**Note**: Scope is **required** in this project.

## Basic Example

```bash
feat(publishing): add new article editor component
fix(tms): resolve route calculation bug
docs(config): update deployment guide
```

## Types

| Type | Description | Example |
|------|-------------|---------|
| **feat** | New feature | `feat(partners): add user dashboard` |
| **fix** | Bug fix | `fix(tms): resolve login timeout issue` |
| **docs** | Documentation changes | `docs(config): update README` |
| **style** | Code style changes (formatting, missing semi-colons, etc.) | `style(pnt): format code with prettier` |
| **refactor** | Code restructuring without changing behavior | `refactor(publishing): extract common utilities` |
| **test** | Adding or updating tests | `test(partners): add unit tests for auth service` |
| **chore** | Maintenance tasks (updating dependencies, build tasks, etc.) | `chore(config): update npm dependencies` |
| **build** | Changes that affect the build system or external dependencies | `build(config): update webpack configuration` |
| **ci** | Changes to CI configuration files and scripts | `ci(config): add automated testing workflow` |
| **revert** | Reverts a previous commit | `revert(tms): revert "add experimental feature"` |
| **modify** | General modifications to existing functionality | `modify(pnt): update user interface layout` |

## Scopes

Scope is **required** and must be one of the following:

| Scope | Description | Usage |
|-------|-------------|-------|
| **config** | General project configuration | Build configs, CI/CD, dependencies |
| **publishing** | Publishing application | Features, fixes, and changes for Publishing app |
| **tms** | Transportation Management System | Features, fixes, and changes for TMS app |
| **pnt** | PNT application | Features, fixes, and changes for PNT app |
| **partners** | Partners application | Features, fixes, and changes for Partners app |

## Detailed Examples

### Feature Development
```bash
# Adding new functionality
feat(publishing): implement rich text editor
feat(tms): add real-time tracking dashboard
feat(partners): create partner onboarding workflow
feat(pnt): integrate payment gateway

# API changes
feat(publishing): add REST API for article management
feat(tms): implement GraphQL queries for shipments
```

### Bug Fixes
```bash
# UI/UX fixes
fix(partners): resolve responsive layout issues
fix(pnt): correct form validation errors

# Logic fixes
fix(tms): fix route optimization algorithm
fix(publishing): resolve article publishing workflow

# Performance fixes
fix(config): optimize bundle size for production builds
```

### Documentation
```bash
# API documentation
docs(publishing): add API endpoint documentation
docs(tms): update integration guide

# User guides
docs(partners): create user onboarding guide
docs(pnt): update troubleshooting section
```

### Code Quality
```bash
# Code formatting
style(publishing): apply ESLint formatting rules
style(tms): fix code indentation and spacing

# Refactoring
refactor(partners): extract shared components
refactor(pnt): simplify authentication logic
refactor(config): reorganize utility functions
```

### Testing
```bash
# Unit tests
test(publishing): add unit tests for editor component
test(tms): add integration tests for API endpoints

# E2E tests
test(partners): add end-to-end user journey tests
test(pnt): add automated UI testing
```

### Configuration & Build
```bash
# Dependencies
chore(config): update React to version 18
chore(config): remove unused dependencies

# Build system
build(config): optimize webpack for production
build(config): add support for TypeScript 5.0

# CI/CD
ci(config): add automated deployment pipeline
ci(config): configure code quality checks
```

## Commitlint Configuration

The project uses this commitlint configuration:

```javascript
// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"], // Scope is required
    "scope-enum": [2, "always", ["config", "publishing", "tms", "pnt", "partners"]],
    "type-enum": [
      2,
      "always",
      ["build", "chore", "ci", "docs", "feat", "fix", "refactor", "revert", "style", "test", "modify"],
    ],
  },
}
```

## Writing Good Commit Messages

### Do's ✅

- **Use imperative mood**: "add feature" not "added feature"
- **Be specific**: "fix login button styling" not "fix bug"
- **Keep under 50 characters** for the description
- **Use lowercase** for type and scope
- **Include the scope** (it's required in this project)

### Don'ts ❌

- Don't use past tense: ~~"fixed bug"~~
- Don't be vague: ~~"update stuff"~~
- Don't forget the scope: ~~"feat: add feature"~~
- Don't use wrong scope: ~~"feat(unknown): add feature"~~

### Good Examples ✅

```bash
feat(publishing): add drag-and-drop article editor
fix(tms): resolve GPS coordinate parsing error
docs(config): update installation instructions
style(partners): format components with Prettier
refactor(pnt): extract validation utilities
test(tms): add unit tests for shipping calculator
chore(config): upgrade Node.js to v18
```

### Bad Examples ❌

```bash
feat: added some stuff          # Missing scope, vague description
fixed bug in login              # Missing type format, past tense
Update documentation            # Missing type and scope format
feat(unknown): new feature      # Invalid scope
FEAT(publishing): ADD FEATURE   # Wrong case format
```

## Setting Up Commitlint

### Installation
```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

### Husky Integration (Optional)
```bash
# Install husky
npm install --save-dev husky

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

This will automatically validate commit messages before they are committed.

## Breaking Changes

For breaking changes, add `!` after the scope:

```bash
feat(publishing)!: redesign article API structure
fix(tms)!: change authentication method

# Or add BREAKING CHANGE in the footer
feat(partners): add new user management system

BREAKING CHANGE: User API endpoints have been restructured
```

[Back to README](../README.md)