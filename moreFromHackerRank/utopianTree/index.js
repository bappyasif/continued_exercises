function utopianTree(growthCycles) {
  let count = 0;
  if (growthCycles <= 60) {
    for (let i = 0; i <= growthCycles; i++) {
      if (i === 0) {
        count = 1;
        console.log(i, count, "if");
      } else if (i % 2 === 0) {
        count = count + 1;
        console.log(i, count, "e..f");
      } else {
        count = count * 2;
        console.log(i, count, "else");
      }
    }
  }
  return count;
}

output = utopianTree(5);
console.log(output);
