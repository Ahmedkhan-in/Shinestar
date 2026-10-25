# Shinestar

Premium travel and tours website for **Shine Star Travel & Tours** — a Karachi-based travel agency specialising in Umrah packages, international tours, and honeymoon packages.

## Stack

- **Next.js 15** App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** icons

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, packages, testimonials, map |
| `/packages` | International tour listing |
| `/packages/[slug]` | Package detail template |
| `/umrah` | Umrah & Hajj overview |
| `/umrah/[slug]` | Umrah package detail |
| `/honeymoon` | Honeymoon listing |
| `/honeymoon/[slug]` | Honeymoon detail |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before Launch

- Replace `WHATSAPP_NUMBER` in `src/lib/whatsapp.ts`
- Replace all `isSamplePricing: true` prices with real figures
- Replace all `isSampleData: true` testimonials with verified reviews
- Add real office address in `src/components/home/MapSection.tsx`
- Add founder video in `src/components/home/FounderSection.tsx`
