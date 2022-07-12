/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
 */

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = (next === undefined ? null : next)
  }
}

// @lc code=start
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(
  // The problem auto-generates to have type `ListNode | null` for root,
  // but we are always given the node to be deleted so it will always be defined.
  // Hence, `null` is removed from the type
  root: ListNode
): void {
  // We can use the "!" in the next two lines since the node to be deleted is never a tail
  root.val = root.next!.val;
  root.next = root.next!.next!;
};
// @lc code=end

