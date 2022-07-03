/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const numMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const getCombinations = (digits: string[]): string[] => {
    if(digits.length <= 1) {
      const digit = digits[0];
      return digit ? numMap[digit] : [];
    }
    const digitLetters = numMap[digits[0]];
    const combinations = getCombinations(digits.slice(1, digits.length));
    return digitLetters.map(
      (digitLetter) =>
        combinations.map((combination) => digitLetter + combination)
    ).flat();
  };

  return getCombinations(digits.split(""));
};
// @lc code=end

