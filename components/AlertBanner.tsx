import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="bg-accent-soft border-b border-accent/20">
      <div className="page-container py-3">
        <p className="text-sm md:text-base text-body leading-relaxed break-words">
          <span className="font-semibold text-accent mr-1">HMRC enforcement update:</span>
          Transfer pricing yield rising sharply. COP9 methodology under judicial scrutiny (HMRC v Harte [2026]).
          MTIC VAT assessments contested. Expert evidence increasingly decisive at the First-tier Tribunal.{" "}
          <Link
            href="/guides/hmrc-enforcement-update-2025"
            className="font-semibold text-accent underline hover:text-primary transition-colors"
          >
            Read the update →
          </Link>
        </p>
      </div>
    </div>
  );
}
