function birthdayCakeCandlesExercise(arr) {
    let isMax = Math.max(...arr);
    return arr.filter(el=> el===isMax).length;
}

output = birthdayCakeCandlesExercise([3,2,1,3]);
console.log(output);