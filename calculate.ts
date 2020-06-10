export function calculate(equation: string): number {
  return equation.split('+').reduce((sum, addend) => {
    const difference = addend
      .split('-')
      .reduce((_difference, subtrahend, i) => {
        const product = subtrahend.split('*').reduce((_product, multiplier) => {
          const dividend = multiplier
            .split('/')
            .reduce((_dividend, divisor, j) => {
              const parsed = Number(divisor);
              return j === 0 ? _dividend * parsed : _dividend / parsed;
            }, 1);
          return _product * dividend;
        }, 1);
        return i === 0 ? _difference + product : _difference - product;
      }, 0);
    return sum + difference;
  }, 0);
}

console.log(calculate('2+3'));
console.log(calculate('2+3-4'));
console.log(calculate('2+3-4*2'));
console.log(calculate('2+3-4*2/3'));
