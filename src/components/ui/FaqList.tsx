"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import type { FAQ } from "@/types";

/** Accessible grid-rows accordion — same motion as the package FAQ section. */
export function FaqList({ faqs, idPrefix = "faq" }: { faqs: FAQ[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <Reveal as="li" key={faq.question} delay={i * 50}>
            <div className="bg-white rounded-card overflow-hidden">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 min-h-[60px] px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset group"
                >
                  <span className="font-sans font-semibold text-body-lg text-brand-ink group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300",
                      isOpen ? "border-brand-gold bg-brand-gold/15 text-brand-gold-deep" : "border-brand-muted/30 text-brand-muted"
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="overflow-hidden" aria-hidden={!isOpen}>
                  <p className="px-5 pb-5 pt-0 text-body-md text-brand-ink/80 leading-relaxed max-w-[65ch]">{faq.answer}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
