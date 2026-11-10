import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { company, whatsappLink } from "@/data/site";

// Update this date and the "Analytics and cookies" section whenever tracking is added
// (Google Analytics, Meta Pixel / Conversions API) or leads start being stored in the CRM.
const LAST_UPDATED = "11 November 2026";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Shine Star Tours and Travel",
  description:
    "How Shine Star Tours and Travel handles the details you share through our website and WhatsApp: what we collect, why, who sees it and how to ask us to delete it.",
  path: "/privacy",
  image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85&fit=crop",
});

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        {company.name} is a travel agency based in {company.city}, Pakistan, offering Umrah, international tour,
        honeymoon and visa assistance services. This policy explains how we handle information when you use this
        website or contact us. If anything here is unclear, message us on WhatsApp at {company.whatsappDisplay}.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>We only receive what you choose to send us. Our enquiry forms and price planners do not send anything to our servers: when you finish one, it opens WhatsApp with your answers written into a message, and nothing reaches us until you press Send. That message can include:</p>
        <ul>
          <li>your WhatsApp number and, if you share it, your name and city;</li>
          <li>trip details such as destination, dates, number of travellers, budget and hotel preference;</li>
          <li>for visa enquiries, your visa type, destination and travel history;</li>
          <li>for reviews, your name, trip, rating and the review you write.</li>
        </ul>
        <p>
          When you book, we ask for the documents the trip needs, such as passport copies, photos and, for some
          visas, bank statements. These are shared directly with us on WhatsApp or in person, never through this
          website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: (
      <ul>
        <li>to reply to your enquiry, prepare quotes and plan your trip;</li>
        <li>to book flights, hotels, transport and tours, and to apply for visas on your behalf;</li>
        <li>to support you before and during your journey;</li>
        <li>to publish your review, only after confirming your booking and only if you asked us to.</li>
      </ul>
    ),
  },
  {
    id: "who-we-share-with",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share your details only with the people needed to deliver your trip: airlines, hotels, transport and tour
          operators, and embassies, consulates or visa processing centres. We do not sell your information or share
          it for anyone else&rsquo;s marketing.
        </p>
        <p>
          We may disclose information if the law requires it, for example to comply with a request from a Pakistani
          authority.
        </p>
      </>
    ),
  },
  {
    id: "on-your-device",
    title: "What this website stores on your device",
    body: (
      <>
        <p>This website does not set advertising or analytics cookies today. It stores two things in your browser to make it easier to use:</p>
        <ul>
          <li>
            <strong>Planner progress:</strong> your answers in an unfinished price planner, so you don&rsquo;t lose them
            if you close it. This is deleted when you close the browser tab.
          </li>
          <li>
            <strong>Visa checklist ticks:</strong> the documents you mark as ready on the visa page. This stays on
            your device until you clear your browser data.
          </li>
        </ul>
        <p>Neither is sent to us.</p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Services from other companies",
    body: (
      <>
        <p>Some parts of the site come from other companies, which have their own privacy policies:</p>
        <ul>
          <li><strong>WhatsApp (Meta):</strong> carries your messages when you contact us.</li>
          <li><strong>Google Maps:</strong> the office map on the home page. Google may set cookies when it loads.</li>
          <li><strong>Instagram (Meta):</strong> traveller videos on the reviews page load from Instagram only when you open one.</li>
          <li><strong>Unsplash:</strong> serves some of the photos.</li>
          <li><strong>Netlify:</strong> hosts the website and keeps standard server logs, such as IP address and pages requested, for security.</li>
        </ul>
      </>
    ),
  },
  {
    id: "analytics",
    title: "Analytics and cookies",
    body: (
      <p>
        We do not currently use analytics or advertising tracking. If we add tools such as Google Analytics or the
        Meta Pixel to understand which pages help travellers and to improve our ads, we will update this policy first,
        list each tool here, and ask for your consent where required before any non-essential cookie is set.
      </p>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry and booking details for as long as we need them to serve you and to meet accounting, tax and
        legal requirements, and then delete them. Passport copies and visa documents are deleted once your trip and
        any related applications are complete, unless you ask us to keep them for a future booking.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    body: (
      <p>
        You can ask us at any time what information we hold about you, to correct it, or to delete it, unless we must
        keep it by law. Message us on WhatsApp and we will reply within a few working days. You can also delete our
        chat in WhatsApp and clear this site&rsquo;s stored data in your browser settings.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Bookings are made by adults. We only receive children&rsquo;s details, such as passport information for a
        family trip, from their parent or guardian.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>When we change this policy we update the date at the top of this page.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-footer pt-32 pb-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">Legal</p>
          <h1 className="font-serif text-display-lg text-white">Privacy Policy</h1>
          <p className="mt-3 text-body-lg text-white/70 max-w-xl">Last updated {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 space-y-2 text-body-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-brand-ink/70 hover:text-brand-blue transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="max-w-2xl space-y-10 text-body-md text-brand-ink/85 leading-relaxed [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_strong]:text-brand-ink">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-serif text-display-sm text-brand-ink mb-3">{s.title}</h2>
                {s.body}
              </section>
            ))}

            <div className="rounded-card bg-surface-warm p-6">
              <p className="font-semibold text-brand-ink">Questions about your data?</p>
              <p className="mt-1">
                <a
                  href={whatsappLink("Assalamu Alaikum, I have a question about my personal data.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue hover:text-brand-sky underline-offset-4 hover:underline"
                >
                  Message us on WhatsApp
                </a>{" "}
                or visit our <Link href="/about" className="font-semibold text-brand-blue hover:text-brand-sky underline-offset-4 hover:underline">About page</Link> for office details.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
