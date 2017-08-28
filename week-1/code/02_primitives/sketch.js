//Nearest-Neighbor, 2017
//drawing with primitive shapes

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  //background wipes the screen clean each time the draw loop runs
  background(180); //fill the background with light gray

  noFill(); //this gives the shapes that follow this command no fill color - stroke only

  // Ellipse function takes four arguments: (x, y, width, height). By default, it is positioned from its center point.
  ellipse(300, 30, 50, 50);

  //house
  // Rectangle function takes the same four arguments as ellipse(). By default, it is positioned from its top left corner.
  rect(50, 90, 100, 100);
  //you can specify CENTER mode if you want to for rectangles
  //rectMode(CENTER);

  //roof
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(50, 90, 100, 10, 150, 90);

  //windows
  rect(60, 100, 20, 20);
  rect(90, 100, 20, 20); 
  rect(120, 100, 20, 20);
  rect(90, 150, 20, 40); //door

}