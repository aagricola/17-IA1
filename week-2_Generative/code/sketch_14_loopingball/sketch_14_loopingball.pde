int x = 0;
int speed = 1;
int radius = 25;

   void setup() {
     size(500, 200);
} 
    void draw() {
     background(255);
     stroke(0);
     fill(175);
     //change the x location using the speed variable
     x = x + speed;
     //if we reach an edge, reverse speed
     if((x > width)){
      x = 0-radius; 
     }
     ellipse(x, height/2, radius*2, radius*2);
}