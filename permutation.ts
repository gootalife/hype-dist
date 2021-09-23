/**
 * @description Permutation
 * @param  {number} n
 * @param  {number} r
 * @returns number
 */
export const nPr = (n: number, r: number): number => {
  if (r < 0) { throw new Error('invalid value'); }
  else if (r > n) { return 0; }
  else if (r <= 0) { return 1; }
  return n * nPr(n - 1, r - 1);
};
