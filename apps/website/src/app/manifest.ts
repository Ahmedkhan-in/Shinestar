import type { MetadataRoute } from "next";
import { company } from "@/data/site";

// Served at /manifest.webmanifest — name, colours and icon when the site is saved to a phone's home screen
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: "Umrah, international tour, honeymoon and visa packages from Karachi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0756A4",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
