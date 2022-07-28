/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = (() => {
    const graph = new Map<number, Set<number>>();
    for (let course = 0; course < numCourses; course++) {
      graph.set(course, new Set());
    }
    for (const [course, dep] of prerequisites) {
      graph.set(course, graph.get(course)!.add(dep));
    }
    return graph;
  })();

  const queue: number[] = [];
  for (const [course, deps] of graph) {
    if (deps.size === 0) {
      queue.push(course);
    }
  }

  while (queue.length > 0) {
    const courseToTake = queue.shift()!;
    for (const [course, deps] of graph) {
      deps.delete(courseToTake);
      if (deps.size === 0) {
        queue.push(course);
        graph.delete(course);
      }
    }
  }

  return graph.size === 0;
}
// @lc code=end
