# Kubernetes Go Application Deployment

## Purpose
Generate Kubernetes deployment manifest for a Go application.

## Requirements

- 3 replicas
- Rolling update strategy
- Resource limits
- Health checks
- Environment variables
- ConfigMap support

## Copilot Prompt

Generate a Kubernetes deployment YAML for a Go application with:

- 3 replicas
- Rolling update strategy
- Container image from registry
- Resource requests and limits (optimized for Go)
- Liveness and readiness probes on /healthz endpoint
- Environment variables from ConfigMap
- Port 8080 exposed

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
- env
