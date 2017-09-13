//narrative with keys
var seed;
var sprout;
var grow;
var wilt;

//keep track of the state we are in
var state = 0;

function preload(){
  seed = loadImage("assets/seed.png");
  sprout = loadImage("assets/sprout.png");
  grow = loadImage("assets/grow.png");
  wilt = loadImage("assets/wilt.jpeg");
}

function setup(){
  createCanvas(600, 600);
  
  //font details different from processing
  textFont("Helvetica");
  textSize(22);
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw(){
  background(255);
  text("0 = seed, 1 = sprout, 2 = grow, 3 = wilt", width/2, 20)
  if (state == 0) {
    image(seed, width/2, height/2);
  } else if (state == 1) {
    image(sprout, width/2, height/2);
  } else if (state == 2) {
    image(grow, width/2, height/2);
  } else if (state == 3) {
    image(wilt, width/2, height/2);
  }
}

function keyPressed(){
  if (key == '0'){
    state = 0;
  }else if (key == '1'){
    state = 1;
  }else if (key == '2'){
    state = 2;
  }else if (key == '3'){
    state = 3;
  }
}
