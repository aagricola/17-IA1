//Nearest-Neighbor, 2017
// Image

//create a variable for the image
var pug;

/*
The preload() function runs once before the setup() function runs. 
You should generally load your images and other media in preload() 
in order to ensure they are fully loaded before your program starts.
*/
function preload() {
  //load the image file (saved in your project folder)
  pug = loadImage("assets/pug.png");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(180);

  //The arguments for imaage() function are: (image Object name, x, y);
  //images are positioned from the top left corner by default
  image(pug, 0, 0);
  // Optional width and height arguments can also be added to resize images. This is in pixel dimensions.
  image(pug, 400, 0, 400, 400);

  // The tint() function can tint an image a specified color. noTint() is used to turn off the effect.
  tint(255, 0, 0);
  image(pug, 0, 200, 200, 200);
  noTint();

  // The tint() function can tint an image a specified color. An extra argument specifies the alpha of the tinted image (range: 0-255).
  tint(0, 0, 255, 100);
  image(pug, 200, 200);
  noTint();

  // If the color is set to white, the alpha value allows you to change image opacity without any noticeable tinting
  tint(255, 128);
  image(pug, 400, 200, 200, 200);
  noTint();

}