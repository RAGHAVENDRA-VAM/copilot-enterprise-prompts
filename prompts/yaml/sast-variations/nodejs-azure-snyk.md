# Azure DevOps Node.js CI Pipeline - Snyk

## Purpose
Generate Azure DevOps CI pipeline for Node.js with Snyk scanning.

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

**Pipeline Structure:**
- Trigger on main branch
- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Run npm install
- Run npm test with coverage
- Run Snyk scan with these steps:
  - Install Snyk CLI
  - Authenticate with Snyk token from Azure Key Vault
  - Run snyk test for dependency vulnerabilities
  - Run snyk code test for code vulnerabilities
  - Fail pipeline if high/critical vulnerabilities found
- Build Docker image
- Run snyk container test on Docker image
- Publish build artifacts

**Snyk Configuration:**
- Use Snyk token from secure variables
- Set severity threshold to high
- Generate JSON report
- Upload report as artifact

**Output Format:**
Return only the YAML file with proper indentation.

## Placeholders

- `<NODE_VERSION>` - Node.js version (e.g., 18, 20)
- `<OS_AGENT>` - OS agent (e.g., ubuntu-latest, windows-latest)
