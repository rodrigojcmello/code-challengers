import { checkPalindrome } from './003-level-1-check-palindrome';

describe('checkPalindrome', () => {
  it('should return true if the given string is a palindrome', () => {
    expect(checkPalindrome('ama')).toBeTruthy();
    expect(checkPalindrome('civic')).toBeTruthy();
    expect(checkPalindrome('like')).toBeFalsy();
  });
  it('should throw an error if the input length is less than 1', () => {
    expect(() => checkPalindrome('')).toThrow(
      'The input length must be between 1 and 10^5',
    );
  });
});
