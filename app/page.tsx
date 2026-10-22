import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { homepageSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Expert Witness UK | HMRC Disputes, Tribunals & Tax Litigation",
  description:
    "Find a qualified tax expert witness in the UK. Independent tax technical experts for FTT, Upper Tribunal, HMRC investigations, VAT disputes, transfer pricing, IHT, and professional negligence.",
  path: "/",
});

const stats = [
  { fact: "FTT cases listed for hearing 2025 to 26", figure: "Thousands", source: "HMCTS Statistics" },
  { fact: "Time from appeal to FTT hearing", figure: "Typically 2 to 3 years", source: "Slaughter and May, 2024" },
  { fact: "HMRC transfer pricing yield increase", figure: "Significant rise 2025", source: "Jon Preshaw Tax, March 2026" },
  { fact: "FTT jurisdiction", figure: "Income tax, CT, CGT, IHT, VAT, SDLT, NIC", source: "HMCTS" },
  { fact: "Upper Tribunal role", figure: "Appeal on points of law from FTT", source: "HMCTS" },
  { fact: "HMRC v Harte [2026]", figure: "HMRC's extended time limit use criticised", source: "UKUT 2026" },
  { fact: "Expert evidence framework", figure: "CPR Part 35 / FTT Rules", source: "Civil Procedure Rules" },
];

const audiences = [
  {
    title: "Tax Litigation Counsel",
    description:
      "You need independent technical tax opinion to support or challenge HMRC's position before the FTT or Upper Tribunal.",
    href: "/what-is-a-tax-expert-witness",
  },
  {
    title: "Forensic Accountants",
    description:
      "Your financial evidence is complete, but the case also raises technical tax analysis questions outside forensic accounting expertise.",
    href: "/services",
  },
  {
    title: "Taxpayers' Advisers",
    description:
      "Your client faces a COP8 or COP9 investigation and needs independent expert review of HMRC's methodology.",
    href: "/hmrc-investigation-types",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        large
        title="Tax Expert Witness Services for UK Solicitors & Tax Litigation Counsel"
        subtitle="When a tax dispute reaches the First-tier Tribunal, Upper Tribunal, or Crown Court, the technical tax analysis must be independently verified by a qualified expert. TaxExpertWitness.co.uk connects UK solicitors and tax litigation counsel with qualified tax expert witnesses, specialists in HMRC investigation methodology, tribunal procedure, and independent tax technical opinion."
        label="Independent tax expert witness referrals"
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center bg-accent px-7 font-heading text-sm font-bold text-white transition hover:bg-primary">
            Make an enquiry
          </Link>
          <Link href="/services" className="inline-flex min-h-[48px] items-center justify-center border border-primary/25 bg-white px-7 font-heading text-sm font-bold text-primary transition hover:border-primary">
            View services
          </Link>
        </div>
      </PageHero>

      <section className="bg-primary py-16 text-mist">
        <div className="page-container">
          <h2 className="max-w-2xl font-heading text-3xl font-bold text-mist md:text-4xl">Where tax disputes are argued</h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { p: photos.somersetHouse, t: "HMRC enquiries", d: "Challenges to assessments, discovery and penalty methodology." },
              { p: photos.royalCourts, t: "Tribunals and courts", d: "Evidence for the First-tier Tribunal, Upper Tribunal and above." },
              { p: photos.customHouse, t: "Customs and VAT", d: "Indirect tax, duty and MTIC disputes with HMRC." },
              { p: photos.lincolnsLibrary, t: "Technical opinion", d: "Independent analysis of the law as it applies to the facts." },
            ].map((x) => (
              <li key={x.t}>
                <div className="folio relative aspect-[4/5] overflow-hidden">
                  <Image src={x.p.src} alt={x.p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-mist">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/70">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            What Our Tax Expert Witnesses Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <HubCard
                key={service.id}
                title={service.shortTitle}
                description={service.description.slice(0, 120) + "…"}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-section-alt">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            UK Tax Disputes: Key 2025 to 2026 Facts
          </h2>
          <div className="table-scroll rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]">
            <table className="w-full text-sm min-w-[36rem]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Fact</th>
                  <th className="px-4 py-3 text-left font-semibold">Figure</th>
                  <th className="px-4 py-3 text-left font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-section-alt"}>
                    <td className="px-4 py-3 text-body border-t border-border">{row.fact}</td>
                    <td className="px-4 py-3 text-body border-t border-border font-medium">{row.figure}</td>
                    <td className="px-4 py-3 text-body border-t border-border">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-body/70">
            Sources: HMCTS Annual Statistics; Jon Preshaw Tax Disputes Newsletter March 2026; HMRC v Harte [2026] UKUT 00112.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            Who Needs a Tax Expert Witness?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                <p className="mt-3 text-body leading-relaxed">{card.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-body leading-relaxed max-w-3xl">
            A tax expert witness is fundamentally different from a forensic accountant. While forensic accountants focus on financial numbers, tax expert witnesses provide independent technical opinions on whether the correct tax analysis was applied.{" "}
            <Link href="/what-is-a-tax-expert-witness" className="text-accent font-semibold underline hover:text-primary">
              Learn what a tax expert witness does →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-section-alt">
        <div className="page-container min-w-0 max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-4 break-words">
            United Kingdom Service Scope
          </h2>
          <p className="text-body leading-relaxed mb-4">
            This website covers tax expert witness instruction for disputes within the United Kingdom only. Our content, guides, and expert referral service address HMRC assessments and enquiries, the First-tier Tribunal (Tax Chamber), Upper Tribunal, Court of Appeal, and civil court proceedings where UK tax law applies across England, Wales, Scotland, and Northern Ireland.
          </p>
          <p className="text-body leading-relaxed mb-4">
            Expert witnesses introduced through this service are qualified in UK tax practice, familiar with HMRC manuals and published guidance, and experienced in giving evidence under CPR Part 35 and FTT Rules. We do not cover US Internal Revenue Service disputes, EU member state tax proceedings outside the UK, or other non-UK jurisdictions.
          </p>
          <p className="text-body leading-relaxed">
            The <code className="text-sm">.co.uk</code> domain reflects this focus: all dispute types, tribunal guides, and investigation procedures described here assume a UK tax context. For an overview of the UK tax dispute landscape, see{" "}
            <Link href="/tax-disputes-explained" className="text-accent font-semibold underline hover:text-primary">
              Tax Disputes Explained
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
