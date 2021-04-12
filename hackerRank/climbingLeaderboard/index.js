function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  
  let rankHash = []
  let max = ranked[0];
  let count = 0;
//   player.sort((a,b)=>b-a);
  player.forEach((v,i)=> {
      if(ranked.indexOf(v) == -1 && v > max) {
          ranked.unshift(v);
          rankHash.push(ranked.indexOf(v) + 1);
      } else if(ranked.indexOf(v) === -1) {
          ranked.push(v);
          ranked.forEach(val => {
              if(val > v) {
                  count += 1;
                  console.log('else if', count)
              }
          })
          rankHash.push(count);
        //   rankHash.push(ranked.indexOf(v));
      } else {
          let idx = ranked.indexOf(v);
          ranked.splice(idx, 0, v);
        //   rankHash.push(ranked.indexOf(v) + 1);
        ranked.forEach(val => {
            if(val > v) {
                count += 1;
                console.log('else', count)
            }
        })
        rankHash.push(count);
      }
      console.log(ranked);
    //   rankHash.push(ranked.indexOf(v) +1);
    // rankHash.push(count);
    count = 0;
  });
  return rankHash;
}

output = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
output = climbingLeaderboard([100, 100,50,40,40,20,10], [5,25,50,120]);
console.log(output);

/**
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  
  let rankHash = []
  let max = ranked[0];
  let count = 1;
  ranked.forEach(v => {
      if(v === max) {
          rankHash.push(count);
      } else {
          count++;
          max = v;
          rankHash.push(count);
      }
  });
  return rankHash;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  
  let rankHash = {}
  let max = ranked[0];
  let count = 1;
  ranked.forEach((v,i) => {
      if(v == max) {
        count = count;
        rankHash[count+'i'] = v;
      } else {
        count = count+1;
        max = v;
        // rankHash[i+1] = v;
        rankHash[count+'i'] = v;
      }
    //   rankHash[count] = v;
  })
    return rankHash;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let rankedSet = [...new Set(ranked)];
  let playerRanking = [];
  
  let rankHash = {}
  let max = ranked[0];
  let count = 0;
  ranked.forEach(val => {
      if(val == max) {
          rankHash[val] = count+1;
      } else {
          max = val;
          rankHash[val] = count++;
      }
  });
  return rankHash;
}
 * 
 * 
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
