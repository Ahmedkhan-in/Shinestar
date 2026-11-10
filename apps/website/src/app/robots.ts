import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// AI search and answer engines named explicitly, so it's clear they may read and cite the site.
// To keep content out of AI training while staying in AI search, move the "training" group to disallow.
const AI_SEARCH = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"];
const AI_TRAINING = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "CCBot"];

// Served at /robots.txt — allows all crawling and points search engines to the sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: [...AI_SEARCH, ...AI_TRAINING], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
