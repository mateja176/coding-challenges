const parentMap = {
  ')': '(',
  '}': '{',
  ']': '[',
} as const;
type ParentMap = typeof parentMap;
type OpeningParent = ParentMap[keyof ParentMap];
type ClosingParent = keyof ParentMap;
type Parent = OpeningParent | ClosingParent;

function isValid(s: string): boolean {
  return (
    (s.split('') as Parent[]).reduce(
      ({ valid, stack }, parent) => {
        if (!valid) {
          return { valid, stack };
        } else if (Object.values(parentMap).includes(parent as OpeningParent)) {
          return { valid: true, stack: stack.concat(parent) };
        } else {
          const [last, ...rest] = stack.slice().reverse();
          if (last === parentMap[parent as ClosingParent]) {
            return { valid: true, stack: rest.reverse() };
          } else {
            return { valid: false, stack: [last] };
          }
        }
      },
      { valid: true, stack: [] as Parent[] },
    ).stack.length === 0
  );
}

const parentMapString = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isValidString(s: string): boolean {
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

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
