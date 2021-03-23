// let data = cats;
// console.log(data);

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");

let motherInfo = "The mother cats are called: ";
let kittenInfo;

fetch("sample.json")
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  //   console.log(JSON.parse(catString));
  let data = JSON.parse(catString);
  for (let [idx] of data.entries()) {
    if (idx === data.length - 1) {
      motherInfo += data[idx]["name"] + "..";
    } else {
      motherInfo += data[idx]["name"] + ", ";
    }

    // number of total kittens
    total += data[idx]["kittens"].length;

    // number of males and females kittens
    data[idx]["kittens"].forEach((item) => {
      if (item["gender"] === "m") male++;
      else if (item["gender"] === "f") female++;
    });

    kittenInfo = `Total Kittens: ${total}, among them ${male} are males, and ${female} are females`;
  }

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

/**
 * 
 * 
 function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  console.log(JSON.parse(catString));
let data = JSON.parse(catString);
for(let [idx, mCat] of data.entries()) {
    // console.log(mCat, data[mCat], data[mCat]["name"], data.entries().length, data.length)
    if(idx === data.length-1) {
        // motherInfo += mCat["name"]+".";
        // console.log(data[idx]["name"]+"..");
        motherInfo += data[idx]["name"]+"..";
    } else {
        // console.log(idx === data.length-1, idx, data.length)
        // motherInfo += mCat["name"]+",";
        motherInfo += data[idx]["name"]+", ";
    }

    // number of total kittens
    total += data[idx]["kittens"].length;

    // number of males and females kittens
    data[idx]["kittens"].forEach(item => {
        if(item["gender"] === "m") male++;
        else if(item["gender"] === "f") female++;
    });

    kittenInfo = `Total Kittens: ${total}, among them ${male} are males, and ${female} are females`;
}
// for(let i=0; i<data.length; i++) {
//     if(i === data.length -1) {
//         motherInfo += data[i]["name"]+".";
//     } else {
//         motherInfo += data[i]["name"]+", ";
//     }

//     // about kittens of momCats
//     total += data[i]["kittens"].length;

//     // count of male female
//     data[i]["kittens"].forEach(item => {
//         if(item["gender"] === "m") {
//             male++;
//         } else if(item["gender"] === "f") {
//             female++;
//         }
//     });

//     kittenInfo = `Total Kittens: ${total}, among them ${male} are males, and ${female} are females`;

// }


  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
 * 
 * 
 function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  console.log(JSON.parse(catString));
let data = JSON.parse(catString);
for(let [mCat, idx] of data.entries()) {
    // console.log(mCat, data[mCat], data[mCat]["name"], data.entries().length, data.length)
    if(idx === data.length-1) {
        // motherInfo += mCat["name"]+".";
        console.log(data[mCat]["name"]+"..");
        motherInfo += data[mCat]["name"]+"..";
    } else {
        console.log(idx === data.length-1, idx, data.length)
        // motherInfo += mCat["name"]+",";
        motherInfo += data[mCat]["name"]+", ";
    }
}
// for(let i=0; i<data.length; i++) {
//     if(i === data.length -1) {
//         motherInfo += data[i]["name"]+".";
//     } else {
//         motherInfo += data[i]["name"]+", ";
//     }

//     // about kittens of momCats
//     total += data[i]["kittens"].length;

//     // count of male female
//     data[i]["kittens"].forEach(item => {
//         if(item["gender"] === "m") {
//             male++;
//         } else if(item["gender"] === "f") {
//             female++;
//         }
//     });

//     kittenInfo = `Total Kittens: ${total}, among them ${male} are males, and ${female} are females`;

// }


  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
 * 
 * 
 function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  console.log(JSON.parse(catString));
let data = JSON.parse(catString);
// for(let mCat of data) {
//     // console.log(mCat, data[mCat])
//     motherInfo += mCat["name"]+",";
// }
for(let i=0; i<data.length; i++) {
    // console.log(mCat, data[mCat])
    // name of mother cats
    if(i === data.length -1) {
        motherInfo += data[i]["name"]+".";
    } else {
        motherInfo += data[i]["name"]+", ";
    }

    // about kittens of momCats
    total += data[i]["kittens"].length;
    console.log(data[i]["kittens"].length, total);
    // kittenInfo = total;

    // count of male female
    // console.log(data[i]["kittens"])
    data[i]["kittens"].forEach(item => {
        if(item["gender"] === "m") {
            male++;
        } else if(item["gender"] === "f") {
            female++;
        }
    });

    kittenInfo = `Total Kittens: ${total}, among them ${male} are males, and ${female} are females`;

}
 */
