// Plain-text guides for AI assistants and answer engines (ChatGPT, Claude, Perplexity,
// Google AI Overviews), served at /llms.txt (summary + links) and /llms-full.txt (full details).
// Built from the same data as the pages so they never go out of date.

import type { TravelPackage } from "@/types";
import { SITE_URL, company } from "@/data/site";
import { CATEGORY_PAGES, packageHref, packagesByCategory } from "@/lib/packages";
import { visaServices } from "@/data/visaServices";
import { visaDestinations } from "@/data/visaDestinations";
import { visaFaqs } from "@/data/visaFaqs";

const url = (path: string) => `${SITE_URL}${path}`;

// Sample prices are placeholders, so assistants are told to ask rather than quote them
const priceLine = (pkg: TravelPackage) =>
  pkg.startingPrice && !pkg.isSamplePricing
    ? `from ${pkg.currency} ${pkg.startingPrice.toLocaleString("en-PK")} per person`
    : "price on request via WhatsApp";

const intro = `# ${company.name}

> Travel agency in ${company.city}, Pakistan, founded in ${company.foundingYear}. Plans Umrah packages, international tours (Thailand, Malaysia, Singapore, Dubai, Sri Lanka), honeymoon packages (Maldives, Bali, Turkey) and visa assistance for Pakistani passport holders. Enquiries and bookings are handled on WhatsApp at ${company.whatsappDisplay}.

Key facts:
- Departures planned from Karachi and other Pakistani cities.
- Every package can be adjusted (dates, hotels, number of travellers); prices are quoted per enquiry.
- Visa help covers documents, appointments and file review. Visas are issued only by embassies, so approval is never guaranteed.
- Contact: WhatsApp ${company.whatsappDisplay} (https://wa.me/${company.whatsappNumber}). Hours: ${company.hours.map((h) => `${h.days} ${h.time}`).join("; ")} (Pakistan time).
`;

export function llmsTxt(): string {
  const categories = (Object.keys(CATEGORY_PAGES) as (keyof typeof CATEGORY_PAGES)[]).map((c) => {
    const page = CATEGORY_PAGES[c];
    const items = packagesByCategory[c]
      .map((p) => `- [${p.title}](${url(packageHref(p))}): ${p.duration}, ${p.destination}. ${p.shortDescription}`)
      .join("\n");
    return `## [${page.label}](${url(page.path)})\n\n${items}`;
  });

  return `${intro}
${categories.join("\n\n")}

## Visa assistance

- [Visa assistance](${url("/visa")}): ${visaServices.map((s) => s.name).join(", ")}. Country guides for ${visaDestinations.map((d) => d.country).join(", ")}.

## About

- [About us](${url("/about")}): who we are, how we work and how to verify us.
- [Reviews and gallery](${url("/reviews")}): traveller reviews, photos and videos.
- [Privacy policy](${url("/privacy")})

## Optional

- [Full details for AI assistants](${url("/llms-full.txt")}): every package's itinerary, inclusions and FAQs, plus visa requirements.
`;
}

function packageDetails(pkg: TravelPackage): string {
  const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");
  return `### ${pkg.title}

URL: ${url(packageHref(pkg))}
Duration: ${pkg.duration}
Destination: ${pkg.destination}, ${pkg.country}
Price: ${priceLine(pkg)}

${pkg.description}

Highlights:
${list(pkg.highlights)}

Included:
${list(pkg.inclusions)}

Not included:
${list(pkg.exclusions)}

Itinerary:
${pkg.itinerary.map((d) => `- Day ${d.day}: ${d.title}. ${d.description}`).join("\n")}

${pkg.faqs.length ? `FAQs:\n${pkg.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}` : ""}`.trim();
}

export function llmsFullTxt(): string {
  const categories = (Object.keys(CATEGORY_PAGES) as (keyof typeof CATEGORY_PAGES)[]).map(
    (c) => `## ${CATEGORY_PAGES[c].label}\n\n${packagesByCategory[c].map(packageDetails).join("\n\n")}`
  );

  const visa = visaDestinations
    .map(
      (d) => `### ${d.country} — ${d.summary}

Entry: ${d.entryType}. Validity: ${d.validity}. Processing: ${d.processingEstimate}.
Documents:
${d.documents.map((x) => `- ${x}`).join("\n")}
Biometrics: ${d.biometrics}
Finances: ${d.financialNotes}${d.watchOut ? `\nCommon mistake: ${d.watchOut}` : ""}`
    )
    .join("\n\n");

  return `${intro}
${categories.join("\n\n")}

## Visa assistance (${url("/visa")})

Guidance for Pakistani passport holders. Requirements change; we confirm the current list for each applicant.

${visa}

### Visa FAQs

${visaFaqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}
`;
}
