/*
 * @lc app=leetcode id=329 lang=typescript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
function longestIncreasingPath(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const [rows, cols] = [matrix.length, matrix[0].length];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const memo: number[][] = [];
  for (let y = 0; y < rows; y++) {
    memo.push([]);
    for (let x = 0; x < cols; x++) {
      memo[y].push(0);
    }
  }

  const dfs = (y: number, x: number): number => {
    if (memo[y][x] != 0) {
      return memo[y][x];
    }

    for (const [deltaY, deltaX] of directions) {
      const [y2, x2] = [y + deltaY, x + deltaX];

      if (y2 >= 0 && y2 < rows && x2 >= 0 && x2 < cols) {
        if (matrix[y2][x2] > matrix[y][x]) {
          memo[y][x] = Math.max(memo[y][x], dfs(y2, x2));
        }
      }
    }

    memo[y][x] += 1;
    return memo[y][x];
  };

  let result = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      result = Math.max(result, dfs(y, x));
    }
  }
  return result;
}
// @lc code=end
