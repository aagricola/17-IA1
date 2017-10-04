
var  x = 0;
var  y = 100;
var  xSpeed = 1;


function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  
  move(mouseX/3);
  bounce();
  display();
}

//defined move function
function move(speedFactor){
  x = x + (xSpeed * speedFactor);
}

//defined bounce function
function bounce(){
    if((x > width) || (x < 0)){
    xSpeed = xSpeed * -1;
  }
}

//defined display of ellipse
function display(){
  fill(175);
  ellipse(x, y, 30, 30);
}
