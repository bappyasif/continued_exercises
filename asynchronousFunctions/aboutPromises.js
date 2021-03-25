// essentially, a promise is an object that might produce a value at some point in near future
// prelude to Promise structure:
let getData = function () {
  // go fetch data from som api
  // clean it up and return it as an object
  // return data;
  return "data";
};
// this issue with this example is that it might take some times to fetch data
// but unless we tell our code that, it assumes that everything inn function happpens instantly
// so, we can try to this instead
let smData = getData();
let pieceOfSmData = smData["something"];
// this stil is going to be a problem, as when this will try to extract pieceOfSmData out
// getData() might be still in retriving mode, so it willl be undefined
// we need to find a way to solve this problem, and Promise is just that kind of syntax that will solve this problem once and for all
// Promise Concept
smData = getData(); // refactrored to return Promise
// smData.then(data=>{
//     pieceOfSmData = data["something"];
// });

// XMLHttpRequest API is async but does not use Prommise API, fetch API is a replaccement of XHR using Promise API
// using setTimeout(), we can simulate Async task

// Basic Promise API usage:
// new Promise() constructor should only be used for legacy async tasks such as setTimeout or XMLHttpRequest
// when created with new constructor keyword, Promise will take Two Callback function as arguments, namely "resolve" and "reject"
// Promise Skeleton:
let promise = new Promise((resolve, reject) => {
  // Do an async task
  if (/**good condition**/ true) {
    resolve("success");
  } else {
    reject("Failure");
  }
});
promise
  .then((res) => {
    /**dpiong somthing with response */
  })
  .catch((error) => {
    /**catching errors */
  })
  .finally(() => {
    /**executes regardless of reponse */
  });

// it's upto developer to manually call resolve or reject within body of a callback based on their response of a given task
// a realistic approach would be converting XMLHttpRequest to a promise based task:
function getRequest(url) {
  // returns a new promise
  return new Promise((resolve, reject) => {
    // do usual XHR stuff
    let req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      // this gets called even on 404
      // so checking for status
      if (req.status === 200) {
        // resolve promise with responseText
        resolve(req.response);
      } else {
        // otherwise reject with statusText
        reject(req.statusText);
      }
    };

    // to handle Network errors
    req.onerror = function () {
      reject(Error("Network Error!!"));
    };

    // making request
    req.send();
    // console.log(req)
  });
}

// using it
getRequest("sample.json").then(
  (response) => {
    // console.log("Success", response);
    console.log("Success", JSON.parse(response));
  },
  (rejected) => {
    console.log("Failure", rejected);
  }
);

// refactoring it
function success(response) {
  console.log("Success", JSON.parse(response));
}
function failure(response) {
  console.log("Failure", response);
}
getRequest("friends.json").then(
  (response) => success(response),
  (response) => failure(response)
);

// sometimes it's better to have async call outside of Promise call
// returning a  promise from a given function is always better option, you can always rely on Promise
// so, by simply calling Promise.resolve() or promisee.reject() would do same as wee would have done with "new" constructor call
let userCache = {};
function userDetail(username) {
  // cached or not, alwasys a Promise will be returned from this given function
  if (userCache[username]) {
    // return a promise without have to use "new" constructor call
    return Promise.resolve(userCache[username]);
  }

  // using fetch API to get information, fetch always returns a Promise
  return fetch("users/" + username + ".json")
    .then((res) => {
      userCache[username] = res;
      return res;
    })
    .catch((error) => {
      throw new Error("no user being found: " + username);
    });
}
// since a promise is always returned, we can use then() / catch() on its returned value

// using "then"
// all promise instances get a "then" method which allows us to deal with responsee accordingly
// first "then" method callback recieves response given to it by first callback argument resolve() call
new Promise((resolve, reject) => {
  // a mock async action using setTimeout
  setTimeout(() => resolve(11), 1100);
}).then((res) => console.log(res));
// "then" callback is activated when promise is resolved, "then" is also chainable
new Promise((resolve, reject) => {
  setTimeout(() => resolve(20), 1001);
})
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 3;
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => console.log("??", res));
// each "then" recieves response from previous "then"'s return value
// if a promise has already been resolved but still "then" is called on, resolve() gets called
// once promise is rejected and using then after it wouldn't fires off callback ever again

// using "catch"
// "catch" ccallback is executed when promise is rejected
new Promise((resolve, rejected) => {
  // setTimeout(() => rejected("done rejected"), 1001)
  // throw "uh oh";
  // setTimeout(() => {
  //   throw new Error("done rejected")
  // }, 1001)
  setTimeout(() => {
    rejected(Error("done rejected"));
  }, 1001);
})
  .then((res) => console.log("succes", res))
  .catch((error) => console.log("catch", error));

// using "finally"
// "finally" gets called regardless of promise resuted in resolve() or reject()
new Promise((reolve, reject) => reject("fail"))
  .then(() => console.log("success", res))
  .catch(() => console.log("failed"))
  .finally((res) => console.log("finally", res));
// new Promise((reolve,reject) => reject(Error("fail"))).then(()=>console.log("success", res)).catch(()=>console.log("failed")).finally(res => console.log("finally", res));

// using "Promise.all"
// when multiple async actions are acted upon, and will be responded once all of them arre being resolved, promise.all come handy in those situations
// it takes a n array of promises and fires one callback once they are all resolved
/**
 Promise.all([promise01, promise02]).then(res=> {
  // resolved value /
}).catch(error => {
  // rejected value /
});
 */
// better representation of it will be a scenario where mutiple ajax called ising fetch arre used all at once
let req1 = fetch("sample.json");
let req2 = fetch("friends.json");
Promise.all([req1, req2]).then((res) => console.log(res));
// all promises needs to be passed in order to show success message for any Promise.all()
req1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"));
});
// req2 =  new Promise((reject) => {
//   setTimeout(() => reject("failed"));
// });
req2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("failed"));
});
Promise.all([req1, req2])
  .then(() => console.log("success"))
  .catch(() => console.log("caught"));

// using "Promise.race"
// instead of waiting for all promises to be resolved or rejected
// Promise.race activates as soon as any promises in array is resolved or rejected
req1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First Promise"), 2200)
  // setTimeout(() => reject(Error("First Promise")), 1900);
  // setTimeout(() => reject(Error("First Promise")), 2200)
});
req2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("Second Promise"), 2000)
  setTimeout(() => reject(Error("Second Promise")), 2000)
});
// Promise.race([req1,req2]).then(res => console.log("Then : ",res)).catch((een,twee)=>console.log("Een: "+een, "Twee: "+twee));
Promise.race([req1,req2]).then(res => console.log("Then : ",res)).catch((een,twee)=>console.log("Een: "+een, "Twee: "+twee));
