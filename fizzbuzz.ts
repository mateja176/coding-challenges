const readLine = () => '15';

function fizzBuzz(n: number) {
  let result = '';

  Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .forEach((i) => {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'FizzBuzz\n';
      } else if (i % 5 === 0) {
        result += 'Buzz\n';
      } else if (i % 3 === 0) {
        result += 'Fizz\n';
      } else {
        result += `${i} \n`;
      }
    });

  console.log(result.trim());
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  fizzBuzz(n);
}

main();
