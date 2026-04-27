# YAML Coding Standards

## YAML Formatting Rules

- Use 2-space indentation
- No tab characters
- Use lowercase keys
- Use descriptive stage/job names
- Avoid hardcoded secrets
- Use environment variables or secret vault
- Add comments for complex logic

## Pipeline Structure Standard

Every pipeline must contain:

- trigger
- variables
- stages
- jobs
- steps

## Required DevSecOps Stages

Every generated pipeline must include:

1. Build
2. Unit Test
3. SAST Security Scan
4. Artifact Publish
5. Deployment (optional based on context)

## Security Requirements

- Include SAST scanning stage
- Fail pipeline if high/critical vulnerabilities found
- No hardcoded credentials
- Use secret management tools
- Scan dependencies for vulnerabilities

## Naming Conventions

- Use kebab-case for job names
- Use UPPER_CASE for environment variables
- Use descriptive names for stages
