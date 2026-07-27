# Codex project instructions

## Mission

Build a flexible workout-planning system whose recommendations are scientifically defensible,
easy for developers to understand and traceable back to the exact training facts that produced
them.

Read these before making architectural or scientific changes:

1. `docs/PROJECT_CONTEXT.md`
2. `docs/ARCHITECTURE.md`
3. `docs/SCIENCE_MODEL.md`
4. `docs/NEXT_STEPS.md`

## Standard commands

```bash
npm install
npm run dev
npm run check
```

Run `npm run check` before publishing changes.

## Non-negotiable boundaries

- Preserve planned, effective and performed prescriptions separately.
- Adjustments create a new effective version; they do not overwrite the original plan.
- A scientific lens is a projection of shared facts. It must not create a second workout truth.
- Keep intent, prescribed dose, performed work, measured response, estimated exposure and
  observed adaptation distinct.
- Unknown is not zero.
- Never invent tissue load, energy-system percentages, fibre type, adaptations or recovery
  numbers merely to fill the UI.
- Every derived assertion must be able to carry source record ids, source stage, model/formula
  version, confidence or uncertainty, and evidence references.
- An activity may support several goals, but its performed dose is recorded once.
- Friendly terms such as “explosiveness” may be composites; the component capabilities and
  aggregation method must stay visible.
- Named coaching frameworks are versioned mappings, not universal physiology.

## Database rules

- The existing Supabase project is `oly-workout-tracker`
  (`socpekfyoxuutuuqsngr`).
- Treat the live database as existing external state until its verified schema and migrations
  have been imported into this repository.
- Do not guess or recreate live migrations from memory.
- Use append-only, reviewed migrations after the baseline is captured.
- Enable and test RLS for every user-owned table.
- Client code may use only the public/publishable key. Never expose the service-role key.
- Generate TypeScript database types from the linked project after the schema baseline exists.

## Code organization

- `src/domain`: framework-independent training and scientific types/rules.
- `src/lib`: external clients and infrastructure adapters.
- `src/stores`: UI orchestration state, not scientific truth.
- `src/views` and `src/components`: display and interaction only.
- `supabase`: verified database configuration and migrations.
- `tests`: invariants and behavior, especially adjustment propagation and scientific safety.

Keep the developer surface small. Prefer stable ids, explicit unions and short definitions over
large nested objects with ambiguous names.
