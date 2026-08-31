import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
} from "@/lib/leadNotification";
import { writeLeadToSheetSafely } from "@/lib/submitLead";

function trimStr(v: unknown, max = 500): string {
  const s = typeof v === "string" ? v.trim() : "";
  return s.length > max ? s.slice(0, max) : s;
}

/**
 * Soft-fail webhook + soft-fail Sheets.
 * Never return "Form submission is not configured" when either path can store.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = trimStr(body.fullName ?? body.full_name, 300);
  const email = trimStr(body.email, 320);
  const phone = trimStr(body.phone, 80);
  const formType = trimStr(body.formType ?? body.form_type, 40) || "contact";
  const organisation = trimStr(body.organisation, 300);
  const description = trimStr(
    body.message ?? body.description ?? body.caseDescription,
    8000
  );

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const webhookUrl = getLeadWebhookUrl();
  let forwarded = false;

  if (webhookUrl?.trim()) {
    try {
      const upstream = await notifyLeadWebhook({
        fullName,
        email,
        phone,
        message: description,
      });
      forwarded = upstream.ok;
      if (!upstream.ok) {
        console.error(
          "[submit-lead] webhook rejected — continuing with Sheets fallback",
          upstream.status
        );
      }
    } catch (err) {
      console.error(
        "[submit-lead] webhook failed — continuing with Sheets fallback",
        err
      );
    }
  } else {
    console.warn(
      "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  const writtenToSheet = await writeLeadToSheetSafely({
    fullName,
    email,
    phone,
    organisation,
    description,
    formType,
    role: trimStr(body.role, 120),
    disputeType: trimStr(body.disputeType ?? body.dispute_type, 200),
    forum: trimStr(body.forum, 200),
    forensicAccountant: trimStr(
      body.forensicAccountant ?? body.forensic_accountant,
      80
    ),
    taxValue: trimStr(body.taxValue ?? body.tax_value, 120),
    hearingDate: trimStr(body.hearingDate ?? body.hearing_date, 80),
    urgency: trimStr(body.urgency, 80),
  });

  if (!forwarded && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage failed",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_SHEET_TAB_NAME) on Netlify, then redeploy.",
        sheetsConfigured: isGoogleSheetsConfigured(),
        webhookConfigured: Boolean(webhookUrl?.trim()),
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    success: true,
    forwarded,
    writtenToSheet,
  });
}
