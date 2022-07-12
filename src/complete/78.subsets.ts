/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  // reference: https://www.youtube.com/watch?v=REOH22Xwdkk&ab_channel=NeetCode
  const subsets: number[][] = [];
  const subset: number[] = [];
  const getSubset = (i: number): void => {
    if (i >= nums.length) {
      subsets.push([...subset])
      return;
    }
    subset.push(nums[i]); // include current number
    getSubset(i + 1); // find all combinations with current number
    subset.pop(); // remove current number
    getSubset(i + 1); // find all combinations without current number
  };
  getSubset(0);
  return subsets;
};
// @lc code=end

