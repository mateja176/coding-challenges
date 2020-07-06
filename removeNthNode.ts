/* eslint-disable no-param-reassign */

export default {};

class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

const reverseList = (nodes: ListNode[]) => (node: ListNode): ListNode[] => {
  if (node.next) {
    return reverseList(nodes.concat(node))(node.next);
  } else {
    return nodes.concat(node);
  }
};

function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  const nodes = reverseList([])(head);
  const nth = nodes.length - n - 1;
  if (nth < 0) {
    if (nodes.length === 1) {
      return null;
    } else {
      return nodes[1];
    }
  }
  nodes.forEach((node, i, a) => {
    if (i === nth) {
      node.next = a[i + 2] || null;
    }
  });
  return head;
}

// console.log(
//   removeNthFromEnd(new ListNode(0, new ListNode(1, new ListNode(2))), 1),
// );

// console.log(
//   removeNthFromEnd(new ListNode(0, new ListNode(1, new ListNode(2))), 2),
// );

console.log(removeNthFromEnd(new ListNode(1), 1));
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2));
