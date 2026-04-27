# GitHub Copilot Configuration

This directory contains configuration files that GitHub Copilot automatically reads and follows.

## copilot-instructions.md

This file contains enterprise standards that GitHub Copilot will automatically follow when developers interact with it in chat.

### What It Does

When a developer asks Copilot to generate a YAML pipeline, Copilot will:

1. **Automatically read** this instructions file
2. **Follow** all governance standards
3. **Apply** YAML coding rules
4. **Include** SAST security scanning
5. **Generate** consistent, compliant YAML

### No Manual Copy-Paste Needed

Developers don't need to copy prompts from the `prompts/` directory. Just ask Copilot naturally:

**Examples:**

```
"Generate Azure DevOps pipeline for Node.js with Snyk"
"Create GitHub Actions workflow for Java with CodeQL"
"Build Kubernetes deployment for Python app"
```

Copilot will automatically follow the enterprise standards.

### How It Works

GitHub Copilot automatically:
- Reads `.github/copilot-instructions.md` in the repository
- Applies these instructions to all chat interactions
- Ensures consistent outputs across all developers

### Benefits

✅ **Automatic Compliance** - No manual prompt selection
✅ **Consistent Output** - Same standards every time
✅ **Developer Friendly** - Natural language requests
✅ **Governed** - Enterprise standards enforced
✅ **Secure** - SAST scanning always included

### Updating Instructions

To update enterprise standards:

1. Edit `.github/copilot-instructions.md`
2. Follow governance review process
3. Commit changes to repository
4. All developers automatically get new standards

### Testing

Test that Copilot follows instructions:

1. Open GitHub Copilot Chat
2. Ask: "Generate Azure DevOps pipeline for Node.js"
3. Verify output includes:
   - All required stages (build, unit_test, sast_scan, artifact_publish)
   - 2-space indentation
   - SAST security scanning
   - No hardcoded secrets
   - Proper formatting

### Troubleshooting

If Copilot doesn't follow standards:

1. Verify `.github/copilot-instructions.md` exists in repository
2. Ensure file is committed to main branch
3. Reload VS Code / IDE
4. Try asking again with specific details

### Reference

For detailed standards, see:
- `governance/yaml-coding-standards.md`
- `governance/sast-security-guidelines.md`
- `governance/prompt-governance.md`
- `examples/reference-pipelines/`
