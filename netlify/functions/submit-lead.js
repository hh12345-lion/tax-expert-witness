/**
 * Netlify Function backup: POST lead to n8n webhook (Lead_notification_setup.md).
 * Production prefers Next.js app/api/submit-lead/route.ts (webhook + soft-fail Sheets).
 * Env: Lead_notification_url, NEXT_PUBLIC_SITE_URL.
 */
const BRAND_NAME = "Tax Expert Witness";

function getSiteDomain() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.taxexpertwitness.co.uk";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "taxexpertwitness.co.uk";
  }
}

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

/**
 * @param {import("@netlify/functions").HandlerEvent} event
 */
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  const webhookUrl = getLeadNotificationUrl();
  if (!webhookUrl) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Lead notification not configured" }),
    };
  }

  const fullNameOutbound = message
    ? `${fullName} — ${message.slice(0, 500)}`
    : fullName;

  const outbound = {
    "Full Name": fullNameOutbound,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
    if (!res.ok) {
      console.error("Lead webhook failed:", res.status, await res.text());
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Lead notification failed" }),
      };
    }
  } catch (err) {
    console.error("Lead webhook error:", err);
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Lead notification failed" }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }),
  };
};
