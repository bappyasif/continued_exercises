function designerPdfViewer(hightArray, word) {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let wordsHeights = [];
  
  word.split('').forEach((el) => {
    let getPos = alphabets.indexOf(el);
    console.log(el, getPos);

    wordsHeights.push(hightArray[getPos]);
  });

  console.log(wordsHeights)
  let findMax = Math.max(...wordsHeights);
  return findMax * word.length;

  //   return word;
}

let wordHeights = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
];

output = designerPdfViewer(wordHeights, "abc");
console.log(output);
