export default {};

interface Class {
  start: number;
  end: number;
}

const numberOfClassrooms = (classes: Class[]): number => {
  if (classes.length === 0) {
    return 0;
  } else {
    return classes
      .sort((a, b) => a.end - b.end)
      .reduce((total, current, i, a) => {
        const next = a[i + 1];
        if (next) {
          return current.end > next.start ? total + 1 : total;
        } else {
          return total;
        }
      }, 1);
  }
};

console.assert(
  numberOfClassrooms([
    { start: 10, end: 15 },
    { start: 20, end: 30 },
  ]) === 1
);

console.assert(
  numberOfClassrooms([
    { start: 10, end: 25 },
    { start: 20, end: 30 },
  ]) === 2
);

console.assert(
  numberOfClassrooms([
    { start: 10, end: 20 },
    { start: 30, end: 40 },
    { start: 15, end: 25 },
  ]) === 2
);

console.assert(
  numberOfClassrooms([
    { start: 10, end: 25 },
    { start: 20, end: 40 },
    { start: 35, end: 50 },
  ]) === 3
);
