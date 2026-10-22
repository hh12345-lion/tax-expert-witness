import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Tax Expert Witness UK | Solicitors Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing the right tax expert witness, technical tax opinion, HMRC methodology challenge, or professional negligence.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        title="How to Instruct a Tax Expert Witness"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How to Instruct" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <h2>United Kingdom Matters Only</h2>
          <p>
            This guide applies to instructing tax expert witnesses in UK tax disputes only: HMRC assessments and investigations, First-tier Tribunal and Upper Tribunal appeals, and civil proceedings where English, Welsh, Scottish, or Northern Irish tax law and tribunal rules govern expert evidence. We do not cover non-UK tax jurisdictions.
          </p>

          <h2>For Tax Litigation Counsel</h2>
          <ol>
            <li><strong>Identify the technical tax issue</strong>, VAT, transfer pricing, IHT, CGT, ERS, SDLT, corporate avoidance, or professional negligence</li>
            <li><strong>Determine expert type</strong>, Does the case need a tax technical expert, a forensic accountant, or both? See <Link href="/what-is-a-tax-expert-witness">tax expert vs forensic accountant</Link></li>
            <li><strong>Check FTT category</strong>, Standard and complex track cases typically require expert evidence</li>
            <li><strong>Prepare instructions</strong>, Specific technical questions to address; CPR Part 35 format required; include summary of material facts</li>
            <li><strong>Provide documents</strong>, HMRC assessment, relevant correspondence, tax returns, financial records, and any HMRC reconstruction report</li>
            <li><strong>Expert assessment</strong>, Expert reviews HMRC&apos;s position and advises on strength of challenge</li>
            <li><strong>Report and hearing</strong>, CPR Part 35 report, response to written questions, supplemental report if needed, hearing attendance</li>
          </ol>

          <h2>For Forensic Accountants</h2>
          <p>
            Instruct a separate tax expert when the case raises technical tax analysis questions beyond forensic accounting expertise. Common scenarios include:
          </p>
          <ul>
            <li>HMRC reconstruction produces a financial figure, but is the correct tax treatment applied to that figure?</li>
            <li>POCA benefit calculation includes tax elements requiring technical analysis</li>
            <li>Professional negligence claim requires assessment of whether tax advice was correct</li>
            <li>Transfer pricing dispute requires arm&apos;s length analysis beyond financial accounting</li>
            <li>VAT MTIC case requires knowledge test analysis, not just transaction tracing</li>
          </ul>

          <h2>Timeline: 7 Steps</h2>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Typical Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Case assessment, identify expert need</td>
                <td>At instruction / appeal filing</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Expert selection and initial enquiry</td>
                <td>Week 1 to 2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Letter of instruction and document bundle</td>
                <td>Week 2 to 4</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Expert report (standard track)</td>
                <td>8 to 12 weeks</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Written questions and supplemental report</td>
                <td>Pre-hearing</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Hearing preparation and joint expert discussion</td>
                <td>4 to 8 weeks before hearing</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Tribunal hearing attendance</td>
                <td>Typically 2 to 3 years from appeal</td>
              </tr>
            </tbody>
          </table>

          <h2>Red Flags When Selecting an Expert</h2>
          <ul>
            <li>No active tax practice, tax law changes constantly</li>
            <li>No FTT testimony history in the relevant tax area</li>
            <li>Cannot explain the disputed tax issue clearly to a non-specialist</li>
            <li>Unfamiliar with current HMRC practice and recent tribunal decisions</li>
            <li>Prior adverse judicial comments on their expert evidence</li>
          </ul>
          <p>
            <Link href="/qualifications">View full qualifications guide →</Link> |{" "}
            <Link href="/contact">Contact us →</Link>
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
