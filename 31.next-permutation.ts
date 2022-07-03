/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const sortedPermutations = (nums: number[]): number[][] => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    const numsSorted = [...nums].sort((a, b) => a < b ? -1 : 1);
    let permutations = numsSorted.map((n, i) => {
      const permutations = sortedPermutations([
        ...numsSorted.slice(0, i),
        ...numsSorted.slice(i+1, numsSorted.length)
      ]);
      return permutations.map((combination) => [n, ...combination]);
    }).flat(1);
    permutations = Array.from(new Set(permutations.map((permutation) => permutation.join(''))))
      .map((permutationStr) => permutationStr.split(''))
      .map((permutation) => permutation.map((n) => parseInt(n)));
    return permutations;
  };
  const permutations = sortedPermutations(nums);
  const permutationIndex = permutations.findIndex((permutation) =>
    permutation.every((_, i) => permutation[i] === nums[i])
  );
  const nextPermutationIndex = (permutationIndex + 1) < permutations.length ? permutationIndex + 1 : 0;
  nums.map((_, i) => {
    nums[i] = permutations[nextPermutationIndex][i];
  });
}
// @lc code=end
