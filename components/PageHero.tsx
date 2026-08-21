import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="hero-band py-10 sm:py-14 md:py-18 relative">
      <div className="page-container relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-white/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1 max-w-full">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition-colors break-words"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70 break-words">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight break-words max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/75 leading-relaxed break-words">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
