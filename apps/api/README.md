# API (backend)

Server-side logic that talks to Supabase with the service key. Nothing is built yet.

- `src/routes/` — packages, leads, agencies, auth
- `src/services/` — CRM logic, pricing, Meta Conversions API
- `src/webhooks/` — incoming WhatsApp and Meta events

The website and dashboard read data straight from Supabase (protected by row-level
security); this API is for anything that needs secrets or runs on events.
