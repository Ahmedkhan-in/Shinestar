import type { GalleryCategory, GalleryItem } from "@/types";

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  umrah: "Umrah",
  beaches: "Beaches",
  mountains: "Mountains",
  cities: "Cities",
  honeymoons: "Honeymoons",
  families: "Families",
};

// Builds a fixed-ratio crop so the masonry reserves exact space (no layout shift)
const u = (id: string, ratio: number, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${Math.round(w / ratio)}&q=80&fit=crop`;

// Destination photography. When travelers share their own photos with permission,
// add them here with `sharedBy` — the caption then credits them.
export const gallery: GalleryItem[] = [
  { id: "g-01", category: "umrah", ratio: 3 / 4, src: u("photo-1591604129939-f1efa4d9f7fa", 3 / 4), alt: "The green dome and minarets of Masjid an-Nabawi in Madinah", caption: "Masjid an-Nabawi, Madinah", relatedHref: "/umrah", relatedLabel: "Umrah packages" },
  { id: "g-02", category: "beaches", ratio: 4 / 3, src: u("photo-1552465011-b4e21bf6e79a", 4 / 3), alt: "Longtail boats moored on a beach below limestone cliffs in Krabi", caption: "Longtail boats, Krabi, Thailand", relatedHref: "/packages/thailand-7-days", relatedLabel: "Thailand Discovery" },
  { id: "g-03", category: "honeymoons", ratio: 4 / 5, src: u("photo-1514282401047-d79a71a590e8", 4 / 5), alt: "Overwater villas on a turquoise lagoon in the Maldives", caption: "Overwater villas, Maldives", relatedHref: "/honeymoon/maldives-7-days", relatedLabel: "Maldives honeymoon" },
  { id: "g-04", category: "cities", ratio: 1, src: u("photo-1527838832700-5059252407fa", 1), alt: "Mosque domes and minarets against the Istanbul sky at dusk", caption: "The old city skyline, Istanbul", relatedHref: "/honeymoon/turkey-honeymoon-8-days", relatedLabel: "Turkey honeymoon" },
  { id: "g-05", category: "umrah", ratio: 4 / 3, src: u("photo-1580418827493-f2b22c0a76cb", 4 / 3), alt: "The Makkah clock tower above the courtyards of Masjid al-Haram", caption: "Makkah clock tower over the Haram", relatedHref: "/umrah/umrah-14-days", relatedLabel: "Umrah 14 Days" },
  { id: "g-06", category: "mountains", ratio: 3 / 4, src: u("photo-1566296314736-6eaac1ca0cb9", 3 / 4), alt: "A blue train crossing the stone Nine Arch Bridge in the hills of Ella", caption: "Nine Arch Bridge, Ella, Sri Lanka", relatedHref: "/packages/sri-lanka-6-days", relatedLabel: "Sri Lanka 6 Days" },
  { id: "g-07", category: "families", ratio: 4 / 5, src: u("photo-1520250497591-112f2f40a3f4", 4 / 5), alt: "A resort swimming pool framed by palms and thatched villas", caption: "A family-friendly resort pool, Southeast Asia" },
  { id: "g-08", category: "cities", ratio: 3 / 4, src: u("photo-1508062878650-88b52897f298", 3 / 4), alt: "The Petronas Twin Towers lit up at night, seen from above", caption: "Petronas Twin Towers, Kuala Lumpur", relatedHref: "/packages/malaysia-8-days", relatedLabel: "Malaysia 8 Days" },
  { id: "g-09", category: "beaches", ratio: 4 / 5, src: u("photo-1573790387438-4da905039392", 4 / 5), alt: "Steep green cliffs above a white-sand cove on Nusa Penida", caption: "Nusa Penida, Bali", relatedHref: "/honeymoon/bali-honeymoon-6-days", relatedLabel: "Bali honeymoon" },
  { id: "g-10", category: "mountains", ratio: 4 / 3, src: u("photo-1558005530-a7958896ec60", 4 / 3), alt: "Green rice terraces with a volcano rising in the haze behind", caption: "Rice terraces in the Bali highlands", relatedHref: "/honeymoon/bali-honeymoon-6-days", relatedLabel: "Bali honeymoon" },
  { id: "g-11", category: "families", ratio: 1, src: u("photo-1525625293386-3f8f99389edd", 1), alt: "Marina Bay Sands and the ArtScience Museum seen from the air", caption: "Marina Bay, Singapore", relatedHref: "/packages/singapore-5-days", relatedLabel: "Singapore 5 Days" },
  { id: "g-12", category: "honeymoons", ratio: 3 / 4, src: u("photo-1537996194471-e657df975ab4", 3 / 4), alt: "A tiered Balinese water temple reflected in a calm lake", caption: "Ulun Danu Beratan temple, Bali", relatedHref: "/honeymoon/bali-honeymoon-6-days", relatedLabel: "Bali honeymoon" },
  { id: "g-13", category: "cities", ratio: 4 / 3, src: u("photo-1512453979798-5ea266f8880c", 4 / 3), alt: "Downtown Dubai and the Burj Khalifa at sunset", caption: "Downtown Dubai at sunset", relatedHref: "/packages/dubai-5-days", relatedLabel: "Dubai 5 Days" },
  { id: "g-14", category: "beaches", ratio: 3 / 4, src: u("photo-1506665531195-3566af2b4dfa", 3 / 4), alt: "The twin bays of Phi Phi Don seen from the viewpoint", caption: "Phi Phi viewpoint, Thailand", relatedHref: "/packages/thailand-7-days", relatedLabel: "Thailand Discovery" },
  { id: "g-15", category: "umrah", ratio: 4 / 5, src: u("photo-1609599006353-e629aaabfeae", 4 / 5), alt: "A Quran with a gold-embossed cover resting on a prayer mat", caption: "Quiet hours between salah" },
  { id: "g-16", category: "families", ratio: 4 / 3, src: u("photo-1582672060674-bc2bd808a8b5", 4 / 3), alt: "Looking up at the Burj Khalifa between palm trees", caption: "Burj Khalifa, Dubai", relatedHref: "/packages/dubai-5-days", relatedLabel: "Dubai 5 Days" },
];
