# Oly Workout Planner

A scientifically traceable Olympic-weightlifting and hybrid-training planner.

This repository is the clean development foundation for the project. It is intentionally a
small, buildable skeleton—not yet a copy of every feature in the deployed prototype or every
object in the live Supabase database.

## Stack

- Vue 3 + TypeScript + Vite
- PrimeVue 4 with the Aura theme
- Tailwind CSS 4
- Pinia + Vue Router
- Supabase
- Vitest + ESLint + Vue TypeScript checking

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app works as a local skeleton without Supabase credentials. To connect the existing
`oly-workout-tracker` project, place its project URL and publishable client key in `.env.local`.
Never put a service-role key in this application.

## Quality checks

```bash
npm run check
```

This runs linting, TypeScript/Vue checks, behavioral tests and the production build.

## Project documents

- [Project context](docs/PROJECT_CONTEXT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Scientific model](docs/SCIENCE_MODEL.md)
- [Next steps](docs/NEXT_STEPS.md)

## Current status

The skeleton establishes:

- a usable application shell;
- PrimeVue and Tailwind styling;
- an optional Supabase client boundary;
- separate planned, effective and performed prescription states;
- eight stable developer-facing scientific lenses;
- a tested session-adjustment invariant;
- CI and permanent Codex instructions.

Live prototype: <https://oly-workout-planner.brbledsoe-m.chatgpt.site>

Supabase project: <https://supabase.com/dashboard/project/socpekfyoxuutuuqsngr>
