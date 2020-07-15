/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */

export default {};

const parentMap: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '[',
};

const opening = Object.values(parentMap);

function longestValidParentheses(input: string): number {
  const s = input.replace(/^\)/, '').replace(/\($/, '');
  if (s.length <= 1) {
    return 0;
  } else {
    const chars = s.split('');

    return chars.reduce((longest, char, i) => {
      if (longest.length > s.length - i) {
        return longest;
      }
      const slice = chars.slice(i);

      const current = slice.reduce(
        ({ isValid, stack, subLongest, firstOpeningIndex }, subChar, j) => {
          if (!isValid) {
            return { isValid, stack, subLongest, firstOpeningIndex };
          } else if (opening.includes(subChar)) {
            return {
              isValid,
              stack: stack.concat(subChar),
              subLongest: subLongest.concat(subChar),
              firstOpeningIndex: stack.length === 0 ? j : firstOpeningIndex,
            };
          } else {
            const [last, ...rest] = stack.concat().reverse();
            if (last === parentMap[subChar]) {
              return {
                isValid,
                stack: rest.reverse(),
                subLongest: subLongest.concat(subChar),
                firstOpeningIndex,
              };
            } else {
              return { isValid: false, stack, subLongest, firstOpeningIndex };
            }
          }
        },
        {
          isValid: true,
          stack: [] as string[],
          subLongest: '',
          firstOpeningIndex: -1,
        },
      );

      const currentLongest =
        current.stack.length === 0
          ? current.subLongest
          : slice.slice(0, current.firstOpeningIndex).join('');

      return currentLongest.length > longest.length ? currentLongest : longest;
    }, '').length;
  }
}

console.log(longestValidParentheses('()'));
// console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('()('));
console.log(longestValidParentheses('()(('));
// console.log(longestValidParentheses('((((()())()()))()(()))'));
// console.log(longestValidParentheses('(((((()())()()))()(()))'));
// console.log(longestValidParentheses(')(((((()())()()))()(()))'));
// console.log(longestValidParentheses(')(((((()())()()))()(()))'));
console.log(longestValidParentheses(')(((((()())()()))()(()))('));
console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses('()()(()('));
console.log(longestValidParentheses('(())()(()(('));
console.log(longestValidParentheses(')()())()()('));
console.log(
  longestValidParentheses(
    '())()()(())((()(()()(((()))((((())((()(())()())(()((((()))()(()))(())()(())(()(((((())((((((()())())(()(()((())()))(()))))))()(()))((((())()()()))()()()(((()(()())(()()(()(()()(((()))))))()()))())())((()()))))))((()))(((()((())()(()()))((())))()()())))))))()))))(()))))()))()))()((())))((()))(()))))))(((()))))))))()(()()()(())((())()))()()(())))()()))(()())()))(((()())()))((())((((()))(()(()(()()()(((())()(((((()))((()(((((())(()()))((((((((()(()(()(()(())))(())(()())())(()((((()(())((()(())))(())))()(((((()(()()(())))))))())(())(())(()()(((())))((()))(((((()))))())))()((()))()))))())))))((())(((((()()))((((())))(((()(()(())())(((()(()(()()()())))())()))((()((())())()()()(((())(((((()((((((()((()())))((((())((()(((((((()(()((()()()(()(()())(()(()()((((())))()(((()())))(()()))()(()()()()(((((())(()))))((()))())))()((((((()))())))()(()))(())))((((()())(((((()()())(((((())(()())(()))))()(()()))()))))))())))(((())(()(()()))(()))()(((())))())((((()(((()))))))()(()(()))()()(()()))))))))((()))))))(())((()((()))()))((((((()())))))(()((())((((()))))(()(()()()()(()))()()(()(()))(()()(((((((()())(())(()())((())())()(()())((())()())())(()())))())))(())())())(())((()())(((()()))()))()()))()(()(())((((((((())))()((())((()((((((((((()))))(()(((((())(()(()())())))((())())))))()))(()((()()))((()((())()()()((()(())())((())())(()()(((())))))())()()(()))()())(()(()((())))((((()()(())))())(())(()(()(())())())(()()())()(())())))(()()(((())))((()()(((())()()(()())((((()()(()())(()((((()(()()(()(()(((()((()())(()()))(()((((()(((((()))))()()))(((()((((((()(()()()()())()))(()(())))))((()(((()())())))(((()()))(()(()(((((((()()))(()(())))())()(())())(())(()))(())(()))()()(()()())))))()))()((())(((()((((((((())()()))())))((()())(',
  ),
);
