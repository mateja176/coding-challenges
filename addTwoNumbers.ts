export default {};

class ListNodeC {
  val: number;

  next: ListNodeC | null;

  constructor(val = 0, next: ListNodeC | null = null) {
    this.val = val;
    this.next = next;
  }
}

const getDigits = (digits: number[]) => (l: ListNodeC | null): number[] => {
  if (l) {
    const addedDigits = digits.concat(l.val);
    return l.next ? getDigits(addedDigits)(l.next) : addedDigits;
  }
  return digits;
};

const getSum = (digits: number[]) => BigInt(digits.concat().reverse().join(''));

const toListNode = (digits: number[]) =>
  digits.reduceRight(
    (node, digit) => new ListNodeC(digit, node),
    null as ListNodeC | null,
  );

function addTwoNumbers(
  l1: ListNodeC | null,
  l2: ListNodeC | null,
): ListNodeC | null {
  console.log(l1);
  const leftDigits: number[] = getDigits([])(l1);
  const rightDigits: number[] = getDigits([])(l2);
  console.log(leftDigits);
  console.log(rightDigits);

  const leftTotal = getSum(leftDigits);
  const rightTotal = getSum(rightDigits);
  console.log(leftTotal);
  console.log(rightTotal);

  const total = leftTotal + rightTotal;
  console.log(total);

  const array = total.toString().split('').map(Number).reverse();
  console.log(array);

  const node = toListNode(array);
  console.log(node);

  return node;
}

console.log(addTwoNumbers(null, null));

console.log(
  addTwoNumbers(
    new ListNodeC(1, new ListNodeC(2)),
    new ListNodeC(3, new ListNodeC(4)),
  ),
);

console.log(
  addTwoNumbers(
    new ListNodeC(2, new ListNodeC(4, new ListNodeC(3))),
    new ListNodeC(5, new ListNodeC(6, new ListNodeC(4))),
  ),
);

const a = [
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
];

const b = [5, 6, 4];

console.log(addTwoNumbers(toListNode(a), toListNode(b)));

const c = [1, 8];
const d = [0];

console.log(addTwoNumbers(toListNode(c), toListNode(d)));
