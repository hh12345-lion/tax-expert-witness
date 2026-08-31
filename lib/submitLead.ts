import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/leadNotification";

export { BRAND_NAME, isGoogleSheetsConfigured };

/**
 * One shared GOOGLE_SHEET_TAB_NAME. Form Type distinguishes Contact vs Instruct.
 * Timestamp | Brand | Form Type | Full Name | Email | Phone | Organisation |
 * You Are | Tax Dispute Type | Forum | Forensic Accountant Needed |
 * Disputed Tax Value | FTT Hearing Date | Urgency | Description
 */
export const SHEET_COLUMN_HEADERS = [
  "Timestamp",
  "Brand",
  "Form Type",
  "Full Name",
  "Email",
  "Phone",
  "Law Firm / Organisation",
  "You Are",
  "Tax Dispute Type",
  "Forum",
  "Forensic Accountant Needed",
  "Disputed Tax Value",
  "FTT Hearing Date",
  "Urgency",
  "Description",
] as const;

export type LeadFormPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  role?: string;
  disputeType?: string;
  forum?: string;
  forensicAccountant?: string;
  taxValue?: string;
  hearingDate?: string;
  urgency?: string;
  description?: string;
  formType?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function formTypeLabel(formType?: string): string {
  return formType === "instruct" ? "Instruct" : "Contact";
}

export async function appendLeadToSheet(payload: LeadFormPayload): Promise<void> {
  await appendRow([
    new Date().toISOString(),
    BRAND_NAME,
    formTypeLabel(payload.formType),
    sanitize(payload.fullName),
    payload.email.toLowerCase().trim(),
    payload.phone?.trim() ?? "",
    sanitize(payload.organisation ?? ""),
    payload.role ?? "",
    payload.disputeType ?? "",
    payload.forum ?? "",
    payload.forensicAccountant ?? "",
    payload.taxValue ?? "",
    payload.hearingDate ?? "",
    payload.urgency ?? "",
    sanitize(payload.description ?? ""),
  ]);
}

/** Soft-fail Sheets append — logs errors, never throws when webhook already succeeded. */
export async function writeLeadToSheetSafely(
  payload: LeadFormPayload,
  context = "submit-lead"
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) return false;

  try {
    await appendLeadToSheet(payload);
    return true;
  } catch (error) {
    console.error("Google Sheets write failed (soft-fail):", {
      context,
      error,
      tab: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
    });
    return false;
  }
}
