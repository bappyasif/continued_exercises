function minimaxSum(arr) {
  arr.sort();
  let sums = [];
  sums.push(arr.slice(0, 4).reduce((a, c) => a + c, 0));
  sums.push(arr.slice(1, 5).reduce((a, c) => a + c, 0));
//   console.log(sums.sort());
  return [Math.min(...sums), Math.max(...sums)];
}

output = minimaxSum([1, 3, 5, 7, 9]);
console.log(output, BigInt(69 + 2 + 221 + 8974));
output = minimaxSum([7,69,2,221,8974]);
console.log(output);

/**
 * 
 * 
 function minimaxSum(arr) {
  let sums = [];
  sums.push((a, c, i) => {
    if (i < arr.length - 1) {
      let temp = 0;
      temp += a + c;
      sums.push(temp);
      temp = 0;
    }
    if (i > 0 && i <= arr.length) {
      let temp = 0;
      temp += a + c;
      sums.push(temp);
      temp = 0;
    }
  }, 0);
  return sums;
}
 * 
 * 
 function minimaxSum(arr) {
    let sums = [];
    let dummy = arr;
    for (let i = 0; i < arr.length; i++) {
        sums.push(dummy.reduce((a,c)=>a+c, 0));
        dummy.shift();
        console.log(dummy)
    }
    return sums;
}
 */
