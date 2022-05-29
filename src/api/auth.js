import { delay } from './utils';
import { barbers, clients } from './db';

export function setReview({ clientId, barberId, review, star }) {
  return delay((res, rej) => {
    const barber = barbers.find((barber) => barber.id === barberId);
    barber.reviews = [
      {
        clientId,
        review,
        star,
      },
      ...barber.reviews,
    ];
    res({ success: true });
  });
}

export function login({ email, password }) {
  return delay((resolve, reject) => {
    const user = clients.find((user) => user.email === email);
    if (!user) return reject("User doesn't exist");

    if (password === user.password) {
      resolve({
        success: true,
        secretToken: user.id + '.secretToken',
      });
    } else {
      reject({ password: "Password isn't corrent" });
    }
  });
}

function registerBarber(barber) {
  return delay((resolve, reject) => {
    const {
      firstName,
      lastName,
      email,
      address,
      price,
      password,
      confirmPassword,
    } = barber;

    [firstName, lastName, email, address, price, password, confirmPassword].map(
      (field) => {
        if (!field) reject(`Validation Erorr`);
      }
    );

    if (password !== confirmPassword)
      reject({ passwordConfirmation: "Passwords don't match" });

    const newBarber = {
      id: barbers.length,
      ...barber,
      password,
    };

    delete newBarber.passwordConfirmation;

    barbers = barbers.concat(newBarber);

    resolve({ ...newBarber, password: undefined });
  });
}

async function registerClient({ email, password, confirmPassword }) {
  return delay((resolve, reject) => {
    if (confirmPassword !== password)
      reject({ passwordConfirmation: "Passwords don't match" });
    if (!email) reject({ email: "Email shouldn't be empty" });

    const newClient = {
      id: clients.length,
      email,
      password,
    };

    clients = clients.concat(newClient);
    resolve(newClient);
  });
}

export { registerBarber, registerClient };
