import { hypeDist } from './hypeDist';

describe('hypeDistTest', () => {
  test('hypeDist(0, 0, 0, 0)', () => { expect(hypeDist(0, 0, 0, 0)).toBe(1); });
  test('hypeDist(40, 20, 3, 1)', () => { expect(hypeDist(40, 20, 3, 1)).toBe(0.38461538461538464); });
  test('hypeDist(20, 20, 3, 1)', () => { expect(hypeDist(20, 20, 3, 1)).toBe(0); });
  test('hypeDist(10, 5, 2, 4)', () => { expect(hypeDist(10, 5, 2, 4)).toBe(0); });
});
