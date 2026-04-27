## SAST Security Guidelines

## Overview

Different projects may use different SAST tools. This guide provides flexibility while maintaining security standards.

## Supported SAST Tools

For detailed tool-specific prompts, see: `prompts/yaml/sast-variations/`

## Required SAST Tools

Every pipeline must include at least one SAST tool:

### Option 1: SonarQube
- Scans code quality and security
- Integrates with Azure DevOps and GitHub Actions
- Supports multiple languages

### Option 2: Snyk
- Scans dependencies and code
- Detects vulnerabilities in open source
- Container scanning support

### Option 3: Semgrep
- Lightweight static analysis
- Custom rule support
- Fast scanning

### Option 4: CodeQL
- GitHub native security scanning
- Deep semantic analysis
- Supports multiple languages

## SAST Stage Requirements

- Run after build stage
- Run before deployment
- Fail pipeline on high/critical findings
- Generate security report
- Upload results as artifacts

## Vulnerability Thresholds

- Critical: Fail pipeline immediately
- High: Fail pipeline immediately
- Medium: Warning only
- Low: Informational

## Security Scan Checklist

- [ ] SAST tool configured
- [ ] Scan runs on every commit
- [ ] Results uploaded as artifacts
- [ ] Pipeline fails on critical issues
- [ ] Security reports accessible to team
