//for loop counter
//counter to do something only a certain number of times

function setup() {
  createCanvas(600, 400);
// Slow things down so that it is easy to see the results
   frameRate(1);
}

function draw() {
  background(0);
  strokeWeight(random(4));
  stroke(255);
  
  // Start the counter (i) at 0 and keep adding 1 while it is under 10
  // While that is true, do what is between {}
   for (var i = 0; i < 10; i++){ 
    noFill();
    rect(random(width) , random(height), random(40), random(40));
    }
    
}