# GitHub Actions Java CI Workflow

## Purpose
Generate a GitHub Actions workflow for a Java application.

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install Java <JAVA_VERSION>
- Build with Maven
- Run tests
- Cache dependencies

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Java <JAVA_VERSION>
- Caches Maven dependencies
- Runs mvn clean install
- Runs mvn test
- Uploads test results

## Expected Output

Workflow should contain:

- name
- on
- jobs
- steps
- actions

**Note:** Replace `<JAVA_VERSION>` with your project's Java version (e.g., 11, 17, 21)
