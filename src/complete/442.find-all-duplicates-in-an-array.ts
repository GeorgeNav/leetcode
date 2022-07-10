/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
  // `seen` should really just be `new Set<number>()` but that uses way more runtime and memory :(
  const seen: Record<number, boolean> = {};
  const result: number[] = [];
  for (const n of nums) {
    if (seen[n]) {
      result.push(n);
    } else {
      seen[n] = true;
    }
  }
  return result;
}
// @lc code=end
