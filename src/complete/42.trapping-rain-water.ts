/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(heights: number[]): number {
  let total = 0;
  heights.forEach((height, i) => {
    let [leftMaxIdx, rightMaxIdx] = [i, i];
    let [leftMax, rightMax] = [height, height];
    // find closest tallest wall to the left
    while (--leftMaxIdx >= 0) {
      if (heights[leftMaxIdx] > leftMax)
        leftMax = heights[leftMaxIdx];
    };
    if (leftMax === height)
      return;

    // find closest tallest wall to the right
    while (++rightMaxIdx < heights.length) {
      if (heights[rightMaxIdx] > rightMax)
        rightMax = heights[rightMaxIdx];
    };
    if (rightMax === height)
      return;

    // add to total
    total += Math.min(leftMax, rightMax) - height;
  });
  return total;
}
// @lc code=end
