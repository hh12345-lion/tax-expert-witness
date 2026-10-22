import type { PhotoKey } from "./photos";

/** Two photographs for each page opening, chosen by path; the pair echoes the two pages of the monogram. */
const byPath: [string, [PhotoKey, PhotoKey]][] = [
  ["/services", ["treasury", "revenueChart"]],
  ["/tax-dispute-types", ["customHouse", "longRoom"]],
  ["/tribunals-courts", ["royalCourts", "royalCourtsClock"]],
  ["/hmrc-investigation-types", ["somersetHouse", "whitehall"]],
  ["/how-to-instruct", ["lincolnsNewHall", "lincolnsLibrary"]],
  ["/qualifications", ["lincolnsLibrary", "templeChurch"]],
  ["/what-is-a-tax-expert-witness", ["royalCourts", "lincolnsLibrary"]],
  ["/tax-disputes-explained", ["customHouseThames", "revenueChart"]],
  ["/guides", ["guildhallLibrary", "revenueChart"]],
  ["/glossary", ["lincolnsLibrary", "longRoom"]],
  ["/blog", ["cityRooftops", "guildhallLibrary"]],
  ["/contact", ["thamesCity", "somersetHouse"]],
  ["/thank-you", ["westminsterDusk", "templeChurch"]],
  ["/privacy", ["guildhallLibrary", "whitehall"]],
  ["/cookies", ["cityRooftops", "whitehall"]],
  ["/terms", ["templeChurch", "royalCourtsClock"]],
  ["/image-credits", ["longRoom", "revenueChart"]],
];

export function photosFor(path: string): [PhotoKey, PhotoKey] {
  const hit = byPath.find(([p]) => path === p || path.startsWith(`${p}/`));
  return hit ? hit[1] : ["somersetHouse", "royalCourts"];
}
