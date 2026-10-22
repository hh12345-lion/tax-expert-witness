import type { FAQ } from "@/lib/schema";

export const faqItems: FAQ[] = [
  {
    question: "What is a tax expert witness?",
    answer:
      "A tax expert witness is a qualified tax specialist, typically a Chartered Tax Adviser (CTA) or senior tax practitioner, retained to provide an independent expert opinion on technical tax questions in legal proceedings. Unlike a forensic accountant who focuses on financial numbers, a tax expert witness focuses on whether the correct tax analysis was applied, whether HMRC's methodology is correct, and what the correct tax position should be.",
  },
  {
    question: "How is a tax expert witness different from a forensic accountant?",
    answer:
      "A forensic accountant answers 'what are the financial numbers?', quantifying losses, valuing businesses, and investigating fraud. A tax expert witness answers 'is the tax analysis correct?', challenging HMRC assessments, advising on correct tax treatment, and giving evidence at FTT and Upper Tribunal proceedings. In complex HMRC investigations, both disciplines are often needed together.",
  },
  {
    question: "When is a tax expert witness needed at the First-tier Tribunal?",
    answer:
      "Expert evidence is needed at the FTT where a technical accounting or valuation question requires specialist evidence beyond the parties' own accounts, HMRC's reconstruction methodology is challenged, or a valuation (business, shares, property) is central to the tax liability. FTT cases typically take 2 to 3 years from appeal to hearing, making early instruction essential.",
  },
  {
    question: "What is COP8 and when is expert evidence needed?",
    answer:
      "COP8 (Code of Practice 8) is HMRC's civil investigation of fraud procedure, used where HMRC suspects serious tax fraud but proposes a civil settlement. Expert witnesses review HMRC's financial reconstruction, challenge methodology where incorrect, and produce independent technical analysis of the correct tax position before settlement negotiations.",
  },
  {
    question: "What is COP9 and how does an expert help?",
    answer:
      "COP9 (Code of Practice 9) is HMRC's most serious civil investigation, the Contractual Disclosure Facility. HMRC offers civil settlement in exchange for full disclosure of deliberate tax fraud. Tax expert witnesses review financial records before disclosure, challenge HMRC methodology, and ensure the disclosure accurately reflects the correct tax position.",
  },
  {
    question: "How do tax expert witnesses challenge HMRC's methodology?",
    answer:
      "Tax expert witnesses identify where HMRC's reconstruction relies on flawed data, ignores actual circumstances, or fails to apply HMRC's own approved methods. In one case, independent review reduced HMRC's alleged undeclared income from £600,000 to £100,000 by demonstrating methodology failures in the original reconstruction.",
  },
  {
    question: "What are the main types of tax dispute requiring expert evidence?",
    answer:
      "The main types include VAT MTIC fraud and input tax denial, transfer pricing disputes, employment-related securities valuation, SDLT planning challenges, IHT business property relief, CGT share disposal valuation, corporate tax avoidance schemes, tax professional negligence, POCA tax fraud proceedings, and HMRC business records reconstruction.",
  },
  {
    question: "What credentials should a UK tax expert witness hold?",
    answer:
      "A UK tax expert witness should typically hold CTA (Chartered Tax Adviser) or ACA/FCA with tax specialisation, have active tax practice experience, FTT or Upper Tribunal testimony history, CPR Part 35 expert report experience, and professional indemnity insurance. VAT and transfer pricing disputes may require additional specialist credentials.",
  },
  {
    question: "How much does a tax expert witness cost?",
    answer:
      "UK tax expert witnesses typically charge £250 to £600/hour depending on seniority. Report costs range from £5,000 to £20,000 for standard FTT technical opinions to £15,000 to £50,000+ for complex track or Upper Tribunal reports. Transfer pricing reports can cost £20,000 to £100,000+ given the economic analysis required.",
  },
  {
    question: "How early should I instruct a tax expert witness?",
    answer:
      "As early as possible. FTT cases typically take 2 to 3 years from notice of appeal to hearing. Early instruction allows adequate time for document review, analysis, report preparation, and response to written questions. For COP9 investigations, expert review before disclosure is particularly critical.",
  },
  {
    question: "Can a tax expert and forensic accountant work together?",
    answer:
      "Yes, and this is frequently the most effective approach in complex cases. The forensic accountant addresses the financial numbers; the tax expert addresses the technical tax analysis. Together they provide comprehensive expert evidence for HMRC investigations, POCA proceedings, and FTT appeals.",
  },
  {
    question: "What is CPR Part 35 and how does it apply to FTT?",
    answer:
      "CPR Part 35 governs expert evidence in civil proceedings including FTT tax appeals. The expert must include a summary of material instructions, comply with independence requirements under CPR Part 35.10, and provide a statement of truth. The expert's duty is to the tribunal, not the instructing party.",
  },
];
