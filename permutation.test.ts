import { nPr } from './permutation';

describe('permutationTest', () => {
  test('nPr(5, -1)', () => {
    const t = () => { nPr(5, -1); }
    expect(t).toThrow(Error);
  });
  test('nPr(5, -1)', () => {
    const t = () => { nPr(5, -1); }
    expect(t).toThrow(Error);
  });
  test('nPr(5, 0)', () => { expect(nPr(5, 0)).toBe(1); });
  test('nPr(4, 4)', () => { expect(nPr(4, 4)).toBe(24); });
  test('nPr(4, 5)', () => { expect(nPr(4, 5)).toBe(0); });
});
