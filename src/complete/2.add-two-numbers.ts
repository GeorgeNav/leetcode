/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let list: ListNode | null = null;
  let head: ListNode | null = null;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const [digit, extra] = [sum % 10, Math.floor(sum / 10)];
    if (!list) {
      list = head = new ListNode();
    } else {
      list.next = new ListNode();
      list = list.next;
    }
    list.val = digit;
    carry = extra;
    l1 = l1?.next!;
    l2 = l2?.next!;
  }

  return head;
}
// @lc code=end
