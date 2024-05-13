export const numberPromise = (data: number): Promise<'odd' | 'even'> =>
  new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject('error');
    }

    if (data % 2) {
      setTimeout(() => {
        resolve('odd');
      }, 1000);
    } else {
      setTimeout(() => {
        reject('even');
      }, 2000);
    }
  });
