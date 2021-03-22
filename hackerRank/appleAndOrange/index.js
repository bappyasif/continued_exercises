function countApplesAndOranges(
  startDistance,
  endDistance,
  aTree,
  oTree,
  apples,
  oranges
) {
    apples = apples.map(item => item+aTree);
    oranges = oranges.map(item => item+oTree);
    let numberOfApplesLanded = apples.filter(item => item >= startDistance && item <= endDistance).length;
    let numberOfOrangesLanded = oranges.filter(item => item >= startDistance && item <= endDistance).length;
    console.log(numberOfApplesLanded);
    console.log(numberOfOrangesLanded);

//   return [apples, oranges];
}

output = countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
console.log(output);
