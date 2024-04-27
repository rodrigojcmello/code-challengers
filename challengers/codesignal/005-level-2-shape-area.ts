export const shapeArea = (n: number): number => {
  const dimension = n * 2 - 1;
  const totalArea = dimension * dimension;
  const emptyArea = (dimension - 1) * n;

  return totalArea - emptyArea;
};

export const shapeAreaAI = (n: number): number => {
  return n * n + (n - 1) * (n - 1);
};
