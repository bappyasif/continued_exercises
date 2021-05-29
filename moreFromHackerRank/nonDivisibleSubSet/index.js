function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        console.log(
          "c-i",
          chkAi,
          "c-j",
          chkAj,
          "i",
          i,
          "a[i]",
          arr[i],
          "j",
          j,
          "a[j]",
          arr[j],
          "mod",
          temp % k
        );
        chkAi === -1
          ? subs.push(arr[i])
          : chkAj === -1
          ? subs.push(arr[j])
          : false;
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}

// output = nonDivisibleSubSet([1,7,2,4], 3);
output = nonDivisibleSubSet(
  [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436],
  7
);
console.log(output);

/**
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
    let subs = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            let  temp = arr[i] + arr[j];
            if(temp % k) {
                let chkAi = subs.indexOf(arr[i]);
                let chkAj = subs.indexOf(arr[j]);
                console.log("c-i",chkAi, "c-j",chkAj,"i", i,"j", j,"k", temp % k)
                chkAi === -1 ? subs.push(arr[i]) : chkAj === -1 ? subs.push(arr[j]) : false;
                console.log(subs)
            }
        }
    }
    return subs;
    // return arr;
}
 */
