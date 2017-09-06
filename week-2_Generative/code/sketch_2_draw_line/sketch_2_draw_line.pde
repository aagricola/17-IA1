//Amanda Agricola
//02 draw with line

void setup() {
  size(600,600);
  background(255);
  smooth();
} 
void draw() {
  stroke(0);
  //pmouseX, pmouseY = previous mouse x and y positions 
  line(pmouseX,pmouseY,mouseX,mouseY);
  
  // comment out the above, and uncomment this to try 
  /*
  if(mousePressed == true){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
  */
} 