function repeatedString(str, n) {
    let countA = 0;
    let countMultiple = 0;

    let size = str.length;
    let repeated = Math.floor(n/size);
    console.log(size, repeated, "??");


    let i = str.length;
    while(i >= 0) {
        // console.log(str[i]);
        if(str[i] == 'a') countA++;
        i--;
    }
    console.log(countA, countA*countMultiple, countA*repeated);
    // countA = countA*countMultiple
    countA = countA*repeated;

    let rems = n%str.length
    console.log(rems);
    do {
        rems--;
        if(str[rems] == 'a') {
            countA++;
        }
    } while(rems > 0)
    console.log(countA, "::")
}

// output = repeatedString('abcac', 10);
// output = repeatedString('abcac', 12);
output = repeatedString('aba', 10);
console.log(output);

/**
 * 
 * 
 function repeatedString(str, n) {
    let countA = 0;
    let countMultiple = 0;

    for(let i=0; i<n; i+=str.length) {
        if(i+str.length > n) {
            break;
        } else {
            countMultiple++;
        }
        // console.log(countMultiple)
    }
    console.log(countMultiple)

    let i = str.length;
    while(i >= 0) {
        // console.log(str[i]);
        if(str[i] == 'a') countA++;
        i--;
    }
    console.log(countA, countA*countMultiple);
    countA = countA*countMultiple

    let rems = n%str.length
    console.log(rems);
    do {
        rems--;
        if(str[rems] == 'a') {
            countA++;
        }
    } while(rems > 0)
    console.log(countA, "::")
}
 * 
 * 
 function repeatedString(str, n) {
    let checkStr = str.length % n;
    console.log(checkStr);
    let seq = '';
    for(let i=0; i<n; i+=str.length) {
        
        if(i+str.length > n) {
            console.log(i+str.length, n , (i+str.length)%n, (str.length)%((i+str.length)%n), str.length % i);
            let checkRems = (str.length)%((i+str.length)%n);
            console.log(str.slice(0, checkRems));
            seq += str.slice(0, checkRems);
            break;

        } else {
            seq += str;
            // console.log(i, seq)
        }
    }
    return seq.split('').filter(v=>v=='a').length;
}
 */