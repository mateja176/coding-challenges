function meanderingArray(unsorted: number[]) {
  const sorted = unsorted.sort((a, b) => (a < b ? -1 : 1));

  const middleIndex = sorted.length / 2;

  const half = sorted.filter((_, i) => i < Math.ceil(middleIndex));

  const isPaired = middleIndex === Math.round(middleIndex);

  const [middle, ..._lowerHalf] = half.slice().reverse();

  const lowerHalf = isPaired ? half : _lowerHalf.reverse();

  const meandering = lowerHalf.reduce((_meandering, n, i) => {
    const negated = -i;
    const opposite = sorted.slice(negated - 1, i === 0 ? Infinity : negated);
    return _meandering.concat(opposite, n);
  }, []);

  const result = isPaired ? meandering : meandering.concat(middle);
  return result;
}

meanderingArray([-1, 1, 2, 3, -5]);
