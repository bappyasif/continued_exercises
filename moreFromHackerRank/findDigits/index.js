function findDigits(num) {
    let stringified = JSON.stringify(num);
    let count = 0
    // console.log(stringified, typeof stringified)
    stringified.split("").forEach(d=>num%d===0 ? count++ : false )
    return count;
}

output = findDigits(124);
output = findDigits(10);
console.log(output);