//Nearest-Neighbor, 2017
// Custom Shape
// example from Getting Started with P5

function setup() {
  createCanvas(480, 120);
}

/*The beginShape() function signals the start of a new shape. 
The vertex() function is used to define each pair of x and y coordinates for the shape.
Finally, endShape() is called to signal that the shape is  finished
to close the shape, include CLOSE as the argument in endShape()
*/

function draw() {
  background(204);
  beginShape();
  vertex(126, 280); //bottom left corner
  vertex(280, 280); //bottom right
  vertex(280, 147);
  vertex(305, 147);
  vertex(204, 10);
  vertex(96, 146);
  vertex(126, 146);
  endShape(CLOSE);
}