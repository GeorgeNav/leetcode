/*
 * @lc app=leetcode id=301 lang=typescript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
function removeInvalidParentheses(s: string): string[] {
  const isValid = (s: string) => {
    let count = 0;
    for (const c of s) {
      count += c === '(' ? 1 : c === ')' ? -1 : 0;
      if (count < 0) return false;
    }
    return count === 0;
  };

  // We need to bfs through the solution space
  // while taking care not to revisit nodes multiple times
  // once we find a solution, that is the final level of the tree
  const result: string[] = [];
  const queue: string[] = [s];
  const seen = new Set<string>([s]);
  let maxLevelFound = false;

  while (queue.length > 0) {
    const s = queue.shift()!;

    if (isValid(s)) {
      maxLevelFound = true;
      result.push(s);
    }

    if (maxLevelFound) {
      // We found a solution in this level of the three
      // so just deplete the queue
      continue;
    }

    // No solution reached yet, so add alll adjacent nodes in the next level
    for (let i = 0; i < s.length; i++) {
      // Don't splice out letters, we can only remove parens
      if (s[i] !== '(' && s[i] !== ')') continue;

      const next = s.slice(0, i) + s.slice(i + 1);

      if (seen.has(next)) continue;

      queue.push(next);
      seen.add(next);
    }
  }

  return result;
}
// @lc code=end
