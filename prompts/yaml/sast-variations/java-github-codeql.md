# GitHub Actions Java CI Workflow - CodeQL

## Purpose
Generate GitHub Actions workflow for Java with CodeQL scanning.

## Copilot Prompt

Generate a GitHub Actions YAML workflow with the following:

**Workflow Structure:**
- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Java <JAVA_VERSION>
- Runs mvn clean install
- Runs mvn test
- Run CodeQL analysis with these steps:
  - Initialize CodeQL for Java
  - Autobuild Java project
  - Perform CodeQL analysis
  - Upload results to GitHub Security tab
- Publish JAR artifacts

**CodeQL Configuration:**
- Use github/codeql-action/init@v2
- Language: java
- Queries: security-and-quality
- Upload SARIF results

**Output Format:**
Return only the YAML file with proper indentation.

## Placeholders

- `<JAVA_VERSION>` - Java version (e.g., 11, 17, 21)
- `<OS_RUNNER>` - OS runner (e.g., ubuntu-latest, windows-latest)
