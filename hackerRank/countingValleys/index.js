function countingValleys(nos, arr) {  
    let valleys = 0;
    let seaLevel = 0;
    arr.split("").forEach(v=> {
        if(v === "u") {
            seaLevel++;
            if(seaLevel == 0) {
                valleys++;
            }
        } else {
            seaLevel--;
        }
    })
    return valleys;
}

// output = countingValleys(8, ["d","d","u","u","u","u","d","d"]);
// output = countingValleys(8, ["u","d","d","d","u","d","u","u"]);
output = countingValleys(8, "dduuuudd");
console.log(output);



/**
 * 
 * 
 function countingValleys(nos, arr) {  
    let vals = {ud:1}
    let seaLevel = 0;
    arr.split("").forEach(v=> {
        if(v === "u") {
            seaLevel += vals["ud"];
            if(seaLevel == 0) {
                vals[v] = vals[v] === undefined ? 1 : vals[v] + 1;
            }
        } else {
            seaLevel -= vals["ud"];
        }
    })
    return vals["u"];
}
 * 
 * 
 function countingValleys(nos, arr) {  
    let vals = {ud:1}
    let flag = false;
    let counter = 0;
    arr.split("").forEach(v=> {
        if(v === "d") {
            counter -= vals["ud"];
            flag = true;
        } else if(v === "u") {
            counter += vals["ud"];
            flag = true;
        }

        if(flag && counter == 0) {
            flag = false;
            vals[v] = vals[v] === undefined ? 1 : vals[v] + 1;
        }
    })
    return vals["u"];
}
 * 
 * 
 function countingValleys(nos, arr) {
    let counts = {};
    let vals = {dn:1, up:1}
    let cb = x => counts[x] = (counts[x] || 1)+1;

    let flag = false;
    let counter = 0;
    arr.forEach(v=> {
        if(v === "d") {
            counter -= vals["dn"];
            flag = true;
        } else if(v === "u") {
            counter += vals["up"];
            flag = true;
        }

        if(flag && counter == 0) {
            flag = false;
            vals[v] = vals[v] === undefined ? 1 : Number(vals[v] + 1);
        }
    })
    return vals;
}
 * 
 * 
function countingValleys(nos, arr) {
    let counts = {};
    let vals = {dn:1, up:1}
    let cb = x => counts[x] = (counts[x] || 1)+1;
    // arr.forEach(x=>cb(x));
    // if(counts["d"] === counts["u"]) {
    //     // return true;
    // }
    // let uf = false, df = false;
    let flag = false;
    let counter = 0;
    arr.forEach(v=> {
        // let counter = 0;
        if(v === "d") {
            counter -= vals["dn"];
            flag = true;
        } else if(v === "u") {
            counter += vals["up"];
            flag = true;
        }
        // console.log(counter, flag);
        if(flag && counter == 0) {
            flag = false;
            // vals[v] = (vals[v] || 1) + 1;
            // vals[v] = vals[v] === "undefined"? 1 : vals[v] + 1;
            vals[v] = vals[v] === undefined ? 1 : Number(vals[v] + 1);
        }
    })
    return vals;
    // return counts;
    // return arr;
}
 */