var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421';
var inData;     // for incoming serial data
 
function setup() {
  createCanvas(400, 400);
  
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}

function draw() {
  background(0);
  fill(255);
  text("sensor value: " + inData, 30, 30);
  grow();
}

function grow(){
  var r = inData;
  var g = inData/2;
  fill(r,g,100);
  var m = map(inData, 0, 255, 0, 400);
  ellipse(width/2, height/2, m, m);
}
 
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}

//Now add new functions to respond to the callbacks you just declared. 
function serverConnected() {
  print('connected to server.');
}
 
function portOpen() {
  print('the serial port opened.')
}
 
 //most important! this is the one that responds to new data:
function serialEvent() {
 inData = Number(serial.read());
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  print('The serial port closed.');
}