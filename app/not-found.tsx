import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const quickLinks = [
  {
    title: "Tax Dispute Types",
    description: "VAT MTIC, transfer pricing, IHT, CGT, and 10 specialist dispute guides.",
    href: "/tax-dispute-types",
  },
  {
    title: "Tribunals & Courts",
    description: "FTT, Upper Tribunal, Court of Appeal, and HMRC ADR guides.",
    href: "/tribunals-courts",
  },
  {
    title: "HMRC Investigations",
    description: "COP8, COP9, MTIC, transfer pricing, and criminal investigation support.",
    href: "/hmrc-investigation-types",
  },
  {
    title: "Instruct an expert",
    description: "Send a brief enquiry. We aim to respond within one working day.",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="The page you requested does not exist or may have been moved. Use the resources below to find tax expert witness guidance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404" }]}
      />
      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <div className="text-center mb-12">
            <p className="text-7xl md:text-8xl font-bold text-accent leading-none">404</p>
            <p className="mt-4 text-body text-lg max-w-xl mx-auto leading-relaxed">
              We could not locate that URL. If you were looking for tax expert witness support for
              an FTT appeal, HMRC investigation, or tax litigation matter, start from one of the
              sections below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] hover:border-accent transition-colors min-h-[44px]"
              >
                <h2 className="font-bold text-heading group-hover:text-accent transition-colors">
                  {link.title}
                </h2>
                <p className="mt-2 text-sm text-body leading-relaxed">{link.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-accent">
                  View section →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-pill)] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="Need a tax expert witness?"
        description="Send a brief enquiry and we will match you with a qualified UK tax technical specialist."
        buttonText="Make an enquiry"
      />
    </>
  );
}
