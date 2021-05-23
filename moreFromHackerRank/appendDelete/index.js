function appendDelete(s, t, k) {
  let maxOps = s.length + t.length;
  if( k > maxOps) return "Yes";
  let l = Math.min(s.length, t.length)
  for (let i = 0; i < l; i++) {
    if (s[i] !== t[i]) {
      break;
    }
    maxOps -= 2
  }
  
  return maxOps > k || (k - maxOps) % 2 !== 0 ? "No" : "Yes"
}

output = appendDelete("ashley", "ash", 2);
output = appendDelete("aba", "aba", 7);
output = appendDelete("hackerhappy", "hackerrank", 9);
output = appendDelete("abc", "def", 6);
console.log(output);

/**
 * 
 * 
 function appendDelete(s, t, k) {
  let maxOps = s.length + t.length;
  if( k > maxOps) return "Yes";

  for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, maxOps -= 2) {
    if (s[i] !== t[i]) {
      break;
    }
    // count = (s.length - i) + (t.length - i);
  }
  
  return maxOps > k || (k - maxOps) % 2 !== 0 ? "No" : "Yes"
  //   console.log(temp);
}
 * 
 * 
 function appendDelete(s, t, k) {
  let temp = "";
  let count;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      temp += s[i];
    } else {
      break;
    }
    // count = (s.length - i) + (t.length - i);
  }
  
  if(k >= temp.length ) return "Yes"

  if (temp.length <= k && temp.length%2 === k%2) {
    return "Yes";
  }

  return "No";
  //   console.log(temp);
}
 * 
 * 
 function appendDelete(s, t, k) {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      temp += s[i];
    } else {
      break;
    }
  }
  
  if (temp.length > k) return "No";

  if (t.length - temp.length <= k) {
    return "Yes";
  }

  return "No";
  //   console.log(temp);
}
 * 
 * 
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
  // if (t.length - temp.length <= k) {
  //   return "Yes";
  // }
  if(s.length === t.length) {
    let temp2 = ""
    for(let i=0; i<s.length; i++) {
      // console.log(s.charAt(i+t.length), String.fromCharCode(s[i+t.length]) === t[i], String.fromCharCode(s.charCodeAt(i+t.length)))
      
      if(String.fromCharCode(s.charCodeAt(i+t.length)) === t[i]) {
        temp2 += s[i];
      } else {
        break
      }
    }
    return temp2 === t;
  }

  if (t.length - temp.length <= k) {
    return "Yes";
  }


  return "No";
  //   console.log(temp);
}
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
