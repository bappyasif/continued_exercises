function hurdleRace(heights, jumpHeight) {
    let potion = 0;
    let findMax = Math.max(...heights);
    if(findMax - jumpHeight > 0) {
        potion = findMax - jumpHeight
    } else if(findMax - jumpHeight < 0) {
        potion = 0;
    }
    return potion;
}

let output = hurdleRace([1,2,3,3,2], 1);
output = hurdleRace([2,5,4,5,2], 7);
console.log(output);