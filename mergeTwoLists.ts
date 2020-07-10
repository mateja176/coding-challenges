export default {};

class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

const linkedListToArray = (digits: number[]) => (
  l: ListNode | null,
): number[] => {
  if (l) {
    const addedDigits = digits.concat(l.val);
    return l.next ? linkedListToArray(addedDigits)(l.next) : addedDigits;
  }
  return digits;
};

const toLinkedList = (values: number[]) =>
  values.reduceRight(
    (node, digit) => new ListNode(digit, node),
    null as ListNode | null,
  );

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  return toLinkedList(
    linkedListToArray([])(l1)
      .concat(linkedListToArray([])(l2))
      .sort((a, b) => (a > b ? 1 : -1)),
  );
}

console.log(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
  ),
  new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
    ),
  ),
);
