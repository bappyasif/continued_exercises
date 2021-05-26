function libraryFine(returnedDate, expectedDate) {
  let rDate = returnedDate.split("-");
  rDate = [].concat(rDate[1], rDate[0], rDate[2]).join(" ");

  let eDate = expectedDate.split("-");
  eDate = [].concat(eDate[1], eDate[0], eDate[2]).join(" ");
  // console.log(rDate.join(" "), eDate.join(" "));

  let checkYear =
    new Date(rDate).getFullYear() === new Date(eDate).getFullYear();
  let checkMonth = new Date(rDate).getMonth() === new Date(eDate).getMonth();
  // console.log(checkYear, checkMonth);
  if (checkYear && checkMonth) {
    let diff = new Date(rDate).getDate() - new Date(eDate).getDate();
    //   console.log(diff)
    return diff > 0 ? diff * 15 : 0;
  } else if (checkYear) {
    let diff = new Date(rDate).getMonth() - new Date(eDate).getMonth();
    return new Date(rDate).getMonth() < new Date(eDate).getMonth() ? 0 : diff * 500
    //   console.log(diff)
    // return 500 * diff;
  } else if (!checkYear && !checkMonth) {
    return 10000;
  } else if (!checkYear) {
    return 10000;
  } else {
    return 0;
  }

  // console.log(new Date(returnedDate).getFullYear())
  // return returnedDate;
}

// output = libraryFine("9-6-2015", "6-6-2015");
// output = libraryFine("9-9-2015", "9-6-2015");
// output = libraryFine("9-9-2015", "9-6-2016");
// output = libraryFine("9-6-2015", "9-6-2015");
// output = libraryFine("1-1-2016", "12-31-2015");
// output = libraryFine("1-1-2016", "1-1-2015");
output = libraryFine("28-2-2015", "15-4-2015");
console.log(output);

/**
 * 
 * 
 function libraryFine(returnedDate, expectedDate) {
    let checkYear = new Date(returnedDate).getFullYear() === new Date(expectedDate).getFullYear();    
    let checkMonth = new Date(returnedDate).getMonth() === new Date(expectedDate).getMonth();
    console.log(checkYear, checkMonth, new Date(returnedDate).getMonth()+1, new Date(expectedDate).getMonth()+1)
    if(checkYear && checkMonth) {
        let diff = new Date(returnedDate).getDate() - new Date(expectedDate).getDate();
        console.log(diff)
    }

    // console.log(new Date(returnedDate).getFullYear())
    // return returnedDate;
}
 */
