/* eslint-disable object-curly-newline */

export default {};

export const fibonacciSum = ({
  i = 0,
  left = 0,
  right = 1,
  n,
}: {
  i?: number;
  left?: number;
  right?: number;
  n: number;
}): number => {
  console.log(left);
  console.log(right);
  if (i < n - 1) {
    return (
      left + fibonacciSum({ i: i + 1, left: right, right: left + right, n })
    );
  } else {
    return left;
  }
};

// fibonacciSum({ i: 0, left: 0, right: 1, n: 4 })
// 0 + fibonacciSum({ i: 1, left: 1, right: 1, n: 4 })
// 0 + 1 + fibonacciSum({ i: 2, left: 1, right: 2, n: 4 })
// 0 + 1 + 1 + fibonacciSum({ i: 3, left: 2, right: 3, n: 4 })
// 0 + 1 + 1 + 2
// 4
// 2 * (3 + 4 + (4 + 5))
// 2 * (7 + 9)
// 2 * 16
// 32

console.log(fibonacciSum({ n: 4 }));

const fibonacci = ({
  i = 0,
  left = 0,
  right = 1,
  n,
}: {
  i?: number;
  left?: number;
  right?: number;
  n: number;
}): number => {
  if (i < n - 1) {
    return fibonacci({ i: i + 1, left: right, right: left + right, n });
  } else {
    return left;
  }
};

// fibonacci({ i: 0, left: 0, right: 1, n: 4 })
// fibonacci({ i: 1, left: 1, right: 1, n: 4 })
// fibonacci({ i: 2, left: 1, right: 2, n: 4 })
// fibonacci({ i: 3, left: 2, right: 3, n: 4 })
// 2

console.log(fibonacci({ n: 4 }));
