import { DELAY_TIME } from './constants';

export async function delay(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      callback(res, rej);
    }, DELAY_TIME);
  });
}
