// Detects platform, language, SAST tool, and OS from user input

const PLATFORMS = {
  'azure devops': 'azure-devops',
  'azure': 'azure-devops',
  'ado': 'azure-devops',
  'github actions': 'github-actions',
  'github': 'github-actions',
};

const LANGUAGES = {
  'node': 'nodejs',
  'nodejs': 'nodejs',
  'node.js': 'nodejs',
  'java': 'java',
  'python': 'python',
  'go': 'go',
  'golang': 'go',
  'dotnet': 'dotnet',
  '.net': 'dotnet',
  'csharp': 'dotnet',
  'c#': 'dotnet',
  'react': 'react',
};

const SAST_TOOLS = {
  'sonarqube': 'sonarqube',
  'sonar': 'sonarqube',
  'snyk': 'snyk',
  'codeql': 'codeql',
  'semgrep': 'semgrep',
};

const OS_AGENTS = {
  'ubuntu': 'ubuntu-latest',
  'linux': 'ubuntu-latest',
  'windows': 'windows-latest',
  'win': 'windows-latest',
  'macos': 'macos-latest',
  'mac': 'macos-latest',
};

// Default SAST tool per platform when not specified
const DEFAULT_SAST = {
  'azure-devops': 'sonarqube',
  'github-actions': 'codeql',
};

function parseUserRequest(input) {
  const lower = input.toLowerCase();

  const platform = Object.keys(PLATFORMS).find(k => lower.includes(k))
    ? PLATFORMS[Object.keys(PLATFORMS).find(k => lower.includes(k))]
    : 'azure-devops';

  const language = Object.keys(LANGUAGES).find(k => lower.includes(k))
    ? LANGUAGES[Object.keys(LANGUAGES).find(k => lower.includes(k))]
    : null;

  const sastTool = Object.keys(SAST_TOOLS).find(k => lower.includes(k))
    ? SAST_TOOLS[Object.keys(SAST_TOOLS).find(k => lower.includes(k))]
    : DEFAULT_SAST[platform];

  const os = Object.keys(OS_AGENTS).find(k => lower.includes(k))
    ? OS_AGENTS[Object.keys(OS_AGENTS).find(k => lower.includes(k))]
    : 'ubuntu-latest';

  return { platform, language, sastTool, os };
}

function buildUserPrompt({ platform, language, sastTool, os }) {
  return `Generate a ${platform === 'azure-devops' ? 'Azure DevOps' : 'GitHub Actions'} CI/CD YAML pipeline for a ${language} application.

Requirements:
- Platform: ${platform === 'azure-devops' ? 'Azure DevOps' : 'GitHub Actions'}
- Language: ${language}
- SAST Tool: ${sastTool}
- OS Agent/Runner: ${os}
- Follow all governance standards and reference pipeline structure
- Include all 4 required stages: build, unit_test, sast_scan, artifact_publish
- Use placeholders for versions: <${language?.toUpperCase()}_VERSION>
- No hardcoded secrets`;
}

module.exports = { parseUserRequest, buildUserPrompt };
