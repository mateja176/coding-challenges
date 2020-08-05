export default {};

const encodeString = (s: string): string => {
  const chars = s.split('');
  return chars
    .slice(1)
    .concat('')
    .reduce(
      ({ encoded, streak }, char) => {
        if (streak.includes(char)) {
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
      { encoded: '', streak: [chars[0]] }
    ).encoded;
};

console.assert(encodeString('AAAABBBXYCCDAA') === '4A3BXY2CD2A');
