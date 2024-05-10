import { executeDelays } from './execute-delays';

describe('executeDelays function', () => {
  it('2s delay', async () => {
    jest.useRealTimers();

    const result = await executeDelays();
    expect(result).toBe('hello world');
  });

  it('should take 2 seconds to execute', async () => {
    jest.useRealTimers();

    const startTime = Date.now();

    await executeDelays();

    const endTime = Date.now();

    const executionTime = endTime - startTime;

    expect(executionTime).toBeGreaterThanOrEqual(2000);
    expect(executionTime).toBeLessThanOrEqual(2100);
  });
});
