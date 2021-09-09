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
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let head = null;
  // Choose head which is smaller of the two lists
  if (l1.val < l2.val) {
    head = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    head = new ListNode(l2.val);
    l2 = l2.next;
  }
  // Loop until any of the list becomes null
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = new ListNode(l1.val);
      l1 = l1.next;
      head = head.next;
    } else {
      head.next = new ListNode(l2.val);
      l2 = l2.next;
      head = head.next;
    }
  }
  // Add all the nodes in l1, if remaining
  while (l1) {
    head.next = new ListNode(l1.val);
    l1 = l1.next;
    head = head.next;
  }
  // Add all the nodes in l2, if remaining
  while (l2) {
    head.next = new ListNode(l2.val);
    l2 = l2.next;
    head = head.next;
  }
  return head;
};
