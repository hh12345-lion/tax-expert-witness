import Link from "next/link";

export default function CTASection({
  title = "Instruct a tax expert witness",
  description = "Tell us about your UK tax dispute and we will match you with a qualified expert witness experienced in HMRC enquiries and tribunal proceedings. We aim to respond within one working day.",
  buttonText = "Make an enquiry",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="bg-primary py-14 md:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 24px)",
        }}
      />
      <div className="page-container text-center relative z-10">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-white break-words px-2 sm:px-0">
          {title}
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-white/75 text-base sm:text-lg leading-relaxed break-words px-2 sm:px-0">
          {description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full max-w-xs sm:w-auto sm:max-w-none items-center justify-center rounded-[var(--radius-pill)] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
