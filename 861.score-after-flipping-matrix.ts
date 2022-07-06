/*
 * @lc app=leetcode id=861 lang=typescript
 *
 * [861] Score After Flipping Matrix
 */

// @lc code=start
function matrixScore(A: number[][]): number {
  const flipCol = (j: number, A: number[][]) => A.forEach((row) => row[j] === 1 ? 0 : 1);
  const flipRow = (i: number, A: number[][]) => A[i] = A[i].map((digit) => digit === 1 ? 0 : 1);
  const score = (A: number[][]) => {
    const binaryToDecimal = (binary: number[]) => {
      let total = 0;
      let i = 0;
      while (i < binary.length) {
        total += binary[(binary.length - 1) - i] * (2 ** i);
        i++;
      }
      console.log(binary, total);
      return total;
    };

    return A.map((binary) => binaryToDecimal(binary)).reduce((sum, val) => sum + val, 0);
  };

  const m = A.length;
  const n = A[0].length;

  for (let i = 0; i < m; i++)
    if (A[i][0] === 0)
      flipRow(i, A);

  for (let j = 0; j < n; j++) {
    const column = A.map((row) => row[j]);
    const numZeros = column.filter((digit) => digit === 0).length;
    if (n - numZeros < numZeros)
      flipCol(j, A);
  }

  return score(A);
};
// @lc code=end

