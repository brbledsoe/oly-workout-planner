# Project context

## Product goal

Oly Workout Planner helps an athlete design, understand, adjust and complete a training program.
Olympic weightlifting is the first strong use case, but the scientific model should also describe
strength training, hypertrophy, sprinting, plyometrics, endurance, climbing, field sports and
other activities without creating a new architecture for each sport.

The product should make relationships visible:

- how goals shape sessions;
- how available days and time caps reshape a program;
- how periodization changes dose;
- how a day-of readiness adjustment changes the current session;
- how the same work looks through coaching, sport, mechanics, physiology, anatomy and recovery
  lenses;
- why a recommendation or adjustment occurred.

## Product principles

- Accurate enough to trust.
- Simple enough to understand without a sports-science glossary open beside the code.
- Flexible enough to filter by sport, activity, intent, method, capability, tissue or another
  supported dimension.
- Honest about uncertainty.
- One source of training truth with many reproducible views.

## Existing systems

- Live prototype: <https://oly-workout-planner.brbledsoe-m.chatgpt.site>
- Supabase project: `oly-workout-tracker`
- Supabase project ref: `socpekfyoxuutuuqsngr`

The deployed prototype and live database were created before this repository skeleton. Do not
assume this first commit contains their complete source or migration history. The source and
schema must be recovered, compared and imported deliberately.

## Chosen frontend foundation

- Vue 3
- TypeScript
- Vite
- Tailwind CSS 4
- PrimeVue 4
- Pinia
- Vue Router
- Supabase JavaScript client

## Initial user-facing workspace

The eventual planner should support:

- goal and priority settings;
- available days, session time limits and weekly commitment;
- periodization choices;
- day, week, month and whole-program calendar views;
- synchronized charts and workout details;
- planned-versus-effective comparison;
- session-only autoregulation after a warm-up/readiness check;
- scientifically traceable lenses and relationship explanations.
