import type { Metadata } from "next";
import { SITE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "TaxExpertWitness.co.uk",
      locale: "en_GB",
      type: "website",
      images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Tax Expert Witness" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og.png"],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };
}
