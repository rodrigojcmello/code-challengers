import { reverseArray } from './hackerrank-arrays-ds';

describe('reverseArray', () => {
  it('should return the reversed array', () => {
    expect(reverseArray([1, 4, 3, 2])).toEqual([2, 3, 4, 1]);
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
