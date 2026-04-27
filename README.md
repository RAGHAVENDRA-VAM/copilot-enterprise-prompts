<<<<<<< HEAD
# copilot-enterprise-prompts
=======
# Copilot Enterprise Prompts

Enterprise-grade prompt library for generating consistent, secure, and compliant CI/CD YAML pipelines using GitHub Copilot.

## 🚀 Quick Start (Automatic Mode)

### GitHub Copilot Chat - No Manual Prompts Needed!

GitHub Copilot automatically reads `.github/copilot-instructions.md` and follows enterprise standards.

**Just ask naturally:**

```
"Generate Azure DevOps pipeline for Node.js with Snyk"
"Create GitHub Actions workflow for Java with CodeQL"
"Build Python pipeline with SonarQube scanning"
```

Copilot will automatically:
- ✅ Follow YAML coding standards
- ✅ Include SAST security scanning
- ✅ Use proper stage order
- ✅ Apply enterprise governance
- ✅ Generate compliant YAML

### Manual Mode (Optional)

If you prefer manual prompts, use files in `prompts/yaml/` directory.

## Overview

This repository provides governed prompt templates that ensure all developers generate standardized YAML pipelines following enterprise DevOps and security standards.

## Repository Structure

```
copilot-enterprise-prompts/
│
├── governance/                      # Enterprise governance standards
│   ├── yaml-coding-standards.md    # YAML formatting rules
│   ├── sast-security-guidelines.md # Security scanning requirements
│   └── prompt-governance.md        # Prompt change management
│
├── templates/                       # Prompt templates
│   ├── yaml-enterprise-prompt.md   # Master enterprise template
│   └── yaml-prompt-template.md     # Basic template
│
├── prompts/yaml/                    # Language-specific prompts
│   ├── azure-devops/               # Azure DevOps pipelines
│   ├── github-actions/             # GitHub Actions workflows
│   ├── kubernetes/                 # Kubernetes manifests
│   ├── sast-variations/            # SAST tool-specific prompts
│   └── terraform-pipelines/        # Terraform automation
│
├── examples/                        # Reference implementations
│   └── reference-pipelines/        # Standard pipeline examples
│
└── validation/                      # YAML validation rules
    ├── yamllint-config.yaml        # Linting configuration
    └── README.md                   # Validation guide
```

## Quick Start

### 1. Choose Your Prompt

Navigate to the appropriate directory:

- **Azure DevOps:** `prompts/yaml/azure-devops/`
- **GitHub Actions:** `prompts/yaml/github-actions/`
- **Kubernetes:** `prompts/yaml/kubernetes/`

### 2. Select Language/Framework

Choose the prompt file for your technology:

- `nodejs-enterprise-ci-pipeline.md`
- `java-enterprise-ci-pipeline.md`
- `python-enterprise-ci-workflow.md`
- etc.

### 3. Customize Placeholders

Replace these placeholders with your values:

- `<LANGUAGE_VERSION>` - Your language version (e.g., 18, 3.11, 17)
- `<OS_AGENT>` - Your OS (e.g., ubuntu-latest, windows-latest)
- `<SAST_TOOL>` - Your SAST tool (SonarQube, Snyk, CodeQL, Semgrep)

### 4. Copy to Copilot

Copy the entire "Copilot Prompt" section and paste into GitHub Copilot.

### 5. Validate Output

Run yamllint on generated YAML:

```bash
yamllint -c validation/yamllint-config.yaml your-pipeline.yaml
```

## Features

✅ **Consistent Outputs** - Same structure every time
✅ **Security Enforced** - SAST scanning mandatory
✅ **Multi-Platform** - Azure DevOps, GitHub Actions, Kubernetes
✅ **Multi-Language** - Node.js, Java, Python, Go, .NET, React
✅ **Multi-SAST** - SonarQube, Snyk, CodeQL, Semgrep
✅ **Governed** - Enterprise change management
✅ **Validated** - YAML linting rules included
✅ **Flexible** - Version and OS placeholders

## Supported Technologies

### Languages/Frameworks

- Node.js
- Java
- Python
- Go
- .NET
- React

### Platforms

- Azure DevOps
- GitHub Actions
- Kubernetes

### SAST Tools

- SonarQube
- Snyk
- CodeQL
- Semgrep

## SAST Tool Selection

Different projects use different SAST tools. See `prompts/yaml/sast-variations/` for tool-specific prompts.

**Quick Guide:**

| Tool | Best For | Prompt Location |
|------|----------|-----------------|
| SonarQube | Code quality + security | `sast-variations/*-sonarqube.md` |
| Snyk | Dependencies + containers | `sast-variations/*-snyk.md` |
| CodeQL | GitHub native scanning | `sast-variations/*-codeql.md` |
| Semgrep | Fast, custom rules | `sast-variations/*-semgrep.md` |

## Governance

All prompts follow enterprise governance standards:

- **Role Definition** - AI behavior control
- **Coding Standards** - YAML formatting rules
- **Security Requirements** - Mandatory SAST scanning
- **Output Rules** - Strict format control
- **Change Management** - Review and approval process

See `governance/prompt-governance.md` for details.

## Examples

Reference pipeline examples are in `examples/reference-pipelines/`:

- `nodejs-azure-pipeline.yaml`
- `java-azure-pipeline.yaml`
- `python-github-workflow.yaml`

These demonstrate the standard pipeline structure.

## Contributing

### Adding New Prompts

1. Follow the template in `templates/yaml-enterprise-prompt.md`
2. Include role definition and output rules
3. Add placeholders for versions and OS
4. Test with Copilot (generate 3 times)
5. Submit for governance review

### Prompt Change Process

1. Architecture Review
2. DevOps Review
3. Security Review
4. Merge to main
5. Communicate to teams

## Validation

Validate generated YAML files:

```bash
# Install yamllint
pip install yamllint

# Validate single file
yamllint -c validation/yamllint-config.yaml pipeline.yaml

# Validate all YAML files
yamllint -c validation/yamllint-config.yaml ./**/*.yaml
```

## Best Practices

1. **Always use enterprise prompts** for production pipelines
2. **Replace all placeholders** before generating
3. **Validate YAML output** with yamllint
4. **Review security scan** configuration
5. **Test pipeline** before merging

## Support

For questions or issues:

1. Check `governance/` documentation
2. Review `examples/reference-pipelines/`
3. Consult SAST tool guide in `sast-variations/`
4. Contact DevOps platform team

## License

Internal use only - Enterprise proprietary.
>>>>>>> 198fe3e (add the yaml rules files)
