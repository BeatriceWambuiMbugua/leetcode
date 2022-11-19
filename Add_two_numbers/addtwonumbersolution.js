/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let currentNode = new ListNode(0);
  let previousNode = currentNode;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    l1 = l1?.next;
    l2 = l2?.next;

    carry = Math.floor(sum / 10); //sum > 9 ? 1 : 0;
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
  }

  if (!!carry) {
    currentNode.next = new ListNode(1);
  }
  return previousNode.next;
};
