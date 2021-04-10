function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  player.forEach(val => {
      if(rankedSet.indexOf(val) !== -1) {
          playerRanking.push(rankedSet.indexOf(val)+1)
      } else {
          rankedSet.push(val);
          rankedSet.sort((a,b)=>b-a,0);
          playerRanking.push(rankedSet.indexOf(val)+1);
      }
  });
return playerRanking;
//   return [playerRanking, rankedSet];

//   return rankedSet;
}

output = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
console.log(output);

/**
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  player.forEach(val => {
      if(rankedSet.indexOf(val) !== -1) {
          playerRanking.push(rankedSet.indexOf(val))
      }
  });
  return [playerRanking, rankedSet];

//   return rankedSet;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
    // let combinedArray = [].concat(ranked, player).sort();
    let combinedArray = [].concat(ranked, player).sort((a,b) =>b-a, 0);
    let noRepeat = [...new Set(combinedArray)];
    let playerRanking = [];
    return noRepeat;
    // let rankedHash = {};
    // for(let key in combinedArray) {
    //     rankedHash[key] = combinedArray[key];
    // }
    // return rankedHash;
    // return combinedArray;
    // return ranked;
}
 */
