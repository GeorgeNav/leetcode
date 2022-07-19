/*
 * @lc app=leetcode id=827 lang=typescript
 *
 * [827] Making A Large Island
 */

// @lc code=start
function largestIsland(grid: number[][]): number {
  const hashCoord = function (x: number, y: number): string {
    return `(${x}, ${y})`;
  };

  const [rows, cols] = [grid.length, grid[0].length];
  const seen = new Set<string>();
  const islands: Set<string>[] = [];

  const cells = function* (grid: number[][]) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        yield [x, y];
      }
    }
  };

  const neighbors = function* (x: number, y: number) {
    const dirs = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];
    for (const [dx, dy] of dirs) {
      const [nx, ny] = [x + dx, y + dy];
      if (ny >= 0 && ny < rows && nx >= 0 && nx < cols) {
        yield [nx, ny];
      }
    }
  };

  const bfs = function (x: number, y: number): Set<string> {
    const result = new Set<string>();
    const queue = [[x, y]];

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      const key = hashCoord(x, y);

      if (seen.has(key) || grid[y][x] === 0) {
        continue;
      }

      result.add(key);
      seen.add(key);
      for (const [nx, ny] of neighbors(x, y)) {
        queue.push([nx, ny]);
      }
    }

    return result;
  };

  let maxSize = 0;

  // Build up all the islands
  for (const [x, y] of cells(grid)) {
    if (seen.has(hashCoord(x, y))) {
      continue;
    }

    if (grid[y][x] === 1) {
      const island = bfs(x, y);
      maxSize = Math.max(maxSize, island.size);
      islands.push(island);
    }
  }

  // console.log(islands);
  // console.log(maxSize);

  // Check the zeros to see what they connect
  for (const [x, y] of cells(grid)) {
    if (grid[y][x] > 0) {
      continue;
    }

    // console.log('Turning on', hashCoord(x, y));

    // console.log('Zero Point:', hashCoord(x, y));
    let bigIsland = new Set<string>([hashCoord(x, y)]);
    for (const [nx, ny] of neighbors(x, y)) {
      // console.log('Neighbor', hashCoord(nx, ny));
      for (const island of islands) {
        if (island.has(hashCoord(nx, ny))) {
          bigIsland = new Set([...bigIsland, ...island]);
          // console.log(bigIsland);
          break;
        }
      }
    }

    maxSize = Math.max(maxSize, bigIsland.size);
  }

  // console.log(maxSize);

  // 1,0,1
  // 0,0,0
  // 0,1,1

  return maxSize;
}
// @lc code=end
