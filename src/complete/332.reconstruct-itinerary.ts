/*
 * @lc app=leetcode id=332 lang=typescript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
function findItinerary(tickets: string[][]): string[] {
  // NOTE: this is eulerian path
  // 1. we need to visit every *edge* of the graph a single time
  // 2. but we can visit the *nodes* multiple times
  //
  // A good algo for this is a greedy dfs that builds the path in post order

  const graph = (() => {
    const g = new Map<string, string[]>();
    for (const [from, to] of tickets) {
      g.set(from, [...(g.get(from) ?? []), to]);
    }
    // Sort the edges alphabetically, so that we can be greedy later
    for (const [node, edges] of g) {
      g.set(node, edges.sort());
    }
    return g;
  })();

  const itinerary: string[] = [];

  // 1. start a dfs at the start location
  (function dfs(node: string) {
    const edges = graph.get(node) ?? [];
    while (edges.length > 0) {
      // 2. recurse into the dfs greedily by removing the best edge first
      dfs(edges.shift()!);
    }
    // 3. reconstruct the path backwards as we unwind the stack (post order)
    itinerary.push(node);
  })('JFK');

  // 4. the final result is the path in reverse
  return itinerary.reverse();
}
// @lc code=end
