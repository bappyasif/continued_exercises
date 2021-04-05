"use strict";

let smPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 110);
  setTimeout(() => reject("uh oh"), 56);
});

// one way of handling error is to pass it in within then as second argument or use catch()
// smPromise.then(res=>console.log(res), err=>console.log(err));

// handling error using catch
smPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// using other promise methods
let smPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("seond promise is succeed"), 119);
});
// using all([..])
// Promise.all([smPromise,smPromise2])
// .then(data => console.log(data));

// all([..]) expects apromises to be fulfilled to have a resolved promise returned or otherwise
Promise.all([smPromise, smPromise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// a real world example using fetch API
let url = "http://api.icndb.com/jokes/random/10";
// fetch(url)
// .then(res => console.log(res))

// converting response with json
fetch(url).then((res) => {
  res
    .json()
    .then((data) => {
      // console.log(data);
      // console.log(data.value);
      for (let id in data.value) {
        console.log(data.value[id]);
        addToDOM(data.value[id].joke);
      }
    })
    .catch((err) => console.log(err));
});

function addToDOM(data) {
  let divEl = document.createElement("div");
  // divEl.textContent = data;
  divEl.innerHTML = data + "<br><br>";
  document.body.insertAdjacentElement("afterbegin", divEl);
}

// Another Tutorial on Promises
// creating a get utility, which will return a Promise and will use XHR request in it to fetch data
function get(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      }
    };
    xhr.onerror = () => console.log(xhr.statusText);
    xhr.send();
  });
}

// using above promise-aware snippet, for a single promise
let exPromise = get("../sample.json");
exPromise
.then((res) => console.log(res))
.catch(err => console.log(err));

// will be using sequence
exPromise
.then((res) => {
    console.log(res, "<>");
    return get("../friends.json");
})
.then(res => {
    console.log(res, "><");
    return get("../videos.json");
})
.then(res => console.log(res))
.catch(err => console.log(err));
