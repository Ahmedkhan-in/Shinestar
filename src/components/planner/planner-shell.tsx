"use client";

import { useEffect, useRef } from "react";
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

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Focus close button on mount
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Escape to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
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
    </div>
  );
}
