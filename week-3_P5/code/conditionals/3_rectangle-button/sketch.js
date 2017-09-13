//Nearest Neighbor, 2017
//Test whether the cursor is inside a rectangle

var x = 100;
var y = 100;
var w = 200;
var h = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204);
  /*We make four separate tests to check if the cursor is
  on the correct side of each edge of the rectangle, then
  we com- pare each test and if they are all true, we know the cursor is inside.
  */
  if ((mouseX > x) && (mouseX < x + w) &&
    (mouseY > y) && (mouseY < y + h)) {
    fill(0);
    //and if mouse is pressed
    if (mouseIsPressed === true){
      fill(255, 0, 0);
    }
  } else {
    fill(255);
  }
  rect(x, y, w, h);
}