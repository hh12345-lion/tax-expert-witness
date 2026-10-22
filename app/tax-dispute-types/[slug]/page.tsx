import { notFound } from "next/navigation";
import DetailPageLayout from "@/components/DetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { taxDisputeTypes, getTaxDisputeType } from "@/lib/data/tax-dispute-types";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dispute = getTaxDisputeType(slug);
  if (!dispute) return {};
  return createMetadata({
    title: dispute.metaTitle,
    description: dispute.metaDescription,
    path: `/tax-dispute-types/${slug}`,
  });
}

export default async function TaxDisputeTypePage({ params }: Props) {
  const { slug } = await params;
  const dispute = getTaxDisputeType(slug);
  if (!dispute) notFound();

  const relatedLinks = [
    { label: "Tax Disputes Explained", href: "/tax-disputes-explained", type: "Pillar Guide" },
    dispute.relatedTribunal && { ...dispute.relatedTribunal, type: "Related Tribunal" },
    dispute.relatedInvestigation && { ...dispute.relatedInvestigation, type: "Related Investigation" },
    { ...dispute.relatedService, type: "Related Service" },
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
          faqSchema(dispute.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tax Dispute Types", path: "/tax-dispute-types" },
            { name: dispute.shortTitle, path: `/tax-dispute-types/${slug}` },
          ]),
        ]}
      />
      <DetailPageLayout
        title={dispute.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tax Dispute Types", href: "/tax-dispute-types" },
          { label: dispute.shortTitle },
        ]}
        paragraphs={dispute.paragraphs}
        faqs={dispute.faqs}
        tables={dispute.tables}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
