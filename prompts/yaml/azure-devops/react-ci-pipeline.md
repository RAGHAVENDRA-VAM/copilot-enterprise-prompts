# Azure DevOps React CI Pipeline

## Purpose
Generate a secure Azure DevOps CI pipeline for a React application.

## Requirements

- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Install dependencies
- Run linting
- Run tests
- Build production bundle
- Publish artifacts

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

- Trigger on main branch
- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Run npm install
- Run npm run lint
- Run npm test
- Run npm run build
- Publish build artifacts

## Expected Output

Pipeline should contain:

- trigger
- pool
- steps
- tasks
- artifacts

**Note:** 
- Replace `<NODE_VERSION>` with your project's Node.js version (e.g., 18, 20)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
