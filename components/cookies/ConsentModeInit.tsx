"use client";

import Script from "next/script";

/**
 * Inline consent mode defaults, runs before any tracking scripts.
 * Must load in layout before interactive hydration.
 */
export default function ConsentModeInit() {
  return (
    <Script id="consent-mode-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
