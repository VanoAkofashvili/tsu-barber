import { delay } from './utils';
import { barbers } from './db';

export function getBarber({ id }) {
  return delay((res, rej) => {
    res(barbers.find((b) => String(b.id) === String(id)) || null);
  });
}

export function getAllBarbers() {
  return delay((res) => {
    res(
      barbers.map(({ firstName, lastName, price, id }) => ({
        firstName,
        lastName,
        price,
        id,
      }))
    );
  });
}