import { getSiteDomain } from "@/lib/seo";

/** Display name sent to n8n as `Brand name`. */
export const BRAND_NAME = "Tax Expert Witness";

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    undefined
  );
}

export type LeadWebhookInput = {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
};

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** Outbound JSON shape — identical across all brand sites (see Lead_notification_setup.md). */
export function buildLeadWebhookPayload(input: LeadWebhookInput) {
  const name = sanitize(input.fullName);
  const message = input.message ? sanitize(input.message) : "";
  const fullNameOutbound = message
    ? `${name} — ${message.slice(0, 500)}`
    : name;

  return {
    "Full Name": fullNameOutbound,
    Email: sanitize(input.email).toLowerCase(),
    "Phone Number": sanitize(input.phone),
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export async function notifyLeadWebhook(
  input: LeadWebhookInput
): Promise<Response> {
  const webhookUrl = getLeadWebhookUrl();
  if (!webhookUrl) {
    throw new Error("WEBHOOK_MISSING");
  }

  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildLeadWebhookPayload(input)),
    signal: AbortSignal.timeout(12_000),
  });
}
