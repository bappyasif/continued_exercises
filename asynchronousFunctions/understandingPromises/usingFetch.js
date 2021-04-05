url = 'https://api.giphy.com/v1/gifs/translate?api_key=TpnE8CtDArV0DqW17cilRKXCIptJJ621&s="cat"';
fetch(url)
.then(res=>console.log(res));

// using mode for 'cors'
fetch(url, {mode: 'cors'})
.then(res => {
    console.log(res);
    return res.json()
}).then(res => {
    console.log(res.data);
    addGifToDOM(res.data.images.original.url)
}).catch(err => console.log(err));

function addGifToDOM(url) {
    let imgEl = document.createElement("img");
    imgEl.src = url;
    document.body.insertAdjacentElement("afterbegin", imgEl);
}