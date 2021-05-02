function angryProfessor(threshold, students) {
  let not = 0;
  students.forEach((stoa) => {
    if(stoa <= 0) {
        not++;
    } 
  });
  
  return threshold > not ? "YES" : "NO";
//   return threshold > count ? "YES" : "NO";
}

// output = angryProfessor(3, [-2,-1,0, 1,2]);
// output = angryProfessor(3, [-1,-3, 4,2]);
output = angryProfessor(2, [0, -1, 2, 1]);
console.log(output);

/**
 * 
 * 
function angryProfessor(threshold, students) {
  let diff = 0;
  let not = 0;
  let off = 0;

  students.forEach((stoa) => {
    if(stoa <= 0) {
        not++;
    } else {
        off++;
    }
  });
  diff = not - off;
  console.log(diff, threshold , not, off)
  return threshold === not ? "NO" : "YES";
//   return threshold > count ? "YES" : "NO";
}
 * 
 * 
 function angryProfessor(threshold, students) {
  let count = 0;
  students.forEach((stoa) => (count = stoa >= 0 ? count + 1 : count - 1));
  return threshold > count ? "YES" : "NO";
}
 */
