//make a timer variable to set how frequently the timer occurs
var timer = 200; 
var bgColor = 0;
var nextTime = timer;

//compare timer value to millis. millis is the number of 
//seconds a program has been running
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bgColor);
  if(millis() > nextTime){
    bgColor += 20; //increment the background color
    nextTime = millis() + timer;
  }
}