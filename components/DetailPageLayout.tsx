import Link from "next/link";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import type { FAQ } from "@/lib/schema";
import type { ContentTable } from "@/lib/data/tax-dispute-types";

type Breadcrumb = { label: string; href?: string };

export default function DetailPageLayout({
  title,
  breadcrumbs,
  paragraphs,
  faqs,
  tables,
  relatedLinks,
}: {
  title: string;
  breadcrumbs: Breadcrumb[];
  paragraphs: string[];
  faqs: FAQ[];
  tables?: ContentTable[];
  relatedLinks?: { label: string; href: string; type: string }[];
}) {
  return (
    <>
      <PageHero title={title} breadcrumbs={breadcrumbs} />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <div className="max-w-3xl min-w-0">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {tables && tables.length > 0 && (
            <div className="mt-10 max-w-3xl space-y-8">
              {tables.map((table) => (
                <div key={table.title}>
                  <h2 className="text-xl font-bold text-heading mb-4">{table.title}</h2>
                  <div className="table-scroll rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]">
                    <table className="w-full text-sm min-w-[32rem]">
                      <thead>
                        <tr className="bg-primary text-white">
                          {table.headers.map((header) => (
                            <th key={header} className="px-4 py-3 text-left font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "bg-white" : "bg-section-alt"}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-4 py-3 text-body border-t border-border"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] hover:border-accent transition-colors min-h-[44px]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    {link.type}
                  </p>
                  <p className="font-semibold text-heading">{link.label}</p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-heading mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      <CTASection buttonText="Make an enquiry" />
    </>
  );
}
