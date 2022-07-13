/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  const matches = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const c of s) {
    if (matches.has(c)) {
      if (matches.get(c) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
// @lc code=end
