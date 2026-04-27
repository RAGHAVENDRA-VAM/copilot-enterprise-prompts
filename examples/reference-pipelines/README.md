# Reference Pipelines

This directory contains reference pipeline examples that demonstrate the organization's standard pipeline structure.

## Purpose

These reference pipelines serve as:

- **Templates** for new pipeline creation
- **Standards** for pipeline structure
- **Examples** for Copilot prompts
- **Documentation** of best practices

## Standard Pipeline Structure

All pipelines follow this stage order:

1. **build** - Compile and build application
2. **unit_test** - Run unit tests and generate coverage
3. **sast_scan** - Security scanning (SAST tools)
4. **artifact_publish** - Publish build artifacts
5. **deployment** - Deploy to environments (optional)

## Available Reference Pipelines

### Azure DevOps

- `nodejs-azure-pipeline.yaml` - Node.js application
- `java-azure-pipeline.yaml` - Java/Maven application

### GitHub Actions

- `python-github-workflow.yaml` - Python application

## How to Use

### For Developers

1. Review the reference pipeline for your language
2. Copy the structure to your project
3. Customize for your specific needs
4. Maintain the standard stage order

### For Copilot Prompts

Include this in your prompts:

```
Generate pipeline similar to organization reference pipeline structure
from examples/reference-pipelines/
```

## Key Standards

- Use 2-space indentation
- Use descriptive stage names
- Include all required stages
- Add comments for clarity
- Use variables for versions
- No hardcoded secrets

## Customization

You can customize:

- Language versions
- Tool versions
- OS agents/runners
- SAST tools
- Deployment targets

Do NOT change:

- Stage order
- Stage naming convention
- Security requirements
- Output structure
