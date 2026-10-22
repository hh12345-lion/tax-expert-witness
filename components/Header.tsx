"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  hmrcInvestigationNavLinks,
  resourcesNavLinks,
  serviceNavLinks,
  taxDisputeTypeNavLinks,
  tribunalNavLinks,
  type NavLink,
} from "@/lib/data/nav";

type Group = { label: string; href: string; links: NavLink[] };

const groups: Group[] = [
  { label: "Services", href: "/services", links: serviceNavLinks },
  { label: "Dispute types", href: "/tax-dispute-types", links: taxDisputeTypeNavLinks },
  { label: "Tribunals", href: "/tribunals-courts", links: tribunalNavLinks },
  { label: "HMRC enquiries", href: "/hmrc-investigation-types", links: hmrcInvestigationNavLinks },
  { label: "Resources", href: "/guides", links: resourcesNavLinks },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

/** Client only to read the current path; the header is rendered on the server first. */
export default function Header() {
  const pathname = usePathname() || "/";
  const groupOn = (g: Group) => isActive(pathname, g.href) || g.links.some((l) => isActive(pathname, l.href));

  const top =
    "relative inline-flex min-h-[44px] items-center gap-1.5 whitespace-nowrap font-heading text-[0.88rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  /* The current section carries a small teal folio tab beneath it */
  const tab = (on: boolean) =>
    on ? <span aria-hidden="true" className="folio absolute -bottom-[18px] left-1/2 h-3 w-5 -translate-x-1/2 bg-accent" /> : null;

  return (
    <header className="relative z-50 border-b-4 border-accent bg-white pt-[env(safe-area-inset-top)]">
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-hidden="true" tabIndex={-1} />
      <div className="page-container flex items-center justify-between gap-6 py-3.5">
        <Link href="/" aria-label="Tax Expert Witness home" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.svg" alt="Tax Expert Witness" width={749} height={110} className="h-9 w-auto sm:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {groups.map((g) => {
            const on = groupOn(g);
            return (
              <div key={g.label} className="nav-item relative">
                <Link href={g.href} aria-current={pathname === g.href ? "page" : undefined} className={`${top} ${on ? "text-accent" : "text-primary hover:text-accent"}`}>
                  {g.label}
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {tab(on)}
                </Link>
                <div className="nav-panel absolute left-0 top-full z-50 w-80 pt-4 transition duration-150">
                  <div className="border border-border border-t-4 border-t-accent bg-white shadow-xl">
                    <ul className="py-2">
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            aria-current={pathname === l.href ? "page" : undefined}
                            className={`block px-5 py-2.5 text-sm transition-colors hover:bg-mist focus-visible:bg-mist focus-visible:outline-none ${
                              pathname === l.href ? "font-semibold text-accent" : "text-body"
                            }`}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={g.href} className="block border-t border-border bg-mist px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent hover:text-primary">
                      All {g.label.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`hidden min-h-[44px] items-center whitespace-nowrap px-5 font-heading text-sm font-bold transition sm:inline-flex ${
              pathname === "/contact" ? "bg-accent text-white" : "bg-peach text-primary hover:bg-accent hover:text-white"
            }`}
          >
            Find an expert
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-border text-primary xl:hidden"
            aria-label="Open or close the menu"
          >
            <span className="menu-icon flex flex-col gap-[5px]">
              <span />
              <span />
              <span />
            </span>
          </label>
        </div>
      </div>

      <div className="hidden max-h-[calc(100vh-80px)] overflow-y-auto border-t border-border bg-white peer-checked:block xl:!hidden">
        <nav aria-label="Mobile" className="page-container pb-8 pt-2">
          {groups.map((g) => (
            <details key={g.label} className="fold border-b border-border" open={groupOn(g)}>
              <summary className={`flex min-h-[52px] cursor-pointer items-center justify-between font-heading text-lg font-bold ${groupOn(g) ? "text-accent" : "text-primary"}`}>
                {g.label}
                <span className="fold-mark text-2xl font-light leading-none text-accent transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <ul className="pb-4">
                <li>
                  <Link href={g.href} aria-current={pathname === g.href ? "page" : undefined} className="block py-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-accent">
                    All {g.label.toLowerCase()}
                  </Link>
                </li>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={pathname === l.href ? "page" : undefined} className={`block py-2 ${pathname === l.href ? "font-semibold text-accent" : "text-body"}`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <Link href="/contact" className="mt-6 flex min-h-[48px] items-center justify-center bg-peach font-heading text-sm font-bold text-primary">
            Find an expert
          </Link>
        </nav>
      </div>
    </header>
  );
}
