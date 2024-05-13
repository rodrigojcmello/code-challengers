import { numberPromise } from './numberPromise';

describe('numberPromise', () => {
  it('should return a promise rejected instantly and give the data "error" (in a string), if data is not a number', async () => {
    const delay = numberPromise('text' as any);

    await expect(delay).rejects.toBe('error');
  });

  it('should return a promise resolved 1 second later and give the data "odd" (in a string), if data is a odd', async () => {
    const delay = await numberPromise(3);

    expect(delay).toBe('odd');
  });

  it('should return a promise rejected 2 seconds later and give the data "even" (in a string), if data is an even', async () => {
    const delay = numberPromise(6);

    await expect(delay).rejects.toBe('even');
  });
});
