/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
  const numMap = new Map<number, number>();
  nums.forEach((n) => {
    numMap.set(n, (numMap.get(n) ?? 0) + 1);
  });
  return Array.from(numMap.entries())
    .filter(([_, count]) => count > 1)
    .map(([n]) => n);
};
// @lc code=end

