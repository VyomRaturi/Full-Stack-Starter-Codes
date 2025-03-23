Promise.myall = function (values) {
  const promise = new Promise(function (resolve, reject) {

    // Implementation of Promise.all logic

  })
  return promise
}

const promise1 = new Promise((resolve, reject) => setTimeout(resolve('Promise 1 failed'), 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(resolve('Promise 2 failed'), 2000));

const promise3 = new Promise((resolve, reject) => setTimeout(resolve('Promise 3 succeeded'), 3000));

Promise.myall([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });