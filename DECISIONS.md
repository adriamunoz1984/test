# Decision Log

Use this file for decisions that affect implementation, scope, architecture, design, or business behavior.

## Format
### YYYY-MM-DD — Decision title
- Decision:
- Why:
- Approved by:
- Affected areas:

## Current decisions
### 2026-09-01 — Multi-agent workflow
- Decision: Use Director → Designer → Developer → QA as the required website workflow.
- Why: Separate planning, implementation, and independent review.
- Approved by: Owner
- Affected areas: All project work

### 2026-09-01 — Test environment only
- Decision: This repository is a proof-of-concept workspace and must not deploy or alter a production Shopify store without explicit owner approval.
- Why: Preserve a safe approval boundary while testing agent collaboration.
- Approved by: Owner
- Affected areas: Deployment, credentials, Shopify changes
