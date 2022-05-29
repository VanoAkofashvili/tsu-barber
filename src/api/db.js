export let barbers = [
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
    reviews: [
      {
        clientId: 1,
        star: 5,
        review: 'Dzaan magari parikmaxeria',
      },
      {
        clientId: 1,
        star: 5,
        review: 'Dzaan magaria',
      },
    ],
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
export let clients = [
  {
    id: 1,
    email: 'vanikoakofa@gmail.com',
    password: 'vano1234',
  },
];

window.db = {
  clients,
  barbers,
};
