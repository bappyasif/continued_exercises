function equalizeArray(arr) {
    let hash = {};
    for(let i=0; i<arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] ? hash[arr[i]]+1 : 1
    }
    let values = Object.values(hash);
    let max = Math.max(...values);
    console.log(hash, max)
    let filtered = values.filter(v=>v!=max);
    console.log(filtered);
    // return filtered.length >= max ? filtered.length : max;
    return arr.length - max
}

output = equalizeArray([1,2,2,3]);
// output = equalizeArray([3,3,2,1,3]);
// output = equalizeArray([1,2,3,1,2,3,3,3]);
console.log(output)

/**
 * 
 * 
 function equalizeArray(arr) {
    let filtered = [];
    let hash = {};
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i+1] || arr[i] == arr[i-1] || filtered.includes(arr[i])) {
            filtered.push(arr[i]);
        }
        hash[arr[i]] = hash[arr[i]] ? hash[arr[i]]+1 : 1
    }
    let values = Object.values(hash);
    let max = Math.max(...values);
    console.log(hash, max)
    return filtered

    // return arr.length - filtered.length

    // return filtered.length;
}
 * 
 * 
 function equalizeArray(arr) {
    let filtered = [];
    for(let i=arr.length -1; i>=0; i--) {
        if(arr[i] == arr[i+1] || arr[i] == arr[i-1] || filtered.includes(arr[i])) {
            filtered.push(arr[i]);
        }

        // if(arr[i] == arr[i+1] || arr[i] == arr[i-1] || filtered.indexOf(arr[i] != -1)) {
        //     filtered.push(arr[i]);
        // }

        // filtered[i] = arr[i] ? arr[i]+1 : 1
        // console.log(filtered[arr[i]],)
        // filtered[arr[i]] ? filtered[arr[i]]+1 : arr[i]=1
        // for(let j=1; j<arr.length; j++) {

        // }
    }

    return filtered

    // return arr.length - filtered.length

    // return filtered.length;
}
 * 
 * 
 function equalizeArray(arr) {
    let filtered = [];
    for(let i=0; i<arr.length; i++) {
        // if(arr[i] == arr[i+1] || arr[i+1] == arr[i-1]) {
        //     filtered.push(arr[i]);
        // }
        if(arr[i] == arr[i+1] || arr[i] == arr[i-1]) {
            filtered.push(arr[i]);
        }
        // if(filtered.includes(arr[i]))filtered.push(arr[i]);
    }

    // return arr.length - filtered.length

    return filtered.length;
}
 */