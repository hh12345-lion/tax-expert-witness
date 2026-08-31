/**
 * Netlify backup for /api/submit-lead — soft webhook + soft Sheets.
 * Production prefers Next.js app/api/submit-lead/route.ts.
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

function normalizePrivateKey(raw) {
  if (!raw) return undefined;
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\n/g, "\n");
  if (!key.includes("BEGIN PRIVATE KEY")) return undefined;
  return key;
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

function sanitize(str) {
  return String(str || "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

async function getAccessToken() {
  const { JWT } = require("google-auth-library");
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  if (!email || !privateKey) {
    throw new Error("Missing Google service account credentials");
  }
  const client = new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const tokenResponse = await client.getAccessToken();
  const token =
    typeof tokenResponse === "string" ? tokenResponse : tokenResponse?.token;
  if (!token) throw new Error("Failed to obtain Google access token");
  return token;
}

async function appendLeadToSheet(payload) {
  if (!isGoogleSheetsConfigured()) {
    console.warn("[submit-lead fn] Sheets not configured — skip");
    return false;
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID.trim();
  const sheetName = (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim();
  const formType =
    String(payload.formType || "contact").toLowerCase() === "instruct"
      ? "Instruct"
      : "Contact";

  const token = await getAccessToken();
  const range = encodeURIComponent(`${sheetName}!A:A`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append` +
    "?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [
        [
          new Date().toISOString(),
          BRAND_NAME,
          formType,
          sanitize(payload.fullName),
          sanitize(payload.email).toLowerCase(),
          sanitize(payload.phone),
          sanitize(payload.organisation),
          sanitize(payload.role),
          sanitize(payload.disputeType),
          sanitize(payload.forum),
          sanitize(payload.forensicAccountant),
          sanitize(payload.taxValue),
          sanitize(payload.hearingDate),
          sanitize(payload.urgency),
          sanitize(payload.description || payload.message),
        ],
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Google Sheets API error (${response.status}): ${await response.text()}`
    );
  }
  return true;
}

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
  const message =
    typeof body.message === "string"
      ? body.message.trim()
      : typeof body.description === "string"
        ? body.description.trim()
        : "";
  const organisation =
    typeof body.organisation === "string" ? body.organisation.trim() : "";
  const formType =
    typeof body.formType === "string" ? body.formType.trim() : "contact";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  let forwarded = false;
  const webhookUrl = getLeadNotificationUrl();

  if (webhookUrl) {
    const fullNameOutbound = message
      ? `${fullName} — ${message.slice(0, 500)}`
      : fullName;
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": fullNameOutbound,
          Email: email.toLowerCase(),
          "Phone Number": phone,
          "Brand name": BRAND_NAME,
          domain: getSiteDomain(),
        }),
      });
      forwarded = res.ok;
      if (!res.ok) {
        console.error("Lead webhook failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Lead webhook error:", err);
    }
  } else {
    console.warn(
      "[submit-lead fn] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  let writtenToSheet = false;
  try {
    writtenToSheet = await appendLeadToSheet({
      fullName,
      email,
      phone,
      organisation,
      description: message,
      formType,
      role: typeof body.role === "string" ? body.role : "",
      disputeType:
        typeof body.disputeType === "string" ? body.disputeType : "",
      forum: typeof body.forum === "string" ? body.forum : "",
      forensicAccountant:
        typeof body.forensicAccountant === "string"
          ? body.forensicAccountant
          : "",
      taxValue: typeof body.taxValue === "string" ? body.taxValue : "",
      hearingDate:
        typeof body.hearingDate === "string" ? body.hearingDate : "",
      urgency: typeof body.urgency === "string" ? body.urgency : "",
    });
  } catch (err) {
    console.error("Google Sheets error (submit-lead fn):", {
      message: err && err.message,
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
    });
  }

  if (!forwarded && !writtenToSheet) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Lead storage failed",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
        sheetsConfigured: isGoogleSheetsConfigured(),
        webhookConfigured: Boolean(webhookUrl),
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ok: true,
      success: true,
      forwarded,
      writtenToSheet,
    }),
  };
};
