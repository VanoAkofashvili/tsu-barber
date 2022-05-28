import { encode, decode, delay, generateToken } from './utils';
const DELAY_TIME = 1000; // 1s
const SALT = 'asdf';
let barbers = [];
let clients = [];

export function login({ email, password }) {
  return delay((resolve, reject) => {
    const user = clients.find((user) => user.email === email);
    if (!user) reject("User doesn't exist");

    if (encode(password) === user.password) {
      resolve({
        success: true,
        secretToken: generateToken(salt, user.id),
        user: user,
      });
    } else {
      reject({ password: "Password isn't corrent" });
    }
  });
}

export function getAllBarbers() {
  return barbers;
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

async function registerClient({ email, password, confirmPassword }) {
  return delay((resolve, reject) => {
    if (confirmPassword !== password)
      reject({ passwordConfirmation: "Passwords don't match" });
    if (!email) reject({ email: "Email shouldn't be empty" });

    const newClient = {
      id: clients.length,
      email,
      password: encode(password),
    };

    clients = clients.concat(newClient);
    resolve(newClient);
  });
}

export { registerBarber, registerClient };
