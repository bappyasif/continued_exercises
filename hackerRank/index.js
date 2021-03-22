function aVeryBigSum(ar) {
  return BigInt(ar.reduce((a, c) => a + c));
}

let output = aVeryBigSum([
  10000000000,
  200000000,
  300000000,
  400000000,
  5000000000,
]);

console.log(output);

function compareTriplets(a, b) {
  let fa = [],
    fb = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j && a[i] > b[j]) {
        fa.push(a[i]);
      } else if (i === j && a[i] < b[j]) {
        fb.push(b[j]);
      }
    }
  }
  return [fa.length, fb.length];
}

output = compareTriplets([17, 28, 30], [99, 16, 8]);
console.log(output);

/**
 * 
 * 
 function aVeryBigSum(ar) {
    // return ar.reduce((a,c)=>Number.MAX_SAFE_INTEGER+a+c,0);
    // return ar.reduce((a,c)=>Number.MAX_VALUE+a+c,0);
    return BigInt(ar.reduce((a,c)=>a+c));
}
 * 
 * 
 function compareTriplets(a,b) {
    // let fa = a.map(el=>b.filter(v=> v > el));
    // let fb = b.map(el=>a.filter(v=> v > el));
    // return [fa.length,fb.length];
    // return [fa,fb];

    // let fa = [], fb = [];
    // for(let i=0; i<a.length; i++) {
    //     for(let j=0;j<b.length;j++) {
    //         a[i] > b[j] ? fa.push(a[i]) : a[i] < b[i] ? fb.push(b[j]) : -1;
    //     }
    // }
    // return fa.concat(fb);

    let fa = [], fb = [];
    for(let i=0; i<a.length; i++) {
        for(let j=0;j<b.length;j++) {
            if(i===j && a[i] > b[j]) {
                fa.push(a[i]);
            } else if (i === j && a[i] < b[j]) {
                fb.push(b[j]);
            }
        }
    }
    // return fa.concat(fb);
    return [fa.length, fb.length];
}

let output = compareTriplets([17,28,30], [99,16,8]);
console.log(output);


// let a = b = c= 1;
// console.log(a, b,c,a);
// let a = {b:1,c:true}
// let d = {type, typo=1, ...aVals} = a;
// console.log(d);
// function a() {var b = "??"}
// console.log(b);
// if([0] && []) console.log("ayee");
// console.log(!!true, !true);
// let a = 0;
// let hasA = !!a;
// console.log(hasA);
 */
