import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, UK_SERVICE_SCOPE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Instruct a Tax Expert Witness | TaxExpertWitness.co.uk",
  description:
    "Send a brief enquiry to be matched with a qualified tax expert witness for FTT, HMRC enquiries, or tax litigation in England, Wales, Scotland, or Northern Ireland.",
  path: "/contact",
});

const trustPoints = [
  "CTA and ACA specialists with UK tribunal experience",
  "First-tier Tribunal and Upper Tribunal proceedings",
  "CPR Part 35 compliant reports under English procedure",
  "HMRC methodology challenge expertise",
  "Response within one working day (UK time)",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a tax expert witness"
        subtitle="Send a brief enquiry about your UK tax dispute. We match instructing solicitors and counsel with qualified tax expert witnesses for HMRC enquiries, FTT appeals, and domestic tax litigation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Enquiry" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <p className="text-body leading-relaxed max-w-3xl mb-8">
            {UK_SERVICE_SCOPE} If your matter concerns a non-UK tax authority or overseas tribunal, this service is unlikely to be appropriate.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 min-w-0">
              <ContactForm />
            </div>
            <aside className="lg:col-span-1 min-w-0">
              <div className="rounded-[var(--radius-card)] border border-border border-l-4 border-l-accent bg-white p-5 sm:p-6 lg:sticky lg:top-28 shadow-[var(--shadow-card)]">
                <h2 className="font-heading text-lg font-semibold text-heading mb-4">Why instruct through us</h2>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-body text-sm">
                      <span className="text-highlight font-bold mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-body">
                    <span className="font-semibold text-heading">Email:</span>{" "}
                    <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:text-primary transition-colors break-all">
                      {SITE_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
