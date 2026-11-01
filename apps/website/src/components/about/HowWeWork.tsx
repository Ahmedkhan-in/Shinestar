import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface Message {
  from: "client" | "us";
  time: string;
  text: string;
}

export function HowWeWork({ thread, principles }: { thread: readonly Message[]; principles: string[] }) {
  return (
    <section className="bg-surface-grey py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">How we work</p>
            <h2 className="font-serif text-display-md text-brand-ink">One thread, start to finish</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed max-w-lg">
              Every booking lives in a single WhatsApp conversation. You can scroll back to any quote, voucher or
              promise, and you never have to wonder what happens next.
            </p>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {principles.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 70} className="flex gap-3 text-body-lg text-brand-ink">
                <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-brand-gold/20 text-brand-gold-deep flex items-center justify-center" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Example thread */}
        <figure className="rounded-card bg-[#EFE9DF] p-4 sm:p-6 md:p-8">
          <figcaption className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-brand-blue text-white font-serif text-lg flex items-center justify-center" aria-hidden="true">
              S
            </span>
            <span>
              <span className="block text-body-md font-semibold text-brand-ink">Shine Star Tours and Travel</span>
              <span className="block text-body-sm text-brand-ink/70">An example Umrah booking thread</span>
            </span>
          </figcaption>
          <ol className="space-y-3">
            {thread.map((m, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 110}
                direction={m.from === "us" ? "left" : "right"}
                className={cn("flex flex-col", m.from === "us" ? "items-end" : "items-start")}
              >
                <span className="text-[12px] text-brand-ink/60 mb-1 px-1">{m.time}</span>
                <p
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-body-md leading-relaxed",
                    m.from === "us" ? "bg-brand-blue text-white rounded-br-md" : "bg-white text-brand-ink rounded-bl-md"
                  )}
                >
                  <span className="sr-only">{m.from === "us" ? "Shine Star: " : "Traveller: "}</span>
                  {m.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
