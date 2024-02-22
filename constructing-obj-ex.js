let Person = function (name, age) {
  this.name = name;
  this.age = age;
};

let Michael = new Person('Michael', 30)
let Abby = new Person('Abby', 29)

console.log(Michael)
console.log(Abby)
