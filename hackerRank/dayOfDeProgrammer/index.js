function dayOfDeProgrammer(year) {
  if (year === 1918) return "26.09.1918";
  let isLY = leapYear(year);
  let numberOfDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let dateStr = "";
  let diff = 0;

  if (isLY) {
    diff = makeString(numberOfDays) - 1;
    // console.log(diff)
    dateStr = `${diff}-09-${year}`;
  } else {
    diff = makeString(numberOfDays);
    dateStr = `${diff}-09-${year}`;
  }
  return dateStr;
}

function makeString(months) {
  let count = 0;
  for (let i in months) {
    if (i <= 8) {
      count += months[i];
    }
  }
  let diff = 256 - count;
  return diff;
}

function leapYear(year) {
//   return year % 400 === 0 ? true : year % 4 === 0 ? true : year % 100 === 0;
return (((year <= 1917) && (year % 4 === 0)) || ((year > 1918) && (year%400 === 0 || year%4 === 0) && (year%100 !== 0)) )
}

// output = dayOfDeProgrammer(1984);
// output = dayOfDeProgrammer(2017);
// output = dayOfDeProgrammer(2016);
output = dayOfDeProgrammer(1800);
console.log(output);

/**
 * 
 * 
 function dayOfDeProgrammer(year) {
  let isLY = leapYear(year);
  let numberOfDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let dateStr = "";

  if (isLY) {
    let diff = makeString(numberOfDays) - 1;
    // console.log(diff - 1);
    dateStr = `${diff}-09-${year}`;
  } else {
    let diff = makeString(numberOfDays);
    dateStr = `${diff}-09-${year}`;
  }
  return dateStr;
}

function makeString(months) {
  let count = 0;
  for (let i in months) {
    if (i <= 8) {
      count += months[i];
    }
  }
  let diff = 256 - count;
  return diff;
}

function leapYear(year) {
  return year % 400 === 0
    ? true
    : year % 4 === 0 && year % 100 !== 0
    ? true
    : false;
}
 * 
 * 
 function dayOfDeProgrammer(year) {
  let isLY = leapYear(year);
  console.log(isLY);
  let numberOfDays = {
    jan: 31,
    feb: 28,
    mar: 31,
    apr: 30,
    may: 31,
    jun: 30,
    jul: 31,
    aug: 31,
    sep: 30,
    oct: 31,
    nov: 30,
    dec: 31,
  };
  numberOfDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let dateStr = "";
  if (isLY) {
    let count = 0;
    for (let i in numberOfDays) {
      if (i <= 8) {
        //   console.log(numberOfDays[i], i);
        if (i == 2) {
            // console.log(i)
          count += numberOfDays[i] + 1;
        } else {
          count += numberOfDays[i];
        }
      }
    }
    console.log("true",count);
    let diff = 256 - count;
    dateStr = `${diff}-09-${year}`;
  } else {
    let count = 0;
    for (let i in numberOfDays) {
      if (i <= 8) {
        //   console.log(numberOfDays[i], i);
        count += numberOfDays[i];
      }
    }
    let diff = 256 - count;
    dateStr = `${diff}-09-${year}`;
  }
  return dateStr;
  // return isLY;
  // return year;
}
 */
