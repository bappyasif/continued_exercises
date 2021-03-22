function staircaseString(n) {
    for(let i=0; i<n; i++) {
        console.log(" ".repeat(n-i-1)+"#".repeat(i+1))
    }
}

staircaseString(6);
// output = staircaseString(6);
// console.log(output);


/**
 * 
 * 
 function staircaseString(n) {
    for(let i=0; i<n; i++) {
        switch(i) {
            case 1:
                console.log(" ".repeat(5)+"#".repeat(i));
                break;
            case 2:
                console.log(" ".repeat(4)+"#".repeat(i));
                break;
            case 3:
                console.log(" ".repeat(3)+"#".repeat(i));
                break;
            case 4:
                console.log(" ".repeat(2)+"#".repeat(i));
                break;
            case 5:
                console.log(" ".repeat(1)+"#".repeat(i));
                break;
            case 6:
                console.log(" ".repeat(0)+"#".repeat(i));
                break;
        }
    }
}
 * 
 * 
 function staircaseString(n) {
    let ar = [];
    while(n > 0) {
        ar.push("#".repeat(n));
        // console.log("#".repeat(n));
        n--;
    }
    ar.reverse();
    ar.forEach((el, id) => {
        // console.log(" ".repeat(id)+el+"\n");
        console.log(" "+el+"\n");
    });
    // console.log(ar.reverse());
}
 * 
 * 
 function staircaseString(n) {
    let rStr = ""
    while(n > 0) {
        // " ".repeat(n-1 || 0)+"#\n".repeat(n)
        // console.log(" ".repeat(n-1)+"#\n".repeat(n));
        // console.log("#\n".repeat(n))
        rStr += "#";
        console.log(rStr+"\n");
        n--;
    }
}
 * 
 * 
 function staircaseString(n) {
    let rpdStr = "";
    while(n > 0) {
        // console.log("#".repeat(n)+"\n");
        // console.log(rpdStr+"\n");
        rpdStr += "#";
        console.log(rpdStr+"\n");
        n--;
    }
    // console.log("\n");
    // document.write("\n\n\n");
}
 * 
 * 
 function staircaseString(n) {
    while(n > 0) {
        console.log("#".repeat(n)+"\n");
        
        n--;
    }
    // console.log("\n");
    // document.write("\n\n\n");
}
 */