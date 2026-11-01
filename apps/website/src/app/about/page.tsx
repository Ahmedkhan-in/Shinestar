import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { FounderNote } from "@/components/about/FounderNote";
import { ValuesList } from "@/components/about/ValuesList";
import { HowWeWork } from "@/components/about/HowWeWork";
import { MilestonesTimeline } from "@/components/about/MilestonesTimeline";
import { TeamGrid } from "@/components/about/TeamGrid";
import { Credentials } from "@/components/about/Credentials";
import { ReviewHighlight } from "@/components/about/ReviewHighlight";
import { MapSection } from "@/components/home/MapSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  story,
  founderNote,
  values,
  howWeWork,
  principles,
  milestones,
  team,
  credentials,
  verifyTips,
} from "@/data/about";
import { reviews } from "@/data/reviews";
import { departureCities, whatsappLink, SITE_URL } from "@/data/site";
import { pageMetadata, travelAgencySchema, jsonLdScript } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Shine Star Tours and Travel | Karachi Travel Agency Since 2018",
  description:
    "A founder-led Karachi travel agency for Pakistani families: Umrah, international tours, honeymoons and visa assistance with itemised pricing and WhatsApp support throughout your trip.",
  path: "/about",
  image: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1200&h=630&q=80&fit=crop",
});

const schema = {
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About Shine Star Tours and Travel",
  mainEntity: travelAgencySchema(),
};

const highlight = reviews.find((r) => r.id === "rv-07") ?? reviews[0];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      <AboutHero />
      <OurStory paragraphs={story} />
      <FounderNote note={founderNote} />
      <ValuesList values={values} />
      <HowWeWork thread={howWeWork} principles={principles} />
      <MilestonesTimeline milestones={milestones} />
      <TeamGrid team={team} />
      <Credentials credentials={credentials} tips={verifyTips} />
      <ReviewHighlight review={highlight} />
      <MapSection
        heading="Our office in Karachi"
        extra={
          <div className="mt-10">
            <h3 className="text-body-md font-semibold text-brand-ink">Departures we plan from</h3>
            <p className="mt-1 text-body-md text-brand-ink/80">
              Book from anywhere in Pakistan. We arrange flights from your nearest airport and handle everything
              over WhatsApp.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {departureCities.map((c) => (
                <li key={c} className="rounded-full bg-surface-warm px-4 py-2 text-body-sm text-brand-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <FinalCTA
        eyebrow="Start with a question"
        title="Tell us your dates. We'll do the rest."
        body="Share who's travelling and when. We'll check availability and come back with an itemised price on WhatsApp."
        primaryLabel="Check availability for my dates"
        whatsappHref={whatsappLink("Assalamu Alaikum, I'd like to check availability for my dates.")}
        image="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1920&q=80&fit=crop"
        imageAlt="A passenger aircraft at the gate of an airport terminal"
      />
    </>
  );
}
