import type { FAQ } from "@/lib/schema";

export type HmrcInvestigation = {
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

export const hmrcInvestigations: HmrcInvestigation[] = [
  {
    slug: "code-of-practice-8-cop8",
    title: "Code of Practice 8 (COP8): Tax Expert Witness Support UK",
    shortTitle: "Code of Practice 8 (COP8)",
    metaTitle: "Code of Practice 8 (COP8) Tax Expert Witness Support UK",
    metaDescription:
      "Expert witness support for UK COP8 civil fraud investigations, methodology review, forensic reconstruction challenge, and settlement negotiation.",
    paragraphs: [
      "COP8 (Code of Practice 8) is HMRC's civil investigation of fraud procedure, used where HMRC suspects serious tax fraud but proposes a civil rather than criminal settlement. Expert witnesses review HMRC's financial reconstruction, challenge the methodology where incorrect, and produce independent technical analysis of the correct tax position.",
      "A standard HMRC enquiry under s9A TMA 1970 is an enquiry into a tax return, triggered randomly or by a risk factor. COP8 is specifically for suspected fraud, it carries greater gravity, HMRC has wider powers, and the resolution process typically involves a detailed disclosure and negotiated settlement of the underpaid tax.",
      "Early expert instruction in COP8 investigations allows the taxpayer's advisers to understand the strength of HMRC's reconstruction before engaging in settlement negotiations, and to challenge methodology failures that could significantly reduce the settlement figure.",
    ],
    faqs: [
      {
        question: "What is COP8 and when is expert evidence needed?",
        answer:
          "COP8 (Code of Practice 8) is HMRC's civil investigation of fraud procedure, used where HMRC suspects serious tax fraud but proposes a civil rather than criminal settlement. Expert witnesses review HMRC's financial reconstruction, challenge the methodology where incorrect, and produce independent technical analysis of the correct tax position.",
      },
      {
        question: "How does COP8 differ from a standard HMRC enquiry?",
        answer:
          "A standard HMRC enquiry under s9A TMA 1970 is an enquiry into a tax return, triggered randomly or by a risk factor. COP8 is specifically for suspected fraud, it carries greater gravity, HMRC has wider powers, and the resolution process typically involves a detailed disclosure and negotiated settlement of the underpaid tax.",
      },
    ],
    relatedDispute: { label: "HMRC Business Records Reconstruction", href: "/tax-dispute-types/hmrc-business-records-reconstruction" },
    relatedService: { label: "COP8 / COP9 Expert Support", href: "/services/cop8-cop9-support" },
  },
  {
    slug: "code-of-practice-9-cop9",
    title: "Code of Practice 9 (COP9): Tax Expert Witness Support UK",
    shortTitle: "Code of Practice 9 (COP9)",
    metaTitle: "Code of Practice 9 (COP9) Tax Expert Witness Support UK | CDF",
    metaDescription:
      "Expert witness support for UK COP9 investigations, Contractual Disclosure Facility, full disclosure review, and 2025 to 2026 methodology debate.",
    paragraphs: [
      "COP9 (Code of Practice 9) is HMRC's most serious civil investigation procedure, the Contractual Disclosure Facility (CDF). HMRC offers the taxpayer civil settlement in exchange for full disclosure of all deliberate tax fraud. Refusal leads to criminal investigation. Tax expert witnesses assist by reviewing the financial records before disclosure, ensuring the disclosure is complete and accurate.",
      "There is increasing debate in the tax disputes community about whether HMRC is shifting its approach to COP9 investigations in 2025 to 2026, with some practitioners observing changes in how HMRC is applying the process and considering whether the criminal route is more appropriate in certain cases.",
      "Independent forensic review before COP9 disclosure is essential. The tax expert witness reviews HMRC's preliminary reconstruction, challenges methodology where appropriate, and ensures the taxpayer's disclosure accurately reflects the correct tax position, protecting against both under-disclosure and over-disclosure.",
    ],
    faqs: [
      {
        question: "What is COP9 and what does it require?",
        answer:
          "COP9 (Code of Practice 9) is HMRC's most serious civil investigation procedure, the Contractual Disclosure Facility (CDF). HMRC offers the taxpayer civil settlement in exchange for full disclosure of all deliberate tax fraud. Refusal leads to criminal investigation. Tax expert witnesses assist by reviewing the financial records before disclosure, ensuring the disclosure is complete and accurate.",
      },
      {
        question: "Is HMRC shifting its COP9 approach in 2025 to 2026?",
        answer:
          "There is increasing debate in the tax disputes community about whether HMRC is shifting its approach to COP9 investigations, with some practitioners observing changes in how HMRC is applying the process and considering whether the criminal route is more appropriate in certain cases. Expert witnesses with COP9 experience can assist in navigating this evolving landscape.",
      },
    ],
    relatedDispute: { label: "POCA Tax Fraud Proceedings", href: "/tax-dispute-types/poca-tax-fraud-proceedings" },
    relatedService: { label: "COP8 / COP9 Expert Support", href: "/services/cop8-cop9-support" },
  },
  {
    slug: "mtic-vat-fraud-investigation",
    title: "MTIC VAT Fraud Investigation: Tax Expert Witness UK",
    shortTitle: "MTIC VAT Fraud Investigation",
    metaTitle: "MTIC VAT Fraud Investigation Tax Expert Witness UK",
    metaDescription:
      "Expert witness support for UK MTIC VAT fraud investigations, input tax denial, knowledge test evidence, and due diligence review.",
    paragraphs: [
      "MTIC VAT fraud investigations involve HMRC tracing transaction chains to identify businesses connected to missing trader fraud and denying input tax where the knowledge test is met. The investigation procedure involves extensive document requests, transaction tracing, and assessment of the taxpayer's due diligence procedures.",
      "Tax expert witnesses analyse the due diligence conducted by the taxpayer, assess red flags in the transaction chain, and determine whether the knowledge test under Mobilx v HMRC [2010] is satisfied. Expert evidence on the knowledge test has achieved significant successes, including cancellation of VAT assessments exceeding £1.3 million.",
      "Early expert instruction during the investigation phase, before assessments are finalised, can inform representations that prevent assessments being raised or reduce their scope. Where assessments have been raised, expert evidence is essential for FTT appeal proceedings.",
    ],
    faqs: [
      {
        question: "What happens during an MTIC VAT fraud investigation?",
        answer:
          "HMRC traces transaction chains to identify businesses connected to missing trader fraud. The investigation involves document requests, transaction tracing, and assessment of due diligence procedures. Input tax is denied where HMRC can demonstrate actual or constructive knowledge of the fraud connection under the Mobilx v HMRC [2010] knowledge test.",
      },
      {
        question: "How does expert evidence help during an MTIC investigation?",
        answer:
          "The tax expert analyses due diligence conducted, red flags in the transaction chain, and whether the knowledge test is met. Early expert instruction can inform representations before assessments are finalised. Expert evidence combined with strong written representations has resulted in HMRC cancelling assessments and penalties entirely.",
      },
    ],
    relatedDispute: { label: "VAT MTIC Fraud Disputes", href: "/tax-dispute-types/vat-mtic-fraud-disputes" },
    relatedService: { label: "VAT Dispute Expert Evidence", href: "/services/vat-dispute-evidence" },
  },
  {
    slug: "transfer-pricing-enquiry",
    title: "HMRC Transfer Pricing Enquiry: Tax Expert Witness UK",
    shortTitle: "Transfer Pricing Enquiry",
    metaTitle: "HMRC Transfer Pricing Enquiry Tax Expert Witness UK",
    metaDescription:
      "Expert witness support for UK HMRC transfer pricing enquiries, documentation review, arm's length analysis, and 2025 enforcement.",
    paragraphs: [
      "HMRC transfer pricing enquiries investigate whether transactions between connected parties were priced at arm's length. The enquiry procedure involves requests for transfer pricing documentation, functional analysis, and comparables data. HMRC's transfer pricing yield increased dramatically in 2025 through more sophisticated enforcement and broader transaction targeting.",
      "Tax expert witnesses review the transfer pricing documentation, assess the method selection and comparables analysis, and produce independent arm's length opinions. Where HMRC proposes adjustments, the expert can challenge the methodology and produce counter-analysis supporting the taxpayer's original pricing.",
      "Advance Pricing Agreements (APAs) can provide certainty for future transactions, but disputes over historical pricing remain common. Expert evidence on arm's length pricing is the primary tool for challenging HMRC adjustments in both enquiry settlement and FTT proceedings.",
    ],
    faqs: [
      {
        question: "What does an HMRC transfer pricing enquiry involve?",
        answer:
          "HMRC requests transfer pricing documentation, functional analysis, and comparables data to assess whether related-party transactions were priced at arm's length. Where adjustments are proposed, the taxpayer must demonstrate the original pricing was correct or negotiate a settlement based on revised analysis.",
      },
      {
        question: "Why is expert evidence critical in transfer pricing enquiries?",
        answer:
          "With HMRC's transfer pricing enforcement increasing significantly in 2025, independent expert evidence on arm's length pricing is essential. The expert reviews method selection, comparables, and functional analysis, producing counter-opinions that challenge HMRC adjustments and support settlement negotiations or FTT proceedings.",
      },
    ],
    relatedDispute: { label: "Transfer Pricing Disputes", href: "/tax-dispute-types/transfer-pricing-disputes" },
    relatedService: { label: "Transfer Pricing Expert Evidence", href: "/services/transfer-pricing-evidence" },
  },
  {
    slug: "hmrc-criminal-investigation",
    title: "HMRC Criminal Investigation: Tax Expert Witness UK",
    shortTitle: "HMRC Criminal Investigation",
    metaTitle: "HMRC Criminal Investigation Tax Expert Witness UK | CrPR Part 33",
    metaDescription:
      "Expert witness support for UK HMRC criminal tax investigations, Fraud Investigation Service, CrPR Part 33 reports, and POCA proceedings.",
    paragraphs: [
      "HMRC pursues criminal investigation where the alleged fraud is serious, there is strong evidence, and prosecution is in the public interest, typically involving deliberate, substantial tax evasion. The HMRC Fraud Investigation Service leads criminal investigations, with tax expert witnesses producing CrPR Part 33 compliant expert reports challenging the prosecution's financial reconstruction.",
      "Tax expert witnesses in criminal tax cases work alongside forensic accountants, the forensic accountant addresses the financial numbers while the tax expert addresses the technical tax analysis. This complementary approach is frequently the most effective strategy in complex criminal tax proceedings.",
      "POCA proceedings often run alongside or following criminal tax prosecution, with the benefit calculation relying on the same forensic reconstruction. Expert challenge of HMRC methodology at the criminal stage can also inform POCA benefit arguments.",
    ],
    faqs: [
      {
        question: "When does HMRC pursue criminal investigation rather than civil?",
        answer:
          "HMRC pursues criminal investigation where the alleged fraud is serious, there is strong evidence, and prosecution is in the public interest, typically involving deliberate, substantial tax evasion. Tax expert witnesses in criminal tax cases produce CrPR Part 33 compliant expert reports challenging the prosecution's financial reconstruction.",
      },
      {
        question: "Can a tax expert witness work alongside a forensic accountant in criminal tax proceedings?",
        answer:
          "Yes, and this is frequently the most effective approach. The forensic accountant addresses the financial numbers (the amount of tax evaded based on financial records); the tax expert addresses the technical tax analysis (whether the HMRC assessment of the correct tax position is correct). The two disciplines complement each other.",
      },
    ],
    relatedDispute: { label: "POCA Tax Fraud Proceedings", href: "/tax-dispute-types/poca-tax-fraud-proceedings" },
    relatedService: { label: "HMRC Methodology Challenge", href: "/services/hmrc-methodology-challenge" },
  },
];

export function getHmrcInvestigation(slug: string) {
  return hmrcInvestigations.find((h) => h.slug === slug);
}
