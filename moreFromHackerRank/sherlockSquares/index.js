function sherlockAndSquareIntegers(lowB, highB) {
  let integers = [];
  let i = 1;
  while (i * i <= highB) {
    i * i >= lowB && i * i <= highB ? integers.push(i * i) : "";
    i++;
  }
  return integers;
}

output = sherlockAndSquareIntegers(24, 49);
output = sherlockAndSquareIntegers(3, 9);
console.log(output);
