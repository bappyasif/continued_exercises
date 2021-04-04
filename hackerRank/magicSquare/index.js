function magicSquares(matrix) {
    let count = 0;
    matrix.forEach(item => (count = item.length))
    let resultedArray = [];
    resultedArray = Array(count).fill(0).map(x=>Array(count).fill(0));

    // initial position for 1
    let i = parseInt(count/2);
    let j = count - 1;

    // ets put in all values onee by one into magic square
    for(num = 1; num <= count * count; ) {
        if(i === -1 && j === count) { // 3rd condition
            j = count - 2;
            i = 0;
        } else {

            // 1st condition helper if next number goes to out of squares collumn boundary
            if(j === count) {
                j = 0;
            }
            // 1st condition helper if next number goes to out of squares rows boundary
            if(i < 0) {
                i = count - 1;
            }

            // 2nd condition
            if(resultedArray[i][j] !== 0) {
                j = j-2;
                i++;
                continue;
            } else {
                // set number
                resultedArray[i][j] = num++;
                // resultedArray[i][j] = num;
                // 1st condition
                j++;
                i--;
            }
        }
    }
    return resultedArray;;

    // return [initI, initJ];
    // for()
    // return resultedArray;
}

output = magicSquares([[4,8,2],[4,5,7],[6,1,6]]);
console.log(output);



/**
 * 
 * 
 function magicSquares(matrix) {
    let count = 0;
    matrix.forEach(item => (count = item.length))
    let resultedArray = [], temp = [];

    let check = arr => resultedArray.find(item => {
        return item.every(val => arr.includes(val));
    });

    let recalculatePosition = temp => {
        console.log(temp, JSON.stringify(resultedArray));
        if(check(temp)) {
            if(temp[0] === -1 && temp[1] === count) {
                // console.log("<>");
                resultedArray.push([0, count-2]);    
            } else {
                // console.log("??");
                resultedArray.push([temp[0]+1, temp[1]-2]);
            }
            // resultedArray.push([temp[0]+1, temp[1]-2]);
        } else {
            // console.log("??")
            resultedArray.push(temp);
        }
    }

    for(let i=0; i<count; i++) {
        for(let j=0; j<count; j++) {
            if(i === 0 && j === 0) {
                temp = [Math.floor(count/2), count-1];
                // temp = [count-1/2, count-1];
                resultedArray.push(temp);
            } else {
                if(i-1 === -1) {
                    temp = [count-1, j+1];
                    recalculatePosition(temp);
                } else if(j+1 === count-1) {
                    temp = [i-1, count-1];
                    // console.log("<..>", temp);
                    recalculatePosition(temp);
                } else {
                    temp = [i-1, j+1];
                    // console.log("<>", temp);
                    recalculatePosition(temp);
                }
            }
        }
    }
    return resultedArray;
}
 * 
 * 
 function magicSquares(matrix) {
    let count = 0;
    matrix.forEach(item => (count = item.length))
    let resultedArray = [], temp = [];

    let check = arr => resultedArray.find(item => {
        return item.every(val => arr.includes(val));
    });

    let recalculatePosition = temp => {
        console.log(temp, JSON.stringify(resultedArray));
        if(check(temp)) {
            if(temp[0] === -1 && temp[1] === count) {
                // console.log("<>");
                resultedArray.push([0, count-2]);    
            } else {
                // console.log("??");
                resultedArray.push([temp[0]+1, temp[1]-2]);
            }
            // resultedArray.push([temp[0]+1, temp[1]-2]);
        } else {
            // console.log("??")
            resultedArray.push(temp);
        }
    }

    for(let i=0; i<count; i++) {
        for(let j=0; j<count; j++) {
            if(i === 0 && j === 0) {
                temp = [Math.floor(count/2), count-1];
                resultedArray.push(temp);
            } else {
                if(i-1 === -1) {
                    temp = [count-1, j+1];
                    recalculatePosition(temp);
                } else if(j+1 === count) {
                    temp = [i-1, count-1];
                    // console.log("<..>", temp);
                    recalculatePosition(temp);
                } else {
                    temp = [i-1, j+1];
                    // console.log("<>", temp);
                    recalculatePosition(temp);
                }
            }
        }
    }
    return resultedArray;
}
 * 
 * 
 function magicSquares(matrix) {
    let count = 0;
    matrix.forEach(item => (count = item.length))
    let resultedArray = [], temp = [];

    let check = arr => resultedArray.find(item => {
        return item.every(val => arr.includes(val));
    });

    let recalculatePosition = temp => {
        if(check(temp)) {
            resultedArray.push([temp[0]+1, temp[1]-2]);
        } else {
            // console.log("??")
            resultedArray.push(temp);
        }
    }

    for(let i=0; i<count; i++) {
        for(let j=0; j<count; j++) {
            if(i === 0 && j === 0) {
                temp = [Math.floor(count/2), count-1];
                resultedArray.push(temp);
            } else {
                if(i-1 === -1) {
                    temp = [count-1, j+1];
                    recalculatePosition(temp);
                } else if(j+1 === count) {
                    temp = [i-1, count-1];
                    recalculatePosition(temp);
                } else {
                    temp = [i-1, j+1];
                    recalculatePosition(temp);
                }
            }
        }
    }
    return resultedArray;
}* 
 * 
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
                    if(check(temp)) {
                        resultedArray.push([temp[0]+1, temp[1]-2]);
                    } else {
                        resultedArray.push(temp);
                    }
                    // resultedArray.push(temp);
                } else if(j+1 === count) {
                    temp = [i-1, count-1];
                    if(check(temp)) {
                        resultedArray.push([temp[0]+1, temp[1]-2]);
                    } else {
                        resultedArray.push(temp);
                    }
                    // resultedArray.push(temp);
                } else {
                    temp = [i-1, j+1];
                    if(check(temp)) {
                        resultedArray.push([temp[0]+1, temp[1]-2]);
                    } else {
                        resultedArray.push(temp);
                    }
                    // console.log(check(temp));
                    // resultedArray.push(temp);
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