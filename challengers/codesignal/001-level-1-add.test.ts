import { sum } from './001-level-1-add';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(100, 50)).toBe(150);
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
  });
});
