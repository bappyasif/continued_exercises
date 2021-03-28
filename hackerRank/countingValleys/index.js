function countingValleys(nos, arr) {
    let counts = {};
    let vals = {dn:-1, up:1}
    let cb = x => counts[x] = (counts[x] || 1)+1;
    arr.forEach(x=>cb(x));
    if(counts["d"] === counts["u"]) {
        // return true;
    }
    // let uf = false, df = false;
    let flag = false;
    arr.forEach(v=> {
        let counter = 0;
        if(v === "d") {
            counter -= vals["dn"];
            flag = true;
        } else if(v === "u") {
            counter += vals["up"];
            flag = true;
        }
        if(flag && counter == 0) {
            flag = false;
            vals[v] = (vals[v] || 1) + 1;
        }
    })
    return vals;
    // return counts;
    // return arr;
}

output = countingValleys(8, ["d","d","u","u","u","u","d","d"]);
console.log(output);