
var  x = 0;
//var  y = 100;
var  xSpeed = 1;


function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  
  move();
  bounce();
  display(10, random(255), 10);
  display(50, random(255), 20);
  display(100, random(255), 30);
  display(150, random(255), 40);
}

//defined move function
function move(){
  x = x + (xSpeed);
}

//defined bounce function
function bounce(){
    if((x > width) || (x < 0)){
    xSpeed = xSpeed * -1;
  }
}

//defined display of ellipse
function display(y, color, diam){
  fill(color);
  ellipse(x, y, diam, diam);
}
