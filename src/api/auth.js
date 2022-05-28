import { SALT } from './constants';
import { encode, delay, generateToken } from './utils';

let barbers = [
  {
    id: 1,
    firstName: 'vaniko',
    lastName: 'akopashvili',
    email: 'vanikoakofa@mgial.com',
    address: 'tbilisi',
    price: 100,
    password: 'vano1234',
  },
  {
    id: 2,
    firstName: 'vaniko',
    lastName: 'akopashvili',
    email: 'vanikoakofa@mgial.com',
    address: 'tbilisi',
    price: 100,
    password: 'vano1234',
  },
  {
    id: 3,
    firstName: 'vaniko',
    lastName: 'akopashvili',
    email: 'vanikoakofa@mgial.com',
    address: 'tbilisi',
    price: 100,
    password: 'vano1234',
  },
];
let clients = [];

export function login({ email, password }) {
  return delay((resolve, reject) => {
    const user = clients.find((user) => user.email === email);
    if (!user) return reject("User doesn't exist");

    if (encode(password) === user.password) {
      resolve({
        success: true,
        secretToken: generateToken(SALT, user.id),
        user: user,
      });
    } else {
      reject({ password: "Password isn't corrent" });
    }
  });
}

export function getAllBarbers() {
  return delay((res) => {
    res(barbers);
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
