//Nearest-Neighbor, 2017
// Changing Colors

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Grayscale: A range from 0-255 (black to white)

  background(180); //fill the background with a mid tone gray

  // RGB: Red, green, and blue values separated by commas
  fill(255, 255, 0); //red and green make yellow
  ellipse(300, 30, 50, 50);

  //house
  fill(255, 0, 255); //red and blue make magenta
  rect(50, 90, 100, 100);

  //roof
  fill(0, 255, 255); //green and blue make cyan
  triangle(50, 90, 100, 10, 150, 90);

  //windows
  strokeWeight(3); //this function changes the weight of the stroke
  stroke(200); //stroke adds a color to your stroke
  fill(255, 0, 0); //red
  rect(60, 100, 20, 20);
  fill(0, 255, 0); //green
  rect(90, 100, 20, 20);
  fill(0, 0, 255); //blue
  rect(120, 100, 20, 20);
  noStroke();

  //door
  fill(255, 255, 255); //this is the same as saying fill(255);
  rect(90, 150, 20, 40);

  //light beam
  fill(242, 255, 173, 200); //adding a second or fourth value adds an alpha channel to fill. This adds opacity
  // Arc function creates a portion of an ellipse with these arguments: (x, y, width, height, start angle, stop angle). Angles are given in radians.
  arc(90, 180, 188, 108, 13, 14);
}