// One place that knows every package and where its page lives.
// Footer links, related packages, the sitemap and metadata all read from here,
// so a package added to /data appears everywhere without hand-editing links.
// Server-side use only: it imports all package data. Client code uses ./package-links.

import type { PackageCategory, TravelPackage } from "@/types";
import { internationalPackages } from "@/data/packages";
import { umrahPackages } from "@/data/umrahPackages";
import { honeymoonPackages } from "@/data/honeymoonPackages";

export { CATEGORY_PAGES, packageHref } from "./package-links";

export const packagesByCategory: Record<PackageCategory, TravelPackage[]> = {
  umrah: umrahPackages,
  international: internationalPackages,
  honeymoon: honeymoonPackages,
};

export const allPackages: TravelPackage[] = [...umrahPackages, ...internationalPackages, ...honeymoonPackages];
