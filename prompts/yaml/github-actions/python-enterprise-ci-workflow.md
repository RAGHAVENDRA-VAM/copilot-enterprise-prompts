# GitHub Actions Python CI Workflow (Enterprise)

## Purpose
Generate a secure, enterprise-compliant GitHub Actions workflow for a Python application.

## Governance Standards
This prompt follows: [YAML Coding Standards](../../../governance/yaml-coding-standards.md) and [SAST Security Guidelines](../../../governance/sast-security-guidelines.md)

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install Python <PYTHON_VERSION>
- Run tests with coverage
- Run SAST security scan
- Upload artifacts

## Copilot Prompt

Generate an enterprise-grade GitHub Actions YAML workflow with the following:

**Coding Standards:**
- Use 2-space indentation
- Use lowercase keys
- Add descriptive comments
- No hardcoded secrets

**Workflow Structure:**
- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Python <PYTHON_VERSION>
- Installs dependencies from requirements.txt
- Runs pytest with coverage
- Runs flake8 linting
- Runs SAST security scan (use CodeQL or Snyk)
- Fail workflow if high/critical vulnerabilities found
- Uploads coverage report

**Security Requirements:**
- Include CodeQL analysis or Snyk scan
- Scan dependencies for vulnerabilities
- No hardcoded credentials
- Use GitHub Secrets for sensitive data

**Output Format:**
Return only the YAML file with proper indentation and comments.

## Expected Output

Workflow should contain:

- name
- on (triggers)
- jobs:
  - build
  - test
  - security-scan
- steps with proper naming
- artifacts upload

**Note:** 
- Replace `<PYTHON_VERSION>` with your project's Python version (e.g., 3.10, 3.11, 3.12)
- Replace `<OS_RUNNER>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
