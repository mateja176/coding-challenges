// const parentMap = {
//   ')': '(',
//   '}': '{',
//   ']': '[',
// } as const;
// type ParentMap = typeof parentMap;
// type OpeningParent = ParentMap[keyof ParentMap];
// type ClosingParent = keyof ParentMap;
// type Parent = OpeningParent | ClosingParent;

// function isValid(s: string): boolean {
//   return (
//     (s.split('') as Parent[]).reduce(
//       ({ valid, stack }, parent) => {
//         if (!valid) {
//           return { valid, stack };
//         } else if (Object.values(parentMap).includes(parent as OpeningParent)) {
//           return { valid: true, stack: stack.concat(parent) };
//         } else {
//           const [last, ...rest] = stack.slice().reverse();
//           if (last === parentMap[parent as ClosingParent]) {
//             return { valid: true, stack: rest.reverse() };
//           } else {
//             return { valid: false, stack };
//           }
//         }
//       },
//       { valid: true, stack: [] as Parent[] },
//     ).stack.length === 0
//   );
// }

const parentMapString: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '[',
};

// function isValidString(s: string): boolean {
//   return (
//     s.split('').reduce(
//       ({ valid, stack }, parent) => {
//         if (!valid) {
//           return { valid, stack };
//         } else if (Object.values(parentMapString).includes(parent)) {
//           return { valid: true, stack: stack.concat(parent) };
//         } else {
//           const [last, ...rest] = stack.slice().reverse();
//           if (last === parentMapString[parent]) {
//             return { valid: true, stack: rest.reverse() };
//           } else {
//             return { valid: false, stack: [last] };
//           }
//         }
//       },
//       { valid: true, stack: [] as string[] },
//     ).stack.length === 0
//   );
// }

// const isValidHeuristic = (s: string): boolean => {
//   if (s === '') {
//     return true;
//   }
//   if (!/(\)|\}|])/.test(s)) {
//     return false;
//   }
//   const valid = s.split('').reduce((currentValid, char, i, a) => {
//     const previous = a[i - 1];
//     return (
//       currentValid &&
//       (!Object.keys(parentMapString).includes(char) ||
//         Object.keys(parentMapString).includes(previous) ||
//         previous === parentMapString[char])
//     );
//   }, true);

//   return valid;
// };

const isValid = (s: string): boolean => {
  // * contains opening parenthesis which may or may not have a pair
  const stack: string[] = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    // * char is opening bracket
    if (Object.values(parentMapString).includes(char)) {
      stack.push(char);
      // * char is closing bracket
    } else if (stack[stack.length - 1] === parentMapString[char]) {
      stack.pop();
    } else {
      break;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('(('));
console.log(isValid('([]'));
console.log(
  isValid('({[(()(([{}{{[{}()]{([]([()]))}}}]((([[[{}()]]](((())))))))))]})'),
);
