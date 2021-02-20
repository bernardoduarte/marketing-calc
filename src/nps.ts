export function nps(detractors: number, passives: number, promoters: number): number {
  const respondents: number = detractors + passives + promoters;
  const promotersPercent: number = promoters / respondents;
  const detractorsPercent: number = detractors / respondents;
  const score: number = promotersPercent - detractorsPercent;

  return score;
}
