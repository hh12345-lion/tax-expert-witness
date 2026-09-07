"use client";

import Script from "next/script";

type Props = {
  theme?: "light" | "dark";
  className?: string;
};

/** Google Preferred Sources button. https://developers.google.com/search/docs/appearance/preferred-sources */
export function PreferredSourceButton({
  theme = "light",
  className = "",
}: Props) {
  return (
    <div className={className}>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="lazyOnload"
      />
      <div
        {...({ "google-add-preferred-source-btn": "" } as Record<string, string>)}
        data-theme={theme}
        data-lang="en"
      />
    </div>
  );
}
