"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import {
  serviceNavLinks,
  taxDisputeTypeNavLinks,
  tribunalNavLinks,
  hmrcInvestigationNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";

const DROPDOWN_IDS = {
  services: "services",
  disputeTypes: "dispute-types",
  tribunals: "tribunals",
  hmrc: "hmrc",
  resources: "resources",
} as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  const dropdownProps = (id: string) => ({
    isOpen: openDropdown === id,
    onOpen: () => setOpenDropdown(id),
    onClose: () => setOpenDropdown((current) => (current === id ? null : current)),
  });

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="bg-primary text-white">
        <div className="page-container flex items-stretch gap-0">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3 py-3 sm:py-4 lg:flex-none lg:pr-10"
            onMouseEnter={() => setOpenDropdown(null)}
          >
            <span
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-accent font-heading text-lg font-bold text-white"
              aria-hidden="true"
            >
              T
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-base leading-tight sm:text-lg md:text-xl">
                Tax Expert Witness
              </span>
              <span className="font-label mt-0.5 block text-white/60">
                United Kingdom · taxexpertwitness.co.uk
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center">
            <span className="uk-badge border-white/20 bg-white/10 text-white/90 before:bg-accent">
              UK jurisdictions only
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-white shadow-[var(--shadow-nav)]">
        <div className="page-container flex h-14 items-center justify-between gap-4">
          <nav
            className="hidden xl:flex items-center gap-1 flex-1"
            aria-label="Main navigation"
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-body hover:text-primary transition-colors whitespace-nowrap min-h-[44px] flex items-center border-b-2 border-transparent hover:border-accent"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              href="/services"
              links={serviceNavLinks}
              viewAll={{ label: "All services", href: "/services" }}
              {...dropdownProps(DROPDOWN_IDS.services)}
            />
            <Link
              href="/tax-disputes-explained"
              className="px-3 py-2 text-sm font-medium text-body hover:text-primary transition-colors whitespace-nowrap min-h-[44px] flex items-center border-b-2 border-transparent hover:border-accent"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Tax disputes
            </Link>
            <NavDropdown
              label="Dispute types"
              href="/tax-dispute-types"
              links={taxDisputeTypeNavLinks}
              viewAll={{ label: "All dispute types", href: "/tax-dispute-types" }}
              {...dropdownProps(DROPDOWN_IDS.disputeTypes)}
            />
            <NavDropdown
              label="Tribunals"
              href="/tribunals-courts"
              links={tribunalNavLinks}
              viewAll={{ label: "All tribunals", href: "/tribunals-courts" }}
              {...dropdownProps(DROPDOWN_IDS.tribunals)}
            />
            <NavDropdown
              label="HMRC enquiries"
              href="/hmrc-investigation-types"
              links={hmrcInvestigationNavLinks}
              viewAll={{ label: "All enquiry types", href: "/hmrc-investigation-types" }}
              align="right"
              {...dropdownProps(DROPDOWN_IDS.hmrc)}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              align="right"
              {...dropdownProps(DROPDOWN_IDS.resources)}
            />
          </nav>

          <Link
            href="/contact"
            className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-pill)] bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors shrink-0 ml-auto xl:ml-0"
            onMouseEnter={() => setOpenDropdown(null)}
          >
            Make an enquiry
          </Link>

          <button
            type="button"
            className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-[var(--radius-sm)] border border-border text-primary ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="xl:hidden border-b border-border bg-white max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain animate-slide-down shadow-[var(--shadow-nav)]"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] space-y-6">
            <span className="uk-badge">UK jurisdictions only</span>
            <Link
              href="/"
              className="block min-h-[44px] flex items-center px-2 text-body font-medium hover:text-primary transition-colors border-l-2 border-transparent hover:border-accent"
              onClick={closeMenu}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              links={serviceNavLinks}
              viewAll={{ label: "All services", href: "/services" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/tax-disputes-explained"
              className="block min-h-[44px] flex items-center px-2 text-body font-medium hover:text-primary transition-colors border-l-2 border-transparent hover:border-accent"
              onClick={closeMenu}
            >
              Tax disputes explained
            </Link>
            <NavDropdown
              label="Dispute types"
              links={taxDisputeTypeNavLinks}
              viewAll={{ label: "All dispute types", href: "/tax-dispute-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Tribunals"
              links={tribunalNavLinks}
              viewAll={{ label: "All tribunals", href: "/tribunals-courts" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="HMRC enquiries"
              links={hmrcInvestigationNavLinks}
              viewAll={{ label: "All enquiry types", href: "/hmrc-investigation-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center rounded-[var(--radius-pill)] bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
              onClick={closeMenu}
            >
              Make an enquiry
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
