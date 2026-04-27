# Azure DevOps Go CI Pipeline

## Purpose
Generate a secure Azure DevOps CI pipeline for a Go application.

## Requirements

- Use <OS_AGENT> agent
- Install Go <GO_VERSION>
- Build application
- Run tests
- Run security scan
- Build Docker image
- Publish artifacts

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

- Trigger on main branch
- Use <OS_AGENT> agent
- Install Go <GO_VERSION>
- Run go mod download
- Run go build
- Run go test
- Run security scanning step
- Build Docker image
- Publish build artifacts

## Expected Output

Pipeline should contain:

- trigger
- pool
- steps
- tasks
- artifacts

**Note:** 
- Replace `<GO_VERSION>` with your project's Go version (e.g., 1.21, 1.22)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
