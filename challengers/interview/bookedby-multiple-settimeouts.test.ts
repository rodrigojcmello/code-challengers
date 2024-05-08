import { multipleSetTimeouts } from './bookedby-multiple-settimeouts';

describe('multiple setTimeouts', () => {
  it('multipleSetTimeouts', async () => {
    expect(await multipleSetTimeouts()).toEqual(['A', 'B', 'C']);
  });
});
