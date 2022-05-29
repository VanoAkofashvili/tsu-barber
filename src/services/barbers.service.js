import httpClient from '.';

export async function getAllBarbers() {
  const { data } = await httpClient.get('/barbers');
  return data.map(({ firstName, lastName, price, id }) => ({
    firstName,
    lastName,
    price,
    id,
  }));
}

export async function getBarber(id) {
  const { data } = await httpClient.get(`/barbers/${id}`);
  return data;
}

export async function order(barberId, userId) {
  const { data: barber } = await httpClient.get('/barbers/' + barberId);
  const updatedBarber = { ...barber, clients: [userId, ...barber.clients] };

  const { data } = await httpClient.put('/barbers/' + barberId, updatedBarber);
  return { success: true };
}

export async function createReview(barberId, userId, review, star) {
  const { data: barber } = await httpClient.get('/barbers/' + barberId);
  const updated = {
    ...barber,
    reveiws: [
      {
        client: {
          id: userId,
          email: user.email,
        },
        review,
        star,
      },
      ...barber.reviews,
    ],
  };

  const { data } = await httpClient.put('/barbers' + barberId, updated);
  return { success: true };
}
