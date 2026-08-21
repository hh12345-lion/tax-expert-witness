import Link from "next/link";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | TaxExpertWitness.co.uk",
  description: "Your tax expert witness enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    step: "1",
    title: "Case review",
    description:
      "Our team reviews your enquiry and the technical tax questions raised within one working day.",
  },
  {
    step: "2",
    title: "Expert matching",
    description:
      "We identify a CTA or ACA qualified tax expert witness with relevant FTT, Upper Tribunal, or HMRC enquiry experience.",
  },
  {
    step: "3",
    title: "Introduction",
    description:
      "You receive an introduction to the matched expert to discuss scope, timetable, and CPR Part 35 report requirements.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Enquiry received"
        subtitle="Thank you. We have received your enquiry and will respond within one working day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Thank you" }]}
      />
      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-highlight/10 text-highlight text-3xl font-bold mb-6">
              ✓
            </div>
            <p className="text-body text-lg leading-relaxed">
              A member of our team will review your enquiry and match you with an appropriate
              UK tax expert witness. For urgent FTT hearings, please mention this in your enquiry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-xl font-semibold text-heading text-center mb-8">What happens next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {nextSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-[var(--shadow-card)] text-center border-t-4 border-t-accent"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading font-semibold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-pill)] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Return to homepage
            </Link>
            <Link
              href="/tax-disputes-explained"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-pill)] border border-border px-8 py-3 text-base font-semibold text-heading hover:border-accent transition-colors"
            >
              Read tax disputes guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
