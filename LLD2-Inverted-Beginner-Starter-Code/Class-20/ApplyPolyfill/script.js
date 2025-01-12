let car = {
  name: "Mustang",
  year: 1969,
  color: "red",
  buyCar: function () {
    console.log(`Congratulations ! You just bought a ${this.year} ${this.color} ${this.name}`);
  }
};

let car2 = {
  name: "Camaro",
  year: 1970,
  color: "blue",
};

Function.prototype.myApply = function (object, ...args) {
  // Code a polyfill for the apply method 
};

car.buyCar.myApply(car2); // Congratulations ! You just bought a 1970 blue Camaro