"use client";

import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlannerConfig } from "@/types";
import type { PlannerAnswers } from "@/lib/whatsapp";
import { messageBuilders, buildWhatsAppURL } from "@/lib/whatsapp";

interface TripPlannerProps {
  config: PlannerConfig;
  category: "international" | "umrah" | "honeymoon";
  onClose: () => void;
}

export function TripPlanner({ config, category, onClose }: TripPlannerProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PlannerAnswers>({
    packageName: config.packageName,
  });
  const [inputValue, setInputValue] = useState("");
  const [showReview, setShowReview] = useState(false);

  const questions = config.questions;
  const currentQ = questions[step];
  const isLast = step === questions.length - 1;

  const handleSelect = useCallback(
    (value: string) => {
      const updated = { ...answers, [currentQ.id]: value };
      setAnswers(updated);
      if (!isLast) {
        setTimeout(() => setStep((s) => s + 1), 240);
      }
    },
    [answers, currentQ, isLast]
  );

  const handleInputNext = useCallback(() => {
    if (inputValue.trim() || currentQ.optional) {
      const updated = { ...answers, [currentQ.id]: inputValue.trim() };
      setAnswers(updated);
      if (isLast) {
        setShowReview(true);
      } else {
        setStep((s) => s + 1);
      }
    }
  }, [answers, currentQ, inputValue, isLast]);

  const handleNext = () => {
    if (currentQ.type === "input") {
      handleInputNext();
    } else if (answers[currentQ.id]) {
      if (isLast) {
        setShowReview(true);
      } else {
        setStep((s) => s + 1);
      }
    }
  };

  const handleBack = () => {
    if (showReview) {
      setShowReview(false);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSendWhatsApp = () => {
    const builder = messageBuilders[category] ?? messageBuilders.international;
    const message = builder(answers);
    const url = buildWhatsAppURL(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const progress = Math.round((step / questions.length) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Trip Planner"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        style={{ animation: "fadeIn 0.3s ease both" }}
      />

      {/* Panel — slides up on mobile, scales in on desktop */}
      <div className="relative bg-white w-full md:max-w-lg md:mx-4 rounded-t-[20px] md:rounded-[20px] shadow-modal overflow-hidden animate-slide-up-modal md:animate-scale-in-modal">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-surface-grey">
          <div className="flex-1">
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold">{config.packageName}</p>
            <p className="font-serif text-display-sm text-brand-ink mt-1">Plan My Trip</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-brand-muted hover:text-brand-ink hover:bg-surface-grey transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Close planner"
          >
            <X size={20} />
          </button>
        </div>

        {/* Gold progress bar */}
        {!showReview && (
          <div className="h-0.5 bg-surface-grey">
            <div
              className="h-full bg-brand-gold transition-all duration-500 ease-premium"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={questions.length}
            />
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-7 min-h-[300px]">
          {showReview ? (
            <ReviewScreen answers={answers} questions={questions} />
          ) : (
            <QuestionScreen
              question={currentQ}
              answer={answers[currentQ.id]}
              inputValue={inputValue}
              onSelect={handleSelect}
              onInputChange={setInputValue}
              stepNum={step + 1}
              totalSteps={questions.length}
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          {(step > 0 || showReview) ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-label text-brand-muted hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded p-1"
            >
              <ChevronLeft size={16} />
              Back
            </button>
          ) : (
            <div />
          )}

          {showReview ? (
            <button
              onClick={handleSendWhatsApp}
              className="flex items-center gap-2 bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3 rounded-btn hover:bg-brand-champagne transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
            >
              Send on WhatsApp
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={
                currentQ.type !== "input"
                  ? !answers[currentQ.id]
                  : !inputValue.trim() && !currentQ.optional
              }
              className={cn(
                "flex items-center gap-2 text-label font-semibold px-6 py-3 rounded-btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                (currentQ.type !== "input" ? answers[currentQ.id] : inputValue.trim() || currentQ.optional)
                  ? "bg-brand-blue text-white hover:bg-brand-sky"
                  : "bg-surface-grey text-brand-muted cursor-not-allowed"
              )}
            >
              {isLast ? "Review" : "Next"}
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {showReview && (
          <p className="text-center text-body-sm text-brand-muted pb-6 px-6 -mt-2">
            Review your details above, then press Send — it opens WhatsApp with your message ready.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Question screen ──────────────────────────────────────────────────────────

interface QuestionScreenProps {
  question: TripPlannerProps["config"]["questions"][0];
  answer?: string;
  inputValue: string;
  onSelect: (value: string) => void;
  onInputChange: (value: string) => void;
  stepNum: number;
  totalSteps: number;
}

function QuestionScreen({
  question,
  answer,
  inputValue,
  onSelect,
  onInputChange,
  stepNum,
  totalSteps,
}: QuestionScreenProps) {
  return (
    <div>
      <p className="text-body-sm text-brand-muted mb-1.5">
        {stepNum} of {totalSteps}
      </p>
      <h2 className="font-serif text-display-sm text-brand-ink mb-6">
        {question.question}
      </h2>

      {question.type === "input" ? (
        <input
          type="tel"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={question.placeholder ?? ""}
          className="w-full border border-surface-grey rounded-btn px-4 py-3.5 text-body-lg text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow"
          autoFocus
        />
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {question.options?.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={cn(
                "text-left px-4 py-3.5 rounded-btn border transition-all duration-200 text-body-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                answer === opt.value
                  ? "border-brand-gold bg-brand-gold/8 text-brand-ink font-semibold scale-[1.02] shadow-sm"
                  : "border-surface-grey text-brand-ink hover:border-brand-blue/40 hover:text-brand-blue"
              )}
            >
              {answer === opt.value && (
                <Check size={13} className="inline mr-1.5 text-brand-gold" />
              )}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Review screen ────────────────────────────────────────────────────────────

interface ReviewScreenProps {
  answers: PlannerAnswers;
  questions: TripPlannerProps["config"]["questions"];
}

function ReviewScreen({ answers, questions }: ReviewScreenProps) {
  return (
    <div>
      <h2 className="font-serif text-display-sm text-brand-ink mb-6">
        Review your details
      </h2>
      <ul className="space-y-4">
        {questions.map((q, i) => {
          const val = answers[q.id];
          if (!val) return null;
          return (
            <li
              key={q.id}
              className="flex items-start gap-3 opacity-0"
              style={{ animation: `fadeUpReveal 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` }}
            >
              <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0">
                <Check size={11} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-body-sm text-brand-muted">{q.question}</p>
                <p className="text-body-md text-brand-ink font-medium mt-0.5">{val}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
