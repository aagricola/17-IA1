//formatted debugging
//mouseX mouseY

//global variable
float mapped;
float mapped2;

void setup(){
  size(600, 600);
}

void draw(){
  background(250, mapped, mapped2);
  ellipse(mouseX, mouseY, 50, 50);
  mapped = map(mouseX, 0, 600, 0, 255);
  mapped2 = map(mouseY, 0, 600, 0, 255);
  
  print("x: " + mapped + "\t");
  println("y:" + mapped2);
}