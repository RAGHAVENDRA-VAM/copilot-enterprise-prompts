# Azure DevOps Node.js CI Pipeline (Enterprise)

## Purpose
Generate a secure, enterprise-compliant Azure DevOps CI pipeline for a Node.js application.

## Governance Standards
This prompt follows: [YAML Coding Standards](../../../governance/yaml-coding-standards.md) and [SAST Security Guidelines](../../../governance/sast-security-guidelines.md)

## Requirements

- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Install dependencies
- Run unit tests
- Run SAST security scan
- Build Docker image
- Publish artifacts

## Copilot Prompt

Generate an enterprise-grade Azure DevOps YAML pipeline with the following:

**Coding Standards:**
- Use 2-space indentation
- Use lowercase keys
- Add descriptive comments
- No hardcoded secrets

**Pipeline Structure:**
- Trigger on main branch
- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Run npm install
- Run npm test with coverage
- Run SAST security scan (use Snyk or SonarQube)
- Fail pipeline if high/critical vulnerabilities found
- Build Docker image
- Publish build artifacts

**Security Requirements:**
- Include SAST scanning stage
- Scan dependencies for vulnerabilities
- No hardcoded credentials
- Use Azure Key Vault for secrets

**Output Format:**
Return only the YAML file with proper indentation and comments.

## Expected Output

Pipeline should contain:

- trigger
- pool
- variables
- stages:
  - build
  - test
  - security-scan
  - publish
- tasks with proper naming
- artifacts

**Note:** 
- Replace `<NODE_VERSION>` with your project's Node.js version (e.g., 18, 20)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
