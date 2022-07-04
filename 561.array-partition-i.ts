/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  const getPermutations = (nums: number[], hashMap: Map<number, number>): number[][] => {
    if (nums.length === 0)
      return [];
    else if (nums.length === 1)
      return [nums];
    const numSet = Array.from(new Set(nums));
    if (numSet.length === 1)
      return [nums];
    return numSet.map((n) => {
      const nPermutations: number[][] = [];
      nums.forEach((k, i) => {
        if (k === n) {
          const numsRest = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];
          const nHashMap = new Map<number, number>(hashMap);
          nHashMap.set(n, nHashMap.get(n) - 1);
          const permutations = getPermutations(numsRest, nHashMap);
          permutations.forEach((permutation) => nPermutations.push([n, ...permutation]));
        }
      });
      return nPermutations;
    }).flat(1);
  }
  const permutations = getPermutations(
    nums,
    new Map(Array.from(new Set(nums)).map((n) => [n, nums.filter((k) => k === n).length]))
  );
  const pairSize = 2;
  const pairPermutations: number[][][] = permutations.map((permutation) => {
    let i = 0;
    const pairPermutation: number[][] = [];
    while (i < nums.length / pairSize) {
      const currentIndex = i++ * pairSize;
      pairPermutation.push(permutation.slice(currentIndex, currentIndex + pairSize));
    }
    return pairPermutation;
  });
  const totals = pairPermutations.map((pairPermutation) => {
    const pairMins = pairPermutation.map((pair) => Math.min(...pair));
    const total = pairMins.reduce((v, c) => v + c, 0);
    return total;
  });
  return Math.max(...totals);
};
// @lc code=end

