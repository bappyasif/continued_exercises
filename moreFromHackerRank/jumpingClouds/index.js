function jumpingClouds(clouds, jump) {
  let energy = 100;
  let n = clouds.length;
  let idx = 0;
  do {
    idx = (idx + jump)%n;
    console.log(idx);
    if(clouds[idx] === 1) energy -= 2;
    energy--;
  } while(idx)

  // for(let i=(i+jump)%n; i>0; i--) {
  //   // i = (i+jump)%n;
  //   console.log(i)
  //   if(clouds[i] === 1) energy -= 2;
  //   energy--;
  // }

  // for(let i=0; i<n; i++) {
  //   // i = (i+jump)%n;
  //   // i = i % n;
  //   console.log(i)
  //   if(i % n) {
  //     if(clouds[i] === 1) energy -= 2;
  //   // if(i !== 0) break
  //   energy--;
  //   } else {
  //     if(clouds[i] === 1) energy -= 3;
  //   // if(i !== 0) break
  //   energy--;
  //   }
  // }

  // for (let i = 0; i < n; i += jump) {
  //   // i = (i+jump)%n;
  //   // i = i % n;
  //   // console.log(i)
    
  //   if (clouds[i] === 1) energy -= 3;
  //   else energy--;

  //   // if (clouds[(i+jump)%n] === 1) energy -= 3;
  //   // else energy--;

  // }
  return energy;
}

output = jumpingClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
// output = jumpingClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
console.log(output);

/**
 * 
 * 
 function jumpingClouds(clouds, jump) {
  let energy = 100;
  let n = clouds.length;
  let idx = 0;
  do {
    idx = (idx + jump)%n;
    console.log(idx);
    if(clouds[idx] === 1) energy -= 2;
    energy--;
  } while(idx)
  return energy;
}
 * 
 * 
 function jumpingClouds(clouds, jump) {
  let energy = 100;
  let n = clouds.length;
  // console.log(n % jump);
  let modChk = n % jump
  if(modChk !== 0) {
    for (let i = 0; i < n; i += modChk) {
      console.log((i + modChk) % n, clouds[(i + modChk) % n], "if");
      if (clouds[(i + modChk) % n] === 1) {
      // if (clouds[i] === 1) {
        // energy -= modChk;
        energy -= jump;
      }
      // i = (i + jump) % n;
      console.log(i + modChk >= n, i, jump, modChk, i + jump > n);
      // if(i+jump > n) return;
      if(i+jump > n) break;
      // if(i+jump >= n) i = 0;
      energy--;
      console.log(energy);
    }
  } else {
    for (let i = 0; i < n; i += jump) {
      console.log((i + jump) % n, clouds[(i + jump) % n], "else");
      // if (clouds[(i + jump) % n] === 1) {
      if (clouds[i] === 1) {
        energy -= jump;
      }
      // i = (i + jump) % n;
      console.log(i + jump > n, i, jump);
      // if(i+jump >= n) i = 0;
      energy--;
      console.log(energy);
    }
  }
  return energy;
}
 * 
 * 
 function jumpingClouds(clouds, jump) {
  let energy = 100;
  let n = clouds.length;
  console.log(n % jump);
  for (let i = 0; i < n; i += jump) {
    console.log((i + jump) % n, clouds[(i + jump) % n]);
    // if (clouds[(i + jump) % n] === 1) {
    if (clouds[i] === 1) {
      energy -= jump;
    }
    // i = (i + jump) % n;
    console.log(i + jump > n, i, jump);
    // if(i+jump >= n) i = 0;
    energy--;
    console.log(energy);
  }
}
 * 
 * 
 function jumpingClouds(clouds, jump) {
    let energy = 100;
    let n = clouds.length
    console.log(n % jump);
  for(let i=0; i < n; i += jump) {
    console.log((i+jump)%n, clouds[(i+jump)%n])
      if(clouds[(i+jump)%n] === 1) {
        energy -= 2;
      }
      energy--;
      console.log(energy);
  }
//   console.log(energy);
  // return clouds;
}
 * 
 * 
 function jumpingClouds(clouds, jump) {
    let energy = 100;
  for(let i=0; i < clouds.length; i += jump) {
      if(clouds[i] === 1) {
          console.log(clouds[i], i);
          energy = energy-jump;
      }
      if(i=== clouds.length -1) {
          energy--;
      }
      energy--;
      console.log(energy);
  }
//   console.log(energy);
  // return clouds;
}
 * 
 * 
 function jumpingClouds(clouds, jump) {
    let energy = 100;
  for(let i=0; i < clouds.length; i += jump) {
      if(clouds[i] === 1) {
          console.log(clouds[i], i);
          energy = energy-2;
      }
      energy--;
  }
  console.log(energy);
  // return clouds;
}
 */
