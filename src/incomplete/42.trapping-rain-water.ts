/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let result = 0;
  let [left_i, right_i] = [0, height.length - 1];
  let [leftMax, rightMax] = [0, 0];
  while (left_i < right_i) {
    if (height[left_i] < height[right_i]) {
      leftMax = Math.max(leftMax, height[left_i])
      if (height[left_i] < leftMax) {
        result += leftMax - height[left_i];
      }
      left_i++;
    } else {
      rightMax = Math.max(rightMax, height[right_i]);
      if (height[right_i] < rightMax) {
        result += rightMax - height[right_i];
      }
      right_i--;
    }
  }
  return result;
}
// @lc code=end
