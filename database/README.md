# Database (Supabase / Postgres)

- `supabase/migrations/` — schema changes, applied in filename order
- `seed/` — starting data (the Shinestar packages now in `apps/website/src/data`)
- `schema.md` — what each table is for

Every business table has an `agency_id`, and row-level security limits staff to their own
agency. Nothing here has been applied to a Supabase project yet.

Apply with the Supabase CLI from this folder:

    npx supabase link --project-ref <your-project-ref>
    npx supabase db push
