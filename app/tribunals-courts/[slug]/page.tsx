import { notFound } from "next/navigation";
import DetailPageLayout from "@/components/DetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { tribunalsCourts, getTribunalCourt } from "@/lib/data/tribunals-courts";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tribunal = getTribunalCourt(slug);
  if (!tribunal) return {};
  return createMetadata({
    title: tribunal.metaTitle,
    description: tribunal.metaDescription,
    path: `/tribunals-courts/${slug}`,
  });
}

export default async function TribunalCourtPage({ params }: Props) {
  const { slug } = await params;
  const tribunal = getTribunalCourt(slug);
  if (!tribunal) notFound();

  const relatedLinks = [
    { label: "Tax Disputes Explained", href: "/tax-disputes-explained", type: "Pillar Guide" },
    { label: "Tribunals Hub", href: "/tribunals-courts", type: "Hub" },
    tribunal.relatedDispute &&
      tribunal.relatedDispute.href !== "/tax-disputes-explained" && {
        ...tribunal.relatedDispute,
        type: "Related Guide",
      },
    { ...tribunal.relatedService, type: "Related Service" },
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
          faqSchema(tribunal.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tribunals & Courts", path: "/tribunals-courts" },
            { name: tribunal.shortTitle, path: `/tribunals-courts/${slug}` },
          ]),
        ]}
      />
      <DetailPageLayout
        title={tribunal.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tribunals & Courts", href: "/tribunals-courts" },
          { label: tribunal.shortTitle },
        ]}
        paragraphs={tribunal.paragraphs}
        faqs={tribunal.faqs}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
