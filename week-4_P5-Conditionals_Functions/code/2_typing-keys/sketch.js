//keep track of what keys the user has pressed var typed = "";var x = 200;function setup() {   createCanvas(400, 400);  textSize(22);   textAlign(CENTER);   fill(255);}function draw() {    background(0);   text(typed, 0, x, width, x);}//only executed when a key has a number, letter or symbol associatedfunction keyTyped() {  //The key variable stores the most recent key that has been pressed.  typed += key; //this operation appends the last key with the current key typed}//keyPressed gets called no matter what the key isfunction  keyPressed(){  //if keycode is Delete, clear the typed variable  if(keyCode == BACKSPACE){    typed = '';  }}