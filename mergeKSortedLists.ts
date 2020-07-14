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

const flatMap = <A>(a: A[]) => (cb: (a: A) => A[]) =>
  a.reduce((b, c) => b.concat(cb(c)), [] as A[]);

const toLinkedList = (values: number[]) =>
  values.reduceRight(
    (node, digit) => new ListNode(digit, node),
    null as ListNode | null,
  );

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const sorted = flatMap(lists.filter(Boolean) as ListNode[])(reverseList([]))
    .map(({ val }) => val)
    .sort((a, b) => (a > b ? 1 : -1));
  return toLinkedList(sorted);
}

console.log(mergeKLists([new ListNode(2), new ListNode(1)]));
