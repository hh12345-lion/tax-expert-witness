"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import type { NavLink } from "@/lib/data/nav";

type Props = {
  label: string;
  href?: string;
  links: NavLink[];
  viewAll?: NavLink;
  onNavigate?: () => void;
  mobile?: boolean;
  align?: "left" | "right";
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function NavDropdown({
  label,
  href,
  links,
  viewAll,
  onNavigate,
  mobile = false,
  align = "left",
  isOpen,
  onOpen,
  onClose,
}: Props) {
  const id = useId();
  const panelId = `${id}-panel`;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobile) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile, isOpen, onClose]);

  if (mobile) {
    return (
      <div>
        <p className="font-label text-primary mb-2">{label}</p>
        <ul className="space-y-1">
          {viewAll && (
            <li>
              <Link
                href={viewAll.href}
                className="block min-h-[44px] flex items-center px-2 text-body font-semibold hover:text-primary transition-colors"
                onClick={onNavigate}
              >
                {viewAll.label}
              </Link>
            </li>
          )}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block min-h-[44px] flex items-center px-2 text-body hover:text-primary transition-colors"
                onClick={onNavigate}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body hover:text-primary transition-colors whitespace-nowrap min-h-[44px] border-b-2 border-transparent hover:border-accent"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="menu"
          className={`absolute top-full z-50 pt-1 ${
            align === "right" ? "right-0 left-auto" : "left-0"
          }`}
        >
          <div className="min-w-[12rem] max-w-[min(20rem,calc(100vw-2rem))] rounded-[var(--radius-card)] border border-border bg-white py-2 shadow-[var(--shadow-card)]">
            {viewAll && (
              <Link
                href={viewAll.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-section-alt transition-colors"
                onClick={onClose}
              >
                {viewAll.label}
              </Link>
            )}
            {viewAll && <div className="my-1 border-t border-border" />}
            <ul className="max-h-[70vh] overflow-y-auto">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm text-body hover:bg-section-alt hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {href && (
              <>
                <div className="my-1 border-t border-border" />
                <Link
                  href={href}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm font-medium text-accent hover:bg-section-alt transition-colors"
                  onClick={onClose}
                >
                  Overview →
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
