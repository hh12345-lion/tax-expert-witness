import { notFound } from "next/navigation";
import DetailPageLayout from "@/components/DetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { hmrcInvestigations, getHmrcInvestigation } from "@/lib/data/hmrc-investigations";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const investigation = getHmrcInvestigation(slug);
  if (!investigation) return {};
  return createMetadata({
    title: investigation.metaTitle,
    description: investigation.metaDescription,
    path: `/hmrc-investigation-types/${slug}`,
  });
}

export default async function HmrcInvestigationPage({ params }: Props) {
  const { slug } = await params;
  const investigation = getHmrcInvestigation(slug);
  if (!investigation) notFound();

  const relatedLinks = [
    { label: "Tax Disputes Explained", href: "/tax-disputes-explained", type: "Pillar Guide" },
    { label: "HMRC Investigations Hub", href: "/hmrc-investigation-types", type: "Hub" },
    investigation.relatedDispute && { ...investigation.relatedDispute, type: "Related Dispute Type" },
    { ...investigation.relatedService, type: "Related Service" },
  ]
    .filter(Boolean)
    .filter(
      (link, index, arr) =>
        arr.findIndex((item) => item && link && item.href === link.href) === index
    ) as { label: string; href: string; type: string }[];

  return (
    <>
      <JsonLd
        data={[
          faqSchema(investigation.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "HMRC Investigation Types", path: "/hmrc-investigation-types" },
            { name: investigation.shortTitle, path: `/hmrc-investigation-types/${slug}` },
          ]),
        ]}
      />
      <DetailPageLayout
        title={investigation.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "HMRC Investigation Types", href: "/hmrc-investigation-types" },
          { label: investigation.shortTitle },
        ]}
        paragraphs={investigation.paragraphs}
        faqs={investigation.faqs}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
