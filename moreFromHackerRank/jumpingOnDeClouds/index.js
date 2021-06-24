function jumpingOnDeClouds(arr) {
    let counts = [];
    let filtered = [];
    let count = 0;
    for(let i=0; i<arr.length-1; i+=2) {
        // if(arr[i]+1 == i+1) filtered.push(i);
        // if(arr[i] % 2 == 0) count++;
        // if(arr[i] != 1) filtered.push(i)
        // if(arr[i+2] != 1 ) filtered.push(i)
        // if(arr[i+2] == 0) count++
        // if(arr[i] == 0) count++
        // if(i+2 < arr.length && arr[i+2] == 0) count++
        // if(arr[i+2] == 0) count++
        if(arr[i] == 1) i--;
        count++
    }
    // counts = filtered.filter(v=>v%2 == 0);
    console.log(filtered, counts, count);
    return counts;
}

output = jumpingOnDeClouds([0,1,0,0,0,1,0]);
// output = jumpingOnDeClouds([0,0,0,1,0,0]);
// output = jumpingOnDeClouds([0,0,1,0,0,1,0]);
console.log(output);

/**
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    let filtered = [];
    let count = 0;
    for(let i=1; i<arr.length; i++) {
        // if(arr[i] != 1) filtered.push(i);
        // if(arr[i] != 1) {
        //     // if(arr[i+1] % 2 == 0) count++;
        //     if(arr[i+1] % 2 == 0) count++;
        // }
        if(arr[i+1] % 2 == 0) count++;
    }
    // counts = filtered.filter(v=>v%2 == 0);
    console.log(filtered, counts, count);
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    let filtered = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 1) filtered.push(i);
    }
    counts = filtered.filter(v=>v%2 == 0);
    console.log(filtered, counts);
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    let filtered = [];
    for(let i=0; i<arr.length; i++) {
        // if(arr[i+1] != 1 && arr[i+1] != 1) filtered.push(i)
        // if(arr[i+2] != 1 && arr[i+2] == 0) filtered.push(i);
        if(arr[i] != 1) {
            // if(arr[i+1] == i+1) filtered.push(i);
            filtered.push(i);
        }
    }

    for(let i=0; i<filtered.length; i++) {
        if(filtered[i]+1 == filtered[i+1]) {
            counts.push(filtered[i+1]);
        }
    }

    console.log(filtered, counts);
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    let filtered = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 1) filtered.push(i);
        // if(arr[i] != 1 && arr[i+1] == i+1) counts.push(i);
    }
    for(let i=0; i<filtered.length; i++) {
        // if(arr[i]+1 != arr[i+1]) counts.push(i)
        // if(arr[i]+1 == arr[i+1] || arr[i]+1 == arr[i+2]) filtered.push(arr[i])
        // if(filtered[i]+1 != filtered[i+1]) counts.push(filtered[i])
        // if(filtered[i+1] == filtered[i]+1 || filtered[i+1] == filtered[i]+2) counts.push(filtered[i])
    }
    console.log(filtered, counts);
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    let counts2 = [];
    for(let i=0; i<arr.length; i++) {
        // if(arr[i+1] != 2 || arr[i+1] != 1) {
        //     counts.push([arr[i], i]);
        // }
        if((arr[i+1] != 1 && arr[i] != 1)) {
            i == 5 ? console.log(arr[i+1]) : false;
            counts.push([arr[i], i])
        }
        if((arr[i+2] != 1 && arr[i] != 1)) {
            counts2.push([arr[i], i])
        }
    }
    console.log(counts2)
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let counts = [];
    for(let i=0; i<arr.length; i++) {
        // if(arr[i+1] != 2 || arr[i+1] != 1) {
        //     counts.push([arr[i], i]);
        // }
        if(arr[i+1] != 1 || arr[i+2] != 1) {
            if(i+2 == 0) {
                counts.push(arr[i])
            }
        }
    }
    return counts;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let count = 0;
    let count2 = 0;
    let counts = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i+1] != 1) {
            // count2++;
            // if(arr[i+1] == 0 || arr[i+2] == 0) {
            //     count++
            // }
            if(arr[i+2] == 0) {
                count++;
                counts.push(arr[i], i)
            } else if(arr[i+1] == 0) {
                count2++;
                counts.push(arr[i], i)
            }
        }
    }
    console.log(count2, counts, count, Math.max(count, count2))
    return count;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let count = 0;
    let count2 = 0;
    let counts = [];
    for(let i=0; i<arr.length; i++) {
        // if(arr[i]+1 == arr[i+1] || arr[i]+1 == arr[i+2]) {
        //     // console.log(arr[i], i, arr[i]+2, arr[i+1]);
        //     count2++
        // }
        if(arr[i+1] != 1) {
            count2++;
            if(arr[i+1] == 0 || arr[i+2] == 0) {
                count++
            }
        }
    }
    console.log(count2)
    return count;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let count = 0;
    let count2 = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 1) count++;
        // if((arr[i]+1 == i+1 || arr[i]+2 == i+1) && arr[i] != 1) count2++
        // if(arr[i]+2 == arr[i]+1 || arr[i]+1 == arr[i]+1 && arr[i+1] != 1) {
        //     // console.log(arr[i], i, arr[i]+2, arr[i+1]);
        //     count2++
        // }
        // if(arr[i]+2 == i || arr[i]+1 == i && arr[i+1] != 1) {
        //     // console.log(arr[i], i, arr[i]+2, arr[i+1]);
        //     count2++
        // }
        if(arr[i]+1 == arr[i+1] || arr[i]+1 == arr[i+2]) {
            // console.log(arr[i], i, arr[i]+2, arr[i+1]);
            count2++
        }
    }
    console.log(count2)
    return count;
}
 * 
 * 
 function jumpingOnDeClouds(arr) {
    let count = 0
    for(let i=1; i<arr.length; i++) {
        if(arr[i] != 1) count++;
    }
    return count;
}
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