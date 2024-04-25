// https://www.hackerrank.com/challenges/arrays-ds/problem

const arrayValue = [1, 4, 3, 2];

function reverseArray(array: number[]): number[] {
  return array.slice().reverse();
}

console.log({
  reversedArray: reverseArray(arrayValue), // [2, 3, 4, 1]
  originalArray: arrayValue,
  literalArray: [1, 4, 3, 2],
});
