# Contributor Guide

## Adding Or Editing Notes

Notes live in `src/data/notes.ts`.

Each topic should include:

- `summary`
- `verificationStatus`
- `examFocus`
- `sections`
- `tables`
- `quickDrills`
- `sources`

Use the table columns:

| Term | Definition | Remember | Common Mistake |
| --- | --- | --- | --- |

Do not add examples to the table unless the UI is redesigned to handle a fifth column.

## Adding Or Editing Exam Questions

Exam question files live in `src/data/`.

When editing a question:

1. Verify the correct answer.
2. Keep explanation clear and source-consistent.
3. Avoid answer patterns that depend on fixed letter positions.
4. Run lint and build.

## Source Requirements

Follow `docs/source-policy.md`.

For user-facing notes, topic-level sources are acceptable. For risky or disputed facts, add details to `docs/content-audit.md`.

## Verification Workflow

1. Pick one topic.
2. Audit notes tables and exam questions.
3. Fix incorrect content.
4. Update `docs/content-audit.md`.
5. Set topic status to Verified only after review is complete.

## Required Checks

Run:

```bash
npm.cmd run lint
npm.cmd run build
```

