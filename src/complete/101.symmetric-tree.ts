/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

//Definition for a binary tree node.
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
function isSymmetric(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [root!.left, root!.right];

  while (queue.length > 0) {
    const [left, right] = [queue.shift(), queue.shift()];

    if (left === null && right === null) {
      continue;
    }

    if (left?.val !== right?.val) {
      return false;
    }

    queue.push(left!.left, right!.right);
    queue.push(left!.right, right!.left);
  }

  return true;
}
// @lc code=end
