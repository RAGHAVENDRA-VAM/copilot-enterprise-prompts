# Azure DevOps Node.js CI Pipeline - SonarQube

## Purpose
Generate Azure DevOps CI pipeline for Node.js with SonarQube scanning.

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

**Pipeline Structure:**
- Trigger on main branch
- Use <OS_AGENT> agent
- Install Node.js <NODE_VERSION>
- Run npm install
- Run npm test with coverage
- Run SonarQube scan with these steps:
  - Prepare SonarQube analysis
  - Run code analysis
  - Publish quality gate result
  - Fail pipeline if quality gate fails
- Build Docker image
- Publish build artifacts

**SonarQube Configuration:**
- Use SonarQubePrepare@5 task
- Project key: <PROJECT_KEY>
- Connect to SonarQube service connection
- Include test coverage reports
- Quality gate must pass

**Output Format:**
Return only the YAML file with proper indentation.

## Placeholders

- `<NODE_VERSION>` - Node.js version (e.g., 18, 20)
- `<OS_AGENT>` - OS agent (e.g., ubuntu-latest, windows-latest)
- `<PROJECT_KEY>` - SonarQube project key
