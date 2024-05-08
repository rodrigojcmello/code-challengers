const delay = (callback: () => void, ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, ms);
  });
};

export const multipleSetTimeouts = async () => {
  const result: string[] = [];

  const x = (value: string) => {
    result.push(value);
  };

  await delay(() => x('A'), 1000);
  await delay(() => x('B'), 0);
  await delay(() => x('C'), 100);

  return result;
};
