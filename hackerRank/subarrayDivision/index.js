function shareChocolate(arr, day, month) {
    let squares = [], subs = [], t = [];
    for(let i=0;i<arr.length; i++) {
        // subs.push(arr.slice(i,i+month));
        for(let j=i; j<month+i; j++) {
            t.push(arr[j]);
        }
        subs.push(t)
        t = [];
    }
    subs.forEach(item=>{
        if(item.reduce((a,c)=>a+c,0) === day) {
            squares.push(true);
        }
    });
    return squares.length;
  }




output = shareChocolate([1, 2, 1, 3, 2], 3, 2);
// output = shareChocolate([1,1,1,1,1,1], 3, 2);
console.log(output);

/**
 * 
 * 
 function shareChocolate(arr, day, month) {
  let squares = [], subs = [];
  for(let i=0;i<arr.length; i++) {
      subs.push(arr.slice(i,i+month));
  }
  subs.forEach(item=>{
      if(item.reduce((a,c)=>a+c,0) === day) {
          squares.push(true);
      }
  });
  return squares.length;
// return subs;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
    let squares = [];
    for(let i=0; i<arr.length; i++) {
        let temp = arr.slice(i, month+i);
        if(temp.reduce((a,c)=> a+c) === day) {
            squares.push(true);
        }
    }
    return squares.length;
    // return arr;
}
 * 
 * 
function shareChocolate(arr, day, month) {
    let squares = [];
    for(let i=0; i<arr.length; i++) {
        let temp = arr.slice(i, month+i);
        temp.reduce((a,c)=> {
            if((a+c)===day) squares.push(true);
        });
    }
    return squares.length;
    // return arr;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
    let squares = [];
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j = i; j<i+month; j++) {
            sum += arr[j];
        }
        if(sum === day) {
            squares.push(true);
            sum = 0;
        }
    }
    return squares.length;
    // return arr;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
    let squares = [];
    for(let i=0; i<arr.length; i++) {
        while(month) {
            if(arr[i] + arr[i+1] === day) {
                squares.push([arr[i], arr[i+1]]);
            } else if(arr[i] === day) {
                squares.push(arr[i]);
            }
            month--;
        }
    }
    return squares.length;
    // return arr;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
  let squares = [];
  let temp = 0;
  for(let i=0; i<arr.length; i++) {
      while(month) {
        temp += arr[i];
        month--;
      }
      if(temp === day) {
          squares.push(true);
          temp = 0;
      }
  }

  return squares.length;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
  let squares = [];
  let temp = 0;
  for(let i=0; i<arr.length; i++) {
      if(Math.abs(month - i) > 0) {
          temp += arr[i];
      }
      if(temp === day) {
        squares.push(true);
        temp = 0;
      }
  }
  return squares.length;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
  let squares = [];
  let temp = 0;
  for(let i=0; i<arr.length; i++) {
      while(month > 0) {
          temp += arr[month];
          if(temp === day) {
            squares.push(true);
            temp = 0;
        }
          month--;
      }
  }
  return squares.length;
}
 * 
 * 
 function shareChocolate(arr, day, month) {
    let squares = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] + arr[i+1] === day) {
            squares.push([arr[i], arr[i+1]]);
        } else if(arr[i] === day) {
            squares.push(arr[i]);
        }
    }
    return squares.length;
    // return arr;
}
 */
