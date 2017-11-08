const int buttonPin = 2;
int buttonState = 0; 

void setup() {
  //9600 is the bps the computer and controller are agreeing to communicate (transmit and receive)
  Serial.begin(9600); 
  //initialize pin
  pinMode(buttonPin, INPUT);
}

void loop() {
    // read the state of the pushbutton value:
 buttonState = digitalRead(buttonPin);
 Serial.write(buttonState);
 delay(100);
}
