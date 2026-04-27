# Azure DevOps Python CI Pipeline

## Purpose
Generate a secure Azure DevOps CI pipeline for a Python application.

## Requirements

- Use <OS_AGENT> agent
- Install Python <PYTHON_VERSION>
- Install dependencies
- Run tests with pytest
- Run linting
- Run security scan
- Build Docker image
- Publish artifacts

## Copilot Prompt

Generate an Azure DevOps YAML pipeline with the following:

- Trigger on main branch
- Use <OS_AGENT> agent
- Install Python <PYTHON_VERSION>
- Run pip install -r requirements.txt
- Run pytest
- Run flake8 for linting
- Run security scanning step
- Build Docker image
- Publish build artifacts

## Expected Output

Pipeline should contain:

- trigger
- pool
- steps
- tasks
- artifacts

**Note:** 
- Replace `<PYTHON_VERSION>` with your project's Python version (e.g., 3.10, 3.11, 3.12)
- Replace `<OS_AGENT>` with your preferred OS (e.g., ubuntu-latest, windows-latest, macos-latest)
