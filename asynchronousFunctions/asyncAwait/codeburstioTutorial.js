// Async/Await
// <> newset way to write asynchronous cod in Javascript
// <> it is non blocking, just like promises and callbacks
// <> async/await was created to simplify process of working with and writing chained promises
// <> async functions always returns a promise, if that function throws an error, promise will be rejected, if returns a value, promise will be resolved

// Syntax
// writing an async function is quite simple, we just need to add "async" keyword prior to function
async function add(x, y) {
  return x + y;
}

// Await
// async functions can make use of "await" expression, this will pause "async" function and wait for promise to resolve prior to moving on
// example of using Promise
function doubleAfter2Seconds(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(x * 2), 2000);
  });
}
doubleAfter2Seconds(10).then((val) => console.log(val));
// what if we wanted to add  multiple of those, adding them as of like synchronous code will not produce expected output, as it would not wait for our promise to resolve first, and use our example code within a promise aware function and chain them together
function addPromise(x) {
  return new Promise((resolve, reject) => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        });
      });
    });
  });
}
addPromise(40).then((val) => console.log(val));
// let's refactor above Promise based code to async/await
async function addAsync(x) {
  let a = await doubleAfter2Seconds(10);
  let b = await doubleAfter2Seconds(20);
  let c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}
addAsync(60).then((val) => console.log(val));
// whenever we use "await" keyword within an "async" prefixed function, it telll Javascript engine to pause until it finishes without blocking any other resources
// since async functions rturns a Promise, they can be used interchangeably with  promises very easily, also code is much more readbable instead of long Promise chain

// fireship codealong
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    for (let key in users) {
      console.log(users[key].name);
    }
  })
  .catch((err) => console.log(err));

// time elapsed
let tick = Date.now();
let log = (v) => console.log(`timee elapsed: ${Date.now() - tick}`);

let codeBlocker = () => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return "billion loops";
};
log(codeBlocker());

// lets refactor this using micro tasks
codeBlocker = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    resolve("billion loops");
  });
};

codeBlocker().then((msg) => console.log("!!", msg));

// let's refactor it show how to ensure all synchroonous cood ran bfore it ran any async code
codeBlocker = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    return "loops done";
  });
};
codeBlocker().then((msg) => console.log("::", msg));

// Async/Await
// using Promise
let getFruit = (name) => {
  let fruits = {
    pineapple: "pineapp",
    peach: "peach",
  };
  return Promise.resolve(fruits[name]);
};
getFruit("peach").then(console.log);
// refactoring with async/await syntax
getFruit = async (name) => {
  let fruits = {
    pineapple: "pineapp",
    peach: "peach",
  };
  return fruits[name];
};
getFruit("peach").then(console.log);

let makeSmoothie = async () => {
  let a = await getFruit("pineapple");
  let b = await getFruit("peach");
  return [a, b];
};
makeSmoothie().then(console.log);

// to solve con-currency problem, lets refactor again with .all([..])
makeSmoothie = async () => {
  let a = await getFruit("pineapple");
  let b = await getFruit("peach");
  let smoothie = await Promise.all([a, b]); // this doubles up speed from just returning indiviually
  return smoothie;
};
makeSmoothie().then(console.log);

// handling Error
makeSmoothie = async () => {
  try {
    let a = await getFruit("pineapple");
    let b = await getFruit("peach");
    let smoothie = await Promise.all([a, b]); // this doubles up speed from just returning indiviually
    // let's put in error
    throw Error;
    return smoothie;
  } catch (err) {
    console.log(err);
    return "uh oh";
  }
};
makeSmoothie().then(console.log).catch(console.log);

// some gottchas
let fruits = ["peach", "apples"];
// this wouldn't pause function, we'll have to re rwite this using a normal for loop
let smoothie = fruits.map(async (v) => {
  let value = await getFruit(v);
  log(value);
  return value;
});
// refactoring above
smoothie = async () => {
  for (let f of fruits) {
    let value = await getFruit(f);
    log(value);
    return value;
  }
};
smoothie().then(console.log);

// to refactor it even further to address concurrency
fruits = ["peach", "apples"];
smoothie = fruits.map(v => getFruit(v));
let fruitLoop = async () => {
    // we can directly use await in a for loop wheen all of each array item is a Promise to be reolved
    for await(let value of smoothie) {
        log(value);
    }
}
fruitLoop();

// await keywords can be used in conditionals as well
let fruitInspection = async () => {
    if(await getFruit('peach') === 'peach') {
        console.log('looks peachy');
    }
}
fruitInspection();