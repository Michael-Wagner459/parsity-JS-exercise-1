
var Vehicle = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
};

var myCar = new Vehicle(0, 0, 5)

Vehicle.prototype.move = function () {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
};

Vehicle.prototype.randomStep = function() {
  if(Math.random() < .5) {
    return -1;
  } else {
    return 1;
  }
};


// console.log(String.prototype)

// console.log(Array.prototype)

// console.log(Object.prototype)

var Car = function (x, y) {
  Vehicle.call(this, x, y, 5);
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
  console.log("Beep! Beep!");
};



// NEXT SECTION

var Vehicle = function (x, y, speed, gas) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.gas = gas;
};

Vehicle.prototype.move = function () {
  if (this.has > 0) {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
  this.gas -+ 1;
  } else {
    console.log('Sorry! We\'re all out of gas!');
  }
};

Vehicle.prototype.randomStep = function () {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
};

var Car = function (x, y, gas) {
  Vehicle.call(this, x, y, 5, gas);
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
  console.log("Beep! Beep!");
};

var Bicycle = function(x, y, gas) {
  Vehicle.call(this, x, y, 2, gas);
};

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.move = function() {
  this.x = this.x + this.speed * Object.getPrototypeOf(Bicycle.prototype).randomStep.call(this);
  this.y = this.y + this.speed * Object.getPrototypeOf(Bicycle.prototype).randomStep.call(this);
}
Bicycle.prototype.honk = function() {
  console.log('Hey! Watch out!');
};

var bike = new Bicycle(0, 0)

// bike.move();
// console.log(bike); // Bicycle {x: 2, y: -2, speed: 2}

// bike.move();
// console.log(bike); // Bicycle {x: 0, y: 4, speed: 2}

// bike.honk(); // Hey! Watch out!

var AngryBicycle = function (x, y) {
  Bicycle.call(this, x, y);
};

AngryBicycle.prototype = Object.create(Bicycle.prototype);

AngryBicycle.prototype.honk = function () {
  Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this)
  Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this)
};

var ab = new AngryBicycle(0, 0);

ab.honk()

var FastCar = function(x, y, gas) {
  Car.call(this, x, y, 5, gas);
};

FastCar.prototype = Object.create(Car.prototype);

FastCar.prototype.move = function () {
  Object.getPrototypeOf(FastCar.prototype).move.call(this) * 2
};

var myFastCar = new FastCar(0, 0, 100)

