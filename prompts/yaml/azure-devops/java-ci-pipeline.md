# Azure DevOps Java CI Pipeline

## Purpose
Generate a secure Azure DevOps CI pipeline for a Java application.

## Requirements

- Use <OS_AGENT> agent
- Install Java <JAVA_VERSION>
- Build with Maven
- Run tests
- Run security scan
- Build Docker image
- Publish artifacts

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

- Trigger on main branch
- Use <OS_AGENT> agent
- Install Java <JAVA_VERSION>
- Run mvn clean install
- Run mvn test
- Run security scanning step
- Build Docker image
- Publish JAR artifacts

## Expected Output

Pipeline should contain:

- trigger
- pool
- steps
- tasks
- artifacts

**Note:** 
- Replace `<JAVA_VERSION>` with your project's Java version (e.g., 11, 17, 21)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
