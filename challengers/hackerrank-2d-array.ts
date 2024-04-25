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

function getHourglass(
  arr: number[][],
  rowIndex: number,
  colIndex: number,
): number[][] {
  const hourglass = [];
  hourglass.push(arr[rowIndex].slice(colIndex, colIndex + 3));
  hourglass.push(arr[rowIndex + 1].slice(colIndex + 1, colIndex + 2));
  hourglass.push(arr[rowIndex + 2].slice(colIndex, colIndex + 3));
  return hourglass;
}

function hourglassSum(arr: number[][]): number {
  let sum = 0;

  arr.forEach((row, rowIndex) => {
    if (rowIndex <= 3) {
      row.forEach((col, colIndex) => {
        if (colIndex <= 3) {
          const currentHourglass = getHourglass(arr, rowIndex, colIndex);
          console.log({ currentHourglass });
          const currentSum = currentHourglass
            .flat()
            .reduce((acc, curr) => acc + curr, 0);
          if (rowIndex === 0 && colIndex === 0) {
            sum = currentSum;
          } else if (currentSum > sum) {
            sum = currentSum;
          }
        }
        return sum;
      });
    }
  });

  return sum;
}

console.log({
  sum: hourglassSum(value), // 19
});
