import { encode, decode } from './utils';
const DELAY_TIME = 1000; // 1s

let barbers = [];
let clients = [];

async function delay(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      callback(res, rej);
    }, DELAY_TIME);
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
      password: encode(password),
    };

    delete newBarber.passwordConfirmation;

    barbers = barbers.concat(newBarber);

    resolve({ ...newBarber, password: undefined });
  });
}

async function registerClient({ phone, password, confirmPassword }) {
  return delay((resolve, reject) => {
    if (confirmPassword !== password)
      reject({ passwordConfirmation: "Passwords don't match" });
    if (!phone) reject({ phone: "Phone shouldn't be empty" });

    const newClient = {
      id: clients.length,
      phone,
      password: encode(password),
    };

    clients = clients.concat(newClient);
    resolve(newClient);
  });
}

export { registerBarber, registerClient };
