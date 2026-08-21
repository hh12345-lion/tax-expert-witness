"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieSettingsLink({ className }: { className?: string }) {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className ?? "text-sm text-white/60 hover:text-white transition-colors text-left"}
    >
      Cookie settings
    </button>
  );
}
