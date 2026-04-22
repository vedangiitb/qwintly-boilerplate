# Boilerplate rules (AI-friendly)

This repo is a boilerplate used to generate other projects. Optimize for **small, readable files** so AI agents can scan quickly and make safe edits.

## Small-file budget

- Target **≤120 lines** for non-vendor `*.ts` / `*.tsx` files.
- If a file grows beyond the budget, **split by feature/section** into new files instead of appending more code.
- Prefer many small components over one big “god” page/module.

## Vendor-like exceptions

- Treat `components/ui/**` (shadcn/ui primitives) as **vendor-like**:
  - Avoid editing unless you need a specific UI behavior change.
  - These files are excluded from the strict 120-line budget.

## Next.js structure

- Keep `app/page.tsx` as an **orchestrator** (compose sections; minimal logic).
- Add new homepage content as a new file under `components/blocks/sections/**`.

## Growth pattern

- When adding a feature, create a new folder/file set (and export from an index if needed).
- Avoid dumping new helpers into existing large modules; prefer `lib/<feature>/...` when a feature grows.
