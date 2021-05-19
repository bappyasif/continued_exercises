function longFactorials(n) {
    // iterative approach with BigInt
    let retValue = BigInt(1);
    let i = BigInt(1)
    while(i <= n) {
        retValue *= i;
        i++;
    }
    return BigInt(retValue);
}

// output = longFactorials(99);
// output = longFactorials(25);
output = String(longFactorials(25));
console.log(output);

/**
 * 
 * 
 function longFactorials(n) {
    // iterative approach with BigInt
    let retValue = BigInt(1);
    let i = BigInt(n)
    while(1 < i--) retValue *= i
    return retValue;
    // let rval = BigInt(1);
    // for(let i = BigInt(2); i <= n; i++) {
    //     rval *= i;
    // }
    // return rval
    // return BigInt(rval);
}
 * 
 * 
 function longFactorials(n) {
    // iterative approach
    let rval = 1;
    for(let i = 2; i <= n; i++) {
        rval *= i;
    }
    // return rval
    return BigInt(rval);
}
 * 
 *
 function longFactorials(n) {
    if(n === 0) {
        return 1
    } else {
        return (n*longFactorials(n-1))
    }
} 
 *
 *
 function longFactorials(n) {
    let value = 0;
    if(n === 0) {
        value = 1;
        return value;
        // return 1
    } else {
        value = (n*longFactorials(n-1));
        // return (n*longFactorials(n-1))
        // return BigInt((n*longFactorials(n-1)))
        // return JSON.stringify(BigInt((n*longFactorials(n-1))))
    }
    return BigInt(value);
    // return n;
}
 */