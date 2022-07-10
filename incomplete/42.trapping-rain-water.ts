/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let numWaterBlocks = 0;
  for(let leftWallIndex = 0; leftWallIndex < height.length; leftWallIndex++) {
    const leftWallHeight = height[leftWallIndex];
    if(height[leftWallIndex] === 0)
      continue;
    const rightWallIndex = height.findIndex((h, i) =>
      i > leftWallIndex+1 && h >= leftWallHeight);
    if(rightWallIndex === -1)
      continue;
    height.slice(leftWallIndex+1, rightWallIndex)
      .forEach((underWaterHeight) => {
        numWaterBlocks += leftWallHeight - underWaterHeight;
      });
    leftWallIndex = rightWallIndex-1;
  }
  return numWaterBlocks;
};
// @lc code=end

