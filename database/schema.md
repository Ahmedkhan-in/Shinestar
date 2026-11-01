# Schema

| Table | Purpose |
|---|---|
| `agencies` | One row per travel agency using the platform |
| `agency_members` | Links Supabase Auth users to an agency with a role (owner / admin / agent) |
| `packages` | Tour packages and their prices, edited from the dashboard, shown on the website |
| `leads` | CRM contacts from the website, WhatsApp and Meta ads |
| `conversations` | WhatsApp message log per lead, written by the AI agent |
| `lead_events` | Funnel events (lead, qualified, booked) queued for the Meta Conversions API |
