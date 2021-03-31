function catAndMouse(a,b,c) {
    let resp = "";
    if(Math.abs(a-c) > Math.abs(b-c)) resp = "Cat B"
    if(Math.abs(a-c) < Math.abs(b-c)) resp = "Cat A"
    if(Math.abs(a-c) === Math.abs(b-c)) resp = "Mouse";
    return resp;
    // return a;
}

output = catAndMouse(2,5,4);
output = catAndMouse(1,2,3);
output = catAndMouse(1,3,2);
console.log(output);