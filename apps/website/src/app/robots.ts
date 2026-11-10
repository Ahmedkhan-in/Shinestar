import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// Served at /robots.txt — allows all crawling and points search engines to the sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
