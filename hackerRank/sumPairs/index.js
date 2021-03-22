function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];

  for(let i=0; i<lenArr; i++) {
    let t = [];
    for(let j=i; j<lenArr; j++) {
      
      if(i !== j) {
        t.push(arr[j]);
      }
    }

    subs.push(t);
    subs[i].forEach(val => {
      let check = arr[i]+val;
      if(check % divisor === 0) {
        result.push([arr[i], val])
      }
    })
  }
  
  return result;
}

output = divisibleSumPairs(6, [1, 3, 2, 6, 1, 2], 3);
console.log(output);

/**
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
    // let t = [];

  for(let i=0; i<lenArr; i++) {
    let t = [];
    for(let j=i; j<lenArr; j++) {
      
      if(i !== j) {
        t.push(arr[j]);
      }
      // subs.push(t);
    }
    subs.push(t);
    subs[i].forEach(val => {
      let check = arr[i]+val;
      if(check % divisor === 0) {
        result.push([arr[i], val])
      }
    })
  }

  // for(let i = 0; i<lenArr; i++) {
  //   subs[i].forEach(val => {
  //     let check = arr[i] + val;
  //     if(check % divisor === 0) {
  //       result.push([arr[i], val]);
  //     }
  //   });
  // }

  // result = [...new Set(result)];
// subs = [...new Set(subs)];
    // return subs;
  // return arr;
  return result;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];

  for(let i=0; i<lenArr; i++) {
    let t = [];
    for(let j=i; j<lenArr; j++) {
      
      if(i !== j) {
        t.push(arr[j]);
      }
      // subs.push(t);
    }
    subs.push(t);
  }

  for(let i = 0; i<lenArr; i++) {
    subs[i].forEach(val => {
      let check = arr[i] + val;
      if(check % divisor === 0) {
        result.push([arr[i], val]);
      }
    });
  }

  // result = [...new Set(result)];
// subs = [...new Set(subs)];
    // return subs;
  // return arr;
  return result;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;

  for(let i=0; i<lenArr; i++) {
    let t = [];
    for(let j=lenArr-1; j>=0; j--) {
      
      if(i !== j) {
        t.push(arr[j]);
      }
      // subs.push(t);
    }
    subs.push(t);
  }

  for(let i = 0; i<lenArr; i++) {
    subs[i].forEach(val => {
      let check = arr[i] + val;
      if(check % divisor === 0) {
        result.push([arr[i], val]);
        // result.push(arr[i], val);
        // console.log([arr[i], val]);
      }
    });
  }

  // result = [...new Set(result)];
// subs = [...new Set(subs)];
    // return subs;
  // return arr;
  return result;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;
  // for (let i = 0; i < lenArr; i+=2) {
  //   subs.push([arr[i], arr[i+1]]);
  // }

  for(let i=0; i<lenArr; i++) {
    let t = [];
    for(let j=lenArr-1; j>=0; j--) {
      
      if(i !== j) {
        t.push(arr[j]);
      }
      // subs.push(t);
    }
    subs.push(t);
  }

  // subs = [...new Set(subs)];

  // console.log(subs);
  // return result;
  // return temp;
    return subs;
  // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;
  for (let i = 0; i < lenArr; i++) {
    let idx = arr.indexOf(arr[i]);
    let t = arr.splice(idx, 1);
    console.log(t, arr, idx);
  }
  // console.log(subs);
  // return result;
  // return temp;
  //   return subs;
  // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;
  for (let i = 0; i < lenArr; i++) {
    temp = 0;
    if(i+1 >= lenArr) {
        subs.push([arr[lenArr-1], arr[lenArr-2]])
    } else {
        subs.push([arr[i], arr[i+1]])
    }
  }
  subs.forEach(item => {
      if(item.reduce((a,c)=>a+c,0) % divisor === 0) {
          result.push([item]);
      }
  });
  console.log(subs);
  return result;
  // return temp;
//   return subs;
  // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;
  for (let i = 0; i < lenArr; i++) {
    temp = 0;
    if(i+1 >= lenArr) {
        subs.push([arr[lenArr-1], arr[lenArr-2]])
    } else {
        subs.push([arr[i], arr[i+1]])
    }
  }
  subs.forEach(item => {
      if(item.reduce((a,c)=>a+c,0) % divisor === 0) {
          result.push([item]);
      }
  });
  console.log(subs);
  return result;
  // return temp;
//   return subs;
  // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr, arr, divisor) {
  let result = [],
    subs = [];
  let temp;
  for (let i = 0; i < lenArr; i++) {
    temp = 0;
    if(i+1 >= lenArr) {
        subs.push([arr[lenArr-1], arr[lenArr-2]])
    } else {
        subs.push([arr[i], arr[i+1]])
    }
    // subs.push([arr[i], arr[i+1]])
  }
  // return temp;
  return subs;
  // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr,arr, divisor) {
    let result = [], subs = [];
    let temp = 0;
    for(let i=0; i<lenArr; i++) {
        console.log(arr[i], typeof arr[i]);
        
        if(i+1 >= lenArr) {
            temp = arr[lenArr-1] + arr[lenArr-2];
            if(temp % divisor === 0) {
                subs.push(arr[lenArr-1], arr[lenArr-2]);
                temp = 0;
            }
        } else {
            temp = arr[i]+arr[i+1];
            if(temp % divisor === 0) {
                subs.push(arr[i], arr[i+1]);
                temp = 0;
            }
        }
        // console.log(temp);
    }
    // return temp;
    return subs;
    // return arr;
}
 * 
 * 
 function divisibleSumPairs(lenArr,arr, divisor) {
    let result = [], subs = [];
    for(let i=0; i<lenArr; i++) {
        console.log(arr[i], typeof arr[i]);
        let temp = arr[i]+arr[i+1 > lenArr ? i-i:i+1];
        console.log(temp);
    }
    return subs;
    // return arr;
}
 */
