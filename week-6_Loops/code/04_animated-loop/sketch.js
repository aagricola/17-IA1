// the purpose of the draw loop is not to animate but to draw a whole bunch of things beforethe end of the draw loop 
//if you want to animate, you will have to add random or incramentation

var offset = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  //add an offset to the whole loop
   for (var x = 0; x <= width; x += 50){ 
    fill(random(255), 0, random(255));
    rect(x + offset , 100, 25, 25);
    }
    offset++;
    
  //draw the x up to the offset distance each loop
    for (var x = 0; x <= offset; x += 50){ 
    fill(random(255), 0, random(255));
    rect(x, 200, 25, 25);
    }
    
  //offset and incrament   
    for (var x = 0; x <= offset; x += 50){ 
    fill(random(255), 0, random(255));
    rect(x + offset, 300, 25, 25);
    }
    
    //incramentation operation 
    offset ++;
    
    //to make a reset
    if(offset > width){
      offset = 0;
    }
    
}