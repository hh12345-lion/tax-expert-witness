import { services } from "./services";
import { taxDisputeTypes } from "./tax-dispute-types";
import { tribunalsCourts } from "./tribunals-courts";
import { hmrcInvestigations } from "./hmrc-investigations";

export type NavLink = { label: string; href: string };

export const serviceNavLinks: NavLink[] = services.map((s) => ({
  label: s.shortTitle,
  href: `/services/${s.id}`,
}));

export const taxDisputeTypeNavLinks: NavLink[] = taxDisputeTypes.map((d) => ({
  label: d.shortTitle,
  href: `/tax-dispute-types/${d.slug}`,
}));

export const tribunalNavLinks: NavLink[] = tribunalsCourts.map((t) => ({
  label: t.shortTitle,
  href: `/tribunals-courts/${t.slug}`,
}));

export const hmrcInvestigationNavLinks: NavLink[] = hmrcInvestigations.map((h) => ({
  label: h.shortTitle,
  href: `/hmrc-investigation-types/${h.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
];
