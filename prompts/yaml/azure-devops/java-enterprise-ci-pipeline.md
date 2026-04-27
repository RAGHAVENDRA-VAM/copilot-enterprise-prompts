# Azure DevOps Java CI Pipeline (Enterprise)

## Purpose
Generate a secure, enterprise-compliant Azure DevOps CI pipeline for a Java application.

## Governance Standards
This prompt follows: [YAML Coding Standards](../../../governance/yaml-coding-standards.md) and [SAST Security Guidelines](../../../governance/sast-security-guidelines.md)

## Requirements

- Use <OS_AGENT> agent
- Install Java <JAVA_VERSION>
- Build with Maven
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
- Install Java <JAVA_VERSION>
- Run mvn clean install
- Run mvn test with JaCoCo coverage
- Run SAST security scan (use SonarQube or Snyk)
- Fail pipeline if high/critical vulnerabilities found
- Build Docker image
- Publish JAR artifacts

**Security Requirements:**
- Include SAST scanning stage
- Scan dependencies with OWASP Dependency Check
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
- Replace `<JAVA_VERSION>` with your project's Java version (e.g., 11, 17, 21)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
