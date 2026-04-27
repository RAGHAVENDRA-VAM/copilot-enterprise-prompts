# Azure DevOps .NET CI Pipeline

## Purpose
Generate a secure Azure DevOps CI pipeline for a .NET application.

## Requirements

- Use <OS_AGENT> agent
- Install .NET <DOTNET_VERSION>
- Restore dependencies
- Build solution
- Run tests
- Run security scan
- Publish artifacts

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

- Trigger on main branch
- Use <OS_AGENT> agent
- Install .NET <DOTNET_VERSION> SDK
- Run dotnet restore
- Run dotnet build
- Run dotnet test
- Run security scanning step
- Publish build artifacts

## Expected Output

Pipeline should contain:

- trigger
- pool
- steps
- tasks
- artifacts

**Note:** 
- Replace `<DOTNET_VERSION>` with your project's .NET version (e.g., 6, 7, 8)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
