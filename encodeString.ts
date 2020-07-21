export default {};

const encodeString = (s: string): string => {
  const chars = s.split('');
  return chars.concat('').reduce(
    ({ encoded, streak }, char) => {
      if (streak.length === 0) {
        return { encoded: '', streak: [char] };
      } else if (streak.includes(char)) {
        return { encoded, streak: streak.concat(char) };
      } else {
        return {
          encoded: encoded
            .concat(streak.length === 1 ? '' : streak.length.toString())
            .concat(streak[0]),
          streak: [char],
        };
      }
    },
    { encoded: '', streak: [] as string[] },
  ).encoded;
};

console.assert(encodeString('AAAABBBXYCCDAA') === '4A3BXY2CD2A');
