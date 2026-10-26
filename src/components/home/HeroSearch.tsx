"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  Globe2,
  Heart,
  HelpCircle,
  Landmark,
  MapPin,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CustomPricePlanner } from "@/components/planner/custom-price-planner";
import { getStepFlow } from "@/components/planner/planner-config";
import type { CustomPlannerAnswers } from "@/components/planner/types";
import type { PackageCategory } from "@/types";
import { cn, formatPrice } from "@/lib/utils";

const SESSION_KEY = "shine-star-planner-home";

// Lightweight package index built on the server, so full itineraries stay out of the client bundle
export interface SearchCatalogItem {
  slug: string;
  title: string;
  category: PackageCategory;
  country: string;
  startingPrice?: number;
  currency: string;
  image: string;
  href: string;
}

type FieldId = "destination" | "style" | "timing";

interface Option {
  value: string;
  label: string;
  hint?: string;
  icon?: LucideIcon;
  image?: string;
}

// ─── Option lists matching planner's own values ────────────────────────────────

const DESTINATIONS: Option[] = [
  { value: "", label: "Any destination", hint: "Show me everything", icon: Globe2 },
  { value: "Umrah", label: "Saudi Arabia / Umrah", hint: "Makkah · Madinah" },
  { value: "Dubai", label: "Dubai, UAE", hint: "Desert safari · Burj Khalifa" },
  { value: "Thailand", label: "Thailand", hint: "Bangkok · Pattaya · Phuket" },
  { value: "Malaysia", label: "Malaysia", hint: "KL · Langkawi · Highlands" },
  { value: "Singapore", label: "Singapore", hint: "Marina Bay · Sentosa" },
  { value: "Sri Lanka", label: "Sri Lanka", hint: "Kandy · Ella · Galle" },
  { value: "Maldives", label: "Maldives", hint: "Overwater villas" },
  { value: "Honeymoon destination", label: "Turkey / Bali", hint: "Istanbul · Cappadocia · Ubud" },
];

const STYLES: Option[] = [
  { value: "", label: "Any experience", hint: "Open to ideas", icon: Compass },
  { value: "Family holiday", label: "Family holiday", hint: "Kid-friendly, halal-first", icon: Users },
  { value: "Honeymoon destination", label: "Honeymoon", hint: "Private, romantic, unhurried", icon: Heart },
  { value: "Umrah", label: "Umrah & Hajj", hint: "Visa, hotels near Haram, ziyarat", icon: Landmark },
  { value: "Not sure yet", label: "Not sure yet", hint: "We'll help you decide", icon: HelpCircle },
];

const TIMINGS: Option[] = [
  { value: "", label: "Anytime", hint: "No fixed dates", icon: CalendarDays },
  { value: "Within 30 days", label: "Next 30 days", hint: "Fast-track visas & bookings", icon: CalendarDays },
  { value: "Next 2–3 months", label: "2–3 months away", hint: "Best fares usually here", icon: CalendarDays },
  { value: "Next 4–6 months", label: "4–6 months away", hint: "Plenty of time to plan", icon: CalendarDays },
  { value: "Flexible / not decided", label: "I'm flexible", hint: "We'll suggest the best window", icon: CalendarDays },
];

// Ready-made combinations shown as one-tap chips
const QUICK_PICKS: { label: string; destination: string; style: string; timing: string }[] = [
  { label: "Umrah this season", destination: "Umrah", style: "Umrah", timing: "Next 2–3 months" },
  { label: "Dubai with family", destination: "Dubai", style: "Family holiday", timing: "" },
  { label: "Maldives honeymoon", destination: "Maldives", style: "Honeymoon destination", timing: "" },
  { label: "Thailand last-minute", destination: "Thailand", style: "", timing: "Within 30 days" },
];

// ─── Matching ─────────────────────────────────────────────────────────────────

function matchesDestination(item: SearchCatalogItem, destination: string): boolean {
  switch (destination) {
    case "":
      return true;
    case "Umrah":
      return item.category === "umrah";
    case "Dubai":
      return item.country === "UAE";
    case "Honeymoon destination":
      return item.country === "Turkey" || item.country === "Indonesia";
    default:
      return item.country === destination;
  }
}

function matchesStyle(item: SearchCatalogItem, style: string): boolean {
  switch (style) {
    case "Family holiday":
      return item.category === "international";
    case "Honeymoon destination":
      return item.category === "honeymoon";
    case "Umrah":
      return item.category === "umrah";
    default:
      return true;
  }
}

// Picking one field can imply another — fill it in only if the visitor hasn't
function impliedStyle(destination: string): string | null {
  if (destination === "Umrah") return "Umrah";
  if (destination === "Maldives" || destination === "Honeymoon destination") return "Honeymoon destination";
  return null;
}

// ─── Session pre-fill ─────────────────────────────────────────────────────────

function preFillSession(destination: string, style: string, timing: string): void {
  const answers: Partial<CustomPlannerAnswers> = {};

  // Style takes priority for trip type; destination refines it
  const resolvedDest =
    style && style !== ""
      ? style
      : destination !== ""
      ? destination
      : undefined;

  if (resolvedDest) answers.destination = resolvedDest;
  if (timing !== "") answers.departure = timing;

  // Find first unanswered step in home flow to skip already-filled questions
  const steps = getStepFlow("home");
  const startIdx = steps.findIndex((s) => !answers[s as keyof CustomPlannerAnswers]);
  const effectiveStart = startIdx === -1 ? steps.length - 1 : Math.max(0, startIdx);

  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ answers, stepIndex: effectiveStart }));
  } catch {}
}

// ─── Component ────────────────────────────────────────────────────────────────

const FIELD_ORDER: FieldId[] = ["destination", "style", "timing"];

export function HeroSearch({ catalog }: { catalog: SearchCatalogItem[] }) {
  const [destination, setDestination] = useState("");
  const [style, setStyle] = useState("");
  const [timing, setTiming] = useState("");
  const [openField, setOpenField] = useState<FieldId | null>(null);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const values: Record<FieldId, string> = { destination, style, timing };
  const setters: Record<FieldId, (v: string) => void> = {
    destination: setDestination,
    style: setStyle,
    timing: setTiming,
  };

  // Destination thumbnails come from the packages themselves
  const destinationOptions = useMemo(
    () =>
      DESTINATIONS.map((opt) => {
        if (opt.value === "") return opt;
        const pkg = catalog.find((p) => matchesDestination(p, opt.value));
        return pkg ? { ...opt, image: pkg.image } : opt;
      }),
    [catalog]
  );

  const matches = useMemo(
    () => catalog.filter((p) => matchesDestination(p, destination) && matchesStyle(p, style)),
    [catalog, destination, style]
  );

  const lowest = matches.reduce<SearchCatalogItem | null>(
    (min, p) => (p.startingPrice && (!min || p.startingPrice < (min.startingPrice ?? Infinity)) ? p : min),
    null
  );

  // Where "View" should go: the one package, a category page, or the packages section
  const viewHref = useMemo(() => {
    if (matches.length === 1) return matches[0].href;
    const categories = new Set(matches.map((m) => m.category));
    if (categories.size === 1) {
      const [only] = Array.from(categories);
      return only === "umrah" ? "/umrah" : only === "honeymoon" ? "/honeymoon" : "/packages";
    }
    return "#packages";
  }, [matches]);

  // Close the open dropdown on outside click
  useEffect(() => {
    if (!openField) return;
    const onPointerDown = (e: PointerEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) setOpenField(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openField]);

  const optionCount = (field: FieldId, value: string) =>
    catalog.filter((p) =>
      field === "destination"
        ? matchesDestination(p, value) && matchesStyle(p, style)
        : field === "style"
        ? matchesDestination(p, destination) && matchesStyle(p, value)
        : matchesDestination(p, destination) && matchesStyle(p, style)
    ).length;

  function select(field: FieldId, value: string) {
    const updated = { ...values, [field]: value };
    if (field === "destination") {
      const implied = impliedStyle(value);
      if (implied && style === "") updated.style = implied;
    }
    if (field === "style" && value === "Umrah" && destination === "") updated.destination = "Umrah";
    FIELD_ORDER.forEach((f) => setters[f](updated[f]));

    // Move straight on to the next empty field, Airbnb-style
    const nextField = FIELD_ORDER.slice(FIELD_ORDER.indexOf(field) + 1).find((f) => updated[f] === "");
    if (nextField) {
      setOpenField(nextField);
    } else {
      setOpenField(null);
      submitRef.current?.focus();
    }
  }

  function applyQuickPick(pick: (typeof QUICK_PICKS)[number]) {
    setDestination(pick.destination);
    setStyle(pick.style);
    setTiming(pick.timing);
    setOpenField(null);
    submitRef.current?.focus();
  }

  function clearAll() {
    setDestination("");
    setStyle("");
    setTiming("");
    setOpenField(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpenField(null);
    preFillSession(destination, style, timing);
    setPlannerOpen(true);
  }

  const filledCount = FIELD_ORDER.filter((f) => values[f] !== "").length;
  const optionsFor: Record<FieldId, Option[]> = {
    destination: destinationOptions,
    style: STYLES,
    timing: TIMINGS,
  };

  return (
    // Negative top margin pulls the bar up so it straddles the hero's bottom edge
    <section className="relative z-30 -mt-16 md:-mt-11 pb-8 md:pb-10">
      <div
        className="max-w-content mx-auto px-4 md:px-8"
        style={{ animation: "fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          role="search"
          aria-label="Find your trip"
          className={cn(
            "relative rounded-[20px] md:rounded-full border border-white/60 shadow-modal p-1.5 flex flex-col md:flex-row md:items-stretch gap-1 transition-colors duration-300",
            openField ? "bg-surface-grey" : "bg-white"
          )}
        >
          <SearchField
            id="destination"
            label="Where to?"
            placeholder="Choose destination"
            icon={MapPin}
            options={optionsFor.destination}
            value={destination}
            open={openField === "destination"}
            dimmed={openField !== null && openField !== "destination"}
            onOpenChange={(o) => setOpenField(o ? "destination" : null)}
            onSelect={(v) => select("destination", v)}
            onClear={() => setDestination("")}
            countFor={(v) => optionCount("destination", v)}
            className="md:flex-[1.3]"
          />
          <Divider hidden={openField !== null} />
          <SearchField
            id="style"
            label="Travel style"
            placeholder="Any experience"
            icon={Compass}
            options={optionsFor.style}
            value={style}
            open={openField === "style"}
            dimmed={openField !== null && openField !== "style"}
            onOpenChange={(o) => setOpenField(o ? "style" : null)}
            onSelect={(v) => select("style", v)}
            onClear={() => setStyle("")}
            countFor={(v) => optionCount("style", v)}
            className="md:flex-1"
          />
          <Divider hidden={openField !== null} />
          <SearchField
            id="timing"
            label="When are you going?"
            placeholder="Anytime"
            icon={CalendarDays}
            options={optionsFor.timing}
            value={timing}
            open={openField === "timing"}
            dimmed={openField !== null && openField !== "timing"}
            onOpenChange={(o) => setOpenField(o ? "timing" : null)}
            onSelect={(v) => select("timing", v)}
            onClear={() => setTiming("")}
            className="md:flex-1"
            alignRight
          />

          {/* CTA */}
          <div className="flex items-center p-1 md:pl-2">
            <button
              ref={submitRef}
              type="submit"
              className="group relative w-full md:w-auto overflow-hidden flex items-center justify-center gap-2 bg-brand-gold text-brand-ink text-label font-semibold pl-5 pr-6 py-3.5 rounded-full hover:bg-brand-champagne active:scale-[0.97] transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 whitespace-nowrap min-h-[52px] shadow-card"
            >
              {/* Pulse once every field is chosen */}
              {filledCount === 3 && (
                <span className="absolute inset-0 rounded-full bg-brand-gold/60 animate-ping motion-reduce:hidden" aria-hidden="true" />
              )}
              {/* Shine sweep on hover */}
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/40 translate-x-0 group-hover:translate-x-[300%] transition-transform duration-700 ease-premium"
                aria-hidden="true"
              />
              <Search size={16} className="relative transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
              <span className="relative">Find my trip</span>
            </button>
          </div>
        </form>

        {/* Live result line + quick picks, sitting on the white section */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-1 md:px-6">
          <div className="flex items-center gap-2 text-body-sm text-brand-muted min-h-[28px]" aria-live="polite">
            <Sparkles size={14} className="text-brand-gold shrink-0" aria-hidden="true" />
            {matches.length > 0 ? (
              <span key={`${destination}|${style}`} style={{ animation: "fadeUpReveal 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                <strong className="text-brand-ink font-semibold">
                  {matches.length} {matches.length === 1 ? "package" : "packages"}
                </strong>{" "}
                match
                {lowest?.startingPrice && (
                  <> · from <strong className="text-brand-ink font-semibold">{formatPrice(lowest.startingPrice, lowest.currency)}</strong></>
                )}
                <Link
                  href={viewHref}
                  className="ml-2 inline-flex items-center gap-1 text-brand-blue font-semibold hover:gap-2 transition-all"
                >
                  View <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </span>
            ) : (
              <span key="none" style={{ animation: "fadeUpReveal 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                No ready-made package for this mix —{" "}
                <strong className="text-brand-ink font-semibold">we&apos;ll build a custom one.</strong>
              </span>
            )}
            {filledCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="ml-1 text-brand-muted/70 hover:text-brand-ink underline underline-offset-2 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none -mx-1 px-1 pb-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-muted/70 shrink-0">
              Popular
            </span>
            {QUICK_PICKS.map((pick) => {
              const active =
                destination === pick.destination && style === pick.style && timing === pick.timing;
              return (
                <button
                  key={pick.label}
                  type="button"
                  onClick={() => applyQuickPick(pick)}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-body-sm font-medium transition-all duration-300 ease-premium hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    active
                      ? "border-brand-gold bg-brand-gold/10 text-brand-ink"
                      : "border-brand-muted/20 bg-white text-brand-muted hover:border-brand-gold/50 hover:text-brand-ink hover:shadow-card"
                  )}
                >
                  {active && <Check size={12} className="text-brand-gold" aria-hidden="true" />}
                  {pick.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {plannerOpen && (
        <CustomPricePlanner mode="home" sessionKey={SESSION_KEY} onClose={() => setPlannerOpen(false)} />
      )}
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Divider({ hidden }: { hidden: boolean }) {
  return (
    <span
      className={cn(
        "hidden md:block w-px self-center h-8 bg-brand-muted/15 transition-opacity duration-200",
        hidden && "opacity-0"
      )}
      aria-hidden="true"
    />
  );
}

function SearchField({
  id,
  label,
  placeholder,
  icon: Icon,
  options,
  value,
  open,
  dimmed,
  onOpenChange,
  onSelect,
  onClear,
  countFor,
  className,
  alignRight = false,
}: {
  id: FieldId;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  options: Option[];
  value: string;
  open: boolean;
  dimmed: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (value: string) => void;
  onClear: () => void;
  countFor?: (value: string) => number;
  className?: string;
  alignRight?: boolean;
}) {
  const selected = options.find((o) => o.value === value);
  const [highlight, setHighlight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = `hs-${id}-list`;

  // Start keyboard focus on the current choice each time the list opens
  useEffect(() => {
    if (open) setHighlight(Math.max(0, options.findIndex((o) => o.value === value)));
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${highlight}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpenChange(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + options.length) % options.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(options[highlight].value);
    } else if (e.key === "Escape" || e.key === "Tab") {
      onOpenChange(false);
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "group relative flex items-center gap-3 rounded-[16px] md:rounded-full px-4 md:px-6 py-3 cursor-pointer transition-all duration-300 ease-premium",
          open ? "bg-white shadow-search" : "hover:bg-surface-grey",
          dimmed && "opacity-70"
        )}
        onClick={() => onOpenChange(!open)}
      >
        <Icon
          size={18}
          className={cn(
            "shrink-0 transition-all duration-300",
            open || value ? "text-brand-gold scale-110" : "text-brand-muted/60"
          )}
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
            {label}
          </p>
          <button
            type="button"
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-haspopup="listbox"
            aria-label={label}
            onKeyDown={onKeyDown}
            onClick={(e) => {
              e.stopPropagation();
              onOpenChange(!open);
            }}
            className={cn(
              "block w-full text-left truncate text-body-md font-medium focus:outline-none",
              value === "" ? "text-brand-muted" : "text-brand-ink"
            )}
          >
            <span key={value} className="inline-block" style={{ animation: "fadeUpReveal 0.35s cubic-bezier(0.16,1,0.3,1) both" }}>
              {value === "" ? placeholder : selected?.label}
            </span>
          </button>
        </div>
        {value !== "" && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="shrink-0 w-6 h-6 rounded-full bg-surface-grey text-brand-muted hover:bg-brand-ink hover:text-white flex items-center justify-center transition-colors"
            aria-label={`Clear ${label}`}
          >
            <X size={12} />
          </button>
        )}
      </div>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute top-full mt-3 z-40 w-full md:w-[340px] max-h-[360px] overflow-y-auto overscroll-contain rounded-[20px] bg-white shadow-modal border border-surface-grey p-2",
            alignRight ? "right-0" : "left-0"
          )}
          style={{ animation: "fadeUpReveal 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const count = countFor?.(opt.value);
            const OptIcon = opt.icon;
            return (
              <li
                key={opt.value || "any"}
                data-index={i}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => onSelect(opt.value)}
                className={cn(
                  "flex items-center gap-3 rounded-[14px] px-3 py-2.5 cursor-pointer transition-colors duration-150",
                  i === highlight ? "bg-surface-grey" : "bg-transparent"
                )}
                style={{ animation: `fadeUpReveal 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 0.025}s both` }}
              >
                <span className="relative w-11 h-11 shrink-0 rounded-[12px] overflow-hidden bg-brand-gold/10 flex items-center justify-center">
                  {opt.image ? (
                    <Image src={opt.image} alt="" fill sizes="44px" className="object-cover" />
                  ) : OptIcon ? (
                    <OptIcon size={18} className="text-brand-gold" aria-hidden="true" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-body-md font-medium text-brand-ink truncate">{opt.label}</span>
                  {opt.hint && <span className="block text-body-sm text-brand-muted truncate">{opt.hint}</span>}
                </span>
                {count !== undefined && opt.value !== "" && opt.value !== "Not sure yet" && (
                  <span
                    className={cn(
                      "shrink-0 text-[11px] font-semibold rounded-full px-2 py-0.5",
                      count > 0 ? "bg-brand-blue/10 text-brand-blue" : "bg-surface-grey text-brand-muted"
                    )}
                  >
                    {count > 0 ? count : "Custom"}
                  </span>
                )}
                {isSelected && <Check size={16} className="shrink-0 text-brand-gold" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
