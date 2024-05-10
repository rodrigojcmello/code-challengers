export const executeDelays = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world');
    }, 2000);
  });
};
