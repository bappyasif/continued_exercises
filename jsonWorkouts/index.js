// let jsonFile = require("./example.json");
// import jsonFile from "./example.json";
// let jsonFile = "./example.json";
// let jsonFile = new JSON("./example.json");

// jsonFile = JSON.parse(JSON.stringify(jsonFile));
// console.log(jsonFile.homeTown, jsonFile["active"], jsonFile);

let superHeroes = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(superHeroes.homeTown, superHeroes["active"]);
console.log(superHeroes["members"][1]["powers"][2]);

/**
 * First we have the variable name — superHeroes.
 * Inside that we want to access the members property, so we use ["members"].
 * members contains an array populated by objects. We want to access the second object inside the array, so we use [1].
 * Inside this object, we want to access the powers property, so we use ["powers"].
 * Inside the powers property is an array containing the selected hero's superpowers. We want the third one, so we use [2].
 */
let arrFomat = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
];
console.log(arrFomat[0]["powers"][0]);

/**
 * JSON is purely a string with a specified data format — it contains only properties, no methods.
 * JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
 * Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
 * JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.
 * Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.
 */

//  Active Learning: Working Through JSON Example
let header = document.querySelector("header");
let section = document.querySelector("section");

// To obtain the JSON, we use an API called XMLHttpRequest (often called XHR).
let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// To create a request, we need to create a new request object instance from the XMLHttpRequest constructor, using the new keyword.
let request = new XMLHttpRequest();

// Now we need to open the request using the open() method.
request.open("GET", requestURL);

// here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON,
// and that this should be converted behind the scenes into a JavaScript object. Then we send the request with the send() method
request.responseType = "json";
request.send();

// this section involves waiting for the response to return from the server, then dealing with it.
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// populating header
function populateHeader(obj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + obj["homeTown"] + " // Formed: " + obj["formed"];
  header.appendChild(myPara);
}

// creating hero information cards
function showHeroes(obj) {
  const heroes = obj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

/**
 *
 * Next, we use a for loop to loop through each object in the array. For each one, we:
 *
 * Create several new elements: an <article>, an <h2>, three <p>s, and a <ul>.
 * Set the <h2> to contain the current hero's name.
 * Fill the three paragraphs with their secretIdentity, age, and a line saying "Superpowers:" to introduce the information in the list.
 * Store the powers property in another new constant called superPowers — this contains an array that lists the current hero's superpowers.
 * Use another for loop to loop through the current hero's superpowers — for each one we create an <li> element, put the superpower inside it, then put the listItem inside the <ul> element (myList) using appendChild().
 * The very last thing we do is to append the <h2>, <p>s, and <ul> inside the <article> (myArticle), then append the <article> inside the <section>. The order in which things are appended is important, as this is the order they will be displayed inside the HTML
 */

// Converting between objects and text
/**
 * parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
 * stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.
 */

// if we use Text as a respponse type then we will use stringify()
/**
 * 
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const superHeroesText = request.response; // get the string from the response
  const superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
 */
let exObj = { name: "Chris", age: 38 };
let exString = JSON.stringify(exObj);
console.log(exString, exObj);

