/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
function isValidBST(root: TreeNode | null): boolean {
  return (function helper(
    node: TreeNode | null,
    min: number = -Infinity,
    max: number = Infinity,
  ) {
    if (!node) {
      return true;
    }
    if (node.val <= min || node.val >= max) {
      return false;
    }
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  })(root);
}
// @lc code=end
