function loadJson(url) {
    return new Promise((resolve, reject) => {        
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(this.status === 200 && this.readyState === 4) {
                resolve(xhr);
            }
        }
        xhr.onerror = function() {
            reject(Error("div could'nt be rendered"));
        }
        xhr.open("GET", url);
        xhr.send();
    });
}

export {loadJson}

/**
 * 
 * 
 function loadJson(url) {
    return new Promise((resolve, reject) => {
        // let anchorEl = document.createElement("a");
        // anchorEl.onload = function() {
        //     resolve(anchorEl);
        // }
        // anchorEl.onerror = function() {
        //     reject(Error("div could'nt be rendered"));
        // }
        // anchorEl.href = url;
        
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(this.status === 200 && this.readyState === 4) {
                resolve(xhr);
            }
        }
        xhr.onerror = function() {
            reject(Error("div could'nt be rendered"));
        }
        xhr.open("GET", url);
        xhr.send();
    });
}
 */