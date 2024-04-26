import { adjacentElementsProduct } from './004-level-2-adjacent-elements-product';

describe('adjacentElementsProduct', () => {
  it('should return the largest adjacent elements product', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
    expect(adjacentElementsProduct([-1, -2])).toBe(2);
    expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6);
  });
  it('should throw an error for invalid input', () => {
    expect(() => adjacentElementsProduct([1])).toThrowError('Invalid input');
    expect(() =>
      adjacentElementsProduct([1, 5, 3, 10, 5, 10, 5, 3, 1, 8, 7]),
    ).toThrowError('Invalid input');
  });
});
