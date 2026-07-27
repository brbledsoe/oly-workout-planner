# Supabase

Linked project:

- Name: `oly-workout-tracker`
- Project ref: `socpekfyoxuutuuqsngr`
- Dashboard: <https://supabase.com/dashboard/project/socpekfyoxuutuuqsngr>

This repository does not yet contain the verified baseline of the live database.

Before adding a new migration:

1. Export and review the current live schema and migration history.
2. Import that baseline without rewriting or guessing history.
3. Generate TypeScript database types from the linked project.
4. Confirm RLS for every user-owned table.
5. Add future changes as append-only reviewed migrations.

Never commit database passwords, access tokens or a service-role key. The browser application
uses only the public/publishable key.
