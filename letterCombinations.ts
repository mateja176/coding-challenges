/* eslint-disable indent */
/* eslint-disable no-extend-native */

const phoneLetterGroup: string[][] = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

const flatMap = <A>(cb: (a: A) => A[]) => (a: A[]) =>
  a.reduce((b, c) => b.concat(cb(c)), [] as A[]);

const getCombinations = (combinations: string[]) => (
  letterGroups: string[][],
): string[] => {
  const group = letterGroups[combinations.length] || [];
  if (combinations.length < letterGroups.length - 1) {
    return flatMap((letter: string) =>
      getCombinations(combinations.concat(letter))(letterGroups),
    )(group);
  } else {
    return group.map((letter) => combinations.concat(letter).join(''));
  }
};

function letterCombinations(digits: string): string[] {
  const letterGroups = digits
    .split('')
    .map(Number)
    .map((digit) => phoneLetterGroup[digit - 2]);

  return getCombinations([])(letterGroups);
}

console.log(letterCombinations(''));
// console.log(letterCombinations('23'));
// console.log(letterCombinations('234').length);
// console.log(letterCombinations('2345').length);
