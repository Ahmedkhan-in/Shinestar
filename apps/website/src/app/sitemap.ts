import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { CATEGORY_PAGES, allPackages, packageHref } from "@/lib/packages";

// Served at /sitemap.xml — lists every page so Google finds them all, including new packages
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    ...Object.values(CATEGORY_PAGES).map((c) => ({ path: c.path, priority: 0.9 })),
    { path: "/visa", priority: 0.8 },
    { path: "/reviews", priority: 0.6 },
    { path: "/about", priority: 0.5 },
    ...allPackages.map((p) => ({ path: packageHref(p), priority: 0.8 })),
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: "weekly",
    priority: p.priority,
  }));
}
