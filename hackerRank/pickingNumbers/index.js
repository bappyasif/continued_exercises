function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [], tempFiltered = [];
        for(let j = 0; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) >= 0 && Math.abs(arr[i] - arr[j]) <= 1) {
                temp.push(arr[j]);
            }
        }
        console.log(temp)
        for(let k=0; k<temp.length; k++) {
            if(Math.abs(temp[k]-temp[k+1]) >= 0 && Math.abs(temp[k]-temp[k+1]) <= 1) {
                console.log(temp[k])
                tempFiltered.push(temp[k]);
            }
            if(k+1 >= temp.length+1) {
                if(Math.abs(temp[k]-temp[k-1]) >= 0 && Math.abs(temp[k]-temp[k-1]) <= 1) {
                    console.log(temp[k])
                    tempFiltered.push(temp[k]);
                }  
            }
            // if(!(Math.abs(temp[k+1] - temp[k]) >=0 && Math.abs(temp[k+1] - temp[k]) <= 1)) {
            //     temp.splice(k,1);
            // } else {
            //     // temp.splice(k,0, temp[k]);
            //     temp.splice(k,0);
            // }
        }
        // for(let k=0;k<temp.length;k++) {
        //     if(!(Math.abs(temp[k+1] - temp[k]) == 0 || Math.abs(temp[k+1]-temp[k]) == 1)) {
        //         temp.splice(k, 1);
        //     }
        //     // if(!(temp[k+1] - temp[k] >= 0 && temp[k+1]-temp[k] <= 1)) {
        //     //     temp.splice(k, 1);
        //     // }
        // }
        console.log("after",tempFiltered)
        arrs.push(temp);
        // temp = [];
    }
    let max = 0;
    arrs.forEach(arr => {
        if(arr.length > max) {
            max = arr.length;
        }
    })
    return max;
}

output = pickingNumbers([4,6,5,3,3,1]); 
// output = pickingNumbers([1,2,2,3,1,2]);
console.log(output);


/**
 * 
 * 
 function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [], tempFiltered = [];
        for(let j = 0; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) >= 0 && Math.abs(arr[i] - arr[j]) <= 1) {
                temp.push(arr[j]);
            }
        }
        // console.log(temp)
        for(let k=0;k<temp.length;k++) {
            if(!(temp[k+1] - temp[k] >= 0 && temp[k+1]-temp[k] <= 1)) {
                temp.splice(k+1, 1);
            }
            // if(temp[k+1] - temp[k] !== 0 || temp[k+1]-temp[k] !== 1) {
            //     temp.splice(k+1, 1);
            // }
        }
        // console.log("after",temp)
        arrs.push(temp);
        // temp = [];
    }
    let max = 0;
    arrs.forEach(arr => {
        if(arr.length > max) {
            max = arr.length;
        }
    })
    return max;
}
 * 
 * 
 function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        for(let j = 0; j < arr.length; j++) {
            // console.log(arr[i], arr[j], arr[i] - arr[j])
            if(arr[i] - arr[j] >= 0 && arr[i] - arr[j] <= 1) {
                temp.push(arr[j]);
            }
        }
        arrs.push(temp);
        // temp = [];
    }
    let max = 0;
    arrs.forEach(arr => {
        if(arr.length > max) {
            max = arr.length;
        }
    })
    return max;
}
 * 
 * 
 function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        for(let j = i; j < arr.length; j++) {
            if(arr[i] - arr[j] >= 0 && arr[i] - arr[j] <= 1) {
                temp.push(arr[j]);
            }
        }
        arrs.push(temp);
        // temp = [];
    }
    let max = 0;
    arrs.forEach(arr => {
        if(arr.length > max) {
            max = arr.length;
        }
    })
    return max;
    // return arrs;
    // return subArr;
}
 * 
 * 
 function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        for(let j = i; j < arr.length; j++) {
            if(arr[i] - arr[j] == 0) {
                temp.push(arr[j]);
            }
            if(arr[i] - arr[j] == 1) {
                temp.push(arr[j]);
            }
            // if(arr[i] - arr[j] > 0 && arr[i] - arr[j] <= 1) {
            //     temp.push(arr[j]);
            // }
        }
        arrs.push(temp);
        temp = [];
    }
    return arrs;
    // return subArr;
}
 * 
 * 
 function pickingNumbers(arr) {
    let arrs = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        for(let j = i; j < arr.length; j++) {
            // console.log(arr[i], arr[j]);
            // if(arr[i] - arr[j] >= 0 || arr[i] - arr[j] <= 1) {
            //     temp.push(arr[j]);
            // }
            if(arr[i] - arr[j] == 0) {
                temp.push(arr[j]);
            }
            if(arr[i] - arr[j] > 0 && arr[i] - arr[j] <= 1) {
                temp.push(arr[j]);
            }
        }
        arrs.push(temp);
        temp = [];
    }
    return arrs;
    // return subArr;
}
 * 
 * 
 function pickingNumbers(arr) {
    let counts = {}
    for(let i=0; i<arr.length; i++) {
        if(counts[arr[i]]) {
            counts[arr[i]] += 1
        } else {
            counts[arr[i]] = 1;
        }
    }
    let subArr =[];
    for(let key in counts) {
        let conv = key.repeat(counts[key]);
        subArr.push(conv.split(""));
    }
    return subArr;
}
 * 
 * 
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