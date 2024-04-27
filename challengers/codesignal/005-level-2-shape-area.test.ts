import { shapeArea } from './005-level-2-shape-area';

describe('shapeArea', () => {
  it('should return the area of a polygon for a given n', () => {
    expect(shapeArea(1)).toBe(1);
    expect(shapeArea(2)).toBe(5);
    expect(shapeArea(3)).toBe(13);
    expect(shapeArea(5)).toBe(41);
  });
});
