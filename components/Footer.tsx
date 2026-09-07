import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { PreferredSourceButton } from "@/components/PreferredSourceButton";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="page-container flex flex-col gap-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} TaxExpertWitness.co.uk · England and Wales
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookies
          </Link>
          <CookieSettingsLink className="hover:text-white transition-colors" />
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link
            href="/what-is-a-tax-expert-witness"
            className="hover:text-white transition-colors"
          >
            About expert witnesses
          </Link>
          <PreferredSourceButton theme="dark" />
        </div>
      </div>
    </footer>
  );
}
