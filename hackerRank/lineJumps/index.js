function kangarooJumps(k1, v1, k2, v2) {
  let resp = "NO";
  let flag = false,
    count = 0;
  if (v2 > v1 && k2 > k1) {
    resp = "NO";
    return resp;
  } else {
    // let flag = false, count = 0
    while (!flag && count < 110) {
      k1 += v1;
      k2 += v2;

      k1 === k2 ? (flag = true) : (flag = false);
      count++;
    }
  }
  if (flag) resp = "Yes";
  return resp;
}

output = kangarooJumps(0, 3, 4, 2);
// output = kangarooJumps(2, 1, 1, 2)
// output = kangarooJumps(0, 2, 5, 3);
console.log(output);

/**
 * 
 *
 function kangarooJumps(k1, v1, k2, v2) {
  let resp = "NO";
  let catchUp = v2 < v1;
  if(catchUp) {
      let willMeet = (k1 - k2) % (v2 - v1) === 0;
      if(willMeet) resp = "YES";
  }
  return resp;
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
    if(k2 > k1 && v2 > v1) return "No";
    let count = 0;
    while (1>0) {
        for(let i =0; 1>0; i++) {
            return (k1 += v1) !== (k2 += v2) ? "YES" : "No"
        }
        count++;
    // return "Yes";
  }
  return "No";
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
    if(k2 > k1 && v2 > v1) return "No";
    while ((k1 += v1) !== (k2 += v2)) {
    return "Yes";
  }
  return "No";
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
  //   return k1 === k2 ? "Yes" : "No";
  while ((k1 += v1) !== (k2 += v2)) {
    return "Yes";
  }
  return "No";
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
  for (let i = 0; i < 4; i++) {
    k1 += v1;
    k2 += v2;
    console.log(k1, k2);
    // return k1 === k2 ? "Yes" : "No";
  }
  return k1 === k2 ? "Yes" : "No";

  // while(1>0) {
  //     return (k1 + v1) === (k2 + v2) ? "YES" : "NO";
  // }
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
  // return (k1 + v1) === (k2 + v2) ? "YES" : "NO";
  let k1Pos = 0,
    k2Pos = 0;
  for (let i = 0; i < 10; i++) {
    k1Pos += k1 + v1;
    k2Pos += k2 + v2;
    console.log(k1Pos, k2Pos);
    // return k1Pos === k2Pos ? "Yes" : "No";
  }
  return k1Pos === k2Pos ? "Yes" : "No";

  // while(1>0) {
  //     return (k1 + v1) === (k2 + v2) ? "YES" : "NO";
  // }
}
 * 
 * 
 function kangarooJumps(k1, v1, k2, v2) {
    // return [k1, v1, k2, v2];
    return (k1 + v1) === (k2 + v2) ? "YES" : "NO";
}
 */
