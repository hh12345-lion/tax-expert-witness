import Image from "next/image";
import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { PreferredSourceButton } from "@/components/PreferredSourceButton";
import { serviceNavLinks, taxDisputeTypeNavLinks, tribunalNavLinks } from "@/lib/data/nav";
import { photos } from "@/lib/photos";
import { SITE_EMAIL } from "@/lib/site";

const resourceLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
  { label: "Tax Disputes Explained", href: "/tax-disputes-explained" },
  { label: "About Expert Witnesses", href: "/what-is-a-tax-expert-witness" },
];

const linkCls = "text-sm text-mist/70 transition-colors hover:text-mist";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-mist">
      {/* Instruction band: two folio photographs either side of the call to instruct, like the monogram's open pages */}
      <div className="border-b border-mist/10">
        <div className="page-container grid items-center gap-10 py-16 lg:grid-cols-[200px_minmax(0,1fr)_200px]">
          <div className="folio relative mx-auto hidden h-64 w-48 overflow-hidden lg:block">
            <Image src={photos.somersetHouse.src} alt={photos.somersetHouse.alt} fill sizes="192px" className="object-cover" />
          </div>
          <div className="text-center">
            <span className="ledger-rule mx-auto w-14" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <h2 className="mx-auto mt-6 max-w-xl font-heading text-3xl font-bold leading-tight text-mist md:text-[2.3rem]">
              Need independent tax evidence for a dispute?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-mist/75">
              Tell us the tax at issue, the forum and your timetable. We will match you with a qualified tax expert witness.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center bg-peach px-7 font-heading text-sm font-bold text-primary transition hover:bg-mist">
                Find an expert
              </Link>
              <a href={`mailto:${SITE_EMAIL}`} className="text-mist underline decoration-peach decoration-2 underline-offset-4 hover:decoration-mist">
                {SITE_EMAIL}
              </a>
            </div>
          </div>
          <div className="folio relative mx-auto hidden h-64 w-48 overflow-hidden lg:block">
            <Image src={photos.longRoom.src} alt={photos.longRoom.alt} fill sizes="192px" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-stacked-light.svg" alt="Tax Expert Witness" width={606} height={298} className="h-auto w-44" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist/60">
            Independent tax expert witness referrals for tribunals, courts and HMRC disputes in England and Wales.
          </p>
        </div>
        {[
          { h: "Services", links: serviceNavLinks },
          { h: "Dispute types", links: taxDisputeTypeNavLinks },
          { h: "Tribunals", links: tribunalNavLinks },
          { h: "Resources", links: resourceLinks },
        ].map((col) => (
          <div key={col.h}>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-sage">{col.h}</h3>
            <ul className="mt-5 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-mist/10 bg-[#1f2b2b]">
        <div className="page-container flex flex-col gap-3 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-xs text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} TaxExpertWitness.co.uk, England and Wales</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-mist">Privacy</Link>
            <Link href="/cookies" className="hover:text-mist">Cookies</Link>
            <Link href="/terms" className="hover:text-mist">Terms</Link>
            <Link href="/image-credits" className="hover:text-mist">Image credits</Link>
            <span className="footer-cookie">
              <CookieSettingsLink className="transition-colors" />
            </span>
            <PreferredSourceButton theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
