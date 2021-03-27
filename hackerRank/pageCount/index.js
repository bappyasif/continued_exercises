function pageCounts(n, p) {
    return Math.min(Math.floor((n-p)/2), Math.floor(p/2));
}

output = pageCounts(6, 2);
// output = pageCounts(5, 4);
console.log(output);

/**
 * 
 * 
 function pageCounts(n, p) {
  let pages = [];
  for (let i = 0; i <= n; i += 2) {
    if (i + 1 > n) {
      pages.push([i]);
    } else {
      pages.push([i, i + 1]);
    }
  }
  let minMax = [];
  pages.forEach((item, idx) => {
    if (item.indexOf(p) !== -1) minMax.push(idx);
  });

  pages.reverse().forEach((item, idx) => {
    if (item.indexOf(p) !== -1) minMax.push(idx);
  });
//   return minMax;
  return minMax.sort((a,b)=>a-b)[0];
}
 * 
 * 
 function pageCounts(n, p) {
  let pt = Math.floor(p/2);
  let totalTurns = Math.floor(n/2);
  return Math.min(pt, totalTurns-pt);
}
 * 
 * 
 function pageCounts(n, p) {
  let pages = [];
  for (let i = 0; i <= n; i += 2) {
    if (i + 1 > n) {
      pages.push([i]);
    } else {
      pages.push([i, i + 1]);
    }
  }
  let minMax = [];
  pages.forEach((item, idx) => {
    if (item.indexOf(p) !== -1) minMax.push(idx);
  });

  pages.reverse().forEach(((item, idx) => {
      if(item.indexOf(p) !== -1) minMax.push(idx);
  }))
  return minMax.sort()[0];
}
 * 
 * 
 function pageCounts(n, p) {
  let pages = [];
  for (let i = 0; i <= n; i += 2) {
    if (i + 1 > n) {
      pages.push([i]);
    } else {
      pages.push([i, i + 1]);
    }
  }
  let ltr, rtl;
  pages.forEach((item, idx) => {
    if (item.indexOf(p) !== -1) ltr = idx;
  });

  pages.reverse().forEach(((item, idx) => {
      if(item.indexOf(p) !== -1) rtl= idx;
  }))
  return [ltr, rtl];
}
 * 
 * 
function pageCounts(n,p) {
    let pages = [];
    for(let i=0; i<=n;i+=2) {
        if(i+1 > n) {
            pages.push([i])
        } else {
            pages.push([i,i+1]);
        }
    }
    let fi;
    pages.forEach(item => {
        item.findIndex(el=> console.log(el===p));
        // fi = item.findIndex(el=> el===p);
        // console.log(item.findIndex(p))
        // console.log(item.findIndex(2))
    })
    // let fi = pages.indexOf(p)
    return fi;
    // return pages;
    // return n;
}
 */
