let url =
  'https://api.giphy.com/v1/gifs/translate?api_key=TpnE8CtDArV0DqW17cilRKXCIptJJ621&s="hollywood"';
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data);
    addGifToDOM(res.data.images.original.url);
  })
  .catch((err) => console.log(err));

function addGifToDOM(url) {
  let domStr = `<img src='${url}'></img>`;
  let gifEl = document.createRange().createContextualFragment(domStr)
    .firstChild;
  let gifDiv = document.querySelector(".gif-div");
  gifDiv.textContent = "";
  gifDiv.insertAdjacentElement("afterbegin", gifEl);
}

// get user input string and search button
function listeningForUserInteractions() {
  let input = document.querySelector("input");
  let button = document.querySelector("button");
  button.addEventListener("click", (evt) => searchHandler(input));
}

function searchHandler(inputEl) {
  let value = inputEl.value;
  showUserPreferredGifs(value);
  console.log(value);
}

function showUserPreferredGifs(searchString) {
  let url = `https://api.giphy.com/v1/gifs/translate?api_key=TpnE8CtDArV0DqW17cilRKXCIptJJ621&s="${searchString}"`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      addGifToDOM(res.data.images.original.url);
    })
    .catch((err) => console.log(err));
}

listeningForUserInteractions();
