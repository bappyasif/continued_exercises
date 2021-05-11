function circularRightArrayRotation(a, k, queries) {
  let rotating = [];
  
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < a.length; j++) {
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

output = circularRightArrayRotation([3, 4, 5], 2, [1, 2]);
console.log(output);


/**
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