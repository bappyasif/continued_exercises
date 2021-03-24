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
