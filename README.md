# PROJECT T.R.A.P.

**T**otal **R**eview **A**ssessment **P**rogram

A classified assessment system. 700 items across 7 sectors.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/          # Routes
├── components/   # UI components
├── context/      # State management
└── data/         # Assessment items (7 sectors × 100 items)
```

## Rules

- All sectors must be completed before results are revealed.
- Each sector is locked once submitted.
- 75% clearance required.
- Attempt history is preserved locally.

## Notes

Do not distribute. Internal use only.
