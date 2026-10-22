import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/cookies/CookieConsentProvider";
import ConsentModeInit from "@/components/cookies/ConsentModeInit";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const heading = localFont({
  src: [{ path: "./fonts/syne.woff2", weight: "400 800", style: "normal" }],
  variable: "--font-syne",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/hanken-grotesk.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/hanken-grotesk-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-hanken",
  display: "swap",
});

// Every page is rendered on the server for each request.
export const dynamic = "force-dynamic";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: { "x-default": SITE_URL },
  },
  title: {
    default: "Tax Expert Witness UK | HMRC Disputes, Tribunals & Tax Litigation",
    template: "%s | TaxExpertWitness.co.uk",
  },
  description:
    "Find a qualified tax expert witness in the UK. Independent tax technical experts for FTT, Upper Tribunal, HMRC investigations, VAT disputes, transfer pricing, IHT, and professional negligence.",
  openGraph: {
    type: "website",
    siteName: "Tax Expert Witness",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Tax Expert Witness" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ConsentModeInit />
        <CookieConsentProvider>
          <Header />
          <main className="flex-1 min-w-0 w-full">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
