# Kubernetes Python Application Deployment

## Purpose
Generate Kubernetes deployment manifest for a Python application.

## Requirements

- 3 replicas
- Rolling update strategy
- Resource limits
- Health checks
- Environment variables
- ConfigMap support

## Copilot Prompt

Generate a Kubernetes deployment YAML for a Python application with:

- 3 replicas
- Rolling update strategy
- Container image from registry
- Resource requests and limits
- Liveness and readiness probes on /health endpoint
- Environment variables from ConfigMap
- Port 8000 exposed

## Expected Output

Manifest should contain:

- apiVersion
- kind: Deployment
- metadata
- spec
- replicas
- strategy
- template
- containers
- resources
- probes
