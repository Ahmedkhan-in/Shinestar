import type { SocialPost } from "@/types";

// Real Instagram reels. Covers are saved in /public/images/reels/<id>.webp
// (Instagram's own image links expire, so they are kept locally).
// To add a reel: save its cover as /public/images/reels/<id>.jpg, make a 540px-wide <id>.webp
// and a 360px-wide <id>-sm.webp (local images are served as-is, not resized), and add an entry below.
const reel = (id: string, title: string, posterAlt: string): SocialPost => ({
  id,
  platform: "instagram",
  kind: "reel",
  href: `https://www.instagram.com/reel/${id}/`,
  poster: `/images/reels/${id}.webp`,
  posterAlt,
  title,
  isSampleData: false,
});

export const reels: SocialPost[] = [
  reel("DeZ-Jw6IfCo", "Phi Phi Island, Thailand", "A traveller on the beach at Phi Phi Island with turquoise water behind"),
  reel("DeSibGHK4q8", "Throttle on, worries gone", "A traveller riding a jet ski off a green Thai coastline"),
  reel("DeQLCvKqrqK", "Batu Caves, Kuala Lumpur", "A traveller in front of the golden statue and stairs at Batu Caves"),
  reel("DeMaeUbqLP0", "Malaysia recap", "A traveller taking a mirror selfie in a hotel room, captioned Malaysia recap"),
  reel("DeUb5fGq2R8", "This café in Phuket", "A garden café lit up at dusk in Phuket"),
  reel("DekviR8ojpP", "Bikes, boys & Phuket vibes", "Two friends in helmets taking a selfie on a scooter in Phuket"),
  reel("DeiJPFVo4z1", "Thailand ruined my normal life", "Friends walking through a busy, neon-lit street in Thailand at night"),
  reel("De7z0ILoP5Q", "Sawadeekaa, Thailand", "A traveller taking a mirror selfie in a Thai hotel lobby"),
  reel("DdzEjthzq2C", "Emraan Hashmi's KL itinerary", "Shoppers outside the Pavilion mall in Kuala Lumpur"),
  reel("DebyCu3KB0W", "From the screen to actually being here", "A traveller standing on a beach, framed like a cinema screen"),
  reel("DeSUZSIRA9P", "For my geography teacher", "A lit-up tower on a Kuala Lumpur street at night"),
  reel("DejNh6Qxlmf", "35,000 ft pe sunai nahi deta", "An aircraft cabin in blue night lighting"),
];
