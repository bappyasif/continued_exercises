function sequenceEquation(n, a) {
    let artithmaticSeq = [];
    for(let i=1; i<=n; i++) {
        let found = a.findIndex(v=>v===i)+1;
        // console.log(found, i);

        let nextFound = a.findIndex(v=>v===found)+1;
        // console.log(nextFound, i, "?!", nextFound);
        
        artithmaticSeq.push(nextFound);
    }
    return artithmaticSeq;
}

// output = sequenceEquation(3, [2,3,1]);
output = sequenceEquation(5, [4,3,5,1,2]);
console.log(output);

/**
 * 
 * 
 function sequenceEquation(n, a) {
    let artithmaticSeq = [];
    for(let i=1; i<=n; i++) {
        let found = a.findIndex(v=>v===i)+1;
        console.log(found, i);

        let nextFound = a.findIndex(v=>v===found)+1;
        console.log(nextFound, i, "?!", nextFound);
        
        // let nextFind = a[found];
        // artithmaticSeq.push(a[nextFind]);
        // artithmaticSeq.push(a[nextFound]);
        artithmaticSeq.push(nextFound);
    }
    return artithmaticSeq;
    // return n;
}
 * 
 * 
 function sequenceEquation(n, a) {
    let artithmaticSeq = [];
    for(let i=1; i<=n; i++) {
        let found = a.findIndex(v=>v===i)+1;
        console.log(found, i);
        // let seq = i+1;
        let nextFound = a.findIndex(v=>v===found);
        console.log(nextFound, i, "?!");
        // artithmaticSeq.push(a[seq]);
        artithmaticSeq.push(a[nextFound]);
    }
    return artithmaticSeq;
    // return n;
}
 */