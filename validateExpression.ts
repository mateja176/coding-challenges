export default {};

const digits = Array(10)
  .fill(1)
  .map((_, i) => i)
  .map(String);

const operators = ['+', '-', '*', '/'];

const validateExpression = (expression: string): boolean => {
  const stack: string[] = [];
  let lastToken = '';
  let isValid = true;

  const chars = expression.split('');
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (digits.includes(char)) {
      lastToken = char;
    } else if (operators.includes(char)) {
      if (digits.includes(lastToken)) {
        lastToken = char;
      } else {
        isValid = false;
        break;
      }
    } else if ('(' === char) {
      stack.push(char);
    } else if (')' === char) {
      const last = stack.pop();

      if (last !== '(') {
        isValid = false;
        break;
      }
    } else if (char !== ' ') {
      isValid = false;
      break;
    }
  }

  return isValid && stack.length === 0 && !operators.includes(lastToken);
};

console.assert(validateExpression('2 + 2') === true, '2 + 2');
console.assert(validateExpression('2 +2') === true, '2 +2');
console.assert(validateExpression('4 * (35)') === true, '4 * (35)');
console.assert(validateExpression('4 * (((35)))') === true, '4 * (((35)))');
console.assert(
  validateExpression('23113132131242142154 * 35213515355153251') === true,
  '23113132131242142154 * 35213515355153251',
);
console.assert(
  validateExpression('4 * ((12 * 3) + 35)') === true,
  '4 * ((12 * 3) + 35)',
);
console.assert(
  validateExpression('4 * ((12 * 3)) + 35)') === false,
  '4 * ((12 * 3)) + 35)',
);
console.assert(
  validateExpression('4 x ((12 * 3) + 35)') === false,
  '4 x ((12 * 3) + 35)',
);
console.assert(
  validateExpression('4 ** ((12 * 3) + 35)') === false,
  '4 ** ((12 * 3) + 35)',
);
console.assert(
  validateExpression('4 * ((12 * 3) +)') === false,
  '4 * ((12 * 3) +)',
);
console.assert(
  validateExpression('4 * ((12 *) + 35)') === false,
  '4 * ((12 *) + 35)',
);
console.assert(
  validateExpression('4 * ((* 3) + 35)') === false,
  '4 * ((* 3) + 35)',
);
console.assert(validateExpression('* 4') === false, '* 4');
