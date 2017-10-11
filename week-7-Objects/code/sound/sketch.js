var button;
var playing;

function setup() {
  createCanvas(200, 200);
  background(0);
  //load your audio clip located in same project folder in a folder named assets
  audio = createAudio("assets/hisshit.mp3")
  //create a button object
  button = createButton("play");
  button.position(100, 100);
  button.mousePressed(toggle);
  //turn the sound off to begin
  playing = false;
}



function toggle() {
  if (playing){
    audio.pause();
    button.html("play");
    }else{
      audio.loop();
      button.html("pause");
    }
    //toggle logic
    playing = !playing;
}