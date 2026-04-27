# Enterprise Copilot Prompts - Governance

## Why Governance Matters

To ensure consistent, secure, and compliant YAML outputs from GitHub Copilot across your enterprise, we've implemented:

1. **Coding Standards** - Consistent formatting and structure
2. **Security Requirements** - Mandatory SAST scanning
3. **Structured Prompts** - Repeatable, predictable outputs

## Structure

```
governance/
├── yaml-coding-standards.md    # YAML formatting and structure rules
└── sast-security-guidelines.md # Security scanning requirements

prompts/
└── yaml/
    ├── azure-devops/
    │   ├── *-ci-pipeline.md           # Basic prompts
    │   └── *-enterprise-ci-pipeline.md # Enterprise prompts with governance
    └── github-actions/
        ├── *-ci-workflow.md           # Basic prompts
        └── *-enterprise-ci-workflow.md # Enterprise prompts with governance
```

## How to Use

### For Developers

1. Choose the appropriate enterprise prompt file
2. Replace version placeholders (e.g., `<NODE_VERSION>`)
3. Copy the entire "Copilot Prompt" section
4. Paste into GitHub Copilot
5. Review generated YAML for compliance

### For Teams

1. Review governance standards in `governance/` folder
2. Customize standards for your organization
3. Update prompt templates to match your requirements
4. Share prompts across teams for consistency

## Benefits

 **Consistency** - All developers get same output structure
 **Security** - SAST scanning enforced in every pipeline
 **Compliance** - Meets enterprise DevSecOps requirements
 **Reusability** - Copy-paste prompts across projects
 **Maintainability** - Central governance standards

## Governance Files

- **yaml-coding-standards.md** - Formatting, structure, naming conventions
- **sast-security-guidelines.md** - Security scanning tools and thresholds
- **yaml-enterprise-prompt.md** - Master template for all enterprise prompts
