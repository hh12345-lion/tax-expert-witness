import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { services, getService } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${slug}` },
          ]),
        ]}
      />
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <div className="max-w-3xl">
            {service.paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          <div className="mt-10 table-scroll rounded-[8px] border border-border">
            <table className="w-full min-w-[32rem] text-sm border-collapse overflow-hidden">
              <thead>
                <tr className="bg-section-alt">
                  <th className="border border-border px-4 py-3 text-left text-heading font-semibold">Aspect</th>
                  <th className="border border-border px-4 py-3 text-left text-heading font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {service.methodology.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-border px-4 py-3 text-body font-medium">{row.aspect}</td>
                    <td className="border border-border px-4 py-3 text-body">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href={service.relatedHref}
            className="mt-6 inline-block text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            Related guide →
          </Link>

          <div className="mt-14">
            <h2 className="text-2xl font-bold text-heading mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>
      <CTASection buttonText="Make an enquiry" />
    </>
  );
}
