const myModule = require('./my-module.js');
console.log(myModule.myFunction());

myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();