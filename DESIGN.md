# Shinestar Tours & Travel — Design System

**Direction: 80% Airbnb · 20% Oura**

A marketplace-first travel brand with warm editorial soul. Photo and whitespace do the heavy lifting; warmth replaces clinical white; a single coral accent drives every conversion moment.

---

## Core Identity

**Generous minimalism meets warm restraint.** Pure-white gives way to a warm paper canvas on editorial surfaces. Photography, whitespace, and soft rounding establish hierarchy — not heavy type or layered shadows. The brand feels approachable, trustworthy, and quietly premium.

---

## Color

### Surfaces
| Token          | Value     | Role                                      |
|----------------|-----------|-------------------------------------------|
| `surface.white`| `#ffffff` | Default canvas — cards, nav, search bar   |
| `surface.warm` | `#f7f1e8` | Oura-borrowed cream — hero, editorial sections, footer bands |
| `surface.dark` | `#1a1a1a` | Near-black — footer, announcement bar     |
| `surface.grey` | `#f0eeeb` | Subtle page background, skeleton states   |

### Brand & Action
| Token           | Value     | Role                                                    |
|-----------------|-----------|---------------------------------------------------------|
| `brand.coral`   | `#ff385c` | Primary CTA, search orb, heart/save icon — use nowhere else |
| `brand.stone`   | `#4a4741` | Wordmark, secondary buttons, outlines, form labels      |
| `brand.ink`     | `#222222` | Body text, headings                                     |
| `brand.muted`   | `#717171` | Captions, meta, placeholder text                        |

### Earth Accent (Oura — illustration & bands only, never buttons)
| Token           | Value     | Role                        |
|-----------------|-----------|-----------------------------|
| `accent.mustard`| `#c9974a` | Promo bands, data highlights|
| `accent.clay`   | `#b35e45` | Section dividers, icons     |
| `accent.olive`  | `#6b7c4d` | Nature / eco tour accents   |

---

## Typography

Two typefaces in deliberate tension:

### Display (Oura influence — editorial serif, hero moments)
- **Font:** Georgia / `serif` fallback (swap for Playfair Display or Editorial New if available)
- **Weights:** 300–400 only — never heavy
- **Sizes:** Hero 56–72px · Section title 32–42px · Card headline 22–26px
- **Use:** Hero headlines, destination names, pull quotes, section openers

### UI & Body (Airbnb influence — clean grotesque)
- **Font:** `Inter`, `system-ui`, sans-serif
- **Weights:** 400 (body) · 500 (card meta) · 600 (buttons, nav labels)
- **Sizes:** Body 15–16px · Caption/meta 13px · Button 15px · Nav 14px
- **Use:** Everything interactive, all reading work, prices, dates, labels

### Scale
```
display-xl:  64px / 300 / serif     — hero stat or rating moment
display-lg:  52px / 300 / serif     — hero headline
display-md:  36px / 400 / serif     — section title
display-sm:  24px / 400 / serif     — card or modal headline
body-lg:     17px / 400 / sans      — intro paragraphs
body-md:     15px / 400 / sans      — standard body
body-sm:     13px / 400 / sans      — captions, meta
label:       14px / 600 / sans      — nav, button, tag
price:       18px / 600 / sans      — pricing callout
```

---

## Shape Language

Softness defines every interactive surface. Hard corners exist only on the grid itself.

| Element           | Radius   |
|-------------------|----------|
| Pill (search bar, tags) | `9999px` |
| Primary button    | `8px`    |
| Tour/destination card | `14px` |
| Modal / drawer    | `16px`   |
| Avatar            | `50%`    |
| Input fields      | `8px`    |

---

## Elevation & Shadow

One shadow tier — applied to cards on hover, the search bar, and dropdowns. Depth comes from photography and surface separation, not stacked shadows.

```css
--shadow-card:   0 2px 16px rgba(0,0,0,0.12);
--shadow-search: 0 3px 20px rgba(0,0,0,0.14);
--shadow-modal:  0 8px 40px rgba(0,0,0,0.18);
```

No shadow on flat states. Hover lifts the card with `shadow-card` + `translateY(-2px)`.

---

## Spacing

**Base unit: 8px.**

| Token | Value | Use                        |
|-------|-------|----------------------------|
| `xs`  | 4px   | Icon padding, micro gaps   |
| `sm`  | 8px   | Inline spacing             |
| `md`  | 16px  | Card gutters               |
| `lg`  | 24px  | Card internal padding      |
| `xl`  | 32px  | Component separation       |
| `2xl` | 48px  | Section padding (mobile)   |
| `3xl` | 64px  | Section padding (desktop)  |
| `4xl` | 96px  | Hero vertical rhythm       |

**Oura rule:** Empty warm cream is a design element on editorial/hero surfaces — not leftover space. Resist filling it.

---

## Layout

- **Max content width:** 1280px (editorial) · 1080px (tour listing detail)
- **Grid:** 12-column · 24px gutters desktop · 16px mobile
- **Card grid:** 3–4 col desktop · 2 col tablet · 1 col mobile
- **Card gutters:** 16px (denser than editorial — marketplace efficiency)

---

## Components

### Tour Card (primary unit)
- Photo-forward: image occupies 60% of card height, `border-radius: 14px`
- Floating category badge (top-left): pill shape, white bg, `brand.stone` text
- Heart/save icon (top-right): `brand.coral` on active
- Below image: destination name in `display-sm` serif · price in `price` sans · rating + duration in `body-sm` muted
- Hover: `shadow-card` + `translateY(-2px)` on the card; image subtle scale `1.03`

### Search Bar
- Full pill shape · white bg · `shadow-search`
- Sections: Destination | Check-in | Check-out | Guests
- Dividers between sections (1px `#e0e0e0`)
- Search button: `brand.coral` pill, white icon

### Primary Button
- Background: `brand.coral` · Text: white · Radius: `8px`
- Hover: darken 8% · Active: darken 14%
- Font: `label` (14px/600/sans)

### Secondary Button
- Border: 1px `brand.stone` · Text: `brand.stone` · Background: transparent
- Hover: `surface.warm` background

### Navigation
- White background · `shadow-card` on scroll
- Logo: wordmark in `brand.stone`
- Links: `label` sans · Active: `brand.coral`
- CTA: `brand.coral` pill button

---

## Editorial / Hero Surfaces (Oura 20%)

On hero banners, destination story sections, and feature callouts:
- Switch canvas to `surface.warm` (`#f7f1e8`)
- Use display serif headings
- Reduce information density — let imagery and whitespace lead
- Earth accent colors (`mustard`, `clay`, `olive`) allowed in background bands and illustration only
- Text: `brand.ink` on warm, never coral on warm

---

## Photography & Imagery

- Always full-bleed within card bounds; `object-fit: cover`
- Aspect ratio: `3:2` cards · `16:9` hero banners · `1:1` avatar/thumb
- Overlay gradient only when text sits on photo: `linear-gradient(to top, rgba(0,0,0,0.45), transparent)`
- Never filter or tint brand photography

---

## Design Guardrails

1. **Coral is sacred** — one primary CTA per viewport. Never use as decoration.
2. **No more than 2 typefaces** — serif display + sans UI. No mixing within a component.
3. **Serif is display-only** — never for body copy, labels, or buttons.
4. **Earth tones are illustration/band-only** — never on interactive elements.
5. **One shadow tier** — resist adding more depth levels.
6. **Warm cream on editorial, white on marketplace** — don't mix within a section.
7. **Photography is the hero** — don't compete with icons, gradients, or busy backgrounds.
8. **Pill shapes for search/tags; rounded-lg for cards/buttons** — don't interchange.

---

## Responsive Behavior

- Typography scales down ~15% from desktop to mobile (use `clamp()`)
- Section padding: `64px` desktop → `40px` tablet → `24px` mobile
- Search bar collapses to a compact pill that opens a bottom sheet on mobile
- Cards stack to single column below 640px
- Navigation becomes a hamburger drawer on mobile; coral close button
