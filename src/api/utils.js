export function encode(str) {
  return btoa(encodeURIComponent(str));
}

// export function decode(str) {
//   return decodeURIComponent(atob(str));
// }

export async function delay(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      callback(res, rej);
    }, DELAY_TIME);
  });
}

export function generateToken(salt, id) {
  return `${id.toString()}.${salt}.VERY_SECRET_TOKEN`;
}

export function decodeToken(provSalt, token) {
  const [id, salt] = token.split('.');
  if (!provSalt === salt) {
    throw new Error('invalid token');
  }
  return id;
}
