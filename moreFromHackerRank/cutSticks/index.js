function cutSticks(arr) {
    let counts = [];
    while(arr.length) {
        let minLen = Math.min(...arr);
        let count = 0;
        let newArr = arr.map(v=> {
            count++;
            return v - minLen ? v - minLen : false;
        }).filter(v=>v)
        // console.log(newArr, count);
        arr = newArr
        counts.push(count);
    }

    return counts;
    // return arr;
}

// output = cutSticks([1,2,3]);
output = cutSticks([5,4,4,2,2,8]);
console.log(output);


/**
 * 
 * 
 function cutSticks(arr) {
    let counts = [];
    let minLen = Math.min(...arr);
    // let newArr = arr.filter(v => v-minLen);
    let count = 0;
    let newArr = arr.map(v=> {
        count++;
        return v - minLen ? v - minLen : false;
    });
    console.log(newArr, count);

    // return counts;
    // return arr;
}
 * 
 * 
 function cutSticks(arr) {
    let counts = [];
    for(let i = 0; i < arr.length; i++) {
        let minLen = Math.min(...arr);
        // let cutCount = 0;
        // console.log(minLen)
        let newArr = arr.map(v=>{
            return v-minLen > 0 ? v-minLen : false 
            // cutCount++;
            // return v-arr[i] > 0 ? v-arr[i] : false 
        }).filter(v=>v);
        counts.push(newArr.length + 1);
        console.log(newArr);
    }
    return counts;
    // return arr;
}
 * 
 * 
 function cutSticks(arr) {
    let counts = [];
    for(let i = 0; i < arr.length; i++) {
        let minLen = Math.min(...arr);
        let cutCount = 0;
        // console.log(minLen)
        let newArr = arr.map(v=>{
            cutCount++;
            return v-arr[i] > 0 ? v-arr[i] : false 
        }).filter(v=>v);
        counts.push(cutCount);
        console.log(newArr);
    }
    return counts;
    // return arr;
}
 */