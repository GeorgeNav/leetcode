/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  // split `p` using ".*", but keep this / these patterns
  return RegExp(`^${p}$`).test(s);
};
// @lc code=end

