import { hourglassSum } from './hackerrank-2d-array';

const mock1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const mock2 = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];

describe('hourglassSum', () => {
  it('should return the maximum hourglass sum', () => {
    expect(hourglassSum(mock1)).toBe(19);
    expect(hourglassSum(mock2)).toBe(-19);
  });
});
