"use strict"
let inc = 0.1;
let scl = 5;
let cols, rows;
let modifier = 0;

function setup() {
  
  modifier = random(1, 1.5);
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  let yOff = 0;

  for (let y = 0; y <= rows; y++) {

    let xOff = 0;

    for (let x = 0; x <= cols; x++) {

      let rand = noise(xOff, yOff) * 255 / modifier;

      xOff += inc;
      noStroke();

      //Draw grass
      if (rand >= 100) {
        fill(0, rand, 20);
      }
      //Draw sand
      else if (rand < 100 && rand > 75) {
        fill(76, rand, 40);
      }
      //Draw water
      else if (rand <= 75) {
        fill(0, 0, rand);
      }
      rect(x * scl, y * scl, scl, scl);
    }
    yOff += inc;
  }

}