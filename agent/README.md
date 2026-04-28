# CI/CD YAML Agent

Enterprise CI/CD YAML generation agent that uses governance standards from this repository to produce **consistent, secure, and compliant** pipelines every time.

## How It Works

```
Developer Input
      │
      ▼
┌─────────────────────────────────────┐
│           CI/CD YAML Agent          │
│                                     │
│  1. Load .github/copilot-           │
│     instructions.md (system prompt) │
│  2. Load governance/*.md (rules)    │
│  3. Load reference-pipelines/       │
│     (few-shot examples)             │
│  4. Parse user input                │
│     (platform, language, SAST, OS)  │
│  5. Call OpenAI with full context   │
│     (temperature=0.1 for            │
│      consistency)                   │
│  6. Validate output                 │
│     (syntax, stages, secrets)       │
│  7. Retry if validation fails       │
│  8. Save consistent YAML            │
└─────────────────────────────────────┘
      │
      ▼
  Consistent YAML - Every Time
```

## Why Output Is Consistent

| Technique | How |
|-----------|-----|
| Fixed system prompt | Loaded from `copilot-instructions.md` |
| Low temperature (0.1) | Reduces AI randomness |
| Reference pipelines | Few-shot examples guide structure |
| Governance rules | Standards enforced in prompt |
| Validation + retry | Auto-fix if output deviates |

## Setup

### 1. Install Dependencies

```bash
cd agent
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
```

### 3. Run Agent

```bash
npm start
```

## Usage

The agent will interactively ask:

```
? Select CI/CD Platform:
  ❯ Azure DevOps
    GitHub Actions

? Select Application Language:
  ❯ Node.js
    Java
    Python
    Go
    .NET
    React

? Select SAST Security Tool:
  ❯ SonarQube
    Snyk
    CodeQL
    Semgrep

? Select OS Agent/Runner:
  ❯ ubuntu-latest
    windows-latest
    macos-latest

? Output filename: nodejs-azure-pipeline
```

## Output

Generated YAML files are saved to `generated-pipelines/` directory.

Every generated pipeline includes:

- ✅ `build` stage
- ✅ `unit_test` stage
- ✅ `sast_scan` stage (with your chosen tool)
- ✅ `artifact_publish` stage
- ✅ 2-space indentation
- ✅ No hardcoded secrets
- ✅ Proper variable usage

## Validation

Every generated YAML is automatically validated for:

- YAML syntax correctness
- 2-space indentation (no tabs)
- All required stages present
- No hardcoded secrets
- Line length ≤ 120 characters

If validation fails, the agent automatically retries with error feedback.

## Governance Standards Used

All pipelines follow standards from:

- `.github/copilot-instructions.md` - Main instructions
- `governance/yaml-coding-standards.md` - Formatting rules
- `governance/sast-security-guidelines.md` - Security requirements
- `examples/reference-pipelines/` - Reference structures

## Supported Combinations

| Platform | Language | SAST Tools |
|----------|----------|------------|
| Azure DevOps | Node.js, Java, Python, Go, .NET, React | SonarQube, Snyk, Semgrep |
| GitHub Actions | Node.js, Java, Python, Go, .NET, React | CodeQL, Snyk, Semgrep, SonarQube |
