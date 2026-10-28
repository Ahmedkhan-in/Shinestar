"use client";

import { useId, useState } from "react";
import { Star, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { buildReviewMessage, buildWhatsAppURL } from "@/lib/whatsapp";

const TRIPS = [
  "Umrah",
  "Dubai",
  "Thailand",
  "Malaysia / Singapore",
  "Sri Lanka",
  "Turkey",
  "Maldives / Bali honeymoon",
  "Visa assistance only",
  "Other",
];

const steps = [
  {
    title: "You send it",
    detail: "Fill this in and it opens WhatsApp with your review written out. Nothing is sent until you press send.",
  },
  {
    title: "We match it to your booking",
    detail: "We check your name and travel dates against our records, so every published review comes from a real trip.",
  },
  {
    title: "We publish it, unedited",
    detail: "Usually within a week. We don't change your words or hide critical reviews, though we may reply to them.",
  },
];

export function ReviewSubmission() {
  const [form, setForm] = useState({ name: "", city: "", trip: "", travelMonth: "", review: "" });
  const [rating, setRating] = useState(0);
  const [touched, setTouched] = useState(false);
  const ids = { name: useId(), city: useId(), trip: useId(), month: useId(), review: useId(), hint: useId() };

  const errors = {
    name: !form.name.trim(),
    trip: !form.trip,
    rating: rating === 0,
    review: form.review.trim().length < 30,
  };
  const valid = !Object.values(errors).some(Boolean);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    window.open(buildWhatsAppURL(buildReviewMessage({ ...form, rating })), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full min-h-[48px] rounded-btn bg-white border px-3 text-body-md text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue";
  const border = (bad: boolean) => (touched && bad ? "border-red-600" : "border-brand-muted/30");

  return (
    <section id="leave-a-review" className="bg-white py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Travelled with us?</p>
            <h2 className="font-serif text-display-md text-brand-ink">Tell the next family how it went</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
              Good or not so good, your review helps someone in Karachi, Lahore or Peshawar decide who to trust
              with their trip.
            </p>
          </Reveal>
          <ol className="mt-10 space-y-7">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="relative pl-8">
                <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-brand-gold" aria-hidden="true" />
                <h3 className="text-body-lg font-semibold text-brand-ink">{s.title}</h3>
                <p className="mt-1 text-body-md text-brand-ink/80 leading-relaxed">{s.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={100}>
          <form onSubmit={submit} noValidate className="rounded-card bg-surface-warm p-6 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor={ids.name} className="block text-body-sm font-semibold text-brand-ink mb-2">Your name</label>
                <input id={ids.name} value={form.name} onChange={update("name")} autoComplete="name" className={cn(field, border(errors.name))} aria-invalid={touched && errors.name} />
              </div>
              <div>
                <label htmlFor={ids.city} className="block text-body-sm font-semibold text-brand-ink mb-2">
                  City <span className="font-normal text-brand-ink/70">(optional)</span>
                </label>
                <input id={ids.city} value={form.city} onChange={update("city")} autoComplete="address-level2" className={cn(field, "border-brand-muted/30")} />
              </div>
              <div>
                <label htmlFor={ids.trip} className="block text-body-sm font-semibold text-brand-ink mb-2">Your trip</label>
                <select id={ids.trip} value={form.trip} onChange={update("trip")} className={cn(field, border(errors.trip))} aria-invalid={touched && errors.trip}>
                  <option value="" disabled>Choose one</option>
                  {TRIPS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor={ids.month} className="block text-body-sm font-semibold text-brand-ink mb-2">
                  When you travelled <span className="font-normal text-brand-ink/70">(optional)</span>
                </label>
                <input id={ids.month} type="month" value={form.travelMonth} onChange={update("travelMonth")} className={cn(field, "border-brand-muted/30")} />
              </div>
            </div>

            <fieldset>
              <legend className="block text-body-sm font-semibold text-brand-ink mb-2">Your rating</legend>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-pressed={rating === n}
                    aria-label={`Rate ${n} out of 5`}
                    onClick={() => setRating(n)}
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-transform active:scale-90 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <Star size={26} aria-hidden="true" className={n <= rating ? "fill-brand-gold text-brand-gold" : "text-brand-muted/50"} />
                  </button>
                ))}
              </div>
              {touched && errors.rating && <p className="mt-1 text-body-sm text-red-700">Choose a rating from 1 to 5.</p>}
            </fieldset>

            <div>
              <label htmlFor={ids.review} className="block text-body-sm font-semibold text-brand-ink mb-2">Your review</label>
              <textarea
                id={ids.review}
                rows={5}
                value={form.review}
                onChange={update("review")}
                aria-describedby={ids.hint}
                aria-invalid={touched && errors.review}
                className={cn(field, "py-3 leading-relaxed", border(errors.review))}
              />
              <p id={ids.hint} className={cn("mt-1.5 text-body-sm", touched && errors.review ? "text-red-700" : "text-brand-ink/70")}>
                At least 30 characters. The hotel, the guide, a moment that went right or wrong. Details help most.
              </p>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-7 rounded-btn bg-brand-blue text-white text-label font-semibold hover:bg-brand-sky active:scale-[0.98] transition-[background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Send my review for checking
            </button>
            {touched && !valid && (
              <p className="text-body-sm text-red-700" role="alert">Please complete the highlighted fields.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
