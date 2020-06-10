import { calculate } from './calculate';

const getRandomNumber = (minNumber: number, maxNumber: number) => {
  console.log(minNumber, maxNumber);
  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
};

const generateExpression = ({
  minNumber,
  maxNumber,
  availableOperations,
  expressionOperationCount,
}: {
  minNumber: number;
  maxNumber: number;
  availableOperations: string[];
  expressionOperationCount: number;
}) => {
  const operations = Array(expressionOperationCount)
    .fill(0)
    .map(
      () =>
        availableOperations[
          Math.round(Math.random() * (availableOperations.length - 1))
        ],
    );

  console.log(operations);

  return operations
    .map((operation) => [
      getRandomNumber(minNumber, maxNumber),
      operation,
      getRandomNumber(minNumber, maxNumber),
    ])
    .flat()
    .join('');
};

const expression = generateExpression({
  minNumber: 0,
  maxNumber: 100,
  availableOperations: ['+', '-', '*', '/'],
  expressionOperationCount: 5,
});

console.log(expression);

console.log(calculate(expression));
