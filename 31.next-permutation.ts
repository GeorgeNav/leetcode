/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const getPermutations = (nums: number[]) => {
    if (nums.length === 1) return nums[0];
    return nums.map(
      (n) => n.toString() + getPermutations(nums.slice(1, nums.length))
    );
  };
  const permutations = getPermutations(nums);
}
// @lc code=end
