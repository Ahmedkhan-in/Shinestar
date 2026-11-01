"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Instagram } from "lucide-react";
import type { SocialPost } from "@/types";

interface ReelPlayerProps {
  posts: SocialPost[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}

// Plays a reel on-site through Instagram's official embed. The embed is heavy, so it is
// only loaded for the reel the visitor opens — the rail itself stays light cover images.
export function ReelPlayer({ posts, index, onIndexChange, onClose }: ReelPlayerProps) {
  const post = posts[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<Element | null>(null);

  const go = (delta: number) => onIndexChange((index + delta + posts.length) % posts.length);

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
      // Keep Tab inside the dialog (the iframe is skipped by the browser's own focus handling)
      if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]")).filter((el) => el.offsetParent !== null);
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Reel ${index + 1} of ${posts.length}: ${post.title}`}
      className="fixed inset-0 z-[60] flex flex-col bg-brand-ink/95"
      style={{ animation: "fadeIn 0.25s ease both" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16 shrink-0 text-white">
        <p className="text-body-sm text-white/80 tabular-nums" aria-live="polite">
          {index + 1} / {posts.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close reel"
          className="w-11 h-11 -mr-2 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center gap-3 md:gap-6 px-2 md:px-8 pb-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous reel"
          className="hidden sm:flex shrink-0 w-11 h-11 rounded-full bg-white/10 text-white items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div className="relative h-full max-h-[820px] w-full max-w-[400px] rounded-card overflow-hidden bg-white">
          {/* Spinner behind the iframe while Instagram loads */}
          <span className="absolute inset-0 flex items-center justify-center gap-1.5" aria-hidden="true">
            <span className="planner-dot-1 w-2 h-2 rounded-full bg-brand-ink/40" />
            <span className="planner-dot-2 w-2 h-2 rounded-full bg-brand-ink/40" />
            <span className="planner-dot-3 w-2 h-2 rounded-full bg-brand-ink/40" />
          </span>
          <iframe
            key={post.id}
            src={`https://www.instagram.com/reel/${post.id}/embed/`}
            title={`Instagram reel: ${post.title}`}
            className="relative w-full h-full border-0"
            allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
            allowFullScreen
            scrolling="no"
          />
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next reel"
          className="hidden sm:flex shrink-0 w-11 h-11 rounded-full bg-white/10 text-white items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6 px-4 text-white">
        <button type="button" onClick={() => go(-1)} aria-label="Previous reel" className="sm:hidden w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-body-sm text-white/85 hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          <Instagram size={15} aria-hidden="true" />
          Open on Instagram
        </a>
        <button type="button" onClick={() => go(1)} aria-label="Next reel" className="sm:hidden w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>,
    document.body
  );
}
