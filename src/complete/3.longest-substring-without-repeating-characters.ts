/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  let [i, j] = [0, 0];
  const table: Record<string, number> = {};

  while (j < s.length) {
    const c = s[j];

    if ((table[c] ?? 0) > 0) {
      // Move the left boundary as far as we need to go to make the substring non-repeating again
      i = Math.max(i, table[c]);
    }

    result = Math.max(result, j - i + 1);

    // Expand the right boundary and cache where the left would need to move if we see this c again
    table[c] = j + 1;
    j++;
  }

  return result;
}
// @lc code=end
