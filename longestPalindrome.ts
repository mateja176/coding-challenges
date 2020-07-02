export default {};

function longestPalindrome(s: string): string {
  const chars = s.split('');
  return chars.reduce((totalLongest, char, i, a) => {
    if (totalLongest.length >= a.length - i) {
      return totalLongest;
    } else {
      const currentLongest = chars.reduceRight((palindrome, c, j) => {
        if (c === char) {
          const substring = s.slice(i, j + 1);
          const isPalindrome =
            substring === substring.split('').reverse().join('');
          const newPalindrome =
            isPalindrome && substring.length > palindrome.length
              ? substring
              : palindrome;
          return newPalindrome;
        } else {
          return palindrome;
        }
      }, '');
      return currentLongest.length > totalLongest.length
        ? currentLongest
        : totalLongest;
    }
  }, '');
}

console.log(longestPalindrome('babad'), 'bab');
console.log(longestPalindrome('bababad'), 'ababa');
console.log(longestPalindrome('cbbd'), 'bb');
console.log(longestPalindrome('ccc'), 'ccc');
