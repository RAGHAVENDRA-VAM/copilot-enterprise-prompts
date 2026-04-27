# Azure DevOps Java CI Pipeline - Semgrep

## Purpose
Generate Azure DevOps CI pipeline for Java with Semgrep scanning.

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

**Pipeline Structure:**
- Trigger on main branch
- Use <OS_AGENT> agent
- Install Java <JAVA_VERSION>
- Run mvn clean install
- Run mvn test
- Run Semgrep scan with these steps:
  - Install Semgrep using pip
  - Run semgrep scan with auto config
  - Use Java security rules
  - Generate SARIF output
  - Fail pipeline if high/critical findings
  - Upload Semgrep report as artifact
- Build Docker image
- Publish JAR artifacts

**Semgrep Configuration:**
- Use semgrep --config=auto
- Include custom rules if available
- Output format: SARIF
- Severity threshold: ERROR

**Output Format:**
Return only the YAML file with proper indentation.

## Placeholders

- `<JAVA_VERSION>` - Java version (e.g., 11, 17, 21)
- `<OS_AGENT>` - OS agent (e.g., ubuntu-latest, windows-latest)
