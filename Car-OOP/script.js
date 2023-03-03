const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
  console.log(`${this.brand} is going ${this.speed + 10}`);
};

Car.prototype.break = function () {
  console.log(`${this.brand} is break at ${this.speed - 5}`);
};

bmw.accelerate();
bmw.break();

mercedes.accelerate();
mercedes.break();
