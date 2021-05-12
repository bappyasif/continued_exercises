function circularRightArrayRotation(a, k, queries) {
  let rotating = [];
  let n = a.length;
  k = k % n;
  // let startIdx = (n - k) % n;
  let startIdx = n - k;
  console.log(n, k, startIdx);

  for (let i = 0; i < queries.length; i++) {
    console.log(
      a[startIdx],
      a[queries[i]],
      a[startIdx + queries[i]],
      a[startIdx + queries[i]] % n
    );
    rotating[i] = a[(startIdx + queries[i]) % n];
  }
  // return queries
  // console.log(a);
  return rotating;
  //   console.log(rotating);
  // return a;
}

output = circularRightArrayRotation([3, 4, 5], 2, [1, 2]);
// output = circularRightArrayRotation([1,2,3], 2, [0,1, 2]);
console.log(output);

/**
 * 
 * 
 function circularRightArrayRotation(a, k, queries) {
  let rotating = [];
  let n = a.length;
  console.log(n, k%n);
  for (let i = 0; i < n; i++) {
    a[(i + k) % n] = a[i];
  }
  for(let i=0; i<queries.length;i++) {
    rotating[i] = a[queries[i]];
    queries[i] = a[queries[i]];
  }
  // return queries
  // console.log(a);
  return rotating;
  //   console.log(rotating);
  // return a;
}
 * 
 * 
 function circularRightArrayRotation(a, k, queries) {
  let rotating = [];
  let n = a.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < a.length; j++) {
      console.log(a[(j+k)%n])
      if (j !== a.length) {
        let temp = [];
        temp = temp.concat(a[a.length-1], a.slice(j, a.length-1));
        a = temp;
        console.log(temp, a)
      }
    //   console.log(temp)
      break;
    }
  }

  for(let i = queries[0]; i <= queries[queries.length-1]; i++) {
      rotating.push(a[i]);
  }
  return rotating
//   console.log(rotating);
  // return a;
}
 * 
 * 
 function circularRightArrayRotation(a, k, queries) {
  let rotating = [];
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < a.length; j++) {
      if (j !== a.length) {
        let temp = a[j];
        rotating = rotating.concat(a[a.length - 1], a.slice(j, a.length));
      }
      break;
    }
  }
  console.log(rotating);
  // return a;
}
 */
