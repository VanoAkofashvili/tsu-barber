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

function registerBarber({}) {}

async function registerClient({ phone, password, confirmPassword }) {
  return delay((resolve, reject) => {
    if (confirmPassword !== password)
      reject({ password: "Password don't match" });
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
