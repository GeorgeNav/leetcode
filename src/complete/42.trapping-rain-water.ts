/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(heights: number[]): number {
  let total = 0;
  heights.forEach((height, i) => {
    const leftMax = Math.max(...heights.slice(0, i + 1));
    if (leftMax === height)
      return;
    const rightMax = Math.max(...heights.slice(i, heights.length));
    if (rightMax === height)
      return;
    total += Math.min(leftMax, rightMax) - height;
  });
  return total;
}
// @lc code=end
