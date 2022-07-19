/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = (() => {
    const graph = new Map<number, Set<number>>();
    for (let i = 0; i < numCourses; i++) {
      graph.set(i, new Set());
    }
    for (const [course, dep] of prerequisites) {
      graph.set(course, graph.get(course)!.add(dep));
    }
    return graph;
  })();

  const queue = (() => {
    const queue: number[] = [];
    for (const [course, deps] of graph) {
      if (deps.size === 0) {
        queue.push(course);
      }
    }
    return queue;
  })();

  const seen = new Set();
  const result: number[] = [];

  while (queue.length > 0) {
    const courseToTake = queue.shift()!;

    if (seen.has(courseToTake)) {
      continue;
    }

    seen.add(courseToTake);
    result.push(courseToTake);

    for (const [course, deps] of graph) {
      if (deps.has(courseToTake)) {
        deps.delete(courseToTake);
      }
      if (deps.size === 0) {
        queue.push(course);
        graph.delete(course);
      }
    }
  }

  return graph.size === 0 ? result : [];
}
// @lc code=end
