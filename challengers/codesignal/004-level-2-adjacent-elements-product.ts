// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

// Tip: If your loop has an external variable that is being updated, you can use the reduce method to simplify the code.

export const adjacentElementsProduct = (input: number[]): number => {
  if (input.length < 2 || input.length > 10) throw new Error('Invalid input');

  return input.reduce((max, curr, i) => {
    if (curr < -1000 || curr > 1000) throw new Error('Invalid input');
    const product = curr * input[i + 1];
    return product > max ? product : max;
  }, -Infinity);
};
