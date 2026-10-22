import type { FAQ } from "@/lib/schema";

export type ContentTable = {
  title: string;
  headers: string[];
  rows: string[][];
};

export type TaxDisputeType = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  tables?: ContentTable[];
  relatedTribunal?: { label: string; href: string };
  relatedInvestigation?: { label: string; href: string };
  relatedService: { label: string; href: string };
};

export const taxDisputeTypes: TaxDisputeType[] = [
  {
    slug: "vat-mtic-fraud-disputes",
    title: "VAT MTIC Fraud Expert Witness UK",
    shortTitle: "VAT MTIC Fraud",
    metaTitle: "VAT MTIC Fraud Expert Witness UK | Input Tax Disputes",
    metaDescription:
      "Expert witness evidence for UK VAT MTIC fraud disputes, knowledge test analysis, input tax denial challenges, and Mobilx v HMRC principles.",
    paragraphs: [
      "Missing Trader Intra-Community (MTIC) fraud is one of the most complex areas of UK VAT dispute. HMRC denies input tax to businesses connected to fraudulent VAT chains, even innocent traders, where it can demonstrate actual or constructive knowledge of the fraud connection. The knowledge test, established in Mobilx Ltd v HMRC [2010], requires HMRC to prove that the taxpayer knew or should have known that its transactions were connected to MTIC fraud.",
      "Tax expert witnesses play a decisive role in MTIC disputes by analysing the due diligence conducted by the appellant, assessing red flags present in the transaction chain, and determining whether the knowledge test is met on the facts. Robust expert evidence on the knowledge test, combined with strong written representations, has resulted in HMRC cancelling VAT assessments and penalties entirely, including cases involving assessments exceeding £1.3 million.",
      "Recent MTIC enforcement has seen HMRC issuing substantial input tax denial assessments, but expert challenge of HMRC's position on the knowledge test and transaction analysis has achieved significant successes. Early instruction of a VAT specialist tax expert witness is essential to build the evidential foundation before FTT proceedings.",
    ],
    faqs: [
      {
        question: "What is MTIC fraud and how does it affect VAT input tax claims?",
        answer:
          "Missing Trader Intra-Community (MTIC) fraud involves a chain of transactions where a missing trader (a VAT-registered entity that collects VAT but disappears without paying it) creates a fraudulent VAT loss. HMRC can deny input tax to businesses connected to MTIC fraud chains, even innocent parties, if it can show actual or constructive knowledge of the fraud connection.",
      },
      {
        question: "How does a tax expert witness challenge HMRC's MTIC position?",
        answer:
          "The tax expert analyses the due diligence conducted by the appellant, the red flags present in the transaction chain, and whether the knowledge test under Mobilx v HMRC [2010] is met. Robust expert evidence on the knowledge test, combined with strong written representations, can result in HMRC cancelling assessments and penalties entirely.",
      },
    ],
    relatedTribunal: { label: "First-tier Tribunal (Tax)", href: "/tribunals-courts/first-tier-tribunal-tax" },
    relatedInvestigation: { label: "MTIC VAT Fraud Investigation", href: "/hmrc-investigation-types/mtic-vat-fraud-investigation" },
    relatedService: { label: "VAT Dispute Expert Evidence", href: "/services/vat-dispute-evidence" },
  },
  {
    slug: "transfer-pricing-disputes",
    title: "Transfer Pricing Expert Witness UK",
    shortTitle: "Transfer Pricing",
    metaTitle: "Transfer Pricing Expert Witness UK | Arm's Length Disputes",
    metaDescription:
      "UK transfer pricing expert witness evidence for HMRC arm's length disputes, OECD methods, comparables analysis, and 2025 enforcement challenges.",
    paragraphs: [
      "Transfer pricing disputes arise when HMRC challenges the pricing of transactions between connected parties, arguing that prices were not at arm's length and adjusting taxable profits accordingly. The arm's length principle, enshrined in UK law and the OECD Transfer Pricing Guidelines, requires that related-party transactions be priced as if the parties were independent.",
      "Tax expert witnesses provide independent analysis of comparable uncontrolled transactions (CUTs), profit level indicators, and the most appropriate transfer pricing method for the specific transaction type. With HMRC's transfer pricing yield increasing dramatically in 2025 through more sophisticated enforcement and broader targeting of transactions, independent expert evidence on arm's length pricing is more important than ever.",
      "Transfer pricing expert reports typically address method selection (CUP, Resale Price, Cost Plus, TNMM), comparables identification and adjustment, functional analysis, and OECD BEPS compliance. Reports for complex international group structures can require extensive economic analysis and are a significant investment, but essential where disputed adjustments run into millions.",
    ],
    faqs: [
      {
        question: "What transfer pricing methods do expert witnesses use?",
        answer:
          "Transfer pricing expert witnesses apply OECD-approved methods, typically the Comparable Uncontrolled Price (CUP) method for commodity transactions, the Resale Price or Cost Plus methods for distribution and manufacturing, and the Transactional Net Margin Method (TNMM) for complex arrangements. The expert identifies the most appropriate method for the specific transaction type and justifies the comparables selected.",
      },
      {
        question: "Why has HMRC's transfer pricing yield increased in 2025?",
        answer:
          "HMRC has significantly increased its transfer pricing enforcement activity in 2025, deploying more sophisticated analytical tools and targeting a broader range of transactions, making independent expert evidence on arm's length pricing more important than ever for large and mid-size international groups.",
      },
    ],
    relatedInvestigation: { label: "Transfer Pricing Enquiry", href: "/hmrc-investigation-types/transfer-pricing-enquiry" },
    relatedService: { label: "Transfer Pricing Expert Evidence", href: "/services/transfer-pricing-evidence" },
    tables: [
      {
        title: "OECD Transfer Pricing Methods",
        headers: ["Method", "Best For", "Expert Focus"],
        rows: [
          ["Comparable Uncontrolled Price (CUP)", "Commodity and standardised transactions", "Direct price comparables"],
          ["Resale Price Method", "Distribution and resale activities", "Gross margin benchmarks"],
          ["Cost Plus Method", "Manufacturing and contract services", "Markup on costs"],
          ["Transactional Net Margin Method (TNMM)", "Complex arrangements without close comparables", "Net profit indicators"],
        ],
      },
    ],
  },
  {
    slug: "employment-related-securities",
    title: "Employment Related Securities Expert Witness UK",
    shortTitle: "Employment Related Securities",
    metaTitle: "Employment Related Securities Expert Witness UK | ERS Disputes",
    metaDescription:
      "Expert witness evidence for UK employment related securities disputes, ITEPA 2003, growth shares, EMI options, and s431 election valuation.",
    paragraphs: [
      "Employment Related Securities (ERS) disputes under ITEPA 2003 arise where HMRC challenges the valuation placed on shares or options at grant, vesting, or exercise. These disputes are particularly common in growth share arrangements, hurdle structures, restricted share plans, and EMI option schemes where the difference between the taxpayer's valuation and HMRC's assessment can be substantial.",
      "A tax expert witness provides independent analysis of the correct valuation at the relevant date, assessing whether HMRC's valuation methodology is appropriate and whether the correct tax treatment has been applied. Disputes frequently involve complex questions about commercial restrictions on shares, market value at acquisition, and the interaction between income tax and capital gains tax on disposal.",
      "s431 elections under ITEPA 2003 allow employees to elect to be taxed on the unrestricted market value of shares at acquisition rather than when restrictions lift. Disputes arise where HMRC challenges the value used in the election or the tax treatment of the overall arrangement, requiring expert evidence on both valuation and technical tax analysis.",
    ],
    faqs: [
      {
        question: "When is a tax expert witness needed for ERS disputes?",
        answer:
          "Employment Related Securities disputes arise where HMRC challenges the valuation placed on shares or options at grant, vesting, or exercise, particularly for growth shares, hurdle arrangements, and restricted share plans. The tax expert witness provides independent analysis of the correct valuation at the relevant date and whether the HMRC valuation methodology is appropriate.",
      },
      {
        question: "What is a s431 election and what disputes arise?",
        answer:
          "A s431 election under ITEPA 2003 allows an employee to elect to be taxed on the unrestricted market value of shares at acquisition rather than when restrictions lift, avoiding future income tax on growth. Disputes arise where HMRC challenges the value used in the election or the tax treatment of the arrangement. Expert witnesses opine on the correct valuation and tax analysis.",
      },
    ],
    relatedService: { label: "Employment Related Securities", href: "/services/employment-related-securities" },
  },
  {
    slug: "sdlt-property-transactions",
    title: "SDLT Property Transaction Expert Witness UK",
    shortTitle: "SDLT Property Transactions",
    metaTitle: "SDLT Property Transaction Expert Witness UK | Stamp Duty Disputes",
    metaDescription:
      "Expert witness evidence for UK SDLT disputes, multiple dwellings relief, mixed use, GAAR, and complex property acquisition structures.",
    paragraphs: [
      "Stamp Duty Land Tax (SDLT) disputes requiring expert evidence typically involve HMRC challenging whether a transaction qualifies for multiple dwellings relief (MDR), mixed use classification of properties, GAAR application to SDLT planning arrangements, and the treatment of complex acquisition structures including sub-sales and alternative finance arrangements.",
      "The tax expert witness provides independent technical opinion on the correct SDLT position, analysing the statutory provisions, HMRC guidance, and relevant tribunal decisions. SDLT planning cases often involve intricate questions about the nature of the transaction, the number of dwellings acquired, and whether arrangements fall within the General Anti-Abuse Rule.",
      "With HMRC increasingly challenging SDLT planning through both direct enquiry and GAAR counteraction, expert evidence establishing the correct technical SDLT analysis is essential for both pre-tribunal negotiation and FTT proceedings.",
    ],
    faqs: [
      {
        question: "What SDLT disputes require a tax expert witness?",
        answer:
          "SDLT disputes requiring expert evidence typically involve: HMRC challenging whether a transaction qualifies for multiple dwellings relief; mixed use classification of properties; GAAR (General Anti-Abuse Rule) application to SDLT planning; and the treatment of complex acquisition structures. The expert provides independent technical opinion on the correct SDLT position.",
      },
      {
        question: "What is the General Anti-Abuse Rule (GAAR) in the SDLT context?",
        answer:
          "The GAAR allows HMRC to counteract tax advantages obtained from abusive tax arrangements, including SDLT planning schemes. The tax expert witness assesses whether the arrangement falls within the GAAR, applying the double reasonableness test, whether it would be reasonable to conclude the arrangement was abusive.",
      },
    ],
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
  {
    slug: "iht-business-property-relief",
    title: "IHT Business Property Relief Expert Witness UK",
    shortTitle: "IHT Business Property Relief",
    metaTitle: "IHT Business Property Relief Expert Witness UK | BPR Disputes",
    metaDescription:
      "Expert witness evidence for UK IHT business property relief disputes, trading vs investment test, SAV valuations, and excepted assets.",
    paragraphs: [
      "Inheritance Tax Business Property Relief (BPR) disputes require expert evidence when HMRC's Shares & Assets Valuation (SAV) team challenges whether a business qualifies as a trading (not investment) business, when the value of BPR-eligible business interests is disputed, or when the excepted assets rule is applied to reduce the relief available.",
      "The trading vs investment test under IHTA 1984 s105 requires analysis of whether the business is wholly or mainly not of an investment nature. The tax expert analyses the proportion of investment vs trading activities through both balance sheet analysis and activities analysis to determine BPR qualification.",
      "IHT valuation disputes also require expert evidence on the correct valuation methodology for unquoted business interests, addressing whether HMRC SAV's adopted value is defensible and producing independent counter-valuations where appropriate.",
    ],
    faqs: [
      {
        question: "When is a tax expert witness needed for IHT BPR disputes?",
        answer:
          "IHT Business Property Relief disputes require expert evidence when: HMRC's SAV team challenges whether the business qualifies as a trading (not investment) business; the value of the BPR-eligible business interests is disputed; or the excepted assets rule is applied to reduce the relief. The expert provides independent technical analysis of the BPR qualification and valuation.",
      },
      {
        question: "How is the trading vs investment test applied for BPR purposes?",
        answer:
          "The wholly or mainly not of an investment nature test under IHTA 1984 s105 requires analysis of the business's activities, assets, and income sources. The tax expert analyses the proportion of investment vs trading activities, applying both a balance sheet analysis and an activities analysis, to determine whether the business qualifies for BPR.",
      },
    ],
    relatedService: { label: "IHT & CGT Valuation Disputes", href: "/services/iht-cgt-valuation" },
  },
  {
    slug: "cgt-share-disposal-valuation",
    title: "CGT Share Disposal Valuation Expert Witness UK",
    shortTitle: "CGT Share Disposal Valuation",
    metaTitle: "CGT Share Disposal Valuation Expert Witness UK | SAV Disputes",
    metaDescription:
      "Expert witness evidence for UK CGT share disposal valuation disputes, unquoted shares, BADR, and HMRC SAV challenges.",
    paragraphs: [
      "Capital Gains Tax share disposal valuation disputes arise where HMRC's Shares & Assets Valuation (SAV) team provides valuations for CGT purposes on disposal of unquoted shares, and the taxpayer disagrees with the adopted value. The tax expert witness produces independent counter-valuations applying appropriate methodology, earnings multiple, NAV, or DCF, and defends the analysis before the FTT if necessary.",
      "Business Asset Disposal Relief (BADR, formerly Entrepreneurs' Relief) disputes arise where HMRC challenges whether the qualifying conditions are met, particularly the personal company test (5% shareholding and voting rights), the officer or employee requirement, and the 24-month qualifying period. Expert witnesses provide technical analysis of the qualifying conditions and their application to the facts.",
      "CGT valuation disputes frequently involve questions about market value at the disposal date, the impact of minority discounts and lack of marketability, and the correct treatment of deferred consideration and earn-out arrangements.",
    ],
    faqs: [
      {
        question: "How does HMRC challenge share valuations for CGT?",
        answer:
          "HMRC's Shares & Assets Valuation (SAV) team provides valuations for CGT purposes on disposal of unquoted shares. Where the taxpayer and HMRC disagree on value, the tax expert witness produces an independent counter-valuation applying appropriate methodology, earnings multiple, NAV, or DCF, and defending it before the FTT if necessary.",
      },
      {
        question: "What Business Asset Disposal Relief disputes arise?",
        answer:
          "BADR (formerly Entrepreneurs' Relief) disputes arise where HMRC challenges whether the qualifying conditions are met, particularly the personal company test (5% shareholding and voting rights), the officer or employee requirement, and the 24-month qualifying period. Expert witnesses provide technical analysis of the qualifying conditions and their application to the facts.",
      },
    ],
    relatedService: { label: "IHT & CGT Valuation Disputes", href: "/services/iht-cgt-valuation" },
  },
  {
    slug: "corporate-tax-avoidance-schemes",
    title: "Corporate Tax Avoidance Expert Witness UK",
    shortTitle: "Corporate Tax Avoidance",
    metaTitle: "Corporate Tax Avoidance Expert Witness UK | GAAR & Scheme Disputes",
    metaDescription:
      "Expert witness evidence for UK corporate tax avoidance scheme disputes, GAAR, APNs, follower notices, and DOTAS proceedings.",
    paragraphs: [
      "Corporate tax avoidance scheme disputes involve complex technical analysis of scheme mechanics, the commercial purpose of each step, and whether arrangements fall within the General Anti-Abuse Rule (GAAR). Expert witnesses provide technical analysis addressing the double reasonableness test, whether it would be reasonable to conclude the arrangement was abusive.",
      "Follower notices require taxpayers to amend their returns in accordance with a relevant tribunal decision, with penalties for non-compliance. Tax expert witnesses analyse whether the ruling relied on truly applies to the taxpayer's specific scheme, identifying material differences that mean the ruling should not automatically apply.",
      "Accelerated Payment Notices (APNs) and DOTAS disclosure obligations add procedural complexity to avoidance scheme disputes. Expert evidence on scheme mechanics and the correct tax treatment is essential for both FTT complex track proceedings and pre-litigation settlement negotiations.",
    ],
    faqs: [
      {
        question: "What is a follower notice and how does a tax expert help?",
        answer:
          "A follower notice requires the taxpayer to amend their return in accordance with a relevant tribunal decision, if they do not, a penalty applies. The tax expert witness analyses whether the ruling relied on truly applies to the taxpayer's specific scheme, identifying any material differences that mean the ruling should not automatically apply.",
      },
      {
        question: "What is the role of expert evidence in GAAR proceedings?",
        answer:
          "GAAR proceedings require the tribunal to assess whether an arrangement was abusive, applying the double reasonableness test. Expert witnesses provide technical analysis of the scheme mechanics, the commercial purpose of each step, and whether a reasonable taxpayer would have entered into arrangements of this type.",
      },
    ],
    relatedTribunal: { label: "First-tier Tribunal (Tax)", href: "/tribunals-courts/first-tier-tribunal-tax" },
    relatedService: { label: "Technical Tax Opinion", href: "/services/technical-tax-opinion" },
  },
  {
    slug: "tax-professional-negligence",
    title: "Tax Professional Negligence Expert Witness UK",
    shortTitle: "Tax Professional Negligence",
    metaTitle: "Tax Professional Negligence Expert Witness UK | Standard of Care",
    metaDescription:
      "Expert witness evidence for UK tax professional negligence claims, standard of care, PCRT, but-for analysis, and loss quantification.",
    paragraphs: [
      "Tax professional negligence claims require a tax expert witness to assess the standard of care expected of a reasonably competent tax adviser, whether the advice given fell below that standard, the correct advice that should have been given (the but-for position), and the additional tax liability or loss caused by the negligent advice.",
      "The standard of care is assessed against the requirements of PCRT (Professional Conduct in Relation to Taxation) and the skill expected of a tax adviser practising in the relevant field. The expert must address both the technical correctness of the advice and whether material risks were properly communicated to the client.",
      "Loss quantification establishes the but-for position, what the claimant's tax position would have been had the adviser acted competently. The difference between this and the actual tax paid, including penalties and interest, represents the recoverable loss, subject to any SAAMCo scope of duty limitations.",
    ],
    faqs: [
      {
        question: "What standard of care applies to UK tax advisers?",
        answer:
          "Tax advisers must exercise the skill and care of a reasonably competent tax adviser in their field, applying the relevant tax law correctly, advising on material risks, and complying with PCRT (Professional Conduct in Relation to Taxation). The tax expert witness assesses whether the advice fell below this standard and what advice should have been given.",
      },
      {
        question: "How is loss quantified in a tax negligence claim?",
        answer:
          "The but-for position is established, what the claimant's tax position would have been had the adviser acted competently. The difference between this and the actual tax paid (including penalties and interest) is the recoverable loss, subject to any SAAMCo scope of duty limitations.",
      },
    ],
    relatedService: { label: "Tax Professional Negligence", href: "/services/tax-professional-negligence" },
  },
  {
    slug: "poca-tax-fraud-proceedings",
    title: "POCA Tax Fraud Expert Witness UK",
    shortTitle: "POCA Tax Fraud",
    metaTitle: "POCA Tax Fraud Expert Witness UK | Benefit Calculation Challenges",
    metaDescription:
      "Expert witness evidence for UK POCA tax fraud proceedings, benefit calculation challenges and HMRC forensic reconstruction review.",
    paragraphs: [
      "Proceeds of Crime Act (POCA) proceedings involving tax fraud typically rely on HMRC's forensic reconstruction of undeclared income to calculate the criminal benefit figure. Tax expert witnesses challenge this by identifying where the reconstruction relies on flawed methodology, ignores actual circumstances, or fails to apply HMRC's own approved methods for business records reconstruction.",
      "In POCA proceedings, the forensic accountant addresses the financial numbers while the tax expert addresses the technical tax analysis, whether HMRC's assessment of the correct tax position is correct. This complementary approach is frequently the most effective strategy in complex tax fraud cases.",
      "COP9 investigations can escalate to criminal proceedings where the taxpayer refuses the Contractual Disclosure Facility or HMRC determines the criminal route is more appropriate. Expert witnesses with experience in both civil COP9 and criminal tax proceedings are essential in navigating this evolving landscape in 2025 to 2026.",
    ],
    faqs: [
      {
        question: "How does a tax expert witness challenge HMRC's POCA benefit calculation?",
        answer:
          "In POCA proceedings involving tax fraud, HMRC typically relies on a forensic accountant's reconstruction of undeclared income. Tax expert witnesses challenge this by identifying where the reconstruction relies on flawed methodology, ignores actual circumstances, or fails to apply HMRC's own approved methods for business records reconstruction.",
      },
      {
        question: "When does a COP9 investigation become criminal?",
        answer:
          "COP9 is a civil investigation procedure, the taxpayer makes a full disclosure under the Contractual Disclosure Facility (CDF). Where the taxpayer refuses COP9 or HMRC determines the criminal route is more appropriate, criminal investigation follows. HMRC is increasingly considering whether its approach to COP9 investigations is appropriate, a live debate in the tax disputes community in 2025 to 2026.",
      },
    ],
    relatedInvestigation: { label: "HMRC Criminal Investigation", href: "/hmrc-investigation-types/hmrc-criminal-investigation" },
    relatedService: { label: "HMRC Methodology Challenge", href: "/services/hmrc-methodology-challenge" },
  },
  {
    slug: "hmrc-business-records-reconstruction",
    title: "HMRC Business Records Reconstruction Expert Witness UK",
    shortTitle: "Business Records Reconstruction",
    metaTitle: "HMRC Business Records Reconstruction Expert Witness UK",
    metaDescription:
      "Expert witness evidence challenging HMRC business records reconstruction, mark-up analysis, lifestyle expenditure, and approved methodology.",
    paragraphs: [
      "Business records reconstruction is HMRC's technique for estimating undeclared turnover where business records are inadequate or incomplete. HMRC applies mark-up analysis (applying expected profit margins to purchases), lifestyle analysis (comparing personal expenditure to declared income), and industry comparisons to produce a figure for undeclared income.",
      "Tax expert witnesses challenge whether the correct methodology was applied and whether the figures are supportable. HMRC publishes guidance on approved reconstruction methods, including the cash flow method, the mark-up/margin method, and the lifestyle method. Where HMRC fails to follow its own approved methods, a tax expert witness can demonstrate the correct approach and produce more reliable results.",
      "In one notable case, HMRC relied on a forensic accountant's reconstruction showing undeclared takings of £600,000. Independent expert review indicated the HMRC report relied on flawed and untested data, ignored actual circumstances, and did not accord with HMRC's own approved reconstruction methods, the correct figure was £100,000.",
    ],
    faqs: [
      {
        question: "What is business records reconstruction and when does HMRC use it?",
        answer:
          "Business records reconstruction is HMRC's technique for estimating undeclared turnover where business records are inadequate or incomplete. HMRC applies mark-up analysis (applying expected profit margins to purchases), lifestyle analysis (comparing personal expenditure to declared income), and industry comparisons. Tax expert witnesses challenge whether the correct methodology was applied and whether the figures are supportable.",
      },
      {
        question: "What are HMRC's approved methods for reconstruction?",
        answer:
          "HMRC publishes guidance on approved reconstruction methods, including the cash flow method, the mark-up/margin method, and the lifestyle method. Where HMRC fails to follow its own approved methods, a tax expert witness can demonstrate the correct approach and produce more reliable results, in one case reducing HMRC's alleged undeclared income from £600,000 to £100,000.",
      },
    ],
    relatedInvestigation: { label: "Code of Practice 8 (COP8)", href: "/hmrc-investigation-types/code-of-practice-8-cop8" },
    relatedService: { label: "HMRC Methodology Challenge", href: "/services/hmrc-methodology-challenge" },
  },
];

export function getTaxDisputeType(slug: string) {
  return taxDisputeTypes.find((d) => d.slug === slug);
}
