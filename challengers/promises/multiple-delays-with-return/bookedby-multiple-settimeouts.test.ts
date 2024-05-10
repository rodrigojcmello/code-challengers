import { multipleSetTimeouts } from './bookedby-multiple-settimeouts';

describe('multiple setTimeouts', () => {
  it('multipleSetTimeouts', async () => {
    jest.useRealTimers();

    expect(await multipleSetTimeouts()).toEqual(['A', 'B', 'C']);
  });
});
