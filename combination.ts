import { nPr } from './permutation';

/**
 * @description Combination
 * @param  {number} n
 * @param  {number} r
 * @returns number
 */
export const nCr = (n: number, r: number): number => {
  if (r < 0 || r > n) {
    throw new Error('invalid value');
  }
  return nPr(n, r) / nPr(r, r);
};
