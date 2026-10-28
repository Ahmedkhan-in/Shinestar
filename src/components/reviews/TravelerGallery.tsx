"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryCategory, GalleryItem } from "@/types";

// Modals load on demand — their code isn't downloaded until opened
const GalleryLightbox = dynamic(() => import("./GalleryLightbox").then((m) => m.GalleryLightbox), { ssr: false });

type Filter = "all" | GalleryCategory;

interface TravelerGalleryProps {
  items: GalleryItem[];
  labels: Record<GalleryCategory, string>;
}

export function TravelerGallery({ items, labels }: TravelerGalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );
  const categories = (Object.keys(labels) as GalleryCategory[]).filter((c) => items.some((i) => i.category === c));

  return (
    <section id="gallery" className="bg-white py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-end">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Gallery</p>
            <h2 className="font-serif text-display-md text-brand-ink">Where these stories happened</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body-lg text-brand-ink/80 leading-relaxed">
              Masjid an-Nabawi at dusk, a longtail boat in Krabi, the hill-country train in Ella. Open any picture to
              see it full size and find the trip that goes there.
            </p>
          </Reveal>
        </div>

        <div
          role="group"
          aria-label="Filter photos"
          className="mt-10 flex flex-wrap gap-2"
        >
          {(["all", ...categories] as Filter[]).map((c) => {
            const selected = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(c)}
                className={cn(
                  "shrink-0 min-h-[44px] px-4 rounded-full text-label border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                  selected
                    ? "bg-brand-gold/15 border-brand-gold text-brand-ink"
                    : "bg-white border-brand-muted/25 text-brand-ink hover:border-brand-gold/60"
                )}
              >
                {c === "all" ? "Everything" : labels[c]}
              </button>
            );
          })}
        </div>

        <ul key={filter} className="mt-8 columns-2 lg:columns-4 gap-3 md:gap-4">
          {shown.map((item, i) => (
            <li
              key={item.id}
              className="mb-3 md:mb-4 break-inside-avoid"
              style={{ animation: `fadeUpReveal 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(i, 10) * 0.05}s both` }}
            >
              <figure>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`View larger: ${item.caption}`}
                  className="group relative block w-full overflow-hidden rounded-card bg-surface-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  style={{ aspectRatio: item.ratio }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <span
                    className="absolute right-3 top-3 w-9 h-9 rounded-full bg-white/90 text-brand-ink flex items-center justify-center opacity-0 scale-90 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100"
                    aria-hidden="true"
                  >
                    <Expand size={15} />
                  </span>
                </button>
                <figcaption className="mt-2 text-body-sm text-brand-ink/80">
                  {item.caption}
                  {item.sharedBy && <span className="text-brand-ink/60">, shared by {item.sharedBy}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <GalleryLightbox
          items={shown}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
