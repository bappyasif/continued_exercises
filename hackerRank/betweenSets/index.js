function inBetweenTwoSets(ar1, ar2) {
    let count = [];
    for(let i=1; i<=100; i++) {
        if (ar1.every((val) => i % val === 0) && ar2.every((val) => val % i === 0))
        count.push(true);
    }

  // check if
    // return count;
  return count.filter(el=>el===true).length;
}

function findFactors(num) {
  let factors = [];
  for(let i=0; i<=num; i++) {
    if(num % i === 0) factors.push(i);
  }
  return factors;
}

function findFactorsOfArray(arr, k) {
  // let maxNum = Math.max(...arr);
  let factors = [];
  // console.log(maxNum, typeof maxNum)
  for(let i=0; i<arr.length; i++) {
    if(k % arr[i] === 0) factors.push(arr[i]);
  }
  // return maxNum;
  return factors;
}

output = findFactors(100);
output = findFactorsOfArray([1,2,4,5,6], 6);
console.log(output);

function findGCD(n1, n2) {
  if (n2 === 0) return n1;
  return findGCD(n2, n1 % n2);
}

function findLCM(n1, n2) {
  return (n1 * n2) / findGCD(n1, n2);
}

// output = inBetweenTwoSets([60, 15], [60, 36]);
output = inBetweenTwoSets([2, 6], [24, 36]);
console.log(output);

/**
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  // find LCM and GCD for arr1 and ar2 respectiively
  let n1,
    n2,
    count = [];
  [n1, n2] = [...ar1];
  let l = findLCM(n1, n2);
  [n1, n2] = [...ar2];
  let g = findGCD(n1, n2);

  if (ar1.every((val) => l % val === 0) && ar2.every((val) => val % l === 0))
    count.push(true);

    if (ar1.every((val) => g % val === 0) && ar2.every((val) => val % g === 0))
    count.push(true);

  // check if
    // return count;
  return count.filter(el=>el===true).length;
}

function findGCD(n1, n2) {
  if (n2 === 0) return n1;
  return findGCD(n2, n1 % n2);
}

function findLCM(n1, n2) {
  return (n1 * n2) / findGCD(n1, n2);
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  // find LCM and GCD for arr1 and ar2 respectiively
  let n1,
    n2,
    count = [];
  [n1, n2] = [...ar1];
  let l = findLCM(n1, n2);
  [n1, n2] = [...ar2];
  let g = findGCD(n1, n2);

  //   check if LCM % (n1 and n2) is 0 or not, And []..ar2] % GCD === 0 opr not
  // ar1.every(val => {
  //     if(l % val === 0) return true;
  // });
  // ar2.every(val => {
  //     if(g % val === 0) return true
  // })

  if (
      ar1.every((val) => l % val === 0) 
      && 
      ar2.every((val) => g % val === 0)
      )
    count.push(true);

  // check if
  return count;
  // return count.filter(el=>el===true).length;
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  // find LCM and GCD for arr1 and ar2 respectiively
  let n1, n2, count=[];
  [n1, n2] = [...ar1];
  let l = findLCM(n1, n2);
  [n1, n2] = [...ar2];
  let g = findGCD(n1, n2);

//   check if LCM % (n1 and n2) is 0 or not, And []..ar2] % GCD === 0 opr not
ar1.every(val => {
    if(l % val === 0) count.push(l % val === 0);
});
ar2.every(val => {
    if(g % val === 0) count.push(true);
})

// check if 
// return count.filter(el=>el===true).length;
  //   return [l, g];
  //   return findGCD(ar1);
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  let n1, n2;
  [n1, n2] = [...ar1];
  let g1 = findLCM(n1, n2);
  [n1, n2] = [...ar2];
  let g2 = findGCD(n1, n2);
  return [g1, g2];
  //   return findGCD(ar1);
}

function findGCD(n1, n2) {
    if(n2 === 0) return n1;
    return findGCD(n2, n1%n2);
    // if(!n2) return n1;
    // return findGCD(n2, n1%n2);
}

function findLCM(n1, n2) {
    return (n1*n2) / findGCD(n1, n2);
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  let n1, n2;
  [n1, n2] = [...ar1];
  let g1 = findGCD(n1, n2);
  [n1, n2] = [...ar2];
  let g2 = findGCD(n1, n2);
  return [g1, g2];
  //   return findGCD(ar1);
}

function findGCD(n1, n2) {
    if(n2 === 0) return n1;
    return findGCD(n2, n1%n2);
    // if(!n2) return n1;
    // return findGCD(n2, n1%n2);
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {    
    let g1 = findGCD(ar1);
    let g2 = findGCD(ar2);
    return [g1, g2];
    //   return findGCD(ar1);
}

function findGCD(arr) {
  // console.log(...n1);
  let [n1, n2] = [...arr];
  //   console.log(n1, n2);

    while (n1 !== n2) {
    if (n1 > n2) {
      n1 = n1 - n2;
    } else {
      n2 = n2 - n1;
    }
  }
  return n2;

// if(n2 === 0) return n1;
// return findGCD(n2, n1%n2);
}
 * 
 * 
 function inBetweenTwoSets(ar1, ar2) {
  return findGCD(ar1);
}

function findGCD(arr) {
  // console.log(...n1);
  let [n1, n2] = [...arr];
//   console.log(n1, n2);
  while(n1 !== n2) {
      if(n1 > n2) {
          n1 = n1 - n2;
      } else {
          n2 = n2 - n1;
      }
  }
  return n2;

//   while (n1 !== n2) {
//     n1 > n2 ? (n1 = n2 - n1) : (n2 = n1 - n2);
//   }
//   return n2;
}
 */
