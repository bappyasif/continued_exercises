// precission of fraction problem
function getPlusMinusRatios(arr) {
    let pos = [], neg = [], zero = [], calc = 0;
    pos = arr.filter(el => el > 0);
    neg = arr.filter(el => el < 0);
    zero = arr.filter(el => el === 0);
    
    let posFr = negFr = zeroFr = 0;
    posFr = (pos.length / arr.length).toFixed(4);
    negFr = (neg.length / arr.length).toFixed(4);
    zeroFr = (zero.length / arr.length).toFixed(4);

    return ([posFr, negFr, zeroFr].toString());

    // return JSON.stringify(pos.concat(neg,zero));
}

output = getPlusMinusRatios([1,0,-1,-1,1]);
console.log(output);