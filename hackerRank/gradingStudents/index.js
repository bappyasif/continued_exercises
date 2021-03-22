function roundingGrades(gradesArr) {
  return gradesArr.map((grade) => {
    // console.log((grade+2)%5 === 0)
    if (grade < 38) return grade;
    else if ((grade + 2) % 5 === 0) return grade + 2;
    else if ((grade + 1) % 5 === 0) return grade + 1;
    else return grade;
  });
  // return gradesArr;
}

output = roundingGrades([4, 73, 67, 38, 33]);
console.log(output);
