"use client";

import { useState, FormEvent } from "react";
import { SITE_EMAIL } from "@/lib/site";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim(),
      formType: "contact" as const,
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
      };

      if (res.ok && (result.ok || result.success || res.status === 200)) {
        try {
          await submitNetlifyForm("contact", {
            name: payload.fullName,
            email: payload.email,
            organisation: payload.organisation,
            phone: payload.phone,
            message: payload.message,
          });
        } catch {
          // Sheets/webhook already stored the enquiry; don't block the visitor.
        }
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "min-h-[44px] w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2 text-body text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";
  const labelClass = "block text-sm font-medium text-heading mb-1";

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="space-y-4 min-w-0 max-w-lg"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name <span className="text-accent">*</span>
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-accent">*</span>
        </label>
        <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} />
      </div>

      <div>
        <label htmlFor="organisation" className={labelClass}>
          Firm or organisation
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Telephone <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder="e.g. 020 7123 4567"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Brief enquiry <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="Describe the tax dispute, HMRC position, and the expert evidence required."
        />
      </div>

      {status === "error" && (
        <p className="text-accent text-sm" role="alert">
          We could not send your enquiry. Please email us at {SITE_EMAIL} or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full sm:w-auto rounded-[var(--radius-pill)] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
