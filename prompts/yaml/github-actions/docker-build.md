# GitHub Actions Docker Build Pipeline

## Purpose
Generate a GitHub Actions workflow to build and push Docker images.

## Requirements

- Trigger on push
- Build Docker image
- Scan image
- Push to container registry

## Copilot Prompt

Generate a GitHub Actions YAML workflow that:

- Triggers on push to main
- Builds a Docker image
- Runs container security scan
- Pushes image to registry
