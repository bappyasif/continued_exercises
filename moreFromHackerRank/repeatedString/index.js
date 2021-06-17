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

// output = repeatedString('abcac', 10);
// output = repeatedString('abcac', 12);
output = repeatedString('aba', 10);
console.log(output);