function savePrisoner(n, sweets, starts) {
  let modCheck = sweets % n;

  let modCheck2 = (modCheck+starts-1) % n;
  
  return modCheck2 || n;
}

// output = savePrisoner(5, 2, 1);
// output = savePrisoner(5, 2, 2);
// output = savePrisoner(7, 19, 2);
output = savePrisoner(3, 7, 3);
// output = savePrisoner(7, 199, 2);
output = savePrisoner(5, 13, 5);
console.log(output);

/**
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  let modCheck = sweets % n;
  
  let modCheck2 = 1 + (starts + sweets - 2) % n;
  console.log(modCheck, modCheck2);
  return modCheck2
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  let modCheck = starts + sweets - 1 % n;
  let modCheck2 = 1 + (starts + sweets - 2) % n;
  console.log(modCheck, modCheck2);
  return modCheck2
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  let modCheck = sweets % n;

  console.log("modCheck:", modCheck);

  console.log(
    "starts:",
    starts,
    "sweets",
    sweets,
    "after:",
    modCheck,
    "presioner:",
    n
  );

  console.log("new mod: ", modCheck%n);
  console.log("new mod2: ", n%modCheck);
  console.log("new mod3: ", starts%modCheck);
  console.log(modCheck+starts-1, n,"diff", modCheck+starts-1-n)

  return modCheck+starts-1 > n ? n : modCheck+starts-1;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  let modCheck = sweets % n;

  console.log("modCheck:", modCheck);

  console.log(
    "starts:",
    starts,
    "sweets",
    sweets,
    "after:",
    modCheck,
    "presioner:",
    n
  );

  return modCheck+starts-1 > n ? n : modCheck+starts-1;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  let modCheck = sweets % n;

  console.log("modCheck:", modCheck);

  console.log(
    "starts:",
    starts,
    "sweets",
    sweets,
    "after:",
    modCheck,
    "presioner:",
    n
  );

  if(starts === n) {
    return starts;
  }
  if(modCheck < starts) {
    return modCheck;
  }

  return modCheck+starts-1
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck = sweets % n;

  // let diff = starts - modChecker;

  console.log("modCheck:", modCheck);

  console.log(
    "starts:",
    starts,
    "sweets",
    sweets,
    "after:",
    modCheck,
    "presioner:",
    n
  );

  return modCheck+starts-1
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck = sweets % n;
  let modChecker = modCheck % starts;
  let diff = starts - modChecker;
  // let modChecker = starts % modCheck;
  console.log("another:", modChecker);
  console.log("modCheck:", modCheck);
  console.log("starts:", starts, "sweets", sweets, "after:", modCheck);
  if (sweets > n) {
    return modCheck > starts ? modCheck + diff : starts;
  }
  return modCheck >= starts ? starts + 1 : modCheck * starts;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck = sweets % n;
  // let modCheker = modCheck % starts
  let modChecker = starts % modCheck;
  console.log("another:", modChecker);
  console.log("modCheck:", modCheck);
  console.log("starts:",starts);
  if(sweets > n) {
    if(modChecker === 0) {
      return starts;
    }
    return modCheck + 1
  } else {
    if(modChecker === 0) return starts + 1;
    return modCheck * starts;
  }
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck = sweets % n;
  // let modCheker = modCheck % starts
  let modCheker = starts % modCheck;
  console.log("another:", modCheker);
  console.log("modCheck", modCheck);
  console.log(starts);
  return modCheck + starts * modCheker;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck =  sweets % n;
  let modCheker = modCheck % starts
  console.log("another:", modCheker)
  console.log("modCheck", modCheck);
  if(sweets > n) {
    if(modCheck > starts) return modCheck+modCheker;
    if(modCheck <= starts) return starts;
  }
  if(modCheck > starts) return modCheck
  if(modCheck === starts) return modCheck + 1;
  // if(starts > modCheck) return starts;

}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  // let modCheck =  n % sweets;
  let modCheck =  sweets % n;
  console.log("modCheck", modCheck);
  if(starts < modCheck) return modCheck + 1
  // if(starts === modCheck) return modCheck + 1;
  if(starts > modCheck) return starts;

}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  for (let i = starts; i <= n; i++) {
    sweets--;
    if (sweets === 0) {
      return i;
    } else if(sweets > 0 && i === n) {
        i = 0;
    }
  }
  // return n;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  for (let i = starts; i <= n; i++) {
    sweets--;
    if (sweets === 0) {
      return i;
    }
  }
  // return n;
}
 * 
 * 
 function savePrisoner(n, sweets, starts) {
  for (let i = starts; i <= n; i++) {
    sweets--;
    if (sweets < n) {
      if (sweets === 0) {
        return i;
      }
    } else {
      if (i === n) {
        i = starts;
      } else {
        if (sweets === 0) {
          return i;
        }
      }
    }
  }
  // return n;
}
 */
