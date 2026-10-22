import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { guides, getGuide } from "@/lib/data/guides";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            description: guide.metaDescription,
            path: `/guides/${slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.shortTitle, path: `/guides/${slug}` },
          ]),
        ]}
      />
      <PageHero
        title={guide.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.shortTitle },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div
            className="prose-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
          <HubRelatedLinks
            links={[
              { label: "Tax Disputes Explained (master pillar)", href: "/tax-disputes-explained" },
              { label: "All solicitor guides", href: "/guides" },
              { label: "How to instruct a tax expert witness", href: "/how-to-instruct" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
