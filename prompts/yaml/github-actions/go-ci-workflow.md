# GitHub Actions Go CI Workflow

## Purpose
Generate a GitHub Actions workflow for a Go application.

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install Go <GO_VERSION>
- Build application
- Run tests
- Run linting

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Go <GO_VERSION>
- Runs go mod download
- Runs go build
- Runs go test with coverage
- Runs golangci-lint

## Expected Output

Workflow should contain:

- name
- on
- jobs
- steps
- actions

**Note:** Replace `<GO_VERSION>` with your project's Go version (e.g., 1.21, 1.22)
