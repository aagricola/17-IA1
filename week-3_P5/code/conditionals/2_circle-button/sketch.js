//Nearest Neighbor, 2017
//using dist funtion to make a round button

var x = 200;
var y = 200;
var radius = 12;

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  //dist() function to get the dis- tance from the center of the circle to the cursor
  // test to see if that distance is less than the radius of the circle
  var d = dist(mouseX, mouseY, x, y);
  //when dist is less than the radius
  // and When the mouse is pressed, the state of the button is toggled. 
  if (d < radius && mouseIsPressed) {
    radius++; //incrament the radius by 1 
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, radius, radius);
}