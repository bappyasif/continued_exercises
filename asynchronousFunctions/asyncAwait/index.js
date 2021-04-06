// lets revist our giphy API call using async and await
let url =
  'https://api.giphy.com/v1/gifs/translate?api_key=TpnE8CtDArV0DqW17cilRKXCIptJJ621&s="hardcore"';

async function getGigfs(url) {
  try {
    // since response is stilll same object we've passed to then(), we need to use json()
    // which inturn returns a Promise for us to use with "await" and assign it to a variable
    let response = await fetch(url);
    let gifData = await response.json();
    let imgSrc = gifData.data.images.original.url;
    addGifToDOM(imgSrc);
  } catch (err) {
    console.log(err);
  }
}

function addGifToDOM(url) {
  let domStr = `<img src='${url}'></img>`;
  let gifEl = document.createRange().createContextualFragment(domStr)
    .firstChild;
  let gifDiv = document.querySelector(".gif-div");
  gifDiv.textContent = "";
  gifDiv.insertAdjacentElement("afterbegin", gifEl);
}

getGigfs(url);

/**
 * 
 * 
 async function getGigfs(url) {
  try {
    // since response is stilll same object we've passed to then(), we need to use json()
    // which inturn returns a Promise for us to use with "await" and assign it to a variable
    let response = await fetch(url);
    let gifData = await response.json();
    let imgSrc = gifData.data.images.original.url;
    addGifToDOM(imgSrc);
  } catch (err) {
    console.log(err);
  }
}
 * 
 * 
 async function getGigfs(url) {
  // since response is stilll same object we've passed to then(), we need to use json()
  // which inturn returns a Promise for us to use with "await" and assign it to a variable
  let response = await fetch(url);
  let gifData = await response.json();
  let imgSrc = gifData.data.images.original.url;
  addGifToDOM(imgSrc);
}
 * 
 * 
 async function getGigfs(url) {
  let response = await fetch(url);
    // since response is stilll same object we've passed to then(), we need to use json()
    // which inturn returns a Promise for us to use with "await" and assign it to a variable
  response.json()
    .then((res) => {
      console.log(res.data);
      addGifToDOM(res.data.images.original.url);
    })
    .catch((err) => console.log(err));
}
 */
