import { delay } from './utils';
import { barbers, clients } from './db';

export function setReview({ userId, barberId, review, star }) {
  return delay((res, rej) => {
    const user = clients.find((c) => +c.id === +userId);
    const barber = barbers.find((barber) => barber.id === barberId);

    const reviews = barber.reviews || [];

    reviews.push({
      client: {
        id: userId,
        email: user.email,
      },
      review,
      star,
    });
    barber.reviews = reviews;
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
        secretToken: user.id,
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
      id: barbers.length + 1,
      clients: [],
      reviews: [],
      ...barber,
      password,
    };

    delete newBarber.passwordConfirmation;

    barbers.push(newBarber);

    resolve({ success: true });
  });
}

async function registerClient({ email, password, confirmPassword }) {
  return delay((resolve, reject) => {
    if (confirmPassword !== password)
      reject({ passwordConfirmation: "Passwords don't match" });
    if (!email) reject({ email: "Email shouldn't be empty" });

    const newClient = {
      id: clients.length + 1,
      email,
      password,
    };

    clients.push(newClient);
    resolve({ secretToken: newClient.id });
  });
}

export { registerBarber, registerClient };
