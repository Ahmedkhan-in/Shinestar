// Where each package's page lives. Kept free of package data so client components
// can import it without pulling every itinerary into the browser bundle.

import type { PackageCategory, TravelPackage } from "@/types";

export const CATEGORY_PAGES: Record<PackageCategory, { path: string; label: string }> = {
  umrah: { path: "/umrah", label: "Umrah Packages" },
  international: { path: "/packages", label: "International Tours" },
  honeymoon: { path: "/honeymoon", label: "Honeymoon Packages" },
};

export const packageHref = (pkg: Pick<TravelPackage, "category" | "slug">) =>
  `${CATEGORY_PAGES[pkg.category].path}/${pkg.slug}`;
