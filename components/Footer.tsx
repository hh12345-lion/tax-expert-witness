import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { PreferredSourceButton } from "@/components/PreferredSourceButton";
import {
  serviceNavLinks,
  resourcesNavLinks,
  tribunalNavLinks,
} from "@/lib/data/nav";
import { SITE_EMAIL, UK_SERVICE_SCOPE } from "@/lib/site";

const quickLinks = [
  { label: "Tax disputes explained", href: "/tax-disputes-explained" },
  { label: "How to instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
  { label: "What is a tax expert witness?", href: "/what-is-a-tax-expert-witness" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-accent bg-section-alt text-primary">
      <div className="page-container py-12 md:py-14 pb-[max(3rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 min-w-0">
          <div className="lg:col-span-5">
            <Link href="/" className="font-heading text-2xl text-primary md:text-3xl">
              Tax Expert Witness
            </Link>
            <p className="mt-1 font-label text-muted">United Kingdom referral service</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
              We connect instructing solicitors, counsel, and advisers with qualified tax expert
              witnesses for HMRC enquiries, tribunal proceedings, and domestic UK tax litigation.
            </p>
            <div className="mt-5">
              <span className="uk-badge">England, Wales, Scotland &amp; Northern Ireland</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            <div>
              <h2 className="font-label text-primary mb-3">Services</h2>
              <ul className="space-y-2">
                {serviceNavLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm font-medium text-accent hover:text-primary transition-colors">
                    All services →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-label text-primary mb-3">Tribunals</h2>
              <ul className="space-y-2">
                {tribunalNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-label text-primary mb-3">Resources</h2>
              <ul className="space-y-2">
                {resourcesNavLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {quickLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-l-4 border-accent bg-white p-5 shadow-[var(--shadow-card)]">
              <h2 className="font-label text-primary">Enquiries</h2>
              <p className="mt-3 text-sm text-body leading-relaxed">
                Discuss a tax expert witness instruction or referral.
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-3 block break-all text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                {SITE_EMAIL}
              </a>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-[var(--radius-pill)] bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Make an enquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted leading-relaxed max-w-3xl">
            TaxExpertWitness.co.uk is a referral service, not a law firm. We do not provide legal advice.
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed max-w-3xl">
            {UK_SERVICE_SCOPE}
          </p>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="page-container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} TaxExpertWitness.co.uk · England and Wales
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <CookieSettingsLink className="hover:text-white transition-colors" />
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/what-is-a-tax-expert-witness" className="hover:text-white transition-colors">
              About expert witnesses
            </Link>
            <PreferredSourceButton theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
