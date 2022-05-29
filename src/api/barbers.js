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

export function order(barberId, token) {
  return delay((res) => {
    const userId = token.split('.')[0];
    const barber = barbers.find((b) => String(b.id) === String(barberId));
    const clients = barber.clients || [];
    clients.push(+userId);
    barber.clients = clients;
    res({ success: true });
  });
}
