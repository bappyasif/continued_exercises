function magicSquares(matrix) {
    let count = 0;
    // matrix.forEach(item => count++)
    matrix.forEach(item => (count = item.length))
    // console.log(count);
    let resultedArray = [], temp = [];

    let check = arr => resultedArray.find(item => {
        return item.every(val => arr.includes(val));
    });

    for(let i=0; i<count; i++) {
        for(let j=0; j<count; j++) {
            // console.log(matrix[i][j])
            if(i === 0 && j === 0) {
                temp = [Math.floor(count/2), count-1];
                resultedArray.push(temp);
            } else {
                if(i-1 === -1) {
                    temp = [count-1, j+1];
                    resultedArray.push(temp);
                } else if(j+1 === count) {
                    temp = [i-1, count-1];
                    resultedArray.push(temp);
                } else {
                    temp = [i-1, j+1];
                    console.log(check(temp));
                    resultedArray.push(temp);
                }
                // normalizing temp
                // temp = [];
            }
        }
    }
    
    return resultedArray;
    // matrix.forEach(item =>console.log(item))
    // return matrix;
}

output = magicSquares([[4,8,2],[4,5,7],[6,1,6]]);
console.log(output);



/**
 * 
 * 
 function magicSquares(matrix) {
    let count = 0;
    // matrix.forEach(item => count++)
    matrix.forEach(item => (count = item.length))
    // console.log(count);
    let resultedArray = [];
    for(let i=0; i<count; i++) {
        for(let j=0; j<count; j++) {
            // console.log(matrix[i][j])
            if(i === 0 && j === 0) {
                resultedArray.push([Math.floor(count/2), count-1]);
            } else {
                if(i-1 === -1) {
                    resultedArray.push([count-1, j+1]);
                } else if(j+1 === count) {
                    resultedArray.push([i-1, count-1]);
                } else {
                    resultedArray.push([i-1, j+1]);
                }
            }
        }
    }
    
    return resultedArray;
    // matrix.forEach(item =>console.log(item))
    // return matrix;
}
 */