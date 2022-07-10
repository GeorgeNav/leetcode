/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const getDigit = (num: number, i: number) => {
    const base = 10;
    return Math.floor(num / Math.pow(base, i)) % base;
  };
  const getNumOfDigits = (num: number) => {
    if (num < 10) {
      return 1;
    }
    return Math.floor(Math.log10(num) + 1);
  }

  if (x < 0) {
    // Negative numbers are never palindromes because of the -
    return false;
  }

  let i = 0;
  let j = getNumOfDigits(x) - 1;
  while (i < j) {
    if (getDigit(x, i++) !== getDigit(x, j--)) {
      return false;
    }
  }
  return true;
}
// @lc code=end
