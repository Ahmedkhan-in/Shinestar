"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/data/site";
import type { ChecklistItem, VisaTypeId } from "@/types";

interface VisaChecklistProps {
  items: ChecklistItem[];
  labels: Record<VisaTypeId, string>;
}

const STORAGE_KEY = "shinestar-visa-checklist";

export function VisaChecklist({ items, labels }: VisaChecklistProps) {
  const types = Object.keys(labels) as VisaTypeId[];
  const [type, setType] = useState<VisaTypeId>("tourist");
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<string | null>(null);

  // Remember ticks on this device only — nothing leaves the browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setReady(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ready)); } catch {}
  }, [ready]);

  const list = useMemo(() => items.filter((i) => i.appliesTo.includes(type)), [items, type]);
  const done = list.filter((i) => ready[i.id]).length;
  const missing = list.filter((i) => !ready[i.id]);

  const message = [
    `Assalamu Alaikum, I'm preparing a ${labels[type].toLowerCase()} visa file.`,
    ``,
    `I have ${done} of ${list.length} documents ready. Still missing:`,
    ...missing.map((m) => `• ${m.title}`),
    ``,
    `Can you guide me on these?`,
  ].join("\n");

  return (
    <section id="checklist" className="bg-surface-grey py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-16">
        {/* Left — heading, type picker, progress */}
        <div className="lg:sticky lg:top-24 self-start">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Document checklist</p>
            <h2 className="font-serif text-display-md text-brand-ink">Tick off your file</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
              Choose your visa type, open each document for what the embassy looks for, and tick what you
              already have. Your ticks stay on this device.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <fieldset className="mt-8">
              <legend className="text-body-sm font-semibold text-brand-ink mb-3">Visa type</legend>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={type === t}
                    onClick={() => { setType(t); setOpen(null); }}
                    className={cn(
                      "min-h-[44px] px-4 rounded-full text-label border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                      type === t
                        ? "bg-brand-gold/15 border-brand-gold text-brand-ink"
                        : "bg-white border-transparent text-brand-ink hover:border-brand-gold/60"
                    )}
                  >
                    {labels[t]}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 rounded-card bg-white p-5">
              <p className="flex items-baseline justify-between text-body-md text-brand-ink" aria-live="polite">
                <span className="font-semibold">{done} of {list.length} ready</span>
                <span className="text-body-sm text-brand-ink/70">{labels[type]} visa</span>
              </p>
              <div className="mt-3 h-2 rounded-full bg-surface-grey overflow-hidden" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-brand-gold origin-left transition-transform duration-500 ease-premium"
                  style={{ transform: `scaleX(${list.length ? done / list.length : 0})` }}
                />
              </div>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 min-h-[48px] rounded-btn bg-brand-blue text-white text-label font-semibold hover:bg-brand-sky active:scale-[0.98] transition-[background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {missing.length ? "Ask about what's missing" : "Send my file for review"}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — accordion list */}
        <ul className="space-y-2" key={type}>
          {list.map((item, i) => {
            const isOpen = open === item.id;
            const isReady = !!ready[item.id];
            return (
              <li
                key={item.id}
                className="rounded-card bg-white overflow-hidden"
                style={{ animation: `fadeUpReveal 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both` }}
              >
                <div className="flex items-stretch">
                  <label className="flex items-center pl-4 pr-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isReady}
                      onChange={() => setReady((r) => ({ ...r, [item.id]: !r[item.id] }))}
                      className="peer sr-only"
                      aria-label={`I have: ${item.title}`}
                    />
                    <span
                      className={cn(
                        "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-blue peer-focus-visible:ring-offset-2",
                        isReady ? "bg-brand-gold border-brand-gold text-brand-ink" : "border-brand-muted/40 text-transparent" // taste-skill-ignore: hides the tick icon, not gradient text
                      )}
                      aria-hidden="true"
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`doc-${item.id}`}
                    className="flex-1 flex items-center justify-between gap-4 min-h-[60px] px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue group"
                  >
                    <span
                      className={cn(
                        "text-body-md font-semibold transition-colors group-hover:text-brand-blue",
                        isReady ? "text-brand-ink/60 line-through decoration-brand-gold/70" : "text-brand-ink"
                      )}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn("shrink-0 text-brand-muted transition-transform duration-300", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div
                  id={`doc-${item.id}`}
                  role="region"
                  aria-label={item.title}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="overflow-hidden" aria-hidden={!isOpen}>
                    <p className="px-5 pb-5 pl-[60px] text-body-md text-brand-ink/80 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
