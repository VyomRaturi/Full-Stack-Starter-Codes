const originalObj = {
  name: "Alice",
  details: {
    age: 30,
    hobbies: ["reading", "cycling", "hiking"]
  },
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

function deepClone(obj) {
  // if the object is null or not an object, return the object
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if the object is an array, create a new array and copy each element of the array
  if (obj instanceof Array) {

  }

  // if the object is a function, return a new function
  if (obj instanceof Function) {

  }

  // if the object is an object, create a new object and copy each attribute of the object
  if (obj instanceof Object) {

  }

  // throw an error if the object type is not supported
  throw new Error('Unable to copy obj! Its type is not supported.');
}

// Clone the object
const clonedObj = deepClone(originalObj);

// Test the method
clonedObj.greet();  // Should output: "Hello, my name is Alice!"

// Verify that changes to the cloned object do not affect the original
clonedObj.name = "Bob";
clonedObj.details.age = 25;
console.log(originalObj.name);  // Outputs: "Alice"
console.log(originalObj.details.age);  // Outputs: 30
