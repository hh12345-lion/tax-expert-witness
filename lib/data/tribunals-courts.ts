import type { FAQ } from "@/lib/schema";

export type TribunalCourt = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedDispute?: { label: string; href: string };
  relatedService: { label: string; href: string };
};

export const tribunalsCourts: TribunalCourt[] = [
  {
    slug: "first-tier-tribunal-tax",
    title: "First-tier Tribunal (Tax): Expert Witness Guide UK",
    shortTitle: "First-tier Tribunal (Tax)",
    metaTitle: "First-tier Tribunal (Tax) Expert Witness Guide UK | FTT Procedure",
    metaDescription:
      "Guide to UK First-tier Tribunal (Tax) proceedings for solicitors, FTT jurisdiction, expert evidence rules, CPR Part 35, and 2 to 3 year timelines.",
    paragraphs: [
      "The First-tier Tribunal (Tax Chamber) handles appeals against HMRC decisions on income tax, PAYE, corporation tax, CGT, NIC, IHT, VAT, excise duty, and customs duty. The FTT process requires careful gathering and organisation of documentary evidence including invoices, contracts, emails, accounting records, and due diligence materials, with witness evidence explaining decisions taken and expert evidence addressing technical tax questions.",
      "From filing notice of appeal to FTT hearing typically takes 2 to 3 years given current caseload and availability of counsel, making early instruction of expert witnesses essential to allow adequate preparation time. The FTT deals with cases according to complexity in paper, basic, standard, and complex tracks, with expert evidence most common in standard and complex track cases.",
      "Expert evidence in FTT proceedings is governed by CPR Part 35, the expert must include a summary of material instructions and the report must meet the independence and objectivity requirements of CPR Part 35.10. The expert's duty is to the tribunal, not the instructing party.",
    ],
    faqs: [
      {
        question: "How long does an FTT case typically take?",
        answer:
          "From filing notice of appeal to the FTT hearing typically takes 2 to 3 years given the current caseload and availability of counsel, making early instruction of expert witnesses essential.",
      },
      {
        question: "What categories of case does the FTT hear?",
        answer:
          "The FTT Tax Chamber handles a wide range of cases from very simple to extremely complicated matters, with arrangements to deal with cases according to their complexity in paper, basic, standard, and complex tracks. Expert evidence is most common in standard and complex track cases.",
      },
    ],
    relatedDispute: { label: "Tax Disputes Explained", href: "/tax-disputes-explained" },
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
  {
    slug: "upper-tribunal-tax",
    title: "Upper Tribunal (Tax): Expert Witness Guide UK",
    shortTitle: "Upper Tribunal (Tax)",
    metaTitle: "Upper Tribunal (Tax) Expert Witness Guide UK | Appeals on Points of Law",
    metaDescription:
      "Guide to UK Upper Tribunal tax appeals for solicitors, permission to appeal, points of law, HMRC v Harte [2026], and expert evidence.",
    paragraphs: [
      "The Upper Tribunal hears appeals from the First-tier Tribunal on points of law, not fresh evidence. Permission to appeal is sought first from the FTT and is almost always granted. Expert evidence at the Upper Tribunal level is typically limited to matters where new expert analysis is specifically permitted by the tribunal.",
      "The Upper Tribunal also exercises a judicial review function in certain tax matters. Landmark decisions such as HMRC v Harte [2026] UKUT have drawn sharp judicial criticism of HMRC's procedural approach, in that case, the Upper Tribunal upheld the FTT's finding that HMRC had incorrectly applied extended time limits in relation to a discovery assessment.",
      "This highlights the importance of challenging HMRC's procedural decisions as well as the substantive tax analysis. Tax expert witnesses must be familiar with relevant appellate decisions and how they apply to the specific facts of each case.",
    ],
    faqs: [
      {
        question: "Can you appeal an FTT decision to the Upper Tribunal?",
        answer:
          "Permission to appeal to the Upper Tribunal is sought first from the FTT, and is almost always granted. The Upper Tribunal hears appeals on points of law, not fresh evidence, so expert evidence at the Upper Tribunal level is typically limited to matters where new expert analysis is specifically permitted.",
      },
      {
        question: "What is the significance of HMRC v Harte [2026] for tax investigations?",
        answer:
          "In HMRC v Harte [2026] UKUT, the Upper Tribunal upheld the FTT's finding that HMRC had incorrectly applied extended time limits in relation to a discovery assessment, drawing sharp judicial criticism of HMRC's approach. This highlights the importance of challenging HMRC's procedural decisions as well as the substantive tax analysis.",
      },
    ],
    relatedDispute: { label: "Tax Disputes Explained", href: "/tax-disputes-explained" },
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
  {
    slug: "court-of-appeal-tax",
    title: "Court of Appeal & Supreme Court Tax Cases UK",
    shortTitle: "Court of Appeal & Supreme Court",
    metaTitle: "Court of Appeal & Supreme Court Tax Cases UK | Appellate Guide",
    metaDescription:
      "Guide to UK Court of Appeal and Supreme Court tax proceedings, points of law appeals, binding precedent, and expert evidence limitations.",
    paragraphs: [
      "The Court of Appeal hears further appeals from the Upper Tribunal on points of law, with permission required. Three further appeals may be possible beyond the FTT, with the Supreme Court as the final instance in the most significant cases. Expert evidence is rarely introduced at this stage, the focus is on legal argument, not fresh factual or expert evidence.",
      "Court of Appeal and Supreme Court decisions establish binding precedent, affecting thousands of similar cases below. Tax expert witnesses working on lower-level disputes must be familiar with relevant appellate decisions and how they apply to the specific facts of each case.",
      "Landmark tax cases at appellate level, covering areas from GAAR application to transfer pricing methodology, shape the expert evidence requirements and analytical frameworks used in FTT and Upper Tribunal proceedings throughout the UK tax disputes system.",
    ],
    faqs: [
      {
        question: "When does a tax case reach the Court of Appeal?",
        answer:
          "The Court of Appeal hears further appeals from the Upper Tribunal on points of law, with permission required. Three further appeals may be possible beyond the FTT, with the Supreme Court as the final instance in the most significant cases. Expert evidence is rarely introduced at this stage, the focus is on legal argument, not fresh factual or expert evidence.",
      },
      {
        question: "How do Court of Appeal tax decisions affect lower-level disputes?",
        answer:
          "Court of Appeal and Supreme Court decisions establish binding precedent, affecting thousands of similar cases below. Tax expert witnesses must be familiar with relevant appellate decisions and how they apply to the specific facts of each case.",
      },
    ],
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
  {
    slug: "alternative-dispute-resolution-hmrc",
    title: "HMRC Alternative Dispute Resolution: Expert Witness Support UK",
    shortTitle: "HMRC ADR",
    metaTitle: "HMRC Alternative Dispute Resolution Expert Witness Support UK",
    metaDescription:
      "Guide to HMRC ADR for tax disputes, mediation, internal review, and the role of tax expert witnesses in pre-tribunal resolution.",
    paragraphs: [
      "HMRC's Alternative Dispute Resolution (ADR) process can prove a useful springboard into non-litigation routes to resolution. It is often worth fully engaging with the HMRC internal review process even where the initial decision appears adverse, as this can sometimes resolve the dispute without tribunal proceedings.",
      "In HMRC ADR, the tax expert witness can provide a preliminary technical opinion that informs the ADR position, establishing the strength of the taxpayer's case before committing to the FTT route. This also helps in quantifying the exposure and informing settlement negotiations.",
      "Early expert instruction before ADR ensures the technical tax analysis is robust and can be deployed effectively in mediation. Where ADR does not resolve the dispute, the expert's preliminary analysis forms the foundation for the FTT expert report.",
    ],
    faqs: [
      {
        question: "Can ADR resolve a tax dispute before FTT?",
        answer:
          "HMRC's ADR process can prove a useful springboard into non-litigation routes to resolution. It is often worth fully engaging with the HMRC internal review process even where the initial decision appears adverse, as this can sometimes resolve the dispute without tribunal proceedings.",
      },
      {
        question: "What is the expert's role in HMRC ADR?",
        answer:
          "In HMRC ADR, the tax expert witness can provide a preliminary technical opinion that informs the ADR position, establishing the strength of the taxpayer's case before committing to the FTT route. This also helps in quantifying the exposure and informing settlement negotiations.",
      },
    ],
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
];

export function getTribunalCourt(slug: string) {
  return tribunalsCourts.find((t) => t.slug === slug);
}
