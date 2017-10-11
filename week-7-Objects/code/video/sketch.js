//using createVideo from the dom library

var fingers;
var button;
var playing; // is it playing?

function setup() {
  //load the video file
  fingers = createVideo("assets/fingers.mov");//.webm is the best file type for web
  button = createButton("play");
  //dot syntax to call the function "toggle" with mousePressed
  button.mousePressed(toggle);
  //turn the video off to begin
  playing = false;
}

function toggle() {
  if(playing){
    fingers.pause();
    button.html("play");
  }else{
    fingers.loop();
    button.html("pause");
  }
  playing = !playing;
}

/* Notice in this example that we are not using a canvas at all. That is because the createVideo 
command is an object of the dom library and it is drawing the video right to the html page itself. 
This means we cannot manipulate and  style the video. I will show you how to draw it to your canvas
in the next example*/

