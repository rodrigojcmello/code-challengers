// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

export function checkPalindrome(input: string): boolean {
  if (input.length >= 1 && input.length <= Math.pow(10, 5)) {
    return input === input.split('').reverse().join('');
  }
  throw new Error('The input length must be between 1 and 10^5');
}
