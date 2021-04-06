function pickingNumbers(arr) {
    let counts = {}
    for(let i=0; i<arr.length; i++) {
        if(counts[arr[i]]) {
            counts[arr[i]] += 1
        } else {
            counts[arr[i]] = 1;
        }
    }
    let subString = [];
    let keys = Object.keys(counts);
    for(let i=0;i<keys.length; i++) {
        if(keys[i+1] - keys[i] >=0 || keys[i+1] - keys[i] <=1) {
            subString.push([keys[i+1]])
        }
    }
    let subArr =[];
    for(let key in counts) {
        let conv = key.repeat(counts[key]);
        subArr.push(conv.split(""));
    }
    let subSeq = [];
    for(let i=0; i<subArr.length; i++) {
        if(subArr[i+1] - subArr[i] >=0 || subArr[i+1] - subArr[i] <=1) {
            subSeq.push([subArr[i], subArr[i+1]])
        }

        // if(typeof subArr[i] === 'object') {
        //     if(subArr[i+1] - subArr[i] >=0 || subArr[i+1] - subArr[i] <=1) {
        //         subSeq.push([subArr[i], subArr[i+1][0]])
        //     }
        // } else {
        //     if(subArr[i+1] - subArr[i] >=0 || subArr[i+1] - subArr[i] <=1) {
        //         subSeq.push([subArr[i], subArr[i+1]])
        //     }
        // }
    }
    return subSeq;
    // return subArr;
    // return subString
    // return counts;
    // return arr;
}

output = pickingNumbers([4,6,5,3,3,1]);
console.log(output);


/**
 * 
 * 
 function pickingNumbers(arr) {
    let retArr = [];
    for(let i=0; i<arr.length;i++) {
        if(arr[i+1] - arr[i] >=0 && arr[i+1] - arr[i] <=1) {
            retArr.push()
        }
    }
    // arr.forEah((val,idx) => { 
    //     if(arr[idx] - vsl >= 0 && retArr[idx] - val <= 1) {

    //     }
    // })
    // return arr;
}
 */