// A promise has three states
// <> Pending
// <> Fulfilled
// <> Rejected

// Creating a simple Promise
// let flag = false;
let flag = true;
// Promise aware
let promiseConstruction = new Promise((resolve,reject) => {
    if(flag) {
        let gadget = {
            brand: 'Made in Bangladesh',
            color: 'slick black'
        };
        resolve(gadget); // promise fulfilled
    } else {
        let reason = new Error("Promise rejected");
        reject(reason);
    }
});

// consuming it
// promise aware thenable calls
let p1 = () => {
    promiseConstruction.then(fulfilled => {
        console.log(fulfilled);
    }).catch(err => console.log(err));
}
// calling p1
p1();

// Chaining Promises
let anotherPromise = gadget => {
    return new Promise((resolve, reject) => {
        let msg = 'just got '+gadget.brand+' of color '+gadget.color;
        resolve(msg);
    });
}
// alternatively to above snippet
anotherPromise = gadget => {
    let msg = 'just got '+gadget.brand+' of color '+gadget.color;
    return Promise.resolve(msg);
}
// chaining it with previous promise from earlier
p1 = () => {
    promiseConstruction.then(anotherPromise).then(fulfilled => {
        console.log(fulfilled);
    }).catch(err => console.log(err));
}
// calling p1() again with chaining calls
p1();

// Asynchronous Promise
// Promise makes everything in it asynchronous, even if it's resolved right away
p1 = () => {
    console.log("promise started");
    promiseConstruction
    .then(anotherPromise)
    .then(fulfilled => {
        console.log(fulfilled);
    }).catch(err => console.log(err));
    console.log("promise ended");
}
// calling p1() again with chaining calls
p1();
// that shows us how synchronous code gets away and asynchronous runs when ready

// Async/Await
// it makes asynchronous syntax easier to understand without using then() and catch()
// lets rewrite earlier example using async/await
// using same promiseConstruction here
async function otherPromise(gadget) {
    return new Promise((resolve,reject) => {
        let msg = 'just got '+gadget.brand+' of color '+gadget.color;
        resolve(msg);
    })
}
// lets call our promise using async/await style
async function promiseDisplay() {
    try {
        console.log("promise starting");
        let gadget = await promiseConstruction;
        let msg = await otherPromise(gadget);
        console.log(msg);
        console.log("promise ended");
    } catch(err) {
        console.log(err.message);
    }
}

// async await it in here too
(async () => await promiseDisplay())();