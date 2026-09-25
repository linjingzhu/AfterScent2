---
doc_id: ai-project-context
version: 1.1.1
canonical_path: .ai/PROJECT_CONTEXT.md
updated: 2026-09-25
---

# linjingzhu/AfterScent2 Context

Vite/React/TypeScript site. metadata.json names After Scent and describes an editorial folio, while index.html is titled MAHEUN - A Quiet Anatomy of Life After Forty; this naming discrepancy is unresolved.

## repository_mode

```text
repository_mode: protected
```

## Facts the checks read

```text
base_branch: main
merge_deploys: yes
runtime_gate: none
test_command: none
lint_command: npm run lint
build_command: npm run build
generated: dist/ ← src/ and index.html via vite.config.ts : npm run build
external_scripts: cdn.tailwindcss.com : loaded unconditionally by index.html
public_ids: none
owner_ledger: .ai/reports/OWNER_ACTIONS.md
```

`merge_deploys: yes` is a conservative assumption because external deployment integrations were not verified. It is not evidence that a merge deploys this repository. `none` for a command means no configured command was identified, not that verification passed. External scripts, public identifiers and generated assets are limited to the inspected evidence; complete runtime inventories remain unverified. The owner-action ledger is .ai/reports/OWNER_ACTIONS.md; no owner-only actions are currently recorded.

## Authoritative product constraints

Preserve the HMR condition controlled by DISABLE_HMR in vite.config.ts. Confirm the intended publication identity before changing project branding.

GitHub Actions is disabled by the owner's standing direction for this adoption; keep all workflow files absent and perform future validation locally. Do not add or re-enable Actions without a new explicit owner instruction.

## Current architecture

src/ contains application sources, with Vite configuration in vite.config.ts and scripts in package.json. The configuration uses React and Tailwind plugins and disables publicDir.

## Current development slice

The 2026-09-25 change adopts ai-dev-rule 3.0.0 from `94e808cc78d8ca194a8e20272a395551be3066db` and removes tracked Actions workflows. It changes policy/capability files and repository context only; it does not implement a product feature. Product roadmap status must be established from current repository documentation before subsequent product work.

## Permanently excluded scope

Preserve the exclusions stated in Authoritative product constraints and existing product specifications. No additional product exclusions were inferred during adoption.

## Evidence and verification limits

Repository facts above were derived from: README.md, metadata.json, index.html, package.json, vite.config.ts.

No test script is configured. Existing unconditional CDN loading is recorded as current behavior, not approved as a new policy exception; changing it is outside this policy-only update. Deployment association of CNAME was not verified.

The structural policy check answers whether policy metadata, references and required context fields are consistent. It does not validate product facts or runtime behavior. Application tests, builds and runtime checks were not run for this policy-only change.
