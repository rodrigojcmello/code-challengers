import { centuryFromYear } from './002-level-1-century-from-year';

describe('centuryFromYear', () => {
  it('should return the century from a given year', () => {
    expect(centuryFromYear(1905)).toBe(20);
    expect(centuryFromYear(1700)).toBe(17);
    expect(centuryFromYear(1459)).toBe(15);
  });
});
