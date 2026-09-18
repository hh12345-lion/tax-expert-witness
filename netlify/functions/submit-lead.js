/** Map site-specific free-text field names to universal `message`. */
function resolveLeadMessage(body) {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "Message",
    "description",
    "enquiry",
    "details",
    "summary",
    "notes",
    "matter",
    "caseSummary",
    "additionalInfo",
    "additional_info",
    "caseDetails",
    "enquiryDetails",
  ];
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) {
      return String(body[key]).trim();
    }
  }
  return "";
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
  const message = resolveLeadMessage(body);
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
    message,
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
      tab: resolveSheetTabName(),
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
