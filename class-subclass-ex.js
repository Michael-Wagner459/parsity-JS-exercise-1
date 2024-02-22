
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
