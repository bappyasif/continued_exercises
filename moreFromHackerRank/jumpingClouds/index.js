function jumpingClouds(clouds, jump) {
    let energy = 100;
  for(let i=0; i < clouds.length; i += jump) {
      if(clouds[i] === 1) {
          console.log(clouds[i], i);
          energy = energy-jump;
      }
      if(i=== clouds.length -1) {
          energy--;
      }
      energy--;
      console.log(energy);
  }
//   console.log(energy);
  // return clouds;
}

output = jumpingClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
// output = jumpingClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
console.log(output);


/**
 * 
 * 
 function jumpingClouds(clouds, jump) {
    let energy = 100;
  for(let i=0; i < clouds.length; i += jump) {
      if(clouds[i] === 1) {
          console.log(clouds[i], i);
          energy = energy-2;
      }
      energy--;
  }
  console.log(energy);
  // return clouds;
}
 */