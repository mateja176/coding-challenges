export default {};

const flatMap = <A>(a: A[]) => (cb: (a: A) => A[]) =>
  a.reduce((b, c) => b.concat(cb(c)), [] as A[]);

const parentMapString: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isValid(s: string): boolean {
  return (
    s.split('').reduce(
      ({ valid, stack }, parent) => {
        if (!valid) {
          return { valid, stack };
        } else if (Object.values(parentMapString).includes(parent)) {
          return { valid: true, stack: stack.concat(parent) };
        } else {
          const [last, ...rest] = stack.slice().reverse();
          if (last === parentMapString[parent]) {
            return { valid: true, stack: rest.reverse() };
          } else {
            return { valid: false, stack: [last] };
          }
        }
      },
      { valid: true, stack: [] as string[] },
    ).stack.length === 0
  );
}

/**
((
))
()
)(


(((
(()
())
()(

)))
))(
)((
)()


((((
((()
(())
(()(

()))
())(
()((
()()

)(((
)(()
)())
)()(

))))
)))(
))((
))()

 */

const pair = ['(', ')'];

const two = flatMap(pair)((parent) =>
  pair.map((_parent) => [parent, _parent].join('')),
);

console.log(two);

const three = flatMap(two)((combination) =>
  pair.map((parent) => parent.concat(combination)),
);

const four = flatMap(three)((combination) =>
  pair.map((parent) => parent.concat(combination)),
);

console.log(four.length);

const generateCombinations = (combinations: string[]) => (
  n: number,
): string[] => {
  if (combinations.length < 2 ** n) {
    return generateCombinations(
      flatMap(combinations)((combination) =>
        pair.map((parent) => parent.concat(combination)),
      ),
    )(n);
  } else {
    return combinations;
  }
};

console.log(generateCombinations(two)(4).filter(isValid));
console.log(generateCombinations(two)(6).filter(isValid));

function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return ['()'];
  } else {
    const combinations = generateCombinations(two)(n * 2);
    return combinations.filter(isValid);
  }
}

console.log(generateParenthesis(1), ['()']);

console.log(generateParenthesis(2), ['(())', '()()']);

console.log(generateParenthesis(3), [
  '((()))',
  '(()())',
  '(())()',
  '()(())',
  '()()()',
]);

// console.log(generateParenthesis(4), [
//   '(((())))',
//   '(()()())',
//   '((()))()',
//   '(())()()',
//   '(())(())',
//   '((()()))',
//   '()((()))',
//   '()()(())',
//   '()()()()',
// ]);
