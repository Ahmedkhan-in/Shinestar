import { VisaHero } from "@/components/visa/VisaHero";
import { VisaServices } from "@/components/visa/VisaServices";
import { VisaDestinations } from "@/components/visa/VisaDestinations";
import { VisaChecklist } from "@/components/visa/VisaChecklist";
import { VisaProcess } from "@/components/visa/VisaProcess";
import { VisaWhyUs } from "@/components/visa/VisaWhyUs";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { visaServices } from "@/data/visaServices";
import { visaDestinations } from "@/data/visaDestinations";
import { visaChecklist, visaTypeLabels, visaProcess, visaBenefits } from "@/data/visaChecklist";
import { visaFaqs } from "@/data/visaFaqs";
import { whatsappLink } from "@/data/site";
import { pageMetadata, travelAgencySchema, jsonLdScript } from "@/lib/seo";
import { SITE_URL } from "@/data/site";

export const metadata = pageMetadata({
  title: "Visa Assistance for Pakistani Passport Holders | Shine Star Tours and Travel",
  description:
    "Umrah, UAE, Thailand, Malaysia, Turkey, Azerbaijan and Schengen visa guidance from Karachi. Document checklists, appointment booking and file review. Honest advice, no approval promises.",
  path: "/visa",
  image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=1200&h=630&q=80&fit=crop",
});

const schema = {
  "@graph": [
    travelAgencySchema(),
    {
      "@type": "Service",
      name: "Visa application assistance",
      serviceType: "Visa documentation and application support",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Pakistan" },
      url: `${SITE_URL}/visa`,
    },
    {
      "@type": "FAQPage",
      mainEntity: visaFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function VisaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      <VisaHero />
      <VisaServices services={visaServices} />
      <VisaDestinations destinations={visaDestinations} />
      <VisaChecklist items={visaChecklist} labels={visaTypeLabels} />
      <VisaProcess steps={visaProcess} />
      <VisaWhyUs benefits={visaBenefits} />

      {/* FAQs */}
      <section id="faq" className="bg-surface-warm py-20 md:py-28 prose-anchor">
        <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[0.8fr_1.5fr] gap-10 lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 self-start">
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Questions</p>
            <h2 className="font-serif text-display-md text-brand-ink">Straight answers</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
              The questions families ask us before trusting anyone with a passport.
            </p>
            <a
              href={whatsappLink("Assalamu Alaikum, I have a question about my visa application.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center min-h-[44px] text-label font-semibold text-brand-blue hover:text-brand-sky underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              Ask a different question on WhatsApp →
            </a>
          </Reveal>
          <FaqList faqs={visaFaqs} idPrefix="visa-faq" />
        </div>
      </section>

      <FinalCTA
        eyebrow="Start with the right list"
        title="Know what to submit before you submit it"
        body="Tell us where you are going and what you hold. We'll reply with your document list and our fee, in writing, before you commit."
        primary="visa-enquiry"
        primaryLabel="Check my visa requirements"
        whatsappLabel="Talk to a visa consultant"
        whatsappHref={whatsappLink("Assalamu Alaikum, I'd like to speak to a visa consultant.")}
        image="https://images.unsplash.com/photo-1544016768-982d1554f0b9?w=1920&q=80&fit=crop"
        imageAlt="A passenger jet climbing after take-off"
      />
    </>
  );
}
