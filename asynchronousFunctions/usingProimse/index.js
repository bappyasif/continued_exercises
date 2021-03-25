import {loadJson} from "./promise.js";

let showJson = data => {
    for(let key in data) {
        data[key].forEach(item => {
            let divEl = document.createElement("div");
            divEl.textContent = item["content"] || item["name"]
            document.body.append(divEl);
        });
    }
}

Promise.all([
    loadJson("sample.json"),
    loadJson("friends.json"),
]).then(dataStream => {    
    dataStream.forEach(data => showJson(JSON.parse(data.response)));
}).catch(error => {
    console.log(error);
});


/**
 * 
 * 
 let showJson = data => {
    // let divEl = document.createElement("div");
    // let parsed = JSON.parse(data);
    // divEl.textContent = parsed;
    // console.log(data);
    for(let key in data) {
        console.log(data[key], key)
        // data[key].forEach(item => divEl.textContent = item)
        // data[key].forEach(item => console.log(item))
        // data[key].forEach(item => divEl.textContent = item["content"])
        data[key].forEach(item => {
            let divEl = document.createElement("div");
            divEl.textContent = item["content"] || item["name"]
            document.body.append(divEl);
        })
    }
    // for(let key in data) divEl.textContent = key;
    // data.forEach(item=> divEl.textContent = item);
    // divEl.textContent = data;
    // document.body.append(divEl);
}
 */