// https://www.hackerrank.com/challenges/arrays-ds/problem

const value = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const value2 = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];

const getHourglass = (
  arr: number[][],
  rowIndex: number,
  colIndex: number,
): number[][] => [
  arr[rowIndex].slice(colIndex, colIndex + 3),
  arr[rowIndex + 1].slice(colIndex + 1, colIndex + 2),
  arr[rowIndex + 2].slice(colIndex, colIndex + 3),
];

function hourglassSum(arr: number[][]): number {
  let maxSum = -Infinity;

  for (let rowIndex = 0; rowIndex <= 3; rowIndex++) {
    for (let colIndex = 0; colIndex <= 3; colIndex++) {
      const currentHourglass = getHourglass(arr, rowIndex, colIndex);
      const currentSum = currentHourglass
        .flat()
        .reduce((acc, curr) => acc + curr, 0);
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

console.log({
  sum: hourglassSum(value), // 19
});
