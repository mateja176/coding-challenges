function maxArea(heights: number[]): number {
  return heights
    .map((h, i) => [i, h])
    .reduce((max, [w, h], i, a) => {
      const currentMax = a
        .slice(i)
        .reduce((currentMaxArea, [width, height]) => {
          const x = width - w;
          const y = Math.min(height, h);

          return Math.max(currentMaxArea, x * y);
        }, 0);

      return Math.max(max, currentMax);
    }, 0);
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
