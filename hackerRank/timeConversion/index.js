function convertingTime(timeStr) {
  let isAP = timeStr.split(/[0-9]/);
  isAP = isAP[isAP.length - 1];

  let string = timeStr.replace(/[A-Z]/g, "");
  // console.log(string);
  let hmsArr = string.split(":");
  if (isAP === "AM") {
    // console.log(hmsArr);
    if (hmsArr[0] >= 12) {
      return "00:" + hmsArr.slice(1).join(":");
    } else if (hmsArr[0] < 12) {
      return string;
    }
  }

  if (isAP === "PM") {
    if (hmsArr[0] < 12) {
      hmsArr[0] = Number(hmsArr[0]) + 12;
    //   return hmsArr.join(":");
    } 
    // else if(hmsArr[0] >= 12 && hmsArr[0] < 25) {
    //     // return hmsArr.join(":");
    // }
    return hmsArr.join(":");
  }
}

output = convertingTime("12:01:00PM");
// output = convertingTime("09:01:00AM");
console.log(output);

/**
 * 
 * 
 function convertingTime(timeStr) {
    let isAP = timeStr.split(/[0-9]/);
    isAP = isAP[isAP.length - 1];

    let string = timeStr.replace(/[A-Z]/g, "");
    // console.log(string);
    let hmsArr = string.split(":");
    if(isAP === "AM") {
        // console.log(hmsArr);
        if(hmsArr[0] >= 12) {
            return "00:"+hmsArr.slice(1).join(":");
        } else if(hmsArr[0] < 12) {
            return string;
        }
    }

    if(isAP === "PM") {
        // hmsArr[0] += 12;
        // Number(hmsArr[0]) += 12;
        // let temp = hmsArr[0];
        // temp = Number(temp + 12)
        // hmsArr[0] = temp;        
        // return hmsArr.join(":");
        // console.log(Number(hmsArr[0]));
        hmsArr[0] = Number(hmsArr[0]) + 12;
        return hmsArr.join(":");
    }
    // return string;
    // return isAP;
    // return timeStr.split(/[0-9]/);
    
}
 */
