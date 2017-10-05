var word = ["have", "a", "good", "day", ":)"]

var index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  fill(255);
  textSize(32);
  //text("have", width/2, height/2);
  //text(word[0], 20, height/2);
  text(word[index], 20, height/2);
}

function mousePressed(){
  index = index + 1; //error bc you are trying to access a non-existant element
  
  //conditional to protect from that error
  if (index == 5){
    index = 0;
  }
  
  //if we want to dynamically change or continue to add more elements
  /* if (index ==word.length){
    index = 0;
  }
  */
}

/* make a list of something; maybe see if you can march through each element. try using random
*/