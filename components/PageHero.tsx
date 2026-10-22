import Link from "next/link";
import type { ReactNode } from "react";
import HeroPhotos from "./HeroPhotos";

type Breadcrumb = { label: string; href?: string };

/** Page opening: heading first, then intro and actions; breadcrumbs and label sit beneath. */
export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  label,
  large = false,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  label?: string;
  large?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-mist">
      <div className={`page-container relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] ${large ? "py-14 lg:py-20" : "py-12 lg:py-16"}`}>
        <div className="min-w-0">
          <h1 className={`max-w-3xl break-words font-heading font-bold leading-[1.08] text-heading ${large ? "text-[2.2rem] sm:text-[2.9rem] lg:text-[3.3rem]" : "text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem]"}`}>
            {title}
          </h1>
          <span className="ledger-rule mt-6 w-12" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {subtitle && <p className="mt-6 max-w-2xl break-words text-lg leading-relaxed text-body">{subtitle}</p>}
          {children}
          {((breadcrumbs && breadcrumbs.length > 0) || label) && (
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {breadcrumbs.map((crumb, i) => (
                      <li key={i} className="flex max-w-full items-center gap-2">
                        {i > 0 && <span aria-hidden="true" className="h-[3px] w-3 bg-accent" />}
                        {crumb.href && i < breadcrumbs.length - 1 ? (
                          <Link href={crumb.href} className="break-words hover:text-accent">
                            {crumb.label}
                          </Link>
                        ) : (
                          <span aria-current={i === breadcrumbs.length - 1 ? "page" : undefined} className="break-words text-heading">
                            {crumb.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {label && <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">{label}</p>}
            </div>
          )}
        </div>
        <HeroPhotos large={large} />
      </div>
    </section>
  );
}
