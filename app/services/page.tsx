import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tax Expert Witness Services UK | Full Service List",
  description:
    "UK tax expert witness services: FTT expert evidence, HMRC methodology challenge, transfer pricing, VAT disputes, IHT, CGT, ERS, and professional negligence in tax advice.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]} />
      <PageHero
        title="Tax Expert Witness Services UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <HubCard
                key={service.id}
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection buttonText="Make an enquiry" />
    </>
  );
}
