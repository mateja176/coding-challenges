function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`).test(s);
}

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'aa'));
