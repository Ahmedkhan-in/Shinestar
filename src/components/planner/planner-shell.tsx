"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface PlannerShellProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  /** Package/page name shown as eyebrow above title */
  eyebrow?: string;
  showTitle?: boolean;
}

export function PlannerShell({
  onClose,
  children,
  title = "Get my custom package price",
  eyebrow,
  showTitle = true,
}: PlannerShellProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Rendered into <body> via a portal: a transformed ancestor (scroll reveals,
  // entrance animations) would otherwise trap `position: fixed` and squeeze the sheet.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Focus close button once the portal has mounted; return focus to the opener on close
  useEffect(() => {
    if (!mounted) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus?.();
  }, [mounted]);

  // Keep Tab inside the sheet
  useEffect(() => {
    if (!mounted) return;
    function onTab(e: KeyboardEvent) {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    window.addEventListener("keydown", onTab);
    return () => window.removeEventListener("keydown", onTab);
  }, [mounted]);

  // Escape to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-ink/60"
        onClick={onClose}
        aria-hidden="true"
        style={{ animation: "fadeIn 0.25s ease both" }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative bg-white w-full max-h-[92dvh] md:max-h-[88vh] md:max-w-lg md:mx-4 rounded-t-[20px] md:rounded-[20px] shadow-modal flex flex-col overflow-hidden animate-slide-up-modal md:animate-scale-in-modal"
      >
        {/* Header */}
        {showTitle && (
          <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-surface-grey shrink-0">
            <div className="flex-1 pr-4">
              {eyebrow && (
                <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-1">
                  {eyebrow}
                </p>
              )}
              <h2 className="font-serif text-display-sm text-brand-ink leading-tight">
                {title}
              </h2>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="shrink-0 p-2 rounded-full text-brand-muted hover:text-brand-ink hover:bg-surface-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue -mr-1 -mt-1"
              aria-label="Close planner"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
