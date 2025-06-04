# Project Name

This is a monorepo built with Nx, including multiple independent applications managed within the same workspace.

## Overview

This project uses Nx to manage a monorepo with the following applications:

- **PNT**
- **Partners**
- **TMS**
- **Publishing**

## Project Structure

```
├── apps/
│   ├── pnt/                 # PNT Application
│   ├── partners/            # Partners Application
│   ├── tms/                 # TMS Application
│   └── publishing/          # Publishing Application
├── libs/                    # Shared libraries
├── tools/                   # Custom tools and scripts
├── docs/                    # Documentation
│   ├── installation.md     # Installation guide
│   ├── git-flow.md         # Git workflow
│   └── commit-guide.md     # Commit message guide
├── nx.json                  # Nx configuration
├── package.json             # Dependencies
└── README.md               # This documentation
```

## Quick Start

### System Requirements
- Node.js >= 22.14.0
- npm >= 8.x or yarn >= 1.22.x
- Nx CLI

### Installation
```bash
git clone [repository-url]
cd [project-name]
npm install
```

### Running Applications
```bash
# Run specific application
nx serve pnt
nx serve partners
nx serve tms
nx serve publishing
```

## Documentation

- 📚 [Installation Guide](./docs/installation.md) - Detailed setup instructions
- 🌊 [Git Flow Guide](./docs/git-flow.md) - Branching strategy and workflow
- 💬 [Commit Message Guide](./docs/commit-guide.md) - Commit conventions and rules
- 🏗️ [Development Guide](./docs/development.md) - Development best practices

## Quick Commands

```bash
# Build all applications
nx run-many --target=build --all

# Run tests
nx run-many --target=test --all

# View dependency graph
nx graph

# Run affected tests
nx affected:test
```

## Application Details

### PNT
...

### Partners
...

### TMS (Transportation Management System)
...

### Publishing
...

## Contributing

Please read our [Git Flow Guide](./docs/git-flow.md) and [Commit Message Guide](./docs/commit-guide.md) before contributing.

1. Fork the repository
2. Create a feature branch from develop
3. Follow our commit message conventions
4. Create a Pull Request to the develop branch

## Reference Documentation

- [Nx Documentation](https://nx.dev)
- [Nx Commands](https://nx.dev/nx-api/nx)
- [Monorepo Best Practices](https://nx.dev/concepts/more-concepts/monorepo-nx-enterprise)

## License

[Add license information if needed]

## Contact

[Add contact information if needed]
