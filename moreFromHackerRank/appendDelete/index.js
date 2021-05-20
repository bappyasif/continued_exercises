function appendDelete(s, t, k) {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      temp += s[i];
    } else {
      break;
    }
  }
  // console.log(temp);
  // checking rules
  if (temp.length > k) return "No";
  if (t.length - temp.length <= k) {
    return "Yes";
  }


  return "No";
  //   console.log(temp);
}

output = appendDelete("ashley", "ash", 2);
output = appendDelete("aba", "aba", 7);
// output = appendDelete("hackerhappy", "hackerrank", 9);
console.log(output);

/**
 * 
 * 
 function appendDelete(s,t,k) {
    if(t.length > k) {
        return "No"
    } else if(s.length === t.length && s === t && t.length + s.length <= k) {
        return "Yes";
    } else {
        let temp = "";
        console.log(temp);
        for(let i=0; i<s.length; i++) {
            if(s[i] === t[i]) {
                temp += s[i];
            }
        }
        console.log(temp);
    }
    return "No"
}
 */
