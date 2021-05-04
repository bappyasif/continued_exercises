function viralAdvertizing(n) {
    let cummulative = [];
    let shared = [];
    for(let i=0; i<n; i++) {
        let liked;
        if(i===0) {
            liked = Math.floor(5/2);
            cummulative.push(liked);
            shared.push(5);
        } else {
            liked = Math.floor(shared[i-1]/2);
            shared.push(liked*3);
            liked = Math.floor((liked*3)/2)
            cummulative.push(liked);
        }
    }
    // console.log(cummulative, shared)
    return cummulative.reduce((a,c)=>a+c,0)
}

output = viralAdvertizing(5);
console.log(output);

/**
 * 
 * 
 function viralAdvertizing(n) {
    let shared = [];
    let cumulative = [];
    for(let i=0; i<n; i++) {
        let liked;
        if(i===0) {
            shared.push(5);
            liked = Math.floor(5/2);
            cumulative.push(liked);
        } else {
            liked = Math.floor(shared[i-1]);
            console.log(liked)
            shared.push(liked*3);
            cumulative.push(liked);
        }
    }
    console.log(cumulative)
    return(cumulative.reduce((a,c)=>a+c,0))
    
}
 * 
 * 
 function viralAdvertizing(n) {
    let reached = [];
    let cumulative = [];
    for(let i=0; i<n; i++) {
        let liked, shared;
        if(i === 0) {
            shared
            reached.push(5);
            liked = Math.floor(reached[0]/2)
        } else {
            liked = Math.floor(reached[i-1]/2);
            shared = liked * 3;
            reached.push(shared );
        }

    }
    return reached[reached.length-1];
}
 */