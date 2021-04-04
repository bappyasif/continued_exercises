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
    return resultedArray;
}