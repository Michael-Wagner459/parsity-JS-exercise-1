const languages = ['JavaScript', 'Ruby', 'Java', 'Python', 'C', 'Swift'];

const shortLanguages = languages.filter((language) => language.length <= 4);

console.log(shortLanguages); // ['Ruby', 'Java', 'C'];

// const shoes = [
//   { name: 'Nike', price: 200 },
//   { name: 'Red Wings', price: 250 },
//   { name: 'Vans', price: 50 },
//   { name: 'Converse', price: 60 },
//   { name: 'Reebok', price: 130 },
//   { name: 'New Balance', price: 75 },
//   { name: 'Adidas', price: 95 },
//   { name: 'Keds', price: 40 },
//   { name: 'Crocs', price: 35 },
// ];

// const cheapShoes = shoes.filter((shoe) => shoe.price < 100 && shoe.price > 50);

// console.log(cheapShoes);

const shoes = [
  { name: 'Nike', price: 200 },
  { name: 'Red Wings', price: 250 },
  { name: 'Vans', price: 50 },
  { name: 'Converse', price: 60 },
  { name: 'Reebok', price: 130 },
  { name: 'New Balance', price: 75 },
  { name: 'Adidas', price: 95 },
  { name: 'Keds', price: 40 },
  { name: 'Crocs', price: 35 },
];

const filterOut = function (array, iteratorFunction) {
  // your code here
  return array.filter((item) => !iteratorFunction(item));
};

const priceRangeNot50to100 = filterOut(
  shoes,
  (shoe) =>
    // your code here
    shoe.price >= 50 && shoe.price <= 100,
);

console.log(priceRangeNot50to100);
