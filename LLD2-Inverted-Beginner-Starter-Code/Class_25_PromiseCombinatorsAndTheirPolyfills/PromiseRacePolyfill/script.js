Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
   // Implementation of Promise.Race logic 
  });
};


// Example usage:

const promise1 = new Promise((resolve, reject) => setTimeout(reject('Promise 1 failed'), 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(reject('Promise 2 failed'), 2000));

const promise3 = new Promise((resolve, reject) => setTimeout(resolve('Promise 3 succeeded'), 3000));

Promise.myRace([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });