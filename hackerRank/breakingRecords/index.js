function keepingTallyOfEdges(arr) {
    let high = 0, low = 0;
    let highCount = 0, lowCount = 0;
    arr.forEach((el, idx) => {
        if(idx === 0) {
            high = low = el;
        } else {
            if(el > high && el !== high) {
                high = el;
                highCount++;
            } else if (el < low && el !== low) {
                low = el;
                lowCount++;
            }
        }
    });
    return [highCount, lowCount];
    // return result;
    // return arr;
}

output = keepingTallyOfEdges([12,24,10,24]);
output = keepingTallyOfEdges([10,5,20,20,4,5,2,25,1]);
output = keepingTallyOfEdges([3,4,21,36,10,28,35,5,24,42]);
console.log(output);


/**
 * 
 * 
 function keepingTallyOfEdges(arr) {
    let high = 0, low = 0;
    let result = [];
    arr.forEach((el, idx) => {
        if(idx === 0) {
            high = low = el;
        } else {
            if(el > high && el !== high) {
                high = el;
                result.push(high);
            } else if (el < low && el !== low) {
                low = el;
                result.push(low);
            }
        }
    });
    return result;
    // return arr;
}
 * 
 * 
 function keepingTallyOfEdges(arr) {
    let high = 0, low = 0;
    let result = [];
    arr.forEach((el) => {
        if(el > high && el !== high) {
            console.log("highs",high, el)
            high = el;
            result.push(high);
        } else if(el > low && el !== low) {
            console.log("lows",low, el)
            low = el;
            result.push(low);
        }
    })
    return result;
    // return arr;
}
 */