# Installation Guide

## System Requirements

- Node.js >= 16.x
- npm >= 8.x or yarn >= 1.22.x
- Nx CLI

## Installation Steps

### 1. Clone the Repository

```bash
git clone [repository-url]
cd [project-name]
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Install Nx CLI (if not already installed)

```bash
npm install -g nx
# or
yarn global add nx
```

## Usage

### Running Applications

```bash
# Run PNT application
nx serve pnt

# Run Partners application
nx serve partners

# Run TMS application
nx serve tms

# Run Publishing application
nx serve publishing

# Run all applications in parallel
nx run-many --target=serve --all --parallel
```

### Building Applications

```bash
# Build all applications
nx run-many --target=build --all

# Build specific application
nx build pnt
nx build partners
nx build tms
nx build publishing

# Build for production
nx run-many --target=build --all --configuration=production
```

### Running Tests

```bash
# Run tests for all applications
nx run-many --target=test --all

# Run tests for specific application
nx test pnt
nx test partners
nx test tms
nx test publishing
```

### Linting Code

```bash
# Lint all applications
nx run-many --target=lint --all

# Lint specific application
nx lint pnt
nx lint partners
nx lint tms
nx lint publishing
```

## Useful Scripts

```bash
# View dependency graph
nx graph

# View available projects
nx show projects

# Run affected tests (only test what has changed)
nx affected:test

# Build affected apps
nx affected:build

# Show what will be affected by changes
nx affected:apps
nx affected:libs
```

## Development vs Production

### Development Environment
```bash
# Start development servers
nx run-many --target=serve --all --parallel

# Watch mode for specific app
nx serve pnt --watch
```

### Production Build
```bash
# Build all apps for production
nx run-many --target=build --all --configuration=production

# Build specific app for production
nx build pnt --configuration=production
```

## Troubleshooting

### Common Issues

1. **Node version compatibility**
   - Ensure you're using Node.js >= 16.x
   - Use `node --version` to check your current version

2. **Port conflicts**
   - If ports are already in use, Nx will automatically assign different ports
   - You can specify custom ports: `nx serve pnt --port=4201`

3. **Cache issues**
   - Clear Nx cache: `nx reset`
   - Clear node_modules: `rm -rf node_modules && npm install`

4. **Memory issues**
   - Increase Node.js memory limit: `export NODE_OPTIONS="--max-old-space-size=8192"`

### Getting Help

- Check the [Nx Documentation](https://nx.dev)
- Run `nx --help` for available commands
- Use `nx [command] --help` for command-specific help

[Back to README](../README.md)