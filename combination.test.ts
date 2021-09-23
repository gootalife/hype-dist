import { nCr } from './combination';

describe('combinationTest', () => {
  test('nCr(0, 2)', () => {
    const t = () => { nCr(0, 2); }
    expect(t).toThrow(Error);
  });
  test('nCr(-1, 2)', () => {
    const t = () => { nCr(-1, 2); }
    expect(t).toThrow(Error);
  });
  test('nCr(-1, -3)', () => {
    const t = () => { nCr(-1, -3); }
    expect(t).toThrow(Error);
  });
  test('nCr(3, 5)', () => {
    const t = () => { nCr(3, 5); }
    expect(t).toThrow(Error);
  });
  test('nCr(5, 2)', () => { expect(nCr(5, 2)).toBe(10); });
  test('nCr(20, 18)', () => { expect(nCr(20, 18)).toBe(190); });
});
