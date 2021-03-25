function billDivision(array, k, b) {
    let bill = 0;
    let filteredArr = array.filter((_, idx) => idx!= k);
    // bill = filteredArr.reduce((a,c)=>a+c,0)/filteredArr.length;
    bill = filteredArr.reduce((a,c)=>a+c,0)/2;
    return b - bill === 0 ? "Bon Appetit" : b - bill;
    // return array;
    // return filteredArr;
}

output = billDivision([2,4,6], 2, 0);
output = billDivision([3,10,2,9], 1, 12);
output = billDivision([3,10,2,9], 1, 7);
console.log(output);