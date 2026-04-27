# Kubernetes Java Application Deployment

## Purpose
Generate Kubernetes deployment manifest for a Java application.

## Requirements

- 3 replicas
- Rolling update strategy
- Resource limits
- Health checks
- JVM configuration
- ConfigMap support

## Copilot Prompt

Generate a Kubernetes deployment YAML for a Java application with:

- 3 replicas
- Rolling update strategy
- Container image from registry
- Resource requests and limits (higher memory for JVM)
- Liveness and readiness probes on /actuator/health
- JVM options via environment variables
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
