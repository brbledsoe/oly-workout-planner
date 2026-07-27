# Architecture

## Core rule

Persist facts and decisions. Derive views.

The same records should feed the calendar, charts, workout details, scientific lenses and
recovery views. A UI filter or lens must not create an alternative version of the plan.

## Data flow

1. Athlete goals, context and constraints
2. Planned prescription
3. Accepted decision or adjustment
4. Effective prescription
5. Performed work
6. Athlete observations and measurements
7. Versioned scientific projections
8. Calendar, charts, details and lens views

## Application layers

| Layer | Responsibility | Must not do |
|---|---|---|
| Domain | Stable types, invariants and pure planning/projection rules | Import Vue or PrimeVue |
| Data | Supabase queries, persistence and generated database types | Hide scientific derivations |
| Application | Coordinate use cases and stores | Become the source of scientific truth |
| Presentation | Render and collect user intent | Calculate unversioned physiology |

## Stable operational concepts

- `program_goals`: desired outcomes and priorities
- `plan_nodes`: the structured program and scheduled work
- `prescription_versions`: planned and accepted effective versions
- `execution_events`: completed work
- `observations`: measured or reported responses
- `training_semantic_assignments`: exact classifications
- `projection_assertions`: calculated or estimated lens outputs
- `decision_records`: why a version or recommendation changed

These names describe the target mental model. Before creating tables, compare them with the
verified live Supabase schema and preserve existing identities and history.

## Projection contract

A derived scientific assertion should be able to answer:

- Which lens and concept does it represent?
- Did it use planned, effective or performed facts?
- Which exact source records were used?
- Is the value known, unknown or not applicable?
- Was it measured, estimated, inferred or observed over time?
- Which model/formula and version produced it?
- How confident is it, and why?
- Which evidence claims apply to this athlete, dose and context?

## Versioning and adjustment behavior

- The planned prescription is immutable history.
- An accepted adjustment creates a new effective prescription.
- A session-only decision does not rewrite future sessions.
- A program-level change creates a separately reviewable revision.
- Projections are recalculated from the selected source stage.
- Removed work no longer contributes to dependent projections.
- Shared work remains when another goal still justifies it.

## Repository shape

```text
src/
  components/  reusable presentation
  domain/      framework-independent scientific and planning rules
  lib/         Supabase and other infrastructure
  router/      route definitions
  stores/      UI orchestration state
  views/       page-level composition
supabase/
  migrations/ verified SQL history after baseline import
tests/         behavioral and scientific invariants
docs/          durable project decisions
```
