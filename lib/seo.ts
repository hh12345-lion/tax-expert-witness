import { SITE_URL } from "@/lib/site";

/** Hostname for lead webhooks (e.g. taxexpertwitness.co.uk). Strips www. */
export function getSiteDomain(): string {
  try {
    return new URL(SITE_URL).hostname.replace(/^www\./, "");
  } catch {
    return "taxexpertwitness.co.uk";
  }
}
