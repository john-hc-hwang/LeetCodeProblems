/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} l1
 * param {ListNode} l2
 * return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // Check if either of the lists is null
  if (!l1) return l2;
  if (!l2) return l1;
  // this new ListNode's value does not matter since we will be returning current.next
  let head = new ListNode(99);
  let current = head;

  while (l1 && l2) {
    if (l1.val < l2.value) {
      head.next = new ListNode(l1.val);
      head = head.next;
      l1 = li.next;
    } else if (l2.val < l1.val) {
      head.next = new ListNode(l2.val);
      head = head.next;
      l2 = l2.next;
      // if l1.val and l2.val are equal then traverse through both linked list
    } else {
      head.next = new ListNode(l1.val);
      head = head.next;
      l1 = li.next;

      head.next = new ListNode(l2.val);
      head = head.next;
      l2 = l2.next;
    }
  }

  if (l1) head.next = li;
  if (l2) head.next = l2;

  return current.next;
};
