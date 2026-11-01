import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

interface FounderNoteProps {
  note: {
    name?: string;
    role: string;
    photo?: string;
    paragraphs: string[];
    isDraft: boolean;
  };
}

export function FounderNote({ note }: FounderNoteProps) {
  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[0.85fr_1.2fr] gap-10 lg:gap-20 items-center">
        {/* Portrait — or, until a photo is supplied, the founding card */}
        <Reveal direction="right">
          <div className="relative aspect-[4/5] rounded-card overflow-hidden bg-brand-footer">
            {note.photo ? (
              <Image
                src={note.photo}
                alt={note.name ? `${note.name}, ${note.role}` : note.role}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 text-white">
                <p>
                  <Logo tone="light" size="lg" />
                </p>
                <div>
                  <p className="font-serif font-light text-[clamp(96px,14vw,180px)] leading-[0.85] tracking-tight text-brand-gold">
                    {company.foundingYear}
                  </p>
                  <p className="mt-4 text-body-lg text-white/85">Founded in Karachi</p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">From the founder</p>
            <h2 className="font-serif text-display-md text-brand-ink">A note on why this matters to me</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-5">
              {note.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-brand-ink leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-0.5 w-10 bg-brand-gold" aria-hidden="true" />
              <div>
                {note.name && <p className="font-serif text-display-sm text-brand-ink italic">{note.name}</p>}
                <p className="text-body-md text-brand-ink/80">{note.role}</p>
              </div>
            </div>
            {note.isDraft && (
              <p className="mt-6 text-body-sm italic text-brand-ink/60">
                Draft note, to be replaced with the founder&rsquo;s own words and photo.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
