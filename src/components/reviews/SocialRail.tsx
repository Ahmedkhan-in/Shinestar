"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Facebook, Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { SocialPost } from "@/types";

// Player code only downloads when a visitor opens a reel
const ReelPlayer = dynamic(() => import("./ReelPlayer").then((m) => m.ReelPlayer), { ssr: false });

export function SocialRail({ posts }: { posts: SocialPost[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const reels = posts.filter((p) => p.platform === "instagram" && p.kind === "reel");

  const scroll = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-surface-warm py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">On Instagram</p>
            <h2 className="font-serif text-display-md text-brand-ink">Short clips from the road</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
              Jet skis off Phuket, the Batu Caves steps, Phi Phi from the beach. Tap any clip to watch it right
              here.
            </p>
          </Reveal>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll clips left"
              className="w-11 h-11 rounded-full bg-white text-brand-ink flex items-center justify-center hover:text-brand-gold-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll clips right"
              className="w-11 h-11 rounded-full bg-white text-brand-ink flex items-center justify-center hover:text-brand-gold-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={railRef}
          className="mt-10 flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-2"
        >
          {posts.map((post, i) => {
            const Icon = post.platform === "instagram" ? Instagram : Facebook;
            const platform = post.platform === "instagram" ? "Instagram" : "Facebook";
            const reelIndex = reels.indexOf(post);
            // Instagram reels play on-site; anything else links out
            const playHere = reelIndex !== -1;
            const cardClass =
              "group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-card";
            return (
              <li
                key={post.id}
                className="snap-start shrink-0 w-[62%] sm:w-[40%] md:w-[30%] lg:w-[calc((100%-4rem)/5)]"
                style={{ animation: `fadeUpReveal 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s both` }}
              >
                {(() => {
                  const card = (
                  <span className="relative block aspect-[9/16] rounded-card overflow-hidden bg-brand-footer">
                    <Image
                      src={post.poster}
                      alt={post.posterAlt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 62vw, (max-width: 1024px) 30vw, 18vw"
                    />
                    {/* taste-skill-ignore: neutral scrim under text on a photo */}
                    <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent" aria-hidden="true" />
                    {post.kind === "reel" && (
                      <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-brand-ink flex items-center justify-center transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                        <Play size={14} className="ml-0.5 fill-brand-ink" />
                      </span>
                    )}
                    <span className="absolute inset-x-0 bottom-0 p-4">
                      <span className="flex items-center gap-1.5 text-body-sm text-white/85">
                        <Icon size={13} aria-hidden="true" />
                        {platform} {post.kind}
                      </span>
                      <span className="mt-1.5 block text-body-md font-semibold text-white leading-snug">{post.title}</span>
                    </span>
                  </span>
                  );
                  return playHere ? (
                    <button type="button" onClick={() => setOpen(reelIndex)} className={cardClass}>
                      {card}
                      <span className="sr-only"> (play reel)</span>
                    </button>
                  ) : (
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {card}
                      <span className="sr-only"> (opens {platform} in a new tab)</span>
                    </a>
                  );
                })()}
                {post.isSampleData && (
                  <p className="mt-2 text-body-sm italic text-brand-ink/60">Sample: link to the real post</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {open !== null && (
        <ReelPlayer posts={reels} index={open} onIndexChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
