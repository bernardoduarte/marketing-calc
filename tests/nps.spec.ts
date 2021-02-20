import { nps } from '../';

interface NpsTestCase {
  input: number[];
  output: number;
};

describe('nps', () => {
  const cases: NpsTestCase[] = [
    { input: [50, 50, 50], output: 0.0, },
    { input: [25, 50, 75], output: 33, },
    { input: [10, 50, 90], output: 53, },
    { input: [100, 50, 90], output: -4, },
    { input: [10, 20, 70], output: 60, },
  ];
  cases.forEach(({input, output}) => {
    it('should return the right score', () => {
      const [deprecators, passives, promoters] = input;
      const score: number = nps(deprecators, passives, promoters);
      const percentScore = Math.round(score * 100);
      expect(percentScore).toEqual(output);
    });
  });
});
