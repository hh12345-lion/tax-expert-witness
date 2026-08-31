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
 * POST /api/submit-lead
 * Webhook is primary (five-key payload per Lead_notification_setup.md).
 * Optional Google Sheets append soft-fails (one tab + Form Type column).
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
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "LEAD_DESTINATION_MISSING",
        message:
          "Configure Lead_notification_url or Google Sheets credentials.",
      },
      { status: 503 }
    );
  }

  // Webhook primary — hard-fail only when the webhook is configured and fails.
  if (webhookUrl) {
    let upstream: Response;
    try {
      upstream = await notifyLeadWebhook({
        fullName,
        email,
        phone,
        message: description,
      });
    } catch {
      return NextResponse.json(
        { error: "WEBHOOK_UNREACHABLE" },
        { status: 502 }
      );
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "WEBHOOK_REJECTED", status: upstream.status },
        { status: 502 }
      );
    }
  }

  // Soft-fail Sheets — never block a successful webhook path.
  if (sheetsConfigured) {
    const wrote = await writeLeadToSheetSafely({
      fullName,
      email,
      phone,
      organisation,
      description,
      formType,
    });
    if (!wrote && !webhookUrl) {
      return NextResponse.json(
        {
          error: "SHEETS_WRITE_FAILED",
          message: "Could not save your submission.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
