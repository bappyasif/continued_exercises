function getMoneySpent(ks, ds, budget) {
    let maxs = [];
    ks.forEach(k => {
        ds.forEach(d=> {
            if((k+d) <= budget) {
                console.log(k+d);
                maxs.push(k+d);
            }
        })
    })
    return maxs.length === 0 ? -1 : Math.max(...maxs);
    // return ks;
}

output = getMoneySpent([40,50,60], [5,8,12], 60);
output = getMoneySpent([5,1,1], [4], 5);
console.log(output);


/**
 * 
 * 
 function getMoneySpent(ks, ds, budget) {
    let maxs = [];
    let sortMax = (a,b) => b-a;
    ks.forEach(k => {
        let temp = [];
        ds.forEach(d=> {
            if(k+d < budget) {
                temp.push(k+d);
            }
        })
        let tMax = temp.sort(sortMax)[0];
        // console.log(tMax);
        maxs.push(tMax);
    })
    return maxs.sort(sortMax)[0] || -1;
    // return ks;
}
 */
