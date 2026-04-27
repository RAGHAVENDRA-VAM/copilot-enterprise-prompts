# GitHub Actions Python CI Workflow - Snyk

## Purpose
Generate GitHub Actions workflow for Python with Snyk scanning.

## Copilot Prompt

Generate a GitHub Actions YAML workflow with the following:

**Workflow Structure:**
- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Python <PYTHON_VERSION>
- Installs dependencies from requirements.txt
- Runs pytest with coverage
- Run Snyk scan with these steps:
  - Install Snyk using npm
  - Authenticate with Snyk token from GitHub Secrets
  - Run snyk test for dependency vulnerabilities
  - Run snyk code test for code vulnerabilities
  - Fail workflow if high/critical vulnerabilities found
  - Upload Snyk report as artifact

**Snyk Configuration:**
- Use SNYK_TOKEN from GitHub Secrets
- Set severity threshold to high
- Generate SARIF report
- Upload to GitHub Security tab

**Output Format:**
Return only the YAML file with proper indentation.

## Placeholders

- `<PYTHON_VERSION>` - Python version (e.g., 3.10, 3.11, 3.12)
- `<OS_RUNNER>` - OS runner (e.g., ubuntu-latest, windows-latest)
