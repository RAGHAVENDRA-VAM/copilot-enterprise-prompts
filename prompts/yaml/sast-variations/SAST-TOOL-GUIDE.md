# SAST Tool Selection Guide

## Quick Reference

| SAST Tool | Best For | Platform Support | Cost |
|-----------|----------|------------------|------|
| SonarQube | Code quality + security | Azure DevOps, GitHub | Free/Paid |
| Snyk | Dependencies + containers | Azure DevOps, GitHub | Free/Paid |
| CodeQL | Deep semantic analysis | GitHub Actions | Free |
| Semgrep | Fast, custom rules | Azure DevOps, GitHub | Free/Paid |

## Tool Comparison

### SonarQube
**Strengths:**
- Comprehensive code quality metrics
- Security hotspot detection
- Quality gates
- Multi-language support

**Use When:**
- Need code quality + security
- Want detailed technical debt tracking
- Have SonarQube server/cloud

**Prompt Files:**
- `nodejs-azure-sonarqube.md`
- `java-azure-sonarqube.md`

### Snyk
**Strengths:**
- Excellent dependency scanning
- Container vulnerability scanning
- Fix recommendations
- Developer-friendly

**Use When:**
- Focus on dependency vulnerabilities
- Need container scanning
- Want automated fix PRs

**Prompt Files:**
- `nodejs-azure-snyk.md`
- `python-github-snyk.md`

### CodeQL
**Strengths:**
- Deep semantic code analysis
- GitHub native integration
- Free for public repos
- Advanced query language

**Use When:**
- Using GitHub Actions
- Need advanced security analysis
- Want GitHub Security integration

**Prompt Files:**
- `java-github-codeql.md`
- `python-github-codeql.md`

### Semgrep
**Strengths:**
- Fast scanning
- Custom rule creation
- Lightweight
- Easy to integrate

**Use When:**
- Need fast CI/CD scans
- Want custom security rules
- Prefer lightweight tools

**Prompt Files:**
- `java-azure-semgrep.md`
- `nodejs-azure-semgrep.md`

## How to Choose

1. **Check your platform:** GitHub Actions → CodeQL is easiest
2. **Check your needs:** Dependencies → Snyk, Code quality → SonarQube
3. **Check your budget:** Free → CodeQL/Semgrep, Paid → SonarQube/Snyk
4. **Check your language:** All tools support major languages

## Using Multiple Tools

You can combine tools for comprehensive coverage:

```yaml
# Example: Snyk (dependencies) + Semgrep (code)
- Run Snyk for dependency scan
- Run Semgrep for code security scan
```

Choose the appropriate prompt file based on your primary SAST tool.
