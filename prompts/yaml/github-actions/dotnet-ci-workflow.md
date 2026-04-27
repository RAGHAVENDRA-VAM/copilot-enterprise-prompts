# GitHub Actions .NET CI Workflow

## Purpose
Generate a GitHub Actions workflow for a .NET application.

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install .NET <DOTNET_VERSION>
- Build solution
- Run tests
- Publish artifacts

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up .NET <DOTNET_VERSION> SDK
- Runs dotnet restore
- Runs dotnet build
- Runs dotnet test
- Publishes artifacts

## Expected Output

Workflow should contain:

- name
- on
- jobs
- steps
- actions

**Note:** 
- Replace `<DOTNET_VERSION>` with your project's .NET version (e.g., 6, 7, 8)
- Replace `<OS_RUNNER>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
