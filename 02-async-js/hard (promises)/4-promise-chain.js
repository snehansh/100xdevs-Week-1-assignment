/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise resolved after one second");
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise resolved after two seconds from the previous one");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise resolved after three seconds from the previous one");
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  const start = new Date();
  waitOneSecond().then(() =>
    waitTwoSecond().then(() => {
      waitThreeSecond().then(() => {
        console.log(
          `Total time to complete operation is: ${
            (new Date() - start) / 1000.0
          } seconds`
        );
      });
    })
  );
}

calculateTime();
