var inc = 0.1;
var scl = 8;
var cols, rows;

var modifier = 1.4;

//var debug;
//var help;

function setup() {

  //cols = 64;
  //rows = 64;
  cols = floor(windowWidth / scl);
  rows = floor(windowHeight / scl);

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  var yOff = 0;
  
  for (var y = 0; y < rows; y++) {
    
    var xOff = 0;
    
    for (var x = 0; x < cols; x++) {

      var r = noise(xOff, yOff) * 255 / modifier;
      xOff += inc;
      noStroke();

      //Draw grass
      if (r >= 75) {
        fill(0, r, 0);
      }
      //Draw sand
      else if (r < 75 && r > 65) {
        fill(76, r, 50);
      }
      //Draw water
      else if (r <= 65) {
        fill(0, 0, r);
      }
      rect(x * scl, y * scl, scl, scl);
    }
    yOff += inc;
  }

  //help = createP(debug);
}

function draw() {
  //debug = get(mouseX, mouseY);
  //help.html(debug);
}