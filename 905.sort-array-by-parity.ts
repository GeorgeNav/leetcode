/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  const odds: number[] = [];
  const evens: number[] = [];

  nums.map((n) => n % 2 === 0 ? evens.push(n) : odds.push(n));

  return [...evens, ...odds];
};
// @lc code=end

