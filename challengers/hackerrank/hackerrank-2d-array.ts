// https://www.hackerrank.com/challenges/arrays-ds/problem

const getHourglass = (
  arr: number[][],
  rowIndex: number,
  colIndex: number,
): number[][] => [
  arr[rowIndex].slice(colIndex, colIndex + 3),
  arr[rowIndex + 1].slice(colIndex + 1, colIndex + 2),
  arr[rowIndex + 2].slice(colIndex, colIndex + 3),
];

export function hourglassSum(arr: number[][]): number {
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
