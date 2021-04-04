// Basic Example
let p1 = new Promise((resolve, reject) => {
    // we call resolve() when what we were doing asynchronously was succesful
    // and we call reject() when it failed
    // we will simulate asynchronicity with setTimeout
    // in reality we'll most likely to use XHR or something like that
    setTimeout(() => {
        resolve("success"); // everything's fine
    }, 200);
});

// let's use it now
p1.then(msg => {
    // "msg" is whatevver we passed in resolve() function above
    console.log(msg);
});

// Example with diverse situations
// we'll look at a chain composed of then() calls, a catch() call and optionally followed by finally()
// in this example promise chain is initiated by a custom written new Promise() construct but in practice we'll be using API function that returns a Promise
// getNumber() shows that a promise generator will utilize reject(), while setting up an asynchronous call or within callbac or both
// getPromise() shows how an API function might generate and return a Promise in a self contained manner
let THRESHHOLD_A = 8; // USE 0 FOR ERROR
function getNumber(resolve, reject) {
    try {
        setTimeout(() => {
            let rndInt =  Date.now();
            let value = rndInt % 10;
            try {
                if(value >= THRESHHOLD_A) {
                    throw new Error("Too large: "+value);
                }
            } catch(err) {
                reject("error in callback "+err);
            }
            resolve(value);
        }, 200);
        // to expriment with error at setup, use similar throw error
        // throw new Error("Bad Setup");
    } catch (err) {
        reject("Error during settup "+err);
    }
}

function determineParity(value) {
    let isOdd = value % 2 ? true : false;
    let parityInfo = {num: value, isOdd: isOdd};
    return parityInfo;
}

function troubleWithGetNumber(reason) {
    console.log("Troouble getting number: "+reason);
    throw -999; // ust return something to maintain chain down sequence
}

function getPromise(parityInfo) {
    let getWord = (resolve, reject) => {
        let num = parityInfo.num;
        let THRESHHOLD_B = THRESHHOLD_A - 1;
        if(num >= THRESHHOLD_B) {
            reject("still large: "+num);
        } else {
            parityInfo.evenOdd = parityInfo.isOdd ? "odd" : "even";
            resolve(parityInfo);
        }
    }
    return new Promise(getWord);
}

// using it
(new Promise(getNumber))
.then(determineParity, troubleWithGetNumber)
.then(getPromise)
.then(info => {
    console.log(info);
    return info; // to maintain prommise sequence
})
.catch(rsn => {
    if(rsn === -999) {
        console.log("had previously handled error");
    } else {
        console.log("trouble with getPromise(): "+rsn);
    }
})
.finally(() => console.log("all done"));

// Advance Example
// now this small example shows mechanism of a Promise, a promise aware function will be called each time "button" gets clicked
// it will create a promise that will be fulfilled, using WindowOrWorkerGlobalScope.setTimeOut
// to promise count number starting from 1 every 1-3 seconds at random, Promise constructor is used  to create this promise
// when button is clicked several times ina short period fo time, we'll see theri responses being fulfilled one after another
let promiseCount = 0;
function testingPromise() {
    let thisPromiseCount = ++promiseCount;
    let log = document.querySelector("#log");
    // begins
    log.insertAdjacentHTML("beforeend", thisPromiseCount + ') Started<br>');
    // we make a new promise: we promise a nnumerical count of this promise, starting from 1, after each 2 second
    let p1 = new Promise((resolve,reject) => {
        // this Promise executor function is called with ability to resolve or reject any promise
        log.insertAdjacentHTML("beforeend", thisPromiseCount+ ') Promise constructor<br>');
        // simulating asynchronicity using setTimeout
        window.setTimeout(() => {
            // fulfill promise
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1001);
    });

    // let's define what to do when promise is resolved with then() call
    // and call catch() to define what to do when it is rejected
    p1.then(val => {
        // logging fulfillment
        log.insertAdjacentHTML("beforeend", '( '+val+' ) Promise fulfilled ');
    }).catch(rsn => {
        // log rejection
        console.log('handle rejected promise '+rsn+' here');
    });
    // ends
    log.insertAdjacentHTML("beforeend", thisPromiseCount +') Promise generated<br>');
}
// lookoout for any Events
if("Promise" in window) {
    let btn = document.querySelector("#genPr");
    btn.addEventListener("click", testingPromise);
} else {
    let log = document.querySelector("#log");
    log.textContent = "Live example not available";
}


// Example of Loading an Image with XHR protocol
function imgLoad(url) {
    // creating new Promise with Promise() constructor, which has two callbacks in it, namely resolve and reject
    return new Promise((resolve, reject) => {
        // standard XHR call to load an image
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        // when xhr loads, check whether it's successful
        xhr.onload = () => {
            if(xhr.status === 200) {
                // when successful, resolve promise by passing xhr response
                resolve(xhr.response);
            } else {
                reject(Error("Image didnt load successfully, error code: "+xhr.statusText));
            }
        }
        xhr.onerror = () => {
            // also deals with scenario when entire xhr request fails to begin with
            // this is probably a network error, so rejecting promise with an appropriate message
            reject(Error("Netwrok Error"));
        }
        xhr.send();
    });
}

// geting reference to body element, and create a new Image object
let body = document.querySelector("body");
let imgEl = new Image();
// calling our Promise aware function with url for image to load
imgLoad('https://picsum.photos/200/300').then(res => {
    // then or then()  runs when Promise resolved, it becomes immutable and read only for other then() calls to it
    let imgUrl = window.URL.createObjectURL(res);
    imgEl.src = imgUrl;
    // imgEl.src = res;
    body.insertAdjacentElement("afterbegin", imgEl);
}).catch(err => {
    // second or catch() runs when proise is rejected, and logs error for it
    console.log(err);
});