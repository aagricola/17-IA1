// Needed for Arduino communication using Firmata
import processing.serial.*;
import cc.arduino.*;

// Control the Arduino as an object
Arduino arduino;
int potPin = 0; // The analog pin a potentiometer, or other analog input, is connected to
int potValue; // For storing the analog value from the potentiometer
float mappedValue;

void setup() {
  size(600, 600);
  println(Arduino.list());
  
  // Run this sketch and replace the 0 in Arduino.list()[] by choosing your Arduino from the list printed in the console (it will look like "/dev/tty.usbmodem..."). 
  // The count will start at 0! Make sure your Arduino is plugged in first!
  arduino = new Arduino(this, Arduino.list()[1], 57600); // The last argument (57600) sets the communication speed
}


void draw() {
  background(#333333);
  // Store the analog input and send it to blob1
  potValue = arduino.analogRead(potPin);
  mappedValue = map(potValue, 0, 1023, 0, 255);
  fill(50, mappedValue, mappedValue*.25);
  ellipse(width/2, height/2, potValue, potValue);
 // display the incoming serial data as a string:
 text("incoming value: " + potValue, 30, 30);
}