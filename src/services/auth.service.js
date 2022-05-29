import httpClient from '.';

export async function login(email, password) {
  const { data } = await httpClient.get(`/users`);
  const user = data.find((user) => user.email === email);
  if (!user) {
    throw new Error("User doesn't exist");
  }

  if (user.password === password) {
    return user.id;
  }
}

export async function registerBarber({
  firstName,
  lastName,
  email,
  address,
  price,
  password,
}) {
  const { data: all } = await httpClient.get('/barbers');
  console.log(all);
  const exists = all.find((barber) => barber.email === email);
  if (exists) {
    throw new Error('Barber with provided email already exists');
  }
  const { data } = await httpClient.post('/barbers', {
    firstName,
    lastName,
    email,
    address,
    price,
    password,
    clients: [],
    reviews: [],
  });
  return data;
}

export async function registerClient(email, password) {
  const { data: all } = await httpClient.get('/users');
  if (all.find((user) => user.email === email)) {
    throw new Error('User already exists with this email');
  }

  const { data } = await httpClient.post('/users', {
    email,
    password,
  });

  return { userId: data.id };
}
