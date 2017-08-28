//Nearest Neighbor, 2017;
// Fonts

/*You can use the textFont() function to set the current font. 
You can draw letters to the screen with the text() 
function, and you can change the size with textSize()
*/

function setup() {
  createCanvas(480, 120);
  textFont("Arial"); //set the current font. 
}

function draw() {
  background(102);
  
  //change the font size
  textSize(32);
  fill(0);//text color
   
  //draw letters to the screen with the text()
  //first argument is the text, x, y of starting point
  text("one small step for man...", 25, 60);
  
  fill(255);//text color
  textSize(16);
  text("one small step for man...", 27, 90);
}