function jumpingOnDeClouds(arr) {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 1 || arr[i+1] != 1 || arr[i+2] != 1) {
            // count++
            console.log(arr[i+1], arr[i+2], i, "addition", i+1, i+2)
            if(arr[i+1]+ 1 == i || arr[i+1] == i+2) count++;
            // if(arr[i+2] == i+1) count++;
            // if(arr[i+1] == i+1 || arr[i+1] == i+2) {
            //     console.log(arr[i+1], arr[i], i);
            //     count++;
            // }
        } 
    }
    return count;
}

output = jumpingOnDeClouds([0,1,0,0,0,1,0]);
console.log(output);

/**
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 1) {
            if(arr[i+1] == i+1 || arr[i+1] == i+2) {
                console.log(arr[i+1], arr[i], i)
                count++;
            }
        } else {
            // continue
        }
    }
    return count;
}
 */