function queensAttackVersionTwo(n, k, rq, cq, obstacles) {
    // createGrids(n, rq, cq);
    // placeQueen(rq, cq, n);
    // console.log(grids);
    createAndPlaceQueens(n, rq, cq);
    return obstacles
}

let grids = []

let createAndPlaceQueens = (n, rq, cq) => {
    for(let i=1; i<=n; i++) {
        for(let j=1;j<=n; j++ ) {
            // console.log(i==rq && j==cq)
            if(i==rq && j==cq) {
                grids.push({"queen": [rq, cq]})
            } else {
                grids.push([i, j])
            }
        }
    }
}

let placeQueen = (rq, cq, n) => {
    // console.log(grids, rq, cq, n);
    console.log(grids);
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            // console.log(grids[i], grids[j]);
            // console.log(grids[i][j], rq, cq, grids[i], grids[j]);
            // if(grids)
            // console.log(grids[i][0] == rq && grids[i][1] == cq, grids[i][0] == rq || grids[i][1] == cq)
            // if(grids[i][0] == rq || grids[i][1] == cq) {
            //     console.log(grids[i][0] == rq, grids[i][1] == cq, grids[i])
            //     grids.push[{"queen": [rq, cq]}];
            // }

            // if(i==rq && j==cq) {
            //     console.log(grids[i])
            // }
        }
    }
}


// let createGrids = n => {
//     for(let i=1; i<=n; i++) {
//         for(let j=1;j<=n; j++ ) {
//             // console.log(i==4 && j==4)
//             grids.push([i, j])
//         }
//     }
// }

output = queensAttackVersionTwo(4, 0, 4, 4);
console.log(output)