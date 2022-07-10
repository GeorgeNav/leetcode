/*
 * @lc app=leetcode id=811 lang=typescript
 *
 * [811] Subdomain Visit Count
 */

// @lc code=start
function subdomainVisits(cpdomains: string[]): string[] {
  const visitedMap = new Map<string, number>();
  cpdomains.forEach((cpdomain: string) => {
    const [visited, fullDomain] = cpdomain.split(" ");
    const domainElems = fullDomain.split(".");
    domainElems.reverse();
    const subDomains = domainElems.reduce((subDomains, di) => {
      subDomains.push(di + (subDomains.length ? `.${subDomains[subDomains.length - 1]}` : ""));
      return subDomains;
    }, [] as string[]);
    subDomains.forEach((subDomain) =>
      visitedMap.set(
        subDomain,
        (visitedMap.get(subDomain) ?? 0) + parseInt(visited)
      )
    );
  });
  return Array.from(visitedMap.entries())
    .map(([subDomain, visited]) => `${visited} ${subDomain}`);
};
// @lc code=end

