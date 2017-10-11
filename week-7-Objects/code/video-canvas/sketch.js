
var fingers;

function setup() {
  createCanvas(640, 480);
  fingers = createVideo("fingers.mov");//.webm is the best file type for web
  fingers.loop();
  fingers.hide();//hides the original
  //if you don't hide the original it will show up outside of your canvas
}

function draw() {
  //now the videos are being drawn to the canvas 
  //now they can be manipulated
  background(200);
  //we use image to draw the video to the canvas
  image(fingers, 30, 30, 500, 300);
  filter('INVERT');
  image(fingers, 120, 200, 500, 300);
}