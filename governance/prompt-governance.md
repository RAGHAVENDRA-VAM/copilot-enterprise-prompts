# Prompt Governance Model

## Overview

All prompts in this repository must follow enterprise governance standards to ensure consistent, secure, and compliant YAML outputs from GitHub Copilot.

## Prompt Requirements

All prompts must follow:

1. **Role Definition** - Define AI behavior and expertise level
2. **Coding Standards** - Reference YAML formatting rules
3. **Pipeline Structure** - Enforce standardized stage order
4. **Security Requirements** - Mandate SAST scanning
5. **Output Format Rules** - Control AI response format

## Prompt Structure Standard

Every prompt must include these sections:

### 1. Role Definition
```
You are a senior DevOps platform engineer responsible for generating
enterprise-grade CI/CD YAML pipelines.
```

### 2. Objective
Clear statement of what needs to be generated.

### 3. Standards Reference
Link to governance documents:
- YAML Coding Standards
- SAST Security Guidelines

### 4. Requirements
Specific technical requirements for the pipeline.

### 5. Output Rules
Strict formatting constraints for AI response.

## Prompt Change Process

### Changes Require Review By:

- **Architecture Review** - Structural changes, new patterns
- **DevOps Review** - Pipeline stages, tooling changes
- **Security Review** - SAST tools, security requirements

### Change Approval Workflow:

1. Create prompt draft
2. Submit for architecture review
3. Submit for DevOps review
4. Submit for security review
5. Merge to main branch
6. Communicate changes to teams

## Prompt Versioning

- All prompts are version controlled in Git
- Breaking changes require major version bump
- Document changes in CHANGELOG.md

## Quality Gates

Before merging new prompts:

- [ ] Includes role definition
- [ ] References governance standards
- [ ] Includes output format rules
- [ ] Tested with Copilot
- [ ] Generates consistent output
- [ ] Passes YAML validation
- [ ] Includes security requirements
- [ ] Uses placeholders for versions/OS

## Prompt Testing

Test each prompt by:

1. Copy prompt to Copilot
2. Generate YAML 3 times
3. Verify consistency across outputs
4. Validate YAML syntax
5. Check security requirements included

## Maintenance

- Review prompts quarterly
- Update for new tool versions
- Incorporate team feedback
- Archive deprecated prompts
