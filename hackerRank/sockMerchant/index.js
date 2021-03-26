function sockMerchant(array) {
    let pairCounts = {};
    let pairs = [];
    let filteredArray = [];
    let arraySet = [...new Set(array)];
    let value = 0;
    arraySet.forEach(val => {
        let temp = array.filter(el => el === val)
        if(temp.length > 1) filteredArray.push(temp)        ;
    });

    filteredArray.forEach((item) => {
        for(let i=0;i<item.length; i+=2) {
            pairs.push(item.slice(i,i+2));
        }
    });

    pairs = pairs.filter(item => item.length > 1);

    pairs.forEach(item => {
        let el = item[0];
        pairCounts[el] = pairCounts[el] === undefined ? 1 : pairCounts[el]+1;
        console.log(el, item);
    });

    for(let key in pairCounts) {
        value += pairCounts[key];
    }
    // console.log(filteredArray)
    // console.log(pairs, pairs.length)
    // return pairCounts;
    return value;
}

// output = sockMerchant([1,2,1,2,1,3,2])
// output = sockMerchant([1,2,1,2,1,1,2])
output = sockMerchant([1,2,2,1,1,3,5,1,2])
console.log(output);


/**
 * 
 * 
 function sockMerchant(array) {
    let pairCounts = {};
    let pairs = [];
    let filteredArray = [];
    let arraySet = [...new Set(array)];
    // console.log(arraySet);
    arraySet.forEach(val => {
        let temp = array.filter(el => el === val)
        // pairs.push(temp);
        if(temp.length > 1) filteredArray.push(temp)        ;
    });

    filteredArray.forEach((item) => {
        // console.log(item);
        item.forEach((v,i)=> {
            pairs.push(item.slice(i, i+2));
            // pairCounts[v] = pairCounts[v] === undefined ? 1 : pairCounts[v]+1;
        });
        // pairs.forEach(item=> {
        //     // pairCounts[item[0]] = pairCounts[item[0]] === undefined ? 1 : pairCounts[item[0]]+1;
        // //     console.log(item);
        // //     item.every(el=> {
        // //         if(el === el) {
        // //             pairCounts[el] = pairCounts[el] === undefined ? 1 : pairCounts[el]+1;
        // //         }
        // //     })
        // })
    });

    pairs = pairs.filter(item => item.length > 1);

    pairs.forEach(item => {
        let el = item[0];
        pairCounts[el] = pairCounts[el] === undefined ? 1 : pairCounts[el]+1;
        console.log(el, item);
        // if(el !== undefined) {
        //     pairCounts[el] = pairCounts[el] === undefined ? 1 : pairCounts[el]+1;
        // }
        // pairCounts[el] = pairCounts[el] === undefined ? 1 : pairCounts[el]+1;
        // pairCounts[el] = pairCounts[el] != undefined ? pairCounts[el]+1 : 1;
    });


    
    // console.log(filteredArray)
    // console.log(pairs, pairs.length)
    return pairCounts;
}
 * 
 * 
 function sockMerchant(array) {
    let pairCounts = {};
    let pairs = [];
    array.forEach((val, idx) => {
        let temp = array.filter(el => el === val);
        let slicedTemp = temp.slice(idx, idx+2);
        if(slicedTemp.length) pairs.push(slicedTemp);
        // if(slicedTemp.length) pairs.push(JSON.stringify(slicedTemp));
    });
    // pairs.filter(item => item.every(el=>console.log(el===el)))
    pairs.filter(item => {
        console.log(item);
        item.every(el=> {
            // console.log("this");
            if(el === el) {
                // console.log("this");
                pairCounts[el] = pairCounts[el] == undefined ? 1 : pairCounts[el]+1;
            }
        })
    });
    return pairCounts;
    // return pairs;
    // return array;
    // return pairs
}
 * 
 * 
 function sockMerchant(array) {
    let pairs = {};
    array.forEach((val, idx) => {
        let temp = array.filter(el => el === val);
        // console.log(temp);
        // let slicedTemp = temp.slice(idx, idx+2||0);
        let slicedTemp = temp.slice(idx, idx+2);
        // console.log(slicedTemp)

        if(slicedTemp) {
            // console.log(pairs[val], val)
            pairs[val] = pairs[val] === undefined ? 1 : pairs[val]++
        }
    })
    // return array;
    return pairs
}
 */