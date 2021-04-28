function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  let updatedIdx = uniqueArray.length - 2;

  player.forEach((v) => {
    if (v < uniqueArray[uniqueArray.length - 1]) {
      playerRanking.push(uniqueArray.length + 1);
    } else if (v >= uniqueArray[0]) {
      playerRanking.push(1);
    } else {
      console.log("before:", updatedIdx);
      for (let j = updatedIdx; j >= 0; j--) {
        // console.log("values:", v, uniqueArray[j]);
        if (v < uniqueArray[j]) {
          console.log("if", uniqueArray, uniqueArray[j], j, v);
          // updatedIdx = uniqueArray.length - j;
          playerRanking.push(j + 2);
          updatedIdx = j;
          break;
        } else if (v === uniqueArray[j]) {
          console.log("e..i", uniqueArray, uniqueArray[j], j, v);
          // updatedIdx = j;
          playerRanking.push(j + 1);
          updatedIdx = j;
          break;
        }
        // updatedIdx = j;
      }
      console.log("after:", updatedIdx);
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}

output = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
// output = climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
// output = climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);
console.log(output);

/**
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  let updatedIdx = 1;

  player.forEach((v) => {
    if (v < uniqueArray[uniqueArray.length - 1]) {
      playerRanking.push(uniqueArray.length + 1);
    } else if (v > uniqueArray[0]) {
      playerRanking.push(1);
    } else {
      console.log("before:", updatedIdx);
      for (let j = uniqueArray.length - updatedIdx; j >= 1; j--) {
        // console.log("values:", v, uniqueArray[j]);
        if (v < uniqueArray[j]) {
          console.log("if", uniqueArray, uniqueArray[j], j, v);
          // playerRanking.push((uniqueArray.length - j) + 1);
          updatedIdx = j;
          playerRanking.push(j + 1 + 1);
          break;
        } else if (v === uniqueArray[j]) {
          console.log("e..i", uniqueArray, uniqueArray[j], j, v);
          updatedIdx = j;
          playerRanking.push(j + 1);
          break;
        }
      }
      console.log("after:", updatedIdx);
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  player.forEach((v) => {
    if (v < uniqueArray[uniqueArray.length - 1]) {
      playerRanking.push(uniqueArray.length + 1);
    } else if (v > uniqueArray[0]) {
      playerRanking.push(1);
    } else {
      // for (let j = uniqueArray.length - 2; j >= 1; j--) {
        for (let j = uniqueArray.length - 1; j >= 0; j--) {
        if (v < uniqueArray[j]) {
          console.log("if", uniqueArray, uniqueArray[j], j, v);
          // playerRanking.push((uniqueArray.length - j) + 1);
          playerRanking.push(j + 1 + 1);
          break;
        } else if (v === uniqueArray[j]) {
          console.log("e..i", uniqueArray, uniqueArray[j], j, v);
          playerRanking.push(j + 1);
          break;
        }
      }
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];
  uniqueArray.reverse();

  player.forEach((v) => {
    if (v > uniqueArray[uniqueArray.length - 1]) {
      playerRanking.push(1);
    } else if (v < uniqueArray[0]) {
      playerRanking.push(uniqueArray.length + 1);
    } else {
      // let idx = uniqueArray.findIndex((x) => v > x || v == x);
      let idx = uniqueArray.findIndex((x) => v < x);
      console.log(uniqueArray, idx, v);
      // playerRanking.push(idx);
      playerRanking.push(uniqueArray.length - idx + 1);
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  player.forEach((v) => {
    if (v < uniqueArray[uniqueArray.length - 1]) {
      playerRanking.push(uniqueArray.length + 1);
    } else if (v > uniqueArray[0]) {
      playerRanking.push(1);
    } else {
      // let idx = uniqueArray.findIndex((x) => v > x || v == x);
      let idx = uniqueArray.findIndex((x) => v >= x);
      console.log(uniqueArray, idx, v);
      playerRanking.push(idx + 1);
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 *
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  console.log(uniqueArray, uniqueArray.length);

  player.reverse().forEach((v) => {
    // console.log(v);
    for (let j = 0; j < uniqueArray.length; j++) {
      console.log(v, uniqueArray[j]);
      if (v > uniqueArray[j]) {
        uniqueArray.splice(j, 0, v);
        console.log('if: ',v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);
        // break;
      } else if (v < uniqueArray[j] && j > uniqueArray.length-1) {
        uniqueArray.push(v);
        console.log('e..i: ',v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);
        // break;
      } else {
        // let idx = uniqueArray[uniqueArray.filter(n => n < v).length];
        // let idx = uniqueArray.filter((n,i) => uniqueArray.indexOf(n) === i  && v < n).length
        let idx = uniqueArray.filter((n,i) => v < n).length
        console.log('if: '+v, ' idx: ', idx);
        uniqueArray.splice(idx, 0, v);
        // uniqueArray.splice(idx+1, 0, v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);
      }
      playerRanking.push(uniqueArray.indexOf(v) + 1);
      // playerRanking.push(uniqueArray.indexOf(v));
      console.log(uniqueArray);
      break;
    }
  });

  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let uniqueArray = [...new Set(ranked)];

  console.log(uniqueArray, uniqueArray.length);

  player.reverse().forEach((v) => {
    // console.log(v);
    for (let j = 0; j < uniqueArray.length; j++) {
      console.log(v, uniqueArray[j]);
      if (v > uniqueArray[j]) {
        uniqueArray.splice(j, 0, v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);
        // break;
      } else if (v < uniqueArray[j] && j === uniqueArray.length - 1) {
        uniqueArray.push(v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);
        // break;
      } else {
        let idx = uniqueArray[uniqueArray.filter(n => n > v).length];
        console.log(idx);
        uniqueArray.splice(idx, 0, v);
        // playerRanking.push(uniqueArray.indexOf(v) + 1);

        // while (v < uniqueArray[j] && j < uniqueArray.length-1) {
        //   if (v > uniqueArray[j]) {
        //     uniqueArray.splice(j, 0, v);
        //     playerRanking.push(j + 1);
        //     break;
        //   }
        // }
        
        // if(v > uniqueArray[j]) {
        //   uniqueArray.splice(j, 0, v);
        //   playerRanking.push(j+1);
        // }
      }
      playerRanking.push(uniqueArray.indexOf(v) + 1);
      console.log(uniqueArray);
      break;
    }
  });

  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let count = 0;

  player.map((v) => {
    let idx = ranked.indexOf(v);

    if (idx === -1) {
      if (v < min) {
        let r = ranked.filter((n, i) => ranked.indexOf(n) === i);
        console.log("if", r.length, r);
        ranked.push(v);
        playerRanking.push(r.length + 1);
      } else if (v > max) {
        playerRanking.push(1);
        ranked.unshift(v);
        console.log("e.f1", v);
      } else {
        let r = ranked.filter((n, i) => ranked.indexOf(n) === i && v < n);
        playerRanking.push(r.length + 1);
        ranked.splice(r.length + 1, 0, v);
        console.log("e.f2", r.length, r);
      }
    } else {
      console.log("else", v, idx);
      playerRanking.push(idx);
      // playerRanking.push(idx+1);
      ranked.splice(idx + 1, 0, v);
    }
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let count = 0;

  player.map((v) => {
    let idx = ranked.indexOf(v);
    if(idx == -1 && v < min) {
      // let r = ranked.filter(n => n > v);
      let r = ranked.filter((n,i) => ranked.indexOf(n) === i);
      console.log('if',r.length, r);
      ranked.push(v);
      playerRanking.push(r.length + 1);
    } else if(idx == -1 && v > max) {
      playerRanking.push(1);
      ranked.unshift(v);
      console.log('e.f1', v);
    } else if(idx == -1)  {
      // let r = ranked.filter(num => v < num);
      let r = ranked.filter((n,i) => ranked.indexOf(n) === i && v < n);
      // let r = ranked.filter((n,i) => {
      //   console.log(v, n);
      //   return ranked.indexOf(n) === i && v < n
      // });
      playerRanking.push(r.length+1);
      ranked.splice(r.length+1, 0, v);
      console.log('e.f2', r.length, r);
    } else {
      console.log('else', v, idx);
      playerRanking.push(idx);
      // playerRanking.push(idx+1);
      ranked.splice(idx+1, 0, v);
      console.log(ranked);
    }
  })
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
   let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let count = 0;
  player.map((v, i) => {
    let idx = ranked.indexOf(v);
    if(idx == -1 && v < min) {
      let r = ranked.filter(n => n >= min);
      // console.log(r.length);
      playerRanking.push(r.length);
    } else if(idx == -1 && v > max) {
      playerRanking.push(1);
    } else {
      playerRanking.push(idx);
    }
  })

  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp2 = [].concat(ranked);
  let count = 0;

  player.forEach((v, i) => {
    let idx = temp2.indexOf(v);
    if (idx !== -1) {
      playerRanking.push(idx);
    } else {
      if (idx == -1 && v <= min) {
        for (let j = 0; j < temp2.length; j++) {
          if (v < temp2[j]) {
            count++;
          }
        }
        playerRanking.push(count);
      }
    }
  });

  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [...new Set(ranked)];
  let temp2 = [].concat(ranked);
  // let rankedSorted = ranked.sort((a,b)=>a-b, 0);
  // let minVal = rankedSorted[0];
  // let maxVal = rankedSorted[rankedSorted.length - 1];
  let tempRank = {};
  let rankNow = 1;

  player.forEach((v,i) => {
    let idx = temp2.indexOf(v);
    if(idx !== -1) {
      playerRanking.push(idx + 1);
    } else {
      if(idx == -1 && v <= min) {
        temp2.forEach((val,id) => {
          if(v <= val) {
            continue;
          }
          playerRanking.push(id);
        })
      }
    }
  })

  
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [...new Set(ranked)];
  let tempRank = {};
  let rankNow = 1;
  
  player.forEach(val => {
    if(val === min) {
      temp.push(val);
    } else if(val === max) {
      temp.unshift(val);
    } else {
      temp.push(val);
      temp.sort((a,b)=>b-a,0)
    }
    console.log(temp)
    temp = [...new Set(temp)];
    playerRanking.push(temp.indexOf(val) > 0 ? temp.indexOf(val)+1 : 1);
  });
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [...new Set(ranked)];
  let tempRank = {};
  let rankNow = 1;
  
  player.forEach(val => {
    if(val === min) {
      temp.push(val);
    } else if(val === max) {
      temp.unshift(val);
    } else {
      // let idx = temp.indexOf(val);
      // temp.splice(idx, 0, val);
      temp.push(val);
      // [...new Set(temp)];
      temp.sort((a,b)=>b-a,0)
    }
    console.log(temp)
    // playerRanking.push(temp.indexOf(val));
    temp = [...new Set(temp)];
    playerRanking.push(temp.indexOf(val) > 0 ? temp.indexOf(val)+1 : 1);
  })
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [].concat(ranked);
  let tempRank = {};
  let rankNow = 1;
  
  player.forEach(val => {
    if(val === min) {
      temp.push(val);
    } else if(val === max) {
      temp.unshift(val)
    } else {
      // let idx = temp.indexOf(val);
      // temp.splice(idx, 0, val);
      temp.push(val);
      temp.sort((a,b)=>b-a,0)
    }
    console.log(temp)
    // playerRanking.push(temp.indexOf(val));
    playerRanking.push(temp.indexOf(val) > 0 ? temp.indexOf(val) : 1);
  })
  // ranked in descending order and player is in ascending order
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [].concat(ranked);
  let tempRank = {};
  let rankNow = 1;
  
  // ranked in descending order and player is in ascending order
  for(let i=0; i<player.length; ) {
    for(let j=ranked.length-1; j>=0; ) {
      if(player[i] < ranked[j]) {
        i++;
        playerRanking.push(i);
      } else if(player[i] > ranked[j]) {
        j--;
        playerRanking.push(j);
      } else if(player[i] === ranked[j]) {
        i++;
        playerRanking.push(i);
      }
    }
  }
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [].concat(ranked);
  let tempRank = {};
  let rankNow = 1;

  let rankUpdate = () => {
    let maxChk = max;
    for(let key in temp) {
      // tempRank[temp[key]] = rankNow+1;
      if(temp[key] === maxChk) {
        tempRank[temp[key]] = rankNow;
      } else {
        maxChk = temp[key];
        // tempRank[temp[key]] = rankNow+1;
        rankNow++;
      }
    }
  }

  let rankCheck = val => {
    for(let key in tempRank) {
      if(tempRank[key]) playerRanking.push(tempRank[key]);
    }
  }

  player.forEach(val => {
    let chk = temp.indexOf(val);
    // console.log(chk);
    if(val > max && chk === -1) {
      console.log('max',val);
      temp.unshift(val);
    } else if(val < min && chk === -1) {
      console.log("min",val);
      temp.push(val);
    } else if(chk === -1) {
      console.log("middle",val);
      let idx = temp.indexOf(val);
      temp.splice(idx, 0, val);
    } else {
      console.log("somewhere",val);
      let idx = temp.indexOf(val);
      temp.splice(idx, 0, val);
    }
    rankUpdate();
    rankCheck(val);
    console.log(tempRank);
    // playerRanking.push(temp.indexOf(val))
  });
  return playerRanking;
}
 * 
 * 
 function climbingLeaderboard(ranked, player) {
  let playerRanking = [];
  let max = ranked[0];
  let min = ranked[ranked.length - 1];
  let temp = [].concat(ranked);
  let tempRank = {};
  let rankNow = 0;

  let rankUpdate = () => {
    let maxChk = max;
    for(let key in temp) {
      // tempRank[temp[key]] = rankNow+1;
      if(temp[key] === maxChk) {
        tempRank[temp[key]] = rankNow+1;
      } else {
        maxChk = temp[key];
        tempRank[temp[key]] = rankNow+1;
      }
    }
  }

  let rankCheck = val => {
    for(let key in tempRank) {
      if(tempRank[key]) playerRanking.push(tempRank[key]);
    }
  }

  player.forEach(val => {
    let chk = temp.indexOf(val);
    // console.log(chk);
    if(val > max && chk === -1) {
      console.log('max',val);
      temp.unshift(val);
    } else if(val < min && chk === -1) {
      console.log("min",val);
      temp.push(val);
    } else if(chk === -1) {
      console.log("middle",val);
      let idx = temp.indexOf(val);
      temp.splice(idx, 0, val);
    } else {
      console.log("somewhere",val);
      let idx = temp.indexOf(val);
      temp.splice(idx, 0, val);
    }
    rankUpdate();
    rankCheck(val);
    console.log(tempRank);
    // playerRanking.push(temp.indexOf(val))
  });
 * 
 * 
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
          ranked.forEach((val, idx) => {
              if(val < v) {
                  count += 1;
                  console.log('else if', count , idx)
                  // rankHash.push(idx);
              }
              // rankHash.push(idx);
          })
          rankHash.push(count);
        //   rankHash.push(ranked.indexOf(v));
      } else {
          let idx = ranked.indexOf(v);
          ranked.splice(idx, 0, v);
        //   rankHash.push(ranked.indexOf(v) + 1);
        ranked.forEach((val, idx) => {
            if(val < v) {
                count += 1;
                console.log('else', count, idx)
                // rankHash.push(idx);
            }
            // rankHash.push(idx);

        })
        rankHash.push(count);
        // rankHash.push(idx);
      }
      console.log(ranked);
    //   rankHash.push(ranked.indexOf(v) +1);
    // rankHash.push(count);
    count = 0;
  });
  return rankHash;
}
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
