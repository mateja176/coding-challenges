export default {};

function sortByPriceAscending(jsonString: string): string {
  const articles: { name: string; price: number }[] = JSON.parse(jsonString);
  const sorted = articles.sort((a, b) => {
    const priceDiff = a.price - b.price;
    return priceDiff === 0
      ? a.name < b.name
        ? -1
        : a.name > b.name
        ? 1
        : 0
      : priceDiff;
  });
  return JSON.stringify(sorted);
}

console.log(
  sortByPriceAscending(
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]',
  ),
);
console.log(
  sortByPriceAscending(
    '[{"name":"eggplant","price":1},{"name":"ea","price":1},{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]',
  ),
);
console.log(
  sortByPriceAscending(
    '[{"name":"eggplant","price":1},{"name":"eab","price":1},{"name":"ea","price":1},{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]',
  ),
);
