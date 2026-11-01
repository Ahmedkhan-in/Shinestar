"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import type { GalleryItem } from "@/types";

interface GalleryLightboxProps {
  items: GalleryItem[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}

export function GalleryLightbox({ items, index, onIndexChange, onClose }: GalleryLightboxProps) {
  const item = items[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const returnFocus = useRef<Element | null>(null);

  const go = (delta: number) => onIndexChange((index + delta + items.length) % items.length);

  // Lock scroll, focus the close button, and restore focus to the opener on close
  useEffect(() => {
    returnFocus.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      (returnFocus.current as HTMLElement | null)?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      // Keep Tab inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Portal to <body> so no transformed ancestor can trap the fixed overlay
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${items.length}: ${item.caption}`}
      className="fixed inset-0 z-[60] flex flex-col bg-brand-ink/95"
      style={{ animation: "fadeIn 0.25s ease both" }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16 shrink-0 text-white">
        <p className="text-body-sm text-white/80 tabular-nums" aria-live="polite">
          {index + 1} / {items.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex-1 min-h-0 mx-4 md:mx-20"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -50) go(1);
          if (dx > 50) go(-1);
          touchX.current = null;
        }}
      >
        <Image
          key={item.id}
          src={item.src.replace(/w=\d+&h=\d+/, `w=1600&h=${Math.round(1600 / item.ratio)}`)}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="100vw"
          style={{ animation: "scaleInModal 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
        />
      </div>

      <div className="shrink-0 px-4 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white">
        <div>
          <p className="text-body-lg">{item.caption}</p>
          {item.sharedBy && <p className="text-body-sm text-white/70">Shared by {item.sharedBy}</p>}
        </div>
        {item.relatedHref && (
          <Link
            href={item.relatedHref}
            onClick={onClose}
            className="group inline-flex items-center gap-1.5 min-h-[44px] text-label font-semibold text-brand-champagne hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            {item.relatedLabel ?? "See the trip"}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Prev / next */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 text-white items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 text-white items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>,
    document.body
  );
}
