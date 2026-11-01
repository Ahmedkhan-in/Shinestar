# Architecture

```
Website ──► Supabase (packages, leads)  ◄── Dashboard (staff edit prices, work leads)
               ▲
WhatsApp ──► AI agent ──► API ──► Meta Conversions API (lead / booked events)
```

| Folder | What it is | Status |
|---|---|---|
| `apps/website` | Public agency site (Next.js) | Live (Shinestar) |
| `apps/dashboard` | Staff admin app | Placeholder |
| `apps/api` | Backend, webhooks, Meta events | Placeholder |
| `services/ai-agent` | WhatsApp AI agent | Placeholder |
| `database` | Supabase schema and seed | Schema drafted, not applied |
| `packages/shared` | Shared TypeScript types | Started |
