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
        setTimeout(() => setStep((s) => s + 1), 220);
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
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white w-full md:max-w-lg md:mx-4 rounded-t-modal md:rounded-modal shadow-modal overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-surface-grey">
          <div className="flex-1">
            <p className="text-body-sm text-brand-muted">{config.packageName}</p>
            <p className="font-sans text-brand-ink font-semibold mt-0.5">Plan My Trip</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded text-brand-muted hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Close planner"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {!showReview && (
          <div className="h-1 bg-surface-grey">
            <div
              className="h-full bg-brand-blue transition-all duration-300"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={questions.length}
            />
          </div>
        )}

        {/* Body */}
        <div className="px-5 py-6 min-h-[280px]">
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
        <div className="px-5 pb-5 flex items-center justify-between gap-3">
          {(step > 0 || showReview) ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-label text-brand-muted hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded p-1"
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
              className="flex items-center gap-2 bg-brand-blue text-white text-label font-semibold px-5 py-2.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
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
                "flex items-center gap-2 text-label font-semibold px-5 py-2.5 rounded-btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
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

        {/* WhatsApp note */}
        {showReview && (
          <p className="text-center text-body-sm text-brand-muted pb-5 px-5">
            Review your details above, then press Send — it opens WhatsApp with your message ready.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Question screen ─────────────────────────────────────────────────────────

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
      <p className="text-body-sm text-brand-muted mb-1">
        {stepNum} of {totalSteps}
      </p>
      <h2 className="font-sans text-brand-ink font-semibold text-lg mb-5">
        {question.question}
      </h2>

      {question.type === "input" ? (
        <input
          type="tel"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={question.placeholder ?? ""}
          className="w-full border border-surface-grey rounded-btn px-4 py-3 text-body-lg text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-blue"
          autoFocus
        />
      ) : (
        <div
          className={cn(
            "grid gap-3",
            question.type === "cards" ? "grid-cols-2" : "grid-cols-2"
          )}
        >
          {question.options?.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={cn(
                "text-left px-4 py-3 rounded-btn border transition-all duration-150 text-body-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                answer === opt.value
                  ? "border-brand-blue bg-brand-blue/5 text-brand-blue font-semibold"
                  : "border-surface-grey text-brand-ink hover:border-brand-blue hover:text-brand-blue"
              )}
            >
              {answer === opt.value && (
                <Check size={14} className="inline mr-1.5 text-brand-blue" />
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
      <h2 className="font-sans text-brand-ink font-semibold text-lg mb-5">
        Review your details
      </h2>
      <ul className="space-y-3">
        {questions.map((q) => {
          const val = answers[q.id];
          if (!val) return null;
          return (
            <li key={q.id} className="flex items-start gap-3">
              <Check size={16} className="mt-0.5 text-brand-blue shrink-0" />
              <div>
                <p className="text-body-sm text-brand-muted">{q.question}</p>
                <p className="text-body-md text-brand-ink font-medium">{val}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
