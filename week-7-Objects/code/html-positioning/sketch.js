/*look to the left at the side bar. You will see index.html. Click on that -->
anything we add to the html cannot be dynamically changed using the code we write in our sketch
the following are ways of creating html elements in a website that can be dynamically interacted with. */

var canvas;
var h1
var h2

var x = 100;
var y = 100;

function setup() {
  //we make a variable to hold the canvas
 canvas = createCanvas(400,400);
 //then we can position it anywhere with absolute positioning
 canvas.position(100,300);
  //if an HTML element does not exist, you can create one
 h1 = createElement('h1', "Your lucky numbers")
 h1.position(200, 450);
 //h1 and h2 are different header types
 h2 = createElement('h2', "Generating your lucky numbers...")
 h2.position(0, 30);
}

function mousePressed(){
  //change content of h2 element with the .html function
  h2.html("Here they are!")
  //dom elements are relative to the entire page
  createP(int(random(0,99)) + " Click Again!");
}

function draw() {
  background(100);
  // clear() makes the background transparent
  //clear();
  fill(0,255,0);
  //shapes are drawn relative to the canvas
  //rect(100, 100, 50, 50);
  rect(x, y, 50, 50);
  h1.position(x, y);
  x = x + random(-5, 5);
}