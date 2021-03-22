function diagonalDifferencce(arr) {
    arr = arr.filter(el=>el.length !== 1);
  let d1 = [],
    d2 = [];
  let cc = 0;
  let rc = arr.length -1;
  let absDiff;
  arr.forEach((item) => {
    // console.log(JSON.stringify(item));
    d1.push(item[cc]);
    cc++;
    d2.push(item[rc]);
    rc--;
  });

  absDiff = Math.abs(d1.reduce((a, c) => a + c, 0) - d2.reduce((a, c) => a + c, 0));
  return absDiff;
}
output = diagonalDifferencce([[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log(output);

/**
 * 
 * 
 function diagonalDifferencce(arr) {
  let d1, d2 = 0;
//   array = arr.filter(item=> item.length === 3);
  let n = arr.length;
//   console.log(n);
  for(let i = 0; i < n; i++) {
      d1 += arr[i][i];
      d2 += arr[n-1][i];
  }
  return Math.abs(d1 - d2);
}
 * 
 * 
 function diagonalDifferencce(arr) {
  let sum = 0;
  array = arr.filter(item=> item.length === 3);
  let n = array.length;
  for(let i = 0; i < n; i++) {
      sum += array[i][i] - array[i][n-1-i];
  }
  return sum >= 0 ? sum : sum * -1;
}
 * 
 * 
 function diagonalDifferencce(arr) {
  let sum = 0;
  let n = arr.length;
  let newArray = arr.filter(item=> item.length === 3);
  n = newArray.length;
  for(let i = 0; i < n; i++) {
      sum += newArray[i][i] - newArray[i][n-1-i];
  }
  return sum >= 0 ? sum : sum * -1;
}
 * 
 * 
 function diagonalDifferencce(arr) {
  let absDiff;
  let d1 = d2 = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > 2) {
        d1 += arr[i][i];
        // console.log(d1);
        d2 += arr[i][arr.length-i-1];
      }
  }
  absDiff = Math.abs(d1 - d2);
  return absDiff;
}
 * 
 * 
 function diagonalDifferencce(arr) {
  let absDiff;
  let sum = 0;
  // console.log(JSON.stringify(arr.length));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      // console.log(arr[i][i])
      sum += arr[i][i];
      // console.log(arr[i][i], sum);
      sum -= arr[i][arr.length - 1 - i];
      console.log(arr[i][arr.length - 1 - i], sum);
    }
  }
  absDiff = Math.abs(sum);
  return absDiff;
}
 * 
 * 
 function diagonalDifferencce(arr) {
  let d1 = [],
    d2 = [];
  let cc = 0;
  let rc = 2;
  let absDiff;
  arr.forEach((item) => {
    console.log(JSON.stringify(item));

    if (item.length === 3 && cc < 3 && rc > -1) {
      d1.push(item[cc]);
      cc++;
      d2.push(item[rc]);
      rc--;
    }
  });

  absDiff = Math.abs(d1.reduce((a, c) => a + c) - d2.reduce((a, c) => a + c));
  return absDiff;
  //   return JSON.stringify([d1, d2]);
  //   return array;
}
 */
