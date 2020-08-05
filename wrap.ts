export default {};

function wrap<F extends (...params: any[]) => any>(execute: F) {
  let thrown = false;

  return (...params: Parameters<F>): ReturnType<F> | null => {
    if (thrown) {
      return null;
    } else {
      let result = null;

      try {
        result = execute(...params);
      } catch (error) {
        thrown = true;

        return null;
      }

      return result;
    }
  };
}

const errorExec = wrap(function () {
  throw new Error('Error');
});
const resultExec = wrap(function () {
  return 'Result';
});

console.log(errorExec()); // Should output null
console.log(errorExec()); // Should output null
console.log(resultExec()); // Should output "Result"
const erroneous = () => {
  throw new Error('Erroneous');
};
const wrapped = wrap(erroneous);
console.log(wrapped()); // null
console.log(wrapped()); // null
console.log(wrap(() => 1)()); // null
