const users = [
  { id: 1, username: 'Susan19', admin: false },
  { id: 2, username: 'Antonio10', admin: false },
  { id: 3, username: 'Fred15', admin: true },
  { id: 4, username: 'Tim43', admin: false },
  { id: 5, username: 'JimBob59', admin: true },
  { id: 6, username: 'Clark6', admin: false },
  { id: 7, username: 'Jameson35', admin: true },
  { id: 8, username: 'Jessica40', admin: false },
  { id: 9, username: 'Jaleesa13', admin: false },
  { id: 10, username: 'Yoni45', admin: false },
];

const selectedUser = users.find((user) => (user.username = 'JimBob59'));

console.log(selectedUser);

const shoes = [
  { name: 'Nike', price: 200 },
  { name: 'Red Wings', price: 250 },
  { name: 'Vans', price: 150 },
  { name: 'Converse', price: 160 },
  { name: 'Reebok', price: 130 },
  { name: 'New Balance', price: 175 },
  { name: 'Adidas', price: 95 },
  { name: 'Keds', price: 140 },
  { name: 'Crocs', price: 135 },
];

const lessThan100 = shoes.find((shoe) => shoe.price < 100);

console.log(lessThan100);

const findWhere = function (array, criteria) {
  // your code here
  const property = Object.keys(criteria)[0];
  return array.find((element) => element[property] === criteria[property]);
};

const myShoe = findWhere(shoes, { price: 95 }); // result { name: 'Adidas', price: 95 }

console.log(myShoe);
