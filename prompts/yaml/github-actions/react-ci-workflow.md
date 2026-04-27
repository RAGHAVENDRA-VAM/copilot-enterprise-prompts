# GitHub Actions React CI Workflow

## Purpose
Generate a GitHub Actions workflow for a React application.

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install Node.js <NODE_VERSION>
- Run tests
- Build production bundle
- Deploy to GitHub Pages

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Node.js <NODE_VERSION>
- Runs npm install
- Runs npm run lint
- Runs npm test
- Runs npm run build
- Deploys to GitHub Pages

## Expected Output

Workflow should contain:

- name
- on
- jobs
- steps
- actions

**Note:** Replace `<NODE_VERSION>` with your project's Node.js version (e.g., 18, 20)
