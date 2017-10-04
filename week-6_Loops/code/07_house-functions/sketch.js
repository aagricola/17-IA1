//multiple functions

var x =150;
var y = 150;
var houseD = 100; //house diameter

var w = 20;//window height and width
var h = 20;

function setup() {
  createCanvas(400, 400); 
  background(255);
  smooth(2);
}

function draw() {
  background(255);
  noFill();
  
  // A color based on distance from the mouse
  var d = dist(x, y, mouseX, mouseY);
  var c = color(d); 
  
  // mouseX position determines speed factor for houseQuake function
 var factor = constrain(mouseX/10, 0 , 5);
 
  // The functions are given arguments, such 
  // as "houseQuake by the following factor"
  // and "draw house with the following color."
 houseQuake(factor);
 drawHouse(c);
  }

function houseQuake(speed){
  //change x and y randomly
  x = x + random(-1, 1)*speed;
  y = y + random(-1, 1)*speed;
  // Constrain house to window
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function drawHouse(windowColor){
    //house
  rect(x, y, houseD, houseD);
 //windows
   fill(windowColor); 
 for (var i = x+10; i < x+houseD; i = i+30) {
    stroke(0); 
    rect(i, y+10, w, h);
}
  fill(100);
  //roof
  triangle(x, y, x+houseD/2, y-houseD/2, x+houseD, y);
  //door 
  rect(x+40, y+60, w, h*2); 
 
}