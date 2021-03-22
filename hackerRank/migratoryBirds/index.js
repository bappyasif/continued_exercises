function migratoryBirds(size, arr) {
    let counts = {};
    arr.sort().forEach(val => {
        // let temp = val;
        counts[val] = counts[val] ? counts[val]+1 : 1;
    });
    let [...keys] =  Object.keys(counts);
    let [...vals] = Object.values(counts);
    // let idx = Math.max(vals);
    let max = Math.max(...vals);
    let idx = vals.indexOf(max);
    return [keys,vals, max, idx, "output:",Number(keys[idx])];
    // let
    // return counts;
    // return arr;
}

output = migratoryBirds(5, [1,1,2,2,3]);
output = migratoryBirds(11, [1,2,3,4,5,4,3,2,1,3,4]);
console.log(output);


/**
 * 
 * 
 function migratoryBirds(size, arr) {
    let counts = {};
    arr.sort().forEach(val => {
        let temp = val;
        counts[temp] = counts[temp] ? counts[temp]+1 : 1;
    });
    // let
    // return counts;
    // return arr;
}
 */