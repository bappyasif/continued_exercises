function nonDivisibleSubSet(arr, k) {
  let rmds = new Array(k).fill(0);
  // console.log(rmds, "before");
  let t = [1,2,3,4];
  let tt = t.map(n=>t[n%2]);
  let tt2 = t.map(n=>t[n%2]++);
  // console.log(tt, tt2, t);
  // t.map(n=>console.log(t[n%2]));
  // t.map(n=>console.log(t[n%2]++));

  arr.forEach(n => {
    // console.log(rmds[n%k], rmds, rmds[n%k]);
    // console.log(rmds[n%k])
    rmds[n%k]++;
    // rmds[n%k];
  });
  // console.log(rmds, "after");
  let count = (rmds[0] ? 2 : 1) - k % 2;
  //  console.log(rmds, arr.map(v=>v%k))
  for(let i=1; i < k/2; i++) {
    count += Math.max(rmds[i], rmds[k-i])
  }
  return count;
}

// output = nonDivisibleSubSet([19, 10, 12, 10, 24, 25, 22], 4);
// output = nonDivisibleSubSet([2, 3, 7, 8, 12], 5);
// output = nonDivisibleSubSet([1,7,2,4], 3);
output = nonDivisibleSubSet(
  [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436],
  7
);
// output = nonDivisibleSubSet([19, 10, 12, 10, 24, 25, 22], 4);
// output = nonDivisibleSubSet([3, 7, 11, 1, 6, 10, 14, 4, 12, 16], 4);
console.log(output);

/**
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  // algorithm:
  /**
   * find remainder sets for all elements
   * have a bucket for longest remainders
   * loop through k = 1 to k/2 - 1
   *    if count(R, k) >= count(R, K - k)
   *        add all n to bucket, such tht r = k
   *    else add all n to bucket, such that r = K - k 
   * add only one n to bucket, such that r = 0;
   * if K is even
   *    add only one n to S such trht r = k/2
   * output bucket
   
   let rmds = new Array(k).fill(0);
   arr.forEach(n => rmds[n%k]++);
   let count = (rmds[0] ? 2 : 1) - k % 2;
   //  console.log(rmds, arr.map(v=>v%k))
   for(let i=1; i < k/2; i++) {
     count += Math.max(rmds[i], rmds[k-i])
   }
   return count;
 
   //  let rmds = arr.map(v=>v%k);
   //  let count = (rmds[0] ? 2 : 1) - k % 2;
   // //  console.log(count)
   // for(let i=0; i < k/2; i++) {
   //   count += Math.max(rmds[i], rmds[k-i])
   // }
   // return count;
 
 
   //  let rmds = arr.map(v=>v%k);
   //  let count = 0;
   //  let hashed = k%2 == 1 ? k/2 : (k/2)-1;
   //  for(let i = 1; i <= hashed; ++i) {
   //    (rmds[i] > rmds[k-i]) ? count += rmds[i] : count += rmds[k-i]
   //  }
   //  if(k%2 == 0 && rmds[k/2] != 0) count++;
 
   //  return count;
   //  else return 0
   //  return rmds[0] == 0 ? count : count++;
 
   // let rmds = arr.map(v=>v%k);
   // let count = 0;
   // for(let i = 1; i <= k; i++) {
   //   if(i < k - i) {
   //     count += Math.max(rmds[i], rmds[k-i]);
   //   }
   // }
   // if(k%2 == 0 && rmds[k/2] != 0) count++;
 
   // // else return 0
   // return rmds[0] == 0 ? count : count++;
 }
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  // breakdowns:
  // <> calculate all remainder set
  // <> find maximum size of a subset of given set so that sum of any two number from remainder set is not equal to K
  // <> prefer using i and k-i from that remainder ste and choose only bigger, not both simultaneuously

  // sum of two numbers from remainder set r1+r2 == k, only if only if one of them is <k/2 and other >=k/2
  // for same premise, they r1 and r2 both deviate from [k/2]-1 by a certain k<=[k/2]], e.g. r1=[k/2]-1-k, r2=[k/2]+k
  // for every k we ned to put either ra or r2, which is divisible by k and if k is even, we add 1 to that its remainder is k/2

  // algorithm:
  /**
   * find remainder sets for all elements
   * have a bucket for longest remainders
   * loop through k = 1 to k/2 - 1
   *    if count(R, k) >= count(R, K - k)
   *        add all n to bucket, such tht r = k
   *    else add all n to bucket, such that r = K - k 
   * add only one n to bucket, such that r = 0;
   * if K is even
   *    add only one n to S such trht r = k/2
   * output bucket
   let subs = [];
   let rmds = arr.map(v=>v%k);
   let count = 0;
   for(let i = 1; i <= k/2; i++) {
     if(2*i == k && rmds[i] != 0) {
       count++;
     } else if(rmds[i] > rmds[k-i]) {
       count += rmds[k-i];
     } else {
       count += rmds[i]
     }
   }
   if(rmds[0] != 0) count++
   // else return 0
   return count
 
   // for(let i = 0; i < (k-1)/2; i++) {
   //   count += Math.max(rmds[i+1], rmds[k-1-i]);
   // }
   // if(rmds[0] > 0) count++;
   // if(rmds[k/2] > 0 && k%2 === 0) count++;
   // // else return 0
   // return count
   // iterating through half way through remainder to avoid overcounting
   // for(let i = 1; i <= k/2; i++) {
   //   if(i === k-i) {
   //     count++;
   //     continue;
   //   }
   //   count += Math.max(rmds[i], rmds[k-i]);
   //   }
   //   // if(k%2==0) count = count-rmds[k/2] + 1;
   //   if(rmds[0] > 0) count++;
     // return count;
  
   
   // return count;
 
   // for(let i = 0; i <= k/2; i++) {
   //   if(i == 0) {
   //     if(rmds[0] > 0) {
   //       count++;
   //     } else {
   //       if(rmds[i] >= rmds[k-i]) {
   //         count += rmds[i];
   //       } else {
   //         count += rmds[k-i];
   //       }
   //     }
   //   }
   //   // if(k%2==0) count = count-rmds[k/2] + 1;
   // }
   // if(k%2==0) count = count-rmds[k/2] + 1;
   // return count;
   // for(let i=0; i<((k+2) % 2); i++) {
   //   if((!(i % 2) || !(k%2)) && i === k % 2) {
   //     count += mods[i] > 0 ? mods[i] :  Math.max(mods[i], mods[k-i]);
   //   }
   // }
   // return count;  
 }
  
  
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  // get all remainders after commencing mod operations on each inputs from array
  // from that remainder sets we need to find these constraints:
  // <> which two values additions are equals to k
  // <> and we can not take both values but one of them
  // <> which remainder has higher frequency in that remainder array sets, we choose them and keep them in an array for returning value
  // <> when both of them has same frequency in remainder sets, then choose either of them
  // <> them from remaining remainder values from array, we concat those which we already have extracted and we have our return valued length
  // <> when k = 0 or 1, none or all will bve divisible, so return 1 to console

  let mods = [];
  if(k === 0 || k === 1) return 1; // as they all will be divisable or none, so return 0 in those cases
  arr.forEach(v=>mods.push(v%k));
  console.log(mods)
  for(let i=0; i<mods.length; i++) {
    for(let j=i+1; j<mods.length; j++) {
      let testIsEqualK = mods[i]+mods[j] === k;
      // console.log(testIsEqualK)
      if(testIsEqualK) {
        let freqI = mods.filter(v=>v===mods[i]).length;
        let freqJ = mods.filter(v=>v===mods[j]).length;
        if(freqI >= freqJ) {
          // subs.push(mods[i]);
          do {
            subs.push(mods[i]);
            freqI--
          } while(freqI > 0)
          mods = mods.filter(v => v !== mods[i] && v !== mods[j]);
        }
        console.log(mods[i], mods[j], freqI, freqJ)
      }
    }
  }
  subs = subs.concat(mods);
  return subs.length;
  // subs = [...new Set(subs.concat(mods))];
  // console.log(mods)
  // console.log(subs, mods)
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  // get all remainders after commencing mod operations on each inputs from array
  // from that remainder sets we need to find these constraints:
  // <> which two values additions are equals to k
  // <> and we can not take both values but one of them
  // <> which remainder has higher frequency in that remainder array sets, we choose them and keep them in an array for returning value
  // <> when both of them has same frequency in remainder sets, then choose either of them
  // <> them from remaining remainder values from array, we concat those which we already have extracted and we have our return valued length
  // <> when k = 0 or 1, none or all will bve divisible, so return 1 to console

  let mods = [];
  if(k === 0 || k === 1) return 1; // as they all will be divisable or none, so return 0 in those cases
  arr.forEach(v=>mods.push(v%k));
  console.log(mods)
  for(let i=0; i<mods.length; i++) {
    for(let j=i+1; j<mods.length; j++) {
      let testIsEqualK = mods[i]+mods[j] === k;
      // console.log(testIsEqualK)
      if(testIsEqualK) {
        let freqI = mods.filter(v=>v===mods[i]).length;
        let freqJ = mods.filter(v=>v===mods[j]).length;
        if(freqI >= freqJ) {
          // subs.push(mods[i]);
          do {
            subs.push(mods[i]);
            freqI--
          } while(freqI > 0)
          mods = mods.filter(v => v !== mods[i] && v !== mods[j]);
        }
        console.log(mods[i], mods[j], freqI, freqJ)
      }
    }
  }
  subs = subs.concat(mods);
  return subs.length;
  // subs = [...new Set(subs.concat(mods))];
  // console.log(mods)
  // console.log(subs, mods)
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        // console.log(subs, chkAi, chkAj, arr[i], arr[j])
      }
    }
    for(let m=0; m<tempSubs.length; m++) {
      let takeout = [];
      for(let n=m+1; n<tempSubs.length; n++) {
        let checkZero = (tempSubs[m] + tempSubs[n]) % k == 0;
        if(checkZero) {
          // takeout.push(tempSubs[m], tempSubs[n]);
          takeout.push(tempSubs[n]);
        }
      }
      console.log(tempSubs, takeout);
    }
    subs.push(tempSubs)
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  // get all remainders after commencing mod operations on each inputs from array
  // from that remainder sets we need to find these constraints:
  // <> which two values additions are equals to k
  // <> and we can not take both values but one of them
  // <> which remainder has higher frequency in that remainder array sets, we choose them and keep them in an array for returning value
  // <> when both of them has same frequency in remainder sets, then choose either of them
  // <> them from remaining remainder values from array, we concat those which we already have extracted and we have our return valued length
  // <> when k = 0 or 1, none or all will bve divisible, so return 1 to console

  let mods = [];
  if(k === 0 || k === 1) return 1; // as they all will be divisable or none, so return 0 in those cases
  arr.forEach(v=>mods.push(v%k));
  for(let i=0; i<mods.length; i++) {
    for(let j=i+1; j<mods.length; j++) {
      let testIsEqualK = mods[i]+mods[j] === k;
      // console.log(testIsEqualK)
      if(testIsEqualK) {
        // let checkFrequencyOfI = 0;
        // let checkFrequencyOfJ = 0;
        
        // mods.forEach(v=>v===mods[i] ? checkFrequencyOfI++ : false)
        // mods.forEach(v=>v===mods[j] ? checkFrequencyOfJ++ : false)
        
        let remainders = mods.filter(v => v == mods[i]);
        subs.push(mods[i]);
        // subs.push(remainders);
        // mods.splice(i, 1);
        
        // mods = mods.filter(v => v !== mods[i] && v !== mods[j])
        mods = mods.filter(v => v !== mods[i])
        // console.log(checkFrequencyOfI, checkFrequencyOfJ)
      }
    }
  }
  // subs = subs.concat(mods);
  subs = [...new Set(subs.concat(mods))];
  // console.log(mods)
  console.log(subs)
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  // get all remainders after commencing mod operations on each inputs from array
  // from that remainder sets we need to find these constraints:
  // <> which two values additions are equals to k
  // <> and we can not take both values but one of them
  // <> which remainder has higher frequency in that remainder array sets, we choose them and keep them in an array for returning value
  // <> when both of them has same frequency in remainder sets, then choose either of them
  // <> them from remaining remainder values from array, we concat those which we already have extracted and we have our return valued length
  // <> when k = 0 or 1, none or all will bve divisible, so return 1 to console

  let mods = [];
  if(k === 0 || k === 1) return 1; // as they all will be divisable or none, so return 0 in those cases
  arr.forEach(v=>mods.push(v%k));
  for(let i=0; i<mods.length; i++) {
    for(let j=i+1; j<mods.length; j++) {
      let testIsEqualK = mods[i]+mods[j] === k;
      // console.log(testIsEqualK)
      if(testIsEqualK) {
        let checkFrequencyOfI = 0;
        let checkFrequencyOfJ = 0;
        
        mods.forEach(v=>v===mods[i] ? checkFrequencyOfI++ : false)
        mods.forEach(v=>v===mods[j] ? checkFrequencyOfJ++ : false)
        
        subs.push(mods[i]);
        // mods.splice(i, 1);
        mods = mods.filter(v => v !== mods[i])
        console.log(checkFrequencyOfI, checkFrequencyOfJ)
      }
    }
  }
  subs = subs.concat(mods);
  // console.log(mods)
  console.log(subs)
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  // arr = [...new Set(arr)];

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    if(k === 0 || k === 1) return 1; // as they all will be divisable
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        console.log(tempSubs, chkAi, chkAj, arr[i], arr[j], ((arr[i] % k) + (arr[j] % k) === k))
      }
    }
    subs.push(tempSubs);
  }
  return subs;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  arr = [...new Set(arr)];

  let tests2 = [];

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        console.log(tempSubs, chkAi, chkAj, arr[i], arr[j])
      }
    }
    // let tests2 = [];
    for(let k=0; k<tempSubs.length; k++) {
      let anotherTemp = [];
      for(let l=k+1; l<tempSubs.length; l++) {
        let temp = tempSubs[k] + tempSubs[l];
        let chkAi = anotherTemp.indexOf(arr[k]);
        let chkAj = anotherTemp.indexOf(arr[l]);
        if(temp % k !== 0 && chkAi === -1 || chkAj === -1) {
          anotherTemp.push(tempSubs[k]);
        }
      }
      tests2.push(anotherTemp);
      // console.log(anotherTemp, "<>");
    }
    subs.push(tempSubs);
  }
  console.log(tests2);
  return subs;
  // return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  arr = [...new Set(arr)];

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        console.log(tempSubs, chkAi, chkAj, arr[i], arr[j])
      }
    }
    let tests = [];
    for(let m=0; m<tempSubs.length; m++) {
      for(let n=m+1; n<tempSubs.length; n++) {
        let chkAi = tests.indexOf(tempSubs[m]);
        let chkAj = tests.indexOf(tempSubs[n]);
        let temp = tempSubs[m] + tempSubs[n];
        if(temp % k !== 0) {
          chkAi === -1 ? tests.push(tempSubs[m]) : chkAj === -1 ? tests.push(tempSubs[n]) : false
        }
      }
    }
    let tests2 = [];
    for(let q=0; q<tempSubs.length; q++) {
      let tests2Subs = []
      for(let r=q+1; r<tempSubs.length; r++) {
        let chkAi = tests2Subs.indexOf(tests[q]);
        let chkAj = tests2Subs.indexOf(tests[r]);
        let temp = tests[q] + tests[r];
        if(temp % k !== 0) {
          chkAi === -1 ? tests2Subs.push(tests[q]) : chkAj === -1 ? tests2Subs.push(tests[r]) : false
        }
      }
      tests2.push(tests2Subs);
    }
    subs.push(tests2);
    // subs.push(tests);
    // subs.push(tempSubs);
  }
  return subs;
  // return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  arr = [...new Set(arr)];

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        console.log(tempSubs, chkAi, chkAj, arr[i], arr[j])
      }
    }
    let tests = [];
    for(let m=0; m<tempSubs.length; m++) {
      for(let n=m+1; n<tempSubs.length; n++) {
        let chkAi = tests.indexOf(tempSubs[m]);
        let chkAj = tests.indexOf(tempSubs[n]);
        let temp = tempSubs[m] + tempSubs[n];
        if(temp % k !== 0) {
          chkAi === -1 ? tests.push(tempSubs[m]) : chkAj === -1 ? tests.push(tempSubs[n]) : false
        }
      }
    }
    let tests2 = [];
    for(let q=0; q<tempSubs.length; q++) {
      let tests2Subs = []
      for(let r=q+1; r<tempSubs.length; r++) {
        let chkAi = tests2Subs.indexOf(tests[q]);
        let chkAj = tests2Subs.indexOf(tests[r]);
        let temp = tests[q] + tests[r];
        if(temp % k !== 0) {
          chkAi === -1 ? tests2Subs.push(tests[q]) : chkAj === -1 ? tests2Subs.push(tests[r]) : false
        }
      }
      tests2.push(tests2Subs);
    }
    subs.push(tests2);
    // subs.push(tests);
    // subs.push(tempSubs);
  }
  return subs;
  // return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  arr = [...new Set(arr)];
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      // if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? tempSubs.push(arr[i], arr[j]) :
        chkAi === -1 ? tempSubs.push(arr[i]) : chkAj === -1 ? tempSubs.push(arr[j]) : false
        console.log(tempSubs, chkAi, chkAj, arr[i], arr[j])
      }
    }
    subs.push(tempSubs);
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let allSubs = [];
  let allVals = [];

  // let tests = []

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    let tests = [];

    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      
      if (temp % k) {
        
        let chkAi = tempSubs.indexOf(arr[i]);
        let chkAj = tempSubs.indexOf(arr[j]);
        
        if(chkAi === -1) {
          allVals.push(arr[i]);
          tempSubs.push(arr[i]);
        } else if(chkAj === -1) {
          allVals.push(arr[j]);
          tempSubs.push(arr[j]);
        }
        console.log(tempSubs,chkAi, chkAj, arr[i], arr[j])
      }
    }
    // trying to go through tem,pSubs to take out those vals which causes to mod === 0
    for(let k=0; k<tempSubs.length; k++) {
      for(let m=k+1; m<tempSubs.length; m++) {
        let temp = tempSubs[k] + tempSubs[m];
        // console.log(temp%k,"<>", temp % 4, typeof k)
        if(temp % k !== 0) {
          let chK = tests.indexOf(tempSubs[k]);
          let chM = tests.indexOf(tempSubs[m]);
          chK === -1 ? tests.push(tempSubs[k]) : chM === -1 ? tests.push(tempSubs[m]) : false
        }
      }
    }
    allSubs.push(tests);
    // allSubs.push(tempSubs);
  }

  return allSubs

  // let joinedVals = [...allSubs.filter(v=>v.length)].reduce((a,c)=>a.concat(c), []);

  // return joinedVals;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let allSubs = [];
  let allVals = [];

  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];

    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      
      if (temp % k) {
        let chkAi = allVals.indexOf(arr[i]);
        let chkAj = allVals.indexOf(arr[j]);
        if(chkAi === -1 && chkAj === -1) {
          allVals.push(arr[i], arr[j]);
          tempSubs.push(arr[i], arr[j]);
        }
        console.log(tempSubs,chkAi, chkAj, arr[i], arr[j])
      }
    }
    allSubs.push(tempSubs);
  }
  return [...allSubs.filter(v=>v.length)].reduce((a,c)=>a.concat(c), []);
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let allSubs = [];
  // let tempSubs = [];
  let allVals = [];
  for (let i = 0; i < arr.length; i++) {
    let tempSubs = [];
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      
      if (temp % k) {
        let chkAi = allVals.indexOf(arr[i]);
        let chkAj = allVals.indexOf(arr[j]);
        if(chkAi === -1 && chkAj === -1) {
          allVals.push(arr[i], arr[j]);
          tempSubs.push(arr[i], arr[j]);
        }
        // if(chkAi === -1) {
        //   allVals.push(arr[i]);
        //   tempSubs.push(arr[i]);
        // } else if(chkAj === -1) {
        //   allVals.push(arr[j]);
        //   tempSubs.push(arr[j]);
        // }
        console.log(tempSubs,chkAi, chkAj, arr[i], arr[j])
      }
    }
    allSubs.push(tempSubs);
  }
  return allSubs;
  // return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        chkAi === -1 && chkAj === -1 ? subs.push(arr[i], arr[j]) :
        chkAi === -1 ? subs.push(arr[i]) : chkAj === -1 ? subs.push(arr[j]) : false
        console.log(subs, chkAi, chkAj, arr[i], arr[j])
      }
    }
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        if (chkAi === -1 && chkAj === -1) {
          if(subs.length > 0) {
            let chkMi = subs.filter(v=>(v+arr[i]) % k ==0 );
            let chkMj = subs.filter(v=>(v+arr[j]) % k ==0 );
            if(!chkMi || !chkMj) subs.push(arr[i], arr[j]);
          } else {
            subs.push(arr[i], arr[j]);
          }
        } else {
          if(chkAi === -1) subs.push(arr[i])
          if(chkAj === -1) subs.push(arr[j])
          console.log(chkAi, chkAj, arr[i], arr[j], "??");
        }
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        if (chkAi === -1 && chkAj === -1) {
          // let ready = subs.filter(
          //   (v) => ((v + arr[i]) % k) == 0 || ((v + arr[j]) % k) == 0
          // );
          // console.log(ready, "<>");
          console.log( "?!")
          if(subs.length > 0) {
            let chkMi = subs.filter(v=>(v+arr[i]) % k ==0 );
            console.log(chkMi, "!!")
            if(!chkMi) subs.push(arr[i], arr[j]);
          } else {
            subs.push(arr[i], arr[j]);
          }
          // subs.push(arr[i], arr[j]);
        }

        else {
          if(chkAj === -1) subs.push(arr[j])
          console.log(chkAi, chkAj, arr[i], arr[j], "??");
        }
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        if (chkAi === -1 && chkAj === -1) {
          let ready = subs.filter(
            (v) => ((v + chkAi) % k) !== 0 || ((v + chkAj) % k) !== 0
          );
          console.log(ready, "<>");

          if (ready) {
            let testI = ready.filter(v=>(v+arr[i]) % k !== 0);
            console.log(testI, "!!");
            subs.push(arr[i], arr[j]);
          }
        }
        // else {
        //   if(chkAj === -1) subs.push(arr[j])
        //   console.log(chkAi, chkAj, arr[i], arr[j], "??");
        // }
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        if (chkAi === -1 && chkAj === -1) subs.push(arr[i], arr[j]);
        else
          chkAi === -1
            ? subs.push(arr[i])
            : chkAj === -1
            ? subs.push(arr[j])
            : false;

        console.log(chkAi, chkAj, arr[i], arr[j]);
        console.log(subs);
      }
    }
  }
  let rSet = [];
  for(let i=0; i<subs.length; i++) {
    for(let j=i+1; j<subs.length; j++) {
      let temp = subs[i] + subs[j];
      if(temp % k) {
        console.log(subs[i], subs[j]);
        let chkI = rSet.indexOf(subs[i]);
        let chkJ =  rSet.indexOf(subs[j]);
        chkI === -1 ? rSet.push(subs[i]) : chkJ === -1 ? rSet.push(subs[j]) : false
      }
    }
  }
  console.log(rSet)
  return rSet.length
  // return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if (subs.length === arr.length) break;
      if (temp % k) {
        let chkAi = subs.indexOf(arr[i]);
        let chkAj = subs.indexOf(arr[j]);
        if (chkAi === -1 && chkAj === -1) subs.push(arr[i], arr[j]);
        else
          chkAi === -1
            ? subs.push(arr[i])
            : chkAj === -1
            ? subs.push(arr[j])
            : false;

        // chkAi === -1
        //     ? subs.push(arr[i])
        //     : chkAj === -1
        //     ? subs.push(arr[j])
        //     : false;
        console.log(chkAi, chkAj, arr[i], arr[j]);
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}
 * 
 * 
 function nonDivisibleSubSet(arr, k) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i] + arr[j];
      if(subs.length === arr.length) break;
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
        // chkAi === -1
        //   ? subs.push(arr[i])
        //   : chkAj === -1
        //   ? subs.push(arr[j])
        //   : false;
        if(chkAi === -1) {
          subs.push(arr[i]);
        }

        if(chkAj === -1) {
          subs.push(arr[j]);
        }
        console.log(subs);
      }
    }
  }
  return subs.length;
  // return arr;
}
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
