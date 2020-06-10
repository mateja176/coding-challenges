const operatorsPrecedenceMap = {
  '*': 2,
  '/': 2,
  '+': 1,
  '-': 1,
};

type OperatorsPrecedenceMap = typeof operatorsPrecedenceMap;

type Operator = keyof OperatorsPrecedenceMap;

const toPostfix = (equation: string) => {
  const outputQueue: (string | number)[] = [];
  const operatorStack: string[] = [];

  const dumpOperators = () => {
    const operatorCount = operatorStack.length;
    for (let i = 0; i < operatorCount; i += 1) {
      outputQueue.push(operatorStack.pop() as string);
    }
  };

  equation
    .split(/(\d+)/)
    .filter(Boolean)
    .forEach((token) => {
      if (/\d/.test(token)) {
        outputQueue.push(Number(token));
      } else if (
        operatorsPrecedenceMap[token as Operator] <
        operatorsPrecedenceMap[
          operatorStack[operatorStack.length - 1] as Operator
        ]
      ) {
        dumpOperators();
        operatorStack.push(token);
      } else {
        operatorStack.push(token);
      }
    });

  dumpOperators();

  return outputQueue;
};

console.log(toPostfix('12+3'));
console.log(toPostfix('2+3-4'));
console.log(toPostfix('1+2*3-4'));
console.log(toPostfix('1+2-3/4'));

export const calculate = (equation: string): number =>
  toPostfix(equation).reduce((stack, token) => {
    if (typeof token === 'number') {
      console.log(stack, token);
      return stack.concat(token);
    }

    const [right, left, ...newStack] = stack.concat().reverse();

    switch (token) {
      case '+':
        console.log(stack, newStack, left, right);
        return newStack.reverse().concat(left + right);
      case '-':
        console.log(stack, newStack, left, right);
        return newStack.reverse().concat(left - right);
      case '*':
        console.log(stack, newStack, left, right);
        return newStack.reverse().concat(left * right);
      case '/':
        console.log(stack, newStack, left, right);
        return newStack.reverse().concat(left / right);
      default:
        return stack;
    }
  }, [] as number[])[0];

console.log(calculate('12+3'));
console.log(calculate('2+3-4'));
console.log(calculate('1+2*3*4'));
console.log(calculate('1+2-3/4+5-6/7'));
