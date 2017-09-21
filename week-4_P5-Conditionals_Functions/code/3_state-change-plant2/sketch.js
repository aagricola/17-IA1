//narrative with keys
var seed;
var sprout;
var grow;
var wilt;

//keep track of the state we are in
var state = 0;

//keep track of what keys have been typed
var typed = "";

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
  text(typed, width/2, 550);
}

//keyPressed gets called no matter what the key is
function  keyPressed(){
  //if keycode is Delete, clear the typed variable
  if(keyCode == BACKSPACE){
    typed = '';
  }
}

//keyTyped to toggle between states
//only executed when a key has a number, letter or symbol associated
function keyTyped(){
  if (key == '0'){
    state = 0;
  }else if (key == '1'){
    state = 1;
  }else if (key == '2'){
    state = 2;
  }else if (key == '3'){
    state = 3;
    
   //add if statement for the state change to happen upon enter
  }else if (keyCode == RETURN){
    //if typed = water, seed sprouts
  if (typed == 'water' && state == 0){
    state = 1;
    typed = ''; //clears typed after state changes
  }
  //if typed = sun, the plant grows large
    else if (typed == 'sun' && state == 1){
    state = 2;
    typed = ''; //clears typed after state changes
  }
   //if typed = sun, the plant grows large
    else if (typed == 'sun' && state == 2){
    state = 3;
    typed = ''; //clears typed after state changes
    }
 //water action (needs to be wilted and watered to return)
     else if (typed == 'water' && state == 3){ 
     state = 2;
     typed = ''; //clears typed after state changes
   }
     // action that goes back to the beginning
    else if (typed == 'seed'){
    state = 0;
    typed = ''; //clears typed after state changes
  }
}
else{
    typed += key; //this will append the key that is typed on to the end of the previous key that is typed
  }
}
