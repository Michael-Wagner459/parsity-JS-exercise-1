const budgets = [
  { title: 'Rent', amount: 1200 },
  { title: 'Groceries', amount: 300 },
  { title: 'Phone', amount: 50 },
  { title: 'Gas', amount: 200 },
  { title: 'Internet', amount: 45 },
];

const expenses = budgets.map((budget) => `${budget.title} (${budget.amount})`);

console.log(expenses);

const boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

const lengths = boxes.map((box) => box.length);

console.log(lengths);

const volumes = boxes.map((box) => box.length * box.width * box.height);

console.log(volumes);

const users = [
  { id: 1, name: 'Bob', email: 'bob@gmail.com' },
  { id: 2, name: 'Cindy', email: 'cindy@gmail.com' },
  { id: 3, name: 'Susan', email: 'susan@gmail.com' },
  { id: 4, name: 'Sarah', email: 'sarah@gmail.com' },
  { id: 5, name: 'Tim', email: 'tim@gmail.com' },
];

const pluck = function (array, property) {
  // write your code here
  return array.map((user) => user[property]);
};

const returnArray = pluck(users, 'email'); // returns ['bob@gmail.com', `cindy@gmail.com`, `susan@gmail.com`, `sarah@gmail.com`, `tim@gmail.com` ];

console.log(returnArray);
