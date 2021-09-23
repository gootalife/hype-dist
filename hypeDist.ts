import { nCr } from './combination';

/**
 * @description n個の中からk回抽出、m個あるものをx個引く確率
 * @param  {number} n - 総数
 * @param  {number} k - 抽出回数
 * @param  {number} m - 成功状態総数
 * @param  {number} x - 抽出成功回数
 * @returns number - 確率
 */
export const hypeDist = (n: number, k: number, m: number, x: number): number => {
  const n1 = n - m;
  if (x < 0 || x < k - n1 || x > k || x > m) {
    return 0;
  }
  return (nCr(m, x) * nCr(n1, k - x)) / nCr(n, k);
};
