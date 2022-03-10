function queensAttackVersionTwo(n, k, rq, cq, obstacles) {
    // createGrids(n, rq, cq);
    // placeQueen(rq, cq, n);
    // console.log(grids);
    // createAndPlaceQueens(n, rq, cq);
    // console.log(twoDimensionalGridsArray(n))

    grids = twoDimensionalGridsArray(n);
    // console.log(grids);
    placeQueen(rq, cq, n);
    return obstacles
}

let twoDimensionalGridsArray = (n) => {
    let newArray = new Array(n);
    for(let i=0; i<n; i++) {
        newArray[i] = new Array(n);
        for(let j=0; j<n; j++) {
            newArray[i][j] = [i+1,j+1];
        }
    }
    return newArray
    // return newArray.map(arrs=>arrs.filter(arr=>arr!=null)).filter(v=>v!=null)
}

let grids = []

let placeQueen = (rq, cq, n) => {
    // console.log(grids, rq, cq, n);
    console.info(JSON.stringify(grids));
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            // console.log(grids[i][j])
            if(grids[i][j][0]==rq && grids[i][j][1]== cq) {
                console.log(grids[i][j], "here!!")
                // checkRow(rq, n);
                countMovesInRow += (j-0)
                countMovesInCollumn += (i-0)
                console.log(countMovesInRow, countMovesInCollumn)
            }
        }
    }
}
let countMovesInRow = 0;
let countMovesInCollumn = 0;

let checkDiagonalsBottomUp = () => {
    
}

let createGrids = n => {
    for(let i=1; i<=n; i++) {
        for(let j=1;j<=n; j++ ) {
            // console.log(i==4 && j==4)
            grids.push([i, j])
        }
    }
}

output = queensAttackVersionTwo(4, 0, 4, 4);
console.log(output)

// let checkRow = (rq, n) => {
//     for(let i=0; i<n; i++) {
//         for(let j=0; j<n; j++) {
//             if(i == rq) {
//                 countMovesInRow++;
//                 console.log(countMovesInRow, "count");

//             }
//         }
//     }
// }

// let createAndPlaceQueens = (n, rq, cq) => {
//     for(let i=1; i<=n; i++) {
//         for(let j=1;j<=n; j++ ) {
//             // console.log(i==rq && j==cq)
//             if(i==rq && j==cq) {
//                 grids.push({"queen": [rq, cq]})
//             } else {
//                 grids.push([i, j])
//             }
//         }
//     }
// }