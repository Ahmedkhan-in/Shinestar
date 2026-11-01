"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlannerShell } from "@/components/planner/planner-shell";
import { PlannerProgress } from "@/components/planner/planner-progress";
import { PlannerOptionCard } from "@/components/planner/planner-option-card";
import { PlannerWhatsappStep } from "@/components/planner/planner-whatsapp-step";
import { buildVisaMessage, buildWhatsAppURL, type VisaEnquiryAnswers } from "@/lib/whatsapp";
import { departureCities } from "@/data/site";

// ─── Step definitions — same flow pattern as the custom price planner ─────────

type StepId = "visaType" | "destination" | "applicants" | "travelHistory" | "travelMonth" | "city" | "whatsapp";

interface Option {
  value: string;
  label: string;
  description?: string;
}

const VISA_TYPES: Option[] = [
  { value: "Umrah", label: "Umrah", description: "Umrah e-visa with your package, vaccine certificates checked" },
  { value: "Tourist / visit", label: "Tourist / visit", description: "Holidays in Dubai, Thailand, Malaysia, Turkey, Europe and more" },
  { value: "Family visit", label: "Family visit", description: "Visiting relatives abroad on an invitation or sponsor letter" },
  { value: "Business", label: "Business", description: "Meetings, trade fairs and exhibitions" },
  { value: "Transit", label: "Transit / layover", description: "Not sure if your connection needs a visa" },
];

const STEPS: { id: StepId; question: string; options?: Option[]; columns?: 1 | 2 | 3 }[] = [
  { id: "visaType", question: "Which visa do you need?", options: VISA_TYPES, columns: 1 },
  {
    id: "destination",
    question: "Which country are you applying for?",
    columns: 3,
    options: ["Saudi Arabia", "UAE", "Thailand", "Malaysia", "Singapore", "Sri Lanka", "Turkey", "Azerbaijan", "Schengen / Europe", "Other"].map(
      (c) => ({ value: c, label: c })
    ),
  },
  {
    id: "applicants",
    question: "How many people are applying?",
    columns: 2,
    options: [
      { value: "1 person", label: "Just me" },
      { value: "2 people", label: "2 people" },
      { value: "3–5 people", label: "3–5 people" },
      { value: "6+ / group", label: "6+ / group" },
    ],
  },
  {
    id: "travelHistory",
    question: "Where have you travelled before?",
    columns: 1,
    options: [
      { value: "First time abroad", label: "This will be my first trip abroad" },
      { value: "Gulf / Saudi only", label: "Gulf countries or Saudi Arabia only" },
      { value: "Asia (Thailand, Malaysia…)", label: "Asia — Thailand, Malaysia and similar" },
      { value: "UK, US or Schengen before", label: "UK, US or Schengen visa before" },
    ],
  },
  {
    id: "travelMonth",
    question: "When are you planning to travel?",
    columns: 2,
    options: [
      { value: "Within 30 days", label: "Next 30 days" },
      { value: "1–3 months", label: "1–3 months" },
      { value: "3–6 months", label: "3–6 months" },
      { value: "Not decided", label: "Not decided" },
    ],
  },
  {
    id: "city",
    question: "Which city do you live in?",
    columns: 3,
    options: [...departureCities, "Other city"].map((c) => ({ value: c, label: c })),
  },
  { id: "whatsapp", question: "Where should we send your document list?" },
];

const SUMMARY_LABELS: Record<Exclude<StepId, "whatsapp">, string> = {
  visaType: "Visa type",
  destination: "Country",
  applicants: "Applicants",
  travelHistory: "Previous travel",
  travelMonth: "Planned travel",
  city: "City",
};

type Answers = Partial<Record<StepId, string>> & { countryCode?: string };

interface VisaEnquirySheetProps {
  onClose: () => void;
  initialType?: string;
  initialDestination?: string;
}

export function VisaEnquirySheet({ onClose, initialType, initialDestination }: VisaEnquirySheetProps) {
  const [answers, setAnswers] = useState<Answers>(() => ({
    visaType: initialType,
    destination: initialDestination,
  }));
  // Start at the first question that isn't already answered by the button that opened the sheet
  const [stepIndex, setStepIndex] = useState(() => {
    const first = STEPS.findIndex((s) => s.id !== "whatsapp" && !(s.id === "visaType" ? initialType : s.id === "destination" ? initialDestination : undefined));
    return first === -1 ? 0 : first;
  });
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [phase, setPhase] = useState<"questions" | "summary">("questions");
  const [sent, setSent] = useState(false);
  const advancing = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Move focus to the new question (or summary) so keyboard and screen-reader users follow the flow
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const target = contentRef.current?.querySelector<HTMLElement>("[data-step-focus]");
    target?.focus({ preventScroll: true });
  }, [stepIndex, phase]);

  const step = STEPS[stepIndex];
  const progress = ((stepIndex + 1) / STEPS.length) * 100;
  const animationClass = direction === "forward" ? "animate-slide-from-right" : "animate-slide-from-left";

  const next = () => {
    setDirection("forward");
    if (stepIndex < STEPS.length - 1) setStepIndex((i) => i + 1);
    else setPhase("summary");
  };
  const back = () => {
    setDirection("back");
    if (phase === "summary") setPhase("questions");
    else setStepIndex((i) => Math.max(0, i - 1));
  };

  const select = (value: string) => {
    if (advancing.current) return; // ignore a second tap while the step is changing
    setAnswers((a) => ({ ...a, [step.id]: value }));
    // Auto-advance after a tap, same timing as the price planner
    advancing.current = true;
    setTimeout(() => {
      next();
      advancing.current = false;
    }, 280);
  };

  const message: VisaEnquiryAnswers = {
    visaType: answers.visaType,
    destination: answers.destination,
    applicants: answers.applicants,
    travelHistory: answers.travelHistory,
    travelMonth: answers.travelMonth,
    city: answers.city,
    whatsapp: answers.whatsapp ? `${answers.countryCode ?? "+92"} ${answers.whatsapp}` : undefined,
  };

  const sendToWhatsApp = () => {
    window.open(buildWhatsAppURL(buildVisaMessage(message)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <PlannerShell
      onClose={onClose}
      eyebrow="Visa assistance"
      title={phase === "summary" ? "Your visa enquiry" : "Check my visa requirements"}
    >
      {phase === "questions" && (
        <PlannerProgress value={progress} stepIndex={stepIndex} totalSteps={STEPS.length} />
      )}

      <div ref={contentRef} className="px-6 py-6 pb-8">
        {phase === "questions" && step.id === "whatsapp" && (
          <>
            <PlannerWhatsappStep
              key={`whatsapp-${direction}`}
              mode="home"
              initialNumber={answers.whatsapp ?? ""}
              initialCountryCode={answers.countryCode ?? "+92"}
              animationClass={animationClass}
              heading="Last step — where should we send your document list?"
              hint="A visa consultant replies on WhatsApp with your checklist and our service fee. No spam."
              submitLabel="Review my enquiry"
              onSubmit={(number, code) => {
                setAnswers((a) => ({ ...a, whatsapp: number, countryCode: code }));
                setTimeout(next, 120);
              }}
            />
            <div className="mt-5">
              <BackButton onBack={back} />
            </div>
          </>
        )}

        {phase === "questions" && step.id !== "whatsapp" && (
          <>
            <div key={`${stepIndex}-${direction}`} className={animationClass}>
              <p className="text-body-sm text-brand-ink/60 mb-2" aria-live="polite">
                {stepIndex + 1} of {STEPS.length}
              </p>
              <h2 data-step-focus tabIndex={-1} className="font-serif text-display-sm text-brand-ink leading-tight mb-6 focus:outline-none">
                {step.question}
              </h2>
              <div
                role="group"
                aria-label={step.question}
                className={cn(
                  "grid gap-3",
                  step.columns === 1 && "grid-cols-1",
                  step.columns === 2 && "grid-cols-2",
                  step.columns === 3 && "grid-cols-2 sm:grid-cols-3"
                )}
              >
                {step.options?.map((opt) =>
                  opt.description ? (
                    <VisaTypeCard
                      key={opt.value}
                      label={opt.label}
                      description={opt.description}
                      selected={answers[step.id] === opt.value}
                      onClick={() => select(opt.value)}
                    />
                  ) : (
                    <PlannerOptionCard
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      selected={answers[step.id] === opt.value}
                      onClick={() => select(opt.value)}
                    />
                  )
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              {stepIndex > 0 ? <BackButton onBack={back} /> : <span />}
              {answers[step.id] && (
                <button
                  type="button"
                  onClick={next}
                  className="text-body-sm font-semibold text-brand-blue hover:text-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded px-1 min-h-[44px]"
                >
                  Next →
                </button>
              )}
            </div>
          </>
        )}

        {phase === "summary" && (
          <div className="animate-slide-from-right">
            <h3 data-step-focus tabIndex={-1} className="sr-only focus:outline-none">Check your answers</h3>
            <ul className="space-y-3.5 mb-7">
              {(Object.keys(SUMMARY_LABELS) as (keyof typeof SUMMARY_LABELS)[])
                .filter((k) => answers[k])
                .map((k, i) => (
                  <SummaryRow key={k} index={i} label={SUMMARY_LABELS[k]} value={answers[k]!} />
                ))}
              {message.whatsapp && <SummaryRow index={6} label="Your WhatsApp" value={message.whatsapp} />}
            </ul>

            <div className="bg-surface-grey rounded-card p-4 mb-6">
              <p className="text-body-sm font-semibold text-brand-ink mb-2">What happens next</p>
              <ul className="space-y-1.5">
                {[
                  "A visa consultant replies with the document list for your passport and profile",
                  "Our service fee is quoted in writing, separate from embassy fees",
                  "Nothing is charged until you decide to go ahead",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-brand-ink/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-body-sm text-brand-ink/70 leading-relaxed mb-6" aria-live="polite">
              {sent
                ? "Almost done — press Send in WhatsApp so your enquiry reaches our visa desk."
                : "Shine Star helps you prepare your application. Visas are issued only by embassies, and approval can't be guaranteed."}
            </p>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-label font-semibold py-4 rounded-btn hover:bg-brand-sky active:scale-[0.98] transition-[background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[52px]"
            >
              Send to a visa consultant on WhatsApp
              <ChevronRight size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={back}
              className="flex items-center gap-1.5 mt-5 min-h-[44px] text-body-sm text-brand-ink/70 hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              <ChevronLeft size={14} aria-hidden="true" />
              Edit my answers
            </button>
          </div>
        )}
      </div>
    </PlannerShell>
  );
}

// ─── Pieces ───────────────────────────────────────────────────────────────────

function VisaTypeCard({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "relative w-full text-left rounded-card border px-5 py-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
        selected ? "border-brand-gold bg-brand-gold/8 shadow-sm" : "border-surface-grey bg-white hover:border-brand-blue/30"
      )}
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="block font-semibold text-body-md text-brand-ink">{label}</span>
          <span className="block mt-0.5 text-body-sm text-brand-ink/70">{description}</span>
        </span>
        {selected && (
          <span className="shrink-0 w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center mt-0.5">
            <Check size={11} className="text-white" aria-hidden="true" />
          </span>
        )}
      </span>
    </button>
  );
}

function SummaryRow({ index, label, value }: { index: number; label: string; value: string }) {
  return (
    <li
      className="flex items-start gap-3"
      style={{ animation: `fadeUpReveal 0.45s cubic-bezier(0.16,1,0.3,1) ${index * 70}ms both` }}
    >
      <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0">
        <Check size={10} className="text-brand-gold-deep" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-body-sm text-brand-ink/70">{label}</span>
        <span className="block text-body-md text-brand-ink font-medium leading-snug mt-0.5">{value}</span>
      </span>
    </li>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="flex items-center gap-1.5 min-h-[44px] text-body-sm text-brand-ink/70 hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
    >
      <ChevronLeft size={14} aria-hidden="true" />
      Back
    </button>
  );
}
