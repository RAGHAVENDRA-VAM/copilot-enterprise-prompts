const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '../../../');

// Required stages every pipeline must have
const REQUIRED_STAGES_AZURE = ['build', 'unit_test', 'sast_scan', 'artifact_publish'];
const REQUIRED_JOBS_GITHUB = ['build', 'unit_test', 'sast_scan', 'artifact_publish'];

// Forbidden patterns - hardcoded secrets
const FORBIDDEN_PATTERNS = [
  /password\s*:\s*['"]?[a-zA-Z0-9]{8,}/i,
  /secret\s*:\s*['"]?[a-zA-Z0-9]{8,}/i,
  /api_key\s*:\s*['"]?[a-zA-Z0-9]{8,}/i,
  /token\s*:\s*['"]?[a-zA-Z0-9]{32,}/i,
];

function validateYamlSyntax(yamlContent) {
  try {
    yaml.load(yamlContent);
    return { valid: true, error: null };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

function validateIndentation(yamlContent) {
  const lines = yamlContent.split('\n');
  const issues = [];
  lines.forEach((line, idx) => {
    if (line.match(/^\t/)) {
      issues.push(`Line ${idx + 1}: Tab indentation found (use 2 spaces)`);
    }
    const indent = line.match(/^( +)/);
    if (indent && indent[1].length % 2 !== 0) {
      issues.push(`Line ${idx + 1}: Odd indentation (use 2-space multiples)`);
    }
  });
  return issues;
}

function validateRequiredStages(yamlContent, platform) {
  const missing = [];
  const required = platform === 'azure-devops' ? REQUIRED_STAGES_AZURE : REQUIRED_JOBS_GITHUB;
  required.forEach(stage => {
    if (!yamlContent.includes(stage)) {
      missing.push(stage);
    }
  });
  return missing;
}

function validateNoHardcodedSecrets(yamlContent) {
  const issues = [];
  FORBIDDEN_PATTERNS.forEach(pattern => {
    if (pattern.test(yamlContent)) {
      issues.push(`Possible hardcoded secret detected: ${pattern.toString()}`);
    }
  });
  return issues;
}

function validateLineLength(yamlContent) {
  const lines = yamlContent.split('\n');
  const issues = [];
  lines.forEach((line, idx) => {
    if (line.length > 120) {
      issues.push(`Line ${idx + 1}: Exceeds 120 characters (${line.length})`);
    }
  });
  return issues;
}

function validate(yamlContent, platform = 'azure-devops') {
  const results = {
    passed: true,
    errors: [],
    warnings: [],
  };

  // 1. YAML syntax check
  const syntaxCheck = validateYamlSyntax(yamlContent);
  if (!syntaxCheck.valid) {
    results.passed = false;
    results.errors.push(`YAML Syntax Error: ${syntaxCheck.error}`);
    return results; // stop here if syntax is broken
  }

  // 2. Indentation check
  const indentIssues = validateIndentation(yamlContent);
  if (indentIssues.length > 0) {
    results.passed = false;
    results.errors.push(...indentIssues);
  }

  // 3. Required stages check
  const missingStages = validateRequiredStages(yamlContent, platform);
  if (missingStages.length > 0) {
    results.passed = false;
    results.errors.push(`Missing required stages: ${missingStages.join(', ')}`);
  }

  // 4. Hardcoded secrets check
  const secretIssues = validateNoHardcodedSecrets(yamlContent);
  if (secretIssues.length > 0) {
    results.passed = false;
    results.errors.push(...secretIssues);
  }

  // 5. Line length check (warning only)
  const lineLengthIssues = validateLineLength(yamlContent);
  if (lineLengthIssues.length > 0) {
    results.warnings.push(...lineLengthIssues);
  }

  return results;
}

module.exports = { validate };
