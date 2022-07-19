/*
 * @lc app=leetcode id=827 lang=typescript
 *
 * [827] Making A Large Island
 */

// @lc code=start
function largestIsland(grid: number[][]): number {
  const n = grid.length;
  type Id = number;
  type Size = number;
  const islandSizes: Record<Id, Size> = {};
  const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  const neighbors = function* (x: number, y: number) {
    for (const [dx, dy] of dirs) {
      const [nx, ny] = [x + dx, y + dy];
      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        yield [nx, ny];
      }
    }
  };

  const dfs = function (x: number, y: number, id: Id): Size {
    grid[y][x] = id;
    let result = 1;
    for (const [nx, ny] of neighbors(x, y))
      if (grid[ny][nx] === 1) result += dfs(nx, ny, id);
    return result;
  };

  const searchIsland = function (x: number, y: number, id: Id): Size {
    islandSizes[id] = dfs(x, y, id);
    return islandSizes[id];
  };

  let result = 0;
  let curId = 2;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        // Search the island and overwrite its members with an id
        result = Math.max(result, searchIsland(x, y, curId++));
      } else if (grid[y][x] === 0) {
        // This is an empty space, so record the sizes of its distinct neighboring islands
        const islands: Record<Id, Size> = {};

        for (const [nx, ny] of neighbors(x, y)) {
          if (grid[ny][nx] === 1) {
            // The neighbor is in an island we haven't seen yet
            result = Math.max(result, searchIsland(nx, ny, curId++));
          }
          if (grid[ny][nx] > 1) {
            const id = grid[ny][nx];
            islands[id] = islandSizes[id];
          }
        }

        const sizes = Object.values(islands).reduce((a, b) => a + b, 1);
        result = Math.max(result, sizes);
      }
    }
  }

  return result;
}
// @lc code=end
