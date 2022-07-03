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
  const getPermutations = (nums: number[]): number[][] => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    let permutations = nums.map((n, i) => {
      const permutations = getPermutations([...nums.slice(0, i), ...nums.slice(i+1, nums.length)]);
      return permutations.map((combination) => [n, ...combination]);
    }).flat(1);
    permutations = Array.from(new Set(permutations.map((permutation) => permutation.join(''))))
      .map((permutationStr) => permutationStr.split(''))
      .map((permutation) => permutation.map((n) => parseInt(n)));
    permutations.sort((permutationA, permutationB) => {
      const a = parseInt(permutationA.join(''));
      const b = parseInt(permutationB.join(''));
      if(a < b)
        return -1;
      else if(a === b)
        return 0;
      else if(a > b)
        return 1;
    });
    return permutations;
  };
  const permutations = getPermutations(nums);
  const permutationIndex = permutations.findIndex((permutation) =>
    permutation.every((_, i) => permutation[i] === nums[i])
  );
  const nextPermutationIndex = (permutationIndex + 1) < permutations.length ? permutationIndex + 1 : 0;
  nums.map((_, i) => {
    nums[i] = permutations[nextPermutationIndex][i];
  });
}
// @lc code=end
