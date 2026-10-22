import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/schema";
import { hmrcInvestigations } from "@/lib/data/hmrc-investigations";
import { createMetadata } from "@/lib/metadata";

const copFaqs: FAQ[] = [
  {
    question: "What is the difference between COP8 and COP9 HMRC investigations?",
    answer:
      "COP8 is HMRC's civil investigation of fraud procedure where HMRC suspects serious tax fraud but proposes a civil settlement. COP9 is the most serious civil route, offering a Contractual Disclosure Facility (CDF) for full disclosure of deliberate fraud. Refusing COP9 or failing to make a complete disclosure significantly increases criminal investigation risk.",
  },
  {
    question: "When should a tax expert witness be instructed in a COP8 or COP9 case?",
    answer:
      "Instruct before accepting or responding to a COP9 offer, and early in COP8 where HMRC's reconstruction methodology or technical tax analysis is disputed. Experts review financial records, challenge HMRC methodology, and support accurate disclosure positions.",
  },
];

export const metadata = createMetadata({
  title: "HMRC Investigation Types UK | COP8, COP9 & Enquiry Procedures",
  description:
    "HMRC investigation types requiring tax expert witness support, Code of Practice 8, Code of Practice 9, MTIC fraud, transfer pricing, and criminal investigation procedures.",
  path: "/hmrc-investigation-types",
});

export default function HmrcInvestigationTypesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(copFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "HMRC Investigation Types", path: "/hmrc-investigation-types" },
          ]),
        ]}
      />
      <PageHero
        title="HMRC Investigation Types: When Expert Evidence Helps"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HMRC Investigation Types" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="max-w-3xl prose-content min-w-0 mb-10">
            <h2>COP8 vs COP9: Key Differences</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>COP8</th>
                  <th>COP9 (CDF)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trigger</td>
                  <td>Suspected serious tax fraud, civil route</td>
                  <td>HMRC suspects deliberate tax fraud, offers CDF</td>
                </tr>
                <tr>
                  <td>Disclosure</td>
                  <td>Negotiated civil settlement</td>
                  <td>Full disclosure of all deliberate fraud required</td>
                </tr>
                <tr>
                  <td>Criminal risk</td>
                  <td>Lower if cooperative civil settlement</td>
                  <td>High if CDF refused or disclosure incomplete</td>
                </tr>
                <tr>
                  <td>Expert role</td>
                  <td>Challenge HMRC methodology and quantify correct position</td>
                  <td>Review records before disclosure; support accurate CDF position</td>
                </tr>
              </tbody>
            </table>
            <p>
              See also: <Link href="/glossary#cop8">COP8 definition</Link> |{" "}
              <Link href="/glossary#cop9">COP9 / CDF definition</Link> |{" "}
              <Link href="/services/cop8-cop9-support">COP8 / COP9 expert support</Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hmrcInvestigations.map((investigation) => (
              <HubCard
                key={investigation.slug}
                title={investigation.shortTitle}
                description={investigation.paragraphs[0]}
                href={`/hmrc-investigation-types/${investigation.slug}`}
              />
            ))}
          </div>

          <HubRelatedLinks
            links={[
              { label: "Tax Disputes Explained (master pillar)", href: "/tax-disputes-explained" },
              { label: "HMRC methodology challenge guide", href: "/guides/hmrc-methodology-challenge-guide" },
              { label: "Business records reconstruction disputes", href: "/tax-dispute-types/hmrc-business-records-reconstruction" },
              { label: "HMRC enforcement update 2025 to 2026", href: "/guides/hmrc-enforcement-update-2025" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
