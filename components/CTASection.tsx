import Link from "next/link";

export default function CTASection({
  title = "Instruct a tax expert witness",
  description = "Tell us about your UK tax dispute and we will match you with a qualified expert witness experienced in HMRC enquiries and tribunal proceedings.",
  buttonText = "Make an enquiry",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="border-t border-border bg-mist py-14 md:py-16">
      <div className="page-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-5">
          <span className="ledger-rule mt-2 w-10 shrink-0" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <div>
            <h2 className="break-words font-heading text-2xl font-bold text-heading md:text-3xl">{title}</h2>
            <p className="mt-3 max-w-2xl break-words text-base leading-relaxed text-body sm:text-lg">{description}</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center bg-accent px-8 font-heading text-sm font-bold text-white transition-colors hover:bg-primary"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
