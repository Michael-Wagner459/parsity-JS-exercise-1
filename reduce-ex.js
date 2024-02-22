var shoes = [
  { name: "Nike", price: 200 },
  { name: "Red Wings", price: 250 },
  { name: "Vans", price: 50 },
  { name: "Converse", price: 60 },
  { name: "Reebok", price: 130 },
  { name: "New Balance", price: 75 },
  { name: "Adidas", price: 95 },
  { name: "Keds", price: 40 },
  { name: "Crocs", price: 35 },
];

const totalCost = shoes.reduce(function (sum, shoe) {
  return sum + shoe.price;
}, 0)

console.log(totalCost)

var beers = [
  { name: '512 IPA', type: 'IPA' },
  { name: 'Breakfast Stout', type: 'Stout' },
  { name: 'Pernicious IPA', type: 'IPA' },
  { name: '90 Minute IPA', type: 'IPA' },
  { name: 'Obsidian Stout ', type: 'Stout' }
]

var beerStyles = beers.reduce(function (acc, beer) {
  if(acc.hasOwnProperty(beer.type)) {
    acc[beer.type] += 1
  }
  else {
    acc[beer.type] = 1
  }

  return acc
}, {})

console.log(beerStyles)
/* result -
{
  IPA: 3,
  Stout: 2
}
*/

