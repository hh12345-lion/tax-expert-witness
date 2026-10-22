import { SITE_EMAIL, SITE_URL, LINKEDIN_URL } from "./site";

export type FAQ = { question: string; answer: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export type DefinedTerm = {
  id: string;
  name: string;
  description: string;
};

export function definedTermSetSchema(terms: DefinedTerm[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Tax Expert Witness Glossary",
    url: `${SITE_URL}/glossary`,
    inLanguage: "en-GB",
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossary#${term.id}`,
      name: term.name,
      description: term.description,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2025-06-01",
  dateModified = "2026-06-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-GB",
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "TaxExpertWitness",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "TaxExpertWitness",
      url: SITE_URL,
    },
  };
}

export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TaxExpertWitness",
      description:
        "UK tax expert witness referral service for FTT, Upper Tribunal, HMRC investigations, and tax litigation.",
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TaxExpertWitness",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/icon-512.png`,
      image: `${SITE_URL}/brand/og.png`,
      email: SITE_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professional-service`,
      name: "Tax Expert Witness Services",
      url: `${SITE_URL}/services`,
      serviceType: "Tax Expert Witness",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tax Expert Witness Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical Tax Opinion (FTT/Upper Tribunal)", "@id": `${SITE_URL}/services/technical-tax-opinion` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HMRC Methodology Challenge", "@id": `${SITE_URL}/services/hmrc-methodology-challenge` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "VAT Dispute Expert Evidence", "@id": `${SITE_URL}/services/vat-dispute-evidence` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfer Pricing Expert Evidence", "@id": `${SITE_URL}/services/transfer-pricing-evidence` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IHT & CGT Valuation Disputes", "@id": `${SITE_URL}/services/iht-cgt-valuation` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employment Related Securities", "@id": `${SITE_URL}/services/employment-related-securities` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Professional Negligence", "@id": `${SITE_URL}/services/tax-professional-negligence` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "COP8 / COP9 Expert Support", "@id": `${SITE_URL}/services/cop8-cop9-support` } },
        ],
      },
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/technical-tax-opinion`,
      name: "Technical Tax Opinion (FTT/Upper Tribunal)",
      description: "Independent technical tax opinions for First-tier Tribunal and Upper Tribunal proceedings.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/hmrc-methodology-challenge`,
      name: "HMRC Methodology Challenge",
      description: "Expert challenge to HMRC reconstruction methodology and forensic accounting reports.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/vat-dispute-evidence`,
      name: "VAT Dispute Expert Evidence",
      description: "Expert evidence for VAT disputes including MTIC fraud and input tax denial.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/transfer-pricing-evidence`,
      name: "Transfer Pricing Expert Evidence",
      description: "Arm's length analysis and transfer pricing expert reports for HMRC enquiries.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/iht-cgt-valuation`,
      name: "IHT & CGT Valuation Disputes",
      description: "Independent valuation opinions for IHT business property relief and CGT share disposals.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/employment-related-securities`,
      name: "Employment Related Securities",
      description: "Expert evidence for ERS valuation disputes under ITEPA 2003.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/tax-professional-negligence`,
      name: "Tax Professional Negligence",
      description: "Expert opinions on standard of care in tax advice and loss causation.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/cop8-cop9-support`,
      name: "COP8 / COP9 Expert Support",
      description: "Expert support for Code of Practice 8 and Code of Practice 9 HMRC investigations.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "GB",
    },
  ],
};
