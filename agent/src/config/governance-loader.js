const fs = require('fs');
const path = require('path');

// Root of the repo relative to agent/src/config
const REPO_ROOT = path.resolve(__dirname, '../../../');

function loadFile(filePath) {
  const fullPath = path.join(REPO_ROOT, filePath);
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, 'utf8');
  }
  return '';
}

function loadGovernanceContext() {
  return {
    copilotInstructions: loadFile('.github/copilot-instructions.md'),
    yamlCodingStandards: loadFile('governance/yaml-coding-standards.md'),
    sastSecurityGuidelines: loadFile('governance/sast-security-guidelines.md'),
    promptGovernance: loadFile('governance/prompt-governance.md'),
  };
}

function loadReferencePipelines() {
  return {
    nodejsAzure: loadFile('examples/reference-pipelines/nodejs-azure-pipeline.yaml'),
    javaAzure: loadFile('examples/reference-pipelines/java-azure-pipeline.yaml'),
    pythonGithub: loadFile('examples/reference-pipelines/python-github-workflow.yaml'),
  };
}

function buildSystemPrompt() {
  const governance = loadGovernanceContext();
  const references = loadReferencePipelines();

  return `
${governance.copilotInstructions}

---
## YAML CODING STANDARDS (from governance/yaml-coding-standards.md)
${governance.yamlCodingStandards}

---
## SAST SECURITY GUIDELINES (from governance/sast-security-guidelines.md)
${governance.sastSecurityGuidelines}

---
## REFERENCE PIPELINE - Node.js Azure DevOps
${references.nodejsAzure}

---
## REFERENCE PIPELINE - Java Azure DevOps
${references.javaAzure}

---
## REFERENCE PIPELINE - Python GitHub Actions
${references.pythonGithub}

---
## FINAL INSTRUCTION
You MUST follow all the above governance standards exactly.
Return ONLY valid YAML. No explanations. No markdown blocks.
Every pipeline MUST include: build, unit_test, sast_scan, artifact_publish stages in that order.
`.trim();
}

module.exports = { buildSystemPrompt, loadGovernanceContext, loadReferencePipelines };
