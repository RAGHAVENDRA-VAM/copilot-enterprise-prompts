# YAML Validation

This directory contains validation rules for generated YAML pipelines.

## yamllint Configuration

The `yamllint-config.yaml` file defines formatting and syntax rules for all YAML files.

## Rules Enforced

- **Indentation:** 2 spaces
- **Line Length:** Max 120 characters
- **Trailing Spaces:** Warning level
- **Key Duplicates:** Not allowed
- **New Line at EOF:** Required
- **Truthy Values:** Only 'true' and 'false'

## How to Use

### Install yamllint

```bash
pip install yamllint
```

### Validate a YAML File

```bash
yamllint -c validation/yamllint-config.yaml your-pipeline.yaml
```

### Validate All YAML Files

```bash
yamllint -c validation/yamllint-config.yaml prompts/yaml/**/*.yaml
```

## CI/CD Integration

### Azure DevOps

```yaml
- script: |
    pip install yamllint
    yamllint -c validation/yamllint-config.yaml $(Build.SourcesDirectory)/**/*.yaml
  displayName: 'Validate YAML Files'
```

### GitHub Actions

```yaml
- name: Validate YAML
  run: |
    pip install yamllint
    yamllint -c validation/yamllint-config.yaml ./**/*.yaml
```

## Pre-commit Hook

Add to `.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/adrienverge/yamllint
    rev: v1.32.0
    hooks:
      - id: yamllint
        args: [-c=validation/yamllint-config.yaml]
```

## Customization

Edit `yamllint-config.yaml` to adjust rules for your organization's standards.
