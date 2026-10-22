import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

const pillarFaqs: FAQ[] = [
  {
    question: "What taxes does the First-tier Tribunal (Tax Chamber) hear?",
    answer:
      "The FTT Tax Chamber hears appeals against HMRC decisions on income tax, PAYE, corporation tax, CGT, NIC, IHT, VAT, SDLT, excise duty, and customs duty. Expert evidence is most common where technical tax analysis, valuation, or HMRC methodology is disputed.",
  },
  {
    question: "What is the four-level UK tax appeal structure?",
    answer:
      "UK tax disputes typically progress through HMRC internal review, First-tier Tribunal, Upper Tribunal (on points of law), and Court of Appeal or Supreme Court. Formal expert evidence is most significant at FTT and Upper Tribunal stages.",
  },
  {
    question: "Which HMRC investigation types most often need tax expert witnesses?",
    answer:
      "COP8 civil fraud investigations, COP9 Contractual Disclosure Facility cases, MTIC VAT fraud investigations, transfer pricing enquiries, and discovery assessment challenges frequently require independent tax or forensic expert evidence.",
  },
];

const PAGE_DESCRIPTION =
  "The complete guide to tax disputes in the UK, FTT and Upper Tribunal procedure, HMRC investigation types, when expert evidence is needed, and how tax expert witnesses help.";

export const metadata = createMetadata({
  title: "Tax Disputes Explained UK | FTT, HMRC Investigations & Expert Evidence",
  description: PAGE_DESCRIPTION,
  path: "/tax-disputes-explained",
});

export default function TaxDisputesExplainedPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(pillarFaqs),
          articleSchema({
            title: "Tax Disputes in the UK: The Complete Guide for Solicitors",
            description: PAGE_DESCRIPTION,
            path: "/tax-disputes-explained",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tax Disputes Explained", path: "/tax-disputes-explained" },
          ]),
        ]}
      />
      <PageHero
        title="Tax Disputes in the UK: The Complete Guide for Solicitors"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tax Disputes Explained" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <h2>The UK Tax Dispute Landscape</h2>
          <p>
            This guide covers tax disputes within the United Kingdom only. The First-tier Tribunal (Tax Chamber) handles appeals against HMRC decisions on income tax, PAYE, corporation tax, CGT, NIC, IHT, VAT, excise duty, and customs duty across England, Wales, Scotland, and Northern Ireland. It does not address non-UK tax authorities or foreign tribunal systems.
          </p>
          <p>
            The First-tier Tribunal (Tax Chamber) handles appeals against HMRC decisions on income tax, PAYE, corporation tax, CGT, NIC, IHT, VAT, excise duty, and customs duty. Tax disputes range from straightforward assessment challenges to complex multi-million pound transfer pricing and MTIC fraud proceedings. At every level, the question of whether independent expert evidence is required, and what type of expert, is a critical strategic decision for instructing solicitors.
          </p>
          <p>
            A tax expert witness is distinct from a forensic accountant. Where the dispute turns on whether the correct tax analysis was applied, whether HMRC&apos;s methodology is sound, or what the correct tax position should be, a tax technical expert is required. Where the dispute turns on financial reconstruction, business valuation, or quantification of undeclared income, a forensic accountant may be needed, and in many complex HMRC investigations, both disciplines work together.
          </p>

          <h2>FTT Tax Chamber Jurisdiction</h2>
          <table>
            <thead>
              <tr>
                <th>Tax / Duty</th>
                <th>FTT Jurisdiction</th>
                <th>Common Expert Evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Income tax &amp; PAYE</td>
                <td>Yes</td>
                <td>Technical tax opinions, reconstruction methodology</td>
              </tr>
              <tr>
                <td>Corporation tax &amp; CGT</td>
                <td>Yes</td>
                <td>Scheme analysis, valuation, GAAR challenges</td>
              </tr>
              <tr>
                <td>NIC &amp; IHT</td>
                <td>Yes</td>
                <td>BPR analysis, share and business valuations</td>
              </tr>
              <tr>
                <td>VAT &amp; SDLT</td>
                <td>Yes</td>
                <td>MTIC knowledge test, classification, planning disputes</td>
              </tr>
              <tr>
                <td>Excise &amp; customs</td>
                <td>Yes</td>
                <td>Technical classification and duty analysis</td>
              </tr>
            </tbody>
          </table>
          <p>
            See also:{" "}
            <Link href="/glossary#ftt">FTT glossary definition</Link> |{" "}
            <Link href="/tribunals-courts/first-tier-tribunal-tax">First-tier Tribunal guide</Link>
          </p>

          <h2>The Four-Level Appeal Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Forum</th>
                <th>Role</th>
                <th>Expert Evidence?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>HMRC Internal Review</td>
                <td>First challenge to HMRC decision</td>
                <td>Rarely formal expert</td>
              </tr>
              <tr>
                <td>2</td>
                <td><Link href="/tribunals-courts/first-tier-tribunal-tax">First-tier Tribunal (FTT)</Link></td>
                <td>Independent judicial hearing</td>
                <td>Yes, CPR Part 35</td>
              </tr>
              <tr>
                <td>3</td>
                <td><Link href="/tribunals-courts/upper-tribunal-tax">Upper Tribunal</Link></td>
                <td>Appeal on points of law</td>
                <td>Yes, as directed</td>
              </tr>
              <tr>
                <td>4</td>
                <td><Link href="/tribunals-courts/court-of-appeal-tax">Court of Appeal / Supreme Court</Link></td>
                <td>Points of law only</td>
                <td>Rarely new expert</td>
              </tr>
            </tbody>
          </table>

          <h2>The First-tier Tribunal (Tax)</h2>
          <p>
            The FTT process requires careful gathering and organisation of documentary evidence including invoices, contracts, emails, accounting records, and due diligence materials, with witness evidence explaining the decisions taken by directors, accountants, or advisers, and legal submissions placing the evidence in the context of statutory provisions, HMRC guidance, and relevant case law.
          </p>
          <p>
            From filing notice of appeal to FTT hearing typically takes 2 to 3 years, making early instruction of expert witnesses essential to allow adequate preparation time. Solicitors should instruct experts at case assessment stage, not when the hearing date is listed.{" "}
            <Link href="/guides/ftt-procedure-expert-evidence">Read our FTT procedure guide →</Link>
          </p>

          <h2>When Does the FTT Need Expert Evidence?</h2>
          <p>Expert evidence is needed in FTT proceedings where:</p>
          <ul>
            <li>A technical accounting or valuation question requires specialist evidence beyond the parties&apos; own accounts</li>
            <li>HMRC&apos;s reconstruction methodology is challenged</li>
            <li>A valuation (business, shares, property) is central to the tax liability</li>
          </ul>

          <h2>HMRC Investigation Types and Expert Evidence</h2>
          <table>
            <thead>
              <tr>
                <th>HMRC Process</th>
                <th>Trigger</th>
                <th>Expert Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="/hmrc-investigation-types/code-of-practice-8-cop8">COP8: Civil Investigation</Link></td>
                <td>Suspected tax fraud, civil route</td>
                <td>Review HMRC methodology, quantify correct position</td>
              </tr>
              <tr>
                <td><Link href="/hmrc-investigation-types/code-of-practice-9-cop9">COP9: Contractual Disclosure Facility</Link></td>
                <td>Serious tax fraud, civil + criminal risk</td>
                <td>Independent financial reconstruction review</td>
              </tr>
              <tr>
                <td><Link href="/hmrc-investigation-types/mtic-vat-fraud-investigation">MTIC Investigation</Link></td>
                <td>VAT input tax fraud chain</td>
                <td>Knowledge test analysis, transaction tracing</td>
              </tr>
              <tr>
                <td><Link href="/hmrc-investigation-types/transfer-pricing-enquiry">Transfer Pricing Enquiry</Link></td>
                <td>International related party pricing</td>
                <td>Arm&apos;s length analysis, comparables review</td>
              </tr>
              <tr>
                <td>Discovery Assessment</td>
                <td>New information or HMRC discovers loss</td>
                <td>Challenge timing and methodology</td>
              </tr>
            </tbody>
          </table>

          <h2>The Knowledge Test in VAT MTIC Cases</h2>
          <p>
            In VAT fraud cases, judgments such as Mobilx Ltd v HMRC [2010] confirm that HMRC must prove actual or constructive knowledge before denying input tax, requiring careful alignment of evidence with legal principles.
          </p>
          <p>
            The tax expert witness assesses whether the knowledge test is met, analysing the due diligence performed, the red flags present, and whether a reasonable business in the same position would have known the transactions were connected to fraud.{" "}
            <Link href="/guides/vat-mtic-knowledge-test-guide">Read our MTIC knowledge test guide →</Link>
          </p>

          <h2>Transfer Pricing: The Arm&apos;s Length Principle</h2>
          <p>
            Transfer pricing disputes arise when HMRC challenges the pricing of transactions between connected parties, arguing the price was not at arm&apos;s length and adjusting the taxable profits. Tax expert witnesses provide independent analysis of comparable uncontrolled transactions (CUTs), profit level indicators, the most appropriate transfer pricing method, and OECD BEPS compliance.
          </p>
          <p>
            With HMRC&apos;s transfer pricing yield increasing dramatically in 2025, early expert instruction in transfer pricing enquiries is essential.{" "}
            <Link href="/tax-dispute-types/transfer-pricing-disputes">Transfer pricing disputes →</Link>
          </p>

          <h2>IHT and CGT Valuation Disputes</h2>
          <p>
            Where the tax liability depends on the value of shares, business interests, or property at a specific date, the tax expert witness addresses both the correct valuation methodology and whether the value HMRC&apos;s Shares & Assets Valuation (SAV) has adopted is defensible.{" "}
            <Link href="/tax-dispute-types/iht-business-property-relief">IHT BPR disputes →</Link> |{" "}
            <Link href="/tax-dispute-types/cgt-share-disposal-valuation">CGT valuation disputes →</Link>
          </p>

          <h2>Professional Negligence in Tax Advice</h2>
          <p>
            Tax professional negligence claims require a tax expert witness to assess the standard of care expected of a reasonably competent tax adviser, whether the advice given fell below that standard, the correct advice that should have been given (the but-for position), and the additional tax liability or loss caused by the negligent advice.{" "}
            <Link href="/guides/tax-professional-negligence-guide">Tax negligence expert guide →</Link>
          </p>

          <h2>2025 to 2026 Enforcement Context</h2>
          <p>
            The current tax disputes landscape is shaped by three significant developments: HMRC&apos;s dramatically increased transfer pricing yield, the ongoing debate about COP9 methodology (highlighted by judicial scrutiny including HMRC v Harte [2026]), and continued MTIC VAT enforcement with successful expert challenges cancelling substantial assessments. Tax expert evidence is increasingly decisive in tribunal outcomes.{" "}
            <Link href="/guides/hmrc-enforcement-update-2025">HMRC enforcement update 2025 to 2026 →</Link>
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
