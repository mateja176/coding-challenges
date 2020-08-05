export default {};

interface Class {
  start: number;
  end: number;
}

const numberOfAmphitheaters = (classes: Class[]): number => {
  if (classes.length === 0) {
    return 0;
  } else {
    const sorted = classes.sort((a, b) => a.end - b.end);
    return sorted.reduce(
      ({ max, overlapping }, current) => {
        if (overlapping.length === 0) {
          if (max === 0) {
            return { max: 1, overlapping: [current] };
          } else {
            return { max, overlapping: [current] };
          }
        } else {
          if (overlapping[overlapping.length - 1].end > current.start) {
            const index = overlapping.findIndex(
              ({ end }) => end <= current.start
            );
            if (index === -1) {
              const newOverlapping = overlapping.concat(current);
              return {
                max: Math.max(max, newOverlapping.length),
                overlapping: newOverlapping,
              };
            } else {
              return {
                max,
                overlapping: overlapping.slice(0, index),
              };
            }
          } else {
            return { max: overlapping.length, overlapping: [] };
          }
        }
      },
      { max: 0, overlapping: [] as Class[] }
    ).max;
  }
};

console.assert(
  numberOfAmphitheaters([
    { start: 10, end: 15 },
    { start: 20, end: 30 },
  ]) === 1
);

console.assert(
  numberOfAmphitheaters([
    { start: 10, end: 25 },
    { start: 20, end: 30 },
  ]) === 2
);

console.assert(
  numberOfAmphitheaters([
    { start: 10, end: 20 },
    { start: 30, end: 40 },
    { start: 15, end: 25 },
  ]) === 2
);

console.assert(
  numberOfAmphitheaters([
    { start: 10, end: 25 },
    { start: 20, end: 40 },
    { start: 35, end: 50 },
  ]) === 2
);

console.assert(
  numberOfAmphitheaters([
    { start: 0, end: 10 },
    { start: 1, end: 11 },
    { start: 2, end: 12 },
    { start: 12, end: 22 },
    { start: 13, end: 23 },
  ]) === 3
);

console.assert(
  numberOfAmphitheaters([
    { start: 0, end: 10 },
    { start: 1, end: 11 },
    { start: 2, end: 12 },
    { start: 11, end: 12 },
    { start: 12, end: 22 },
    { start: 13, end: 23 },
  ]) === 3
);
