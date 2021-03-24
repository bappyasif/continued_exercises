// example of Callback Function
function greetings(name) {
  console.log("Hallo " + name);
}

function processGretings(callback) {
  // let name = prompt("enter name");
  // callback(name);
  callback("baeebee");
}

processGretings(greetings);

// another example
document.querySelector("div").addEventListener("click", function () {
  console.log("callback function in action");
});

// About Callback Hell Phenomenon
// cause: when people try to write Javascript in a way where execution happens visually from top to bottom
// Javasript is different, in dealing with Asynchronous calls.

// to avoid callback Hell, we need to accesorizes our code with these three rules:
// shallow code, modularize, handle every single error:

// Keeping our code shallow:
// example of messy code:
var form = document.querySelector("form");
form.onsubmit = function (submitEvent) {
  var name = document.querySelector("input").value;
  request(
    {
      uri: "http://example.com/upload",
      body: name,
      method: "POST",
    },
    function (err, response, body) {
      var statusMessage = document.querySelector(".status");
      if (err) return (statusMessage.value = err);
      statusMessage.value = body;
    }
  );
};
// we can name two of those anonymous function, and in process it will be lot cleaner
form = document.querySelector("form");
form.onsubmit = function formSubmit(submitEvent) {
  var name = document.querySelector("input").value;
  request(
    {
      uri: "http://example.com/upload",
      body: name,
      method: "POST",
    },
    function postResponse(err, response, body) {
      var statusMessage = document.querySelector(".status");
      if (err) return (statusMessage.value = err);
      statusMessage.value = body;
    }
  );
};
// naming function is easy and has some immediate effects:
// <> easier to read, thanks to descriptive nature of function names
// <> when exception happens, stacktrace will name that function where it's originating from rather than just anonymous
// <> gives mobility so that we can move around our functions and reference them by names
// lets just do that:
document.querySelector("form").onsubmit = formSubmit;

function formSubmit(submitEvent) {
  var name = document.querySelector("input").value;
  request(
    {
      uri: "http://example.com/upload",
      body: name,
      method: "POST",
    },
    postResponse
  );
}

function postResponse(err, response, body) {
  var statusMessage = document.querySelector(".status");
  if (err) return (statusMessage.value = err);
  statusMessage.value = body;
}
// due to function hoisting, we can declare our funnction anywhere in our code
// it won't throw reference error of any kind

// Modularize Code:
// writing small pieces of codes that does a single thing and assemble them into another mmodule which does a bigger thing
// doing so callback hell won't be present in code, unless we go in there.
// Here is a new file called formuploader.js that contains our two functions from before:
/**
module.exports.submit = formSubmit

function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse)
}

function postResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) return statusMessage.value = err
  statusMessage.value = body
}
 */
// The module.exports bit is an example of the node.js module system which works in node
// as we have formuploader.js ready, we just need to require it and use it!
// Here is how our application specific code looks now:
/**
var formUploader = require('formuploader')
document.querySelector('form').onsubmit = formUploader.submit
 */
// as it's being moularized we'll have these following benefits:
// <> easier for others to understand better
// <> formuploader can be used in other places without have to duplicating code, using github or npm

// Handling Every Single Error: thre arre different tyoes of errors, such as Syntax, Runtime, or Platform Errors
// previous two rules were to make code readable and usablity focused, and this is to make our code Stable
// when dealing with callbacks, b by definition it deals with something in background and then acts depending on responses
// any professional developer would say, you will never know which error there might be, so we'll better handle them all, thinking they are always happening
// handling error, Node.js style:
/**
 var fs = require('fs')

 fs.readFile('/Does/not/exist', handleFile)

 function handleFile (error, file) {
   if (error) return console.error('Uhoh, there was an error', error)
   // otherwise, continue on and use `file` in your code
 }
 */
// having first argument as error would be always a reminder to handle our errors
// code linters can also be configured to handle errors, siplest one is to call standard
// run $standard in code folder and it will show every callback with unhandled error/s
// in conclusion:
// <> don't nest functions, give them names and place them top level of program
// <> use function hoisting to function mobility across program
// <> handle every single error, in every single callbacks, using a linter wiith Standard would be very useful with this
// <> create reusable fucntions and place them in a module to reduce unnecessary stress to understand our code better,
// splitting code into smaller snippets will help us handle errors better, and makes us write better and stable codes which helps in turn with refactooring or api documentation of our code

// some more about callbacks and async progrmming:
/**
 * node mostly uses asynchronous code unlike procedural coding it synchronous
 * usually things that have to talk to hard drives or networks will be always Asynchronous Calls
 * if they just have to access from memory or do some work on CPU they will be synchronous
 * reason for it is, I/O operationos are really slow compared to talking to Hrd drive(slower) and RAM(faster)
 *
 * when we run program all of those functions are defined imediately but doesn't get executed instantly though when it comes to async programing
 * when a function with async call gets executed, it sends a async request and then moves onto doing next available thing to execute
 * when an async call gets a response it will either be one of these two states, success or error
 * key to understanding callbacks is to realize that they arre used when you don't know when soome async operations will complete, but we know where it will complete when in readyState
 * usual top-to-bottom order doesnt necessarily works for callbacks rather hierarchical nesting of them
 * when callback hgets nvoked after async  calls gets a response, it coud only take a function as an argument, anything else will cause an error
 * just because  we created a callback function doesn;yt mean it will get executed without invoking it.
 * when we have code that has to wait for some other async code themm tha dependecy should go into functions and used as callbacks
 *
 */

// synchronous calllback
function callback(val) {
  console.log(val);
}
let fruits = ["apples", "pears"];
fruits.forEach(callback);

// asynchronous callback using XMLHttpRequest()

// console.log(data, JSON.stringify(data.responseText));
let httpRequest = new XMLHttpRequest();
// httpRequest.responseType = "json";
httpRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(httpRequest.responseText));
  } else if (this.readyState === 404) {
    console.log(httpRequest.statusText);
  }
};
httpRequest.response = "json";
httpRequest.open("GET", "sample.json");
// httpRequest.send();

// refactoring above with callbacks function mobility
httpRequest = new XMLHttpRequest();
function httpCallback() {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(httpRequest.responseText));
  } else if (this.readyState === 404) {
    handleError(httpRequest.statusText);
  }
}
function handleError(error) {
  console.log(error);
}
httpRequest.onreadystatechange = httpCallback;
httpRequest.open("GET", "sample.json");
// httpRequest.send();

// lets induce Callbacks Hell, using chaining
let xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.stringify(this.responseText));
    // console.log(this.responseText);
    console.log(JSON.parse(this.responseText));
    // chaining callback
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        // console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
        // chaining callback

        let http = new XMLHttpRequest();
        http.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            // console.log(JSON.parse(this.responseText));
            // console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            // chaining callback
          } else if(this.status === 404) {
            console.log(this.statusText);
          }
        };
        http.open("GET", "videos.json");
        // http.send();
      } else if(this.status === 404){
        console.log(this.statusText);
      }
    };
    httpRequest.open("GET", "friends.json");
    // httpRequest.send();
  }
};
xmlHttpRequest.open("GET", "sample.json");
// xmlHttpRequest.send();

// Refactoring above Callback simulation
function request(url, cb) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
      if(this.status === 200) {
        cb(JSON.parse(this.responseText));
      } else{
        cb(this.statusText);
      }
    }
    // if (this.status === 200 && this.readyState === 4) {
    //   cb(JSON.parse(this.responseText));
    // } else if(this.status === 404){
    //   cb(this.statusText);
    // }
  };
  xmlHttpRequest.open("GET", url);
  xmlHttpRequest.send();
}

// request("sample.json", (data) => {
//   httpCallback(data);
//   request("friends.json", data => {
//     httpCallback(data);
//     request("videos.json", data => {
//       httpCallback(data);
//     });
//   });
// });
// request("sample.json", tweets => {
//   httpCallback(tweets);
//   request("friends.json", friends => {
//     httpCallback(friends);
//     request("videos.json", videos => {
//       httpCallback(videos);
//     })
//   })
// })
request("sample.json", (tweets) => {
  request("friends.json", (friends) => {
    request("videos.json", (videos) => {
      httpCallback(tweets);
      httpCallback(friends);
      httpCallback(videos);
    });
  });
});

function httpCallback(response) {
  console.log(response);
}

/**
 * 
function jsonCallback(data) {
  // if(err) console.log("error");
  // else console.log(data);
  // console.log("??");
  console.log(data);
}

fetch("sample.json")
  .then((res) => res.json())
  .then((data) => jsonCallback(data));
console.log("??");

// chained asynchronous function calls, and a poteen callback hell scenerio!!
fetch("sample.json")
  .then((res) => {
    if (res.ok) {
      fetch("friends.json")
        .then((res) => {
          if (res.ok) {
            fetch("videos.json")
              .then((res) => res.json())
              .then((data) => console.log(data));
          }
          return res.json();
        })
        .then((data) => console.log(data));
    }
  })
  .then((data) => console.log(data));

// refactoring to avoid callbackHell, now code looks lot more readable than earlier
fetch("sample.json")
  .then((res) => {
    if(res.ok) handleFriends(res);
    return res.json();
  })
  .then((data) => console.log(data));

function handleFriends(res) {
  fetch("friends.json")
    .then((res) => {
        if(res.ok) handleVideos(res);
        return res.json();
    })
    .then((data) => console.log(data));
}

function handleVideos(res) {
  fetch("videos.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
 */
