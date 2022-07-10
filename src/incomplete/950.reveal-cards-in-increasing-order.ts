/*
 * @lc app=leetcode id=950 lang=typescript
 *
 * [950] Reveal Cards In Increasing Order
 */

// @lc code=start
function deckRevealedIncreasing(deck: number[]): number[] {
  const result: number[] = [];
  deck.sort((a, b) => a - b);
  while (deck.length) {
    deck.push(deck.shift());
    const topCard = deck.shift();
    result.push(topCard);
  }
  return result;
};

// @lc code=end

