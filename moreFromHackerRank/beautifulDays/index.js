function beautifulDays(dayBegin, dayEnd, divisor) {
    let movieDays = [];
    
    for(let i = dayBegin; i <= dayEnd; i++) {
        // console.log(i.length, typeof i, i.toString().length);
        let until = i.toString();
        let revs = []
        for(let j=until.length; j>=0 ; j--) {
            revs.push(until[j]);
        }
        // console.log(typeof Number(revs.join('')))
        let rs = Number(revs.join(''));
        let diff = Math.abs(i - rs);
        // console.log(diff, i, rs, until, rs % divisor===0, divisor, diff === 0, );

        if(diff % divisor === 0) {
            movieDays.push(i);
        }
        // if(diff === 0) {
        //     movieDays.push(i);
        // }
    }

    return movieDays.length
}

// output = beautifulDays(20, 23, 6);
output = beautifulDays(13, 45, 3);
console.log(output);


/***
 * 
 * 
 function beautifulDays(dayBegin, dayEnd, divisor) {
    let movieDays = [];
    
    // let reversed = num => Number(num.split('').reverse());
    // let reversed = num => num.split('\d').reverse();
    
    for(let i = dayBegin; i <= dayEnd; i++) {
        // let temp = Math.abs(i - Number(reversed(i.toString())));
        // reversed(i);
        // console.log(temp, reversed(i))
        // if(temp % divisor === 0) {
        //     movieDays.push(i);
        // }
    }

    return movieDays.length
}
 */