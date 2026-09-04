import { taxDisputeTypes } from "@/lib/data/tax-dispute-types";
import { tribunalsCourts } from "@/lib/data/tribunals-courts";
import { hmrcInvestigations } from "@/lib/data/hmrc-investigations";
import { guides } from "@/lib/data/guides";
import { services } from "@/lib/data/services";

import { getPublicSiteUrl } from "@/lib/site";

/** Canonical production host for sitemap and robots */
export const CANONICAL_HOST = getPublicSiteUrl();

export const APP_STATIC_PATHS: string[] = [
  "/",
  "/services",
  "/tax-disputes-explained",
  "/tax-dispute-types",
  "/tribunals-courts",
  "/hmrc-investigation-types",
  "/what-is-a-tax-expert-witness",
  "/qualifications",
  "/how-to-instruct",
  "/guides",
  "/glossary",
  "/contact",
];

function dynamicPaths(): string[] {
  return [
    ...services.map((s) => `/services/${s.id}`),
    ...taxDisputeTypes.map((d) => `/tax-dispute-types/${d.slug}`),
    ...tribunalsCourts.map((t) => `/tribunals-courts/${t.slug}`),
    ...hmrcInvestigations.map((h) => `/hmrc-investigation-types/${h.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
}

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const combined = [...APP_STATIC_PATHS, ...dynamicPaths()];
  const allPaths = [...new Set(combined)].sort((a, b) => a.localeCompare(b));
  const allUrls = allPaths.map((path) =>
    path === "/" ? CANONICAL_HOST : `${CANONICAL_HOST}${path}`
  );

  return { allPaths, allUrls };
}

export function getChangeFreq(path: string): string {
  if (path === "/") return "weekly";
  if (path === "/privacy" || path === "/terms" || path === "/cookies") return "yearly";
  if (path.startsWith("/guides")) return "monthly";
  if (path.includes("tax-dispute") || path.includes("tribunals") || path.includes("hmrc")) {
    return "monthly";
  }
  if (path.startsWith("/services")) return "monthly";
  return "monthly";
}

/** Priorities per docs/SEO-ARCHITECTURE.md § Sitemap priority reference */
export function getPriority(path: string): number {
  if (path === "/") return 1.0;

  if (
    path === "/tax-disputes-explained" ||
    path === "/services" ||
    path === "/tax-dispute-types" ||
    path === "/tribunals-courts" ||
    path === "/hmrc-investigation-types" ||
    path === "/guides"
  ) {
    return 0.9;
  }

  if (
    path.startsWith("/tax-dispute-types/") ||
    path.startsWith("/tribunals-courts/") ||
    path.startsWith("/hmrc-investigation-types/") ||
    path.startsWith("/guides/") ||
    path.startsWith("/services/")
  ) {
    return 0.7;
  }

  if (path === "/glossary" || path === "/how-to-instruct") return 0.6;

  if (path === "/contact" || path === "/what-is-a-tax-expert-witness" || path === "/qualifications") {
    return 0.5;
  }

  if (path === "/privacy" || path === "/terms" || path === "/cookies") return 0.3;

  return 0.7;
}
