/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const k = lists.length;
  if (k === 0) return null;
  if (k === 1) return lists[0];
  if (k === 2) {
    let current: ListNode | null = lists[0];
    let merged: ListNode | null = lists[1];
    if (!current || !merged) return current ?? merged;

    let stackRoot: ListNode;
    if (current.val < merged.val) {
      stackRoot = current;
      current = current.next;
    } else {
      stackRoot = merged;
      merged = merged.next;
    }
    let stackHead: ListNode = stackRoot;
    while (current && merged) {
      if (current.val < merged.val) {
        stackHead.next = current;
        current = current.next;
      } else {
        stackHead.next = merged;
        merged = merged.next;
      }
      stackHead = stackHead.next;
    }
    stackHead.next = current ?? merged;
    return stackRoot;
  } else {
    const middle = Math.floor(k / 2);
    return mergeKLists([
      mergeKLists(lists.slice(0, middle)),
      mergeKLists(lists.slice(middle, k)),
    ]);
  }
}
// @lc code=end
