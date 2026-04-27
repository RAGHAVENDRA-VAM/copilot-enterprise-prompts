# GitHub Actions Python CI Workflow

## Purpose
Generate a GitHub Actions workflow for a Python application.

## Requirements

- Trigger on push and pull request
- Use <OS_RUNNER> runner
- Install Python <PYTHON_VERSION>
- Run tests
- Run linting
- Upload coverage

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main and pull requests
- Uses <OS_RUNNER> runner
- Sets up Python <PYTHON_VERSION>
- Installs dependencies from requirements.txt
- Runs pytest with coverage
- Runs flake8 linting
- Uploads coverage report

## Expected Output

Workflow should contain:

- name
- on
- jobs
- steps
- actions

**Note:** Replace `<PYTHON_VERSION>` with your project's Python version (e.g., 3.10, 3.11, 3.12)
