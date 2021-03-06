# Hello!

## Today:
- Analog input - Arduino
  - Potentiometer
  - Photocell
- Analog output - Arduino
  - LEDs
  - rgb LEDs
- Serial input Arduino to p5.js
- Serial output from p5.js to Arduino

## Analog Input and Output

[Presentation on Analog Input and Output](https://docs.google.com/presentation/d/1BhNyA6jWcWhAaleHbIvDaak23S0KEZxa4m57XQX4VVc/embed?start=false&loop=false&delayms=5000&slide=id.p)

### Difference between Serial.print and Serial.write:

Our micro controller communicates with the computer via serial communication. Each time we serial.println , we are sending several bytes of data as an ASCII-encoded numeric string with a carriage return and newline at the end.

Serial.write sends raw binary value — that is, a single byte ranging from 0 to 255.

[Here is a video that explains what in the hell I'm talking about](https://vimeo.com/97519477)

[Presentation on Serial Communication: Arduino to p5.js](https://docs.google.com/presentation/d/e/2PACX-1vTgkkYWRYL0bHyJt974r5NisnZmtQfSvIdJwcGf3rNbkzSakVgUg99RxxxHdhrY5qaY0xAGHu2xQc9p/pub?start=false&loop=false&delayms=3000)

## Project 3: Collaborative Machine

Make a project with a partner or a group that conceptualizes the idea of the self as a machine. Create a physical interface that can be used by the viewer to interact. Can you make something that engages with human experience through the lens of the machine? Or what about a human, machine integration that could make people more human, more mindful, or more empathetic?

The following are the deliverables for the project:

- Interactive work of art using Arduino and p5.js
- Artist statement about the work
- Good documentation of the Piece
- Peer review

## The Machine in art

[Jean Tinguely "Hommage to New York"](https://www.youtube.com/watch?v=0MqsWqBX4wQ), 1960
Hacked musical instruments, bicycles, and appliances into a kinetic sculpture that destroys itself over the course of the evening.

[Corey Archangel "Beat the Champ"](https://www.youtube.com/watch?v=baIiP8re1y4)
Hacked Atari video games of bowling to only throw gutter-balls for Nintendo Gamecube. Similar to Tinguely's "Hommage to NY", Archangle's self playing system engages tirelessly in the self-sabotaging and mortifying act of throwing endless gutter-balls.

[Pedro Reyes, "Disarm"](https://www.youtube.com/watch?v=YwQp16D-TqQ)
Made from the remnants of weapons that the Mexican army had collected and destroyed, these machines are mechanical musical automatons; they can be programmed and operated via computers, making them capable of performing music concerts with compositions prepared beforehand.

[Ryota Kuwakubo‘s ‘The Tenth Sentiment’](http://www.mutantspace.com/ryota-kuwakubo-the-tenth-sentiment-installation/)
"Kuwakubo, a Japanese multi media artist, has been creating work for over 10 years based on the themes of relationships formed across various boundaries such as analog and digital, humans and machines and information transmitters and receivers. His work generally involves creating devices that are designed not only for providing experiences but also as tools for establishing communications between the people who experience them."

[Ali Miharbi, "Whisper"](http://www.alimiharbi.com/work/the-whisper/), 2016
“Whisper” is a sound installation consisting of compressed air flowing through acoustic resonators based on the shapes human vocal tract takes during speech. The sounds that the viewer hears while walking around the space resemble human whispering, as well as breathing. Sound sequences are based on the probabilities of the alphabet’s letters to succeed each other in a collection of texts, thus reflecting rhythms in language."

[Marcelo Gómez Moreira, "Tender: It's How People Meat"](https://www.youtube.com/watch?v=snDeLy8cu24)

## Physical Interface

[ Neil Mendoza, "Robotic Voice Activated Word Kicking Machine"](https://vimeo.com/177486245)

[Khalil Klouche "Knock Knock"](https://vimeo.com/60773296)

[Sophia Brueckner, "Empathy Box"](http://fluid.media.mit.edu/node/332)
"The Empathy Box is a networked appliance that connects many anonymous people through shared warmth."

[Jürg Lehni, Alex Rich & Raphael Hefti, "Hertz"](http://amandaagricola.com/ED16/wp-admin/post.php?post=98&action=edit)
"The migration from analogue to digital broadcasting at the end of 2008 freed most of the frequency bands previously used for airing TV programs, marking a significant transformation of media and the end of analogue broadcasting. Creating a scenario of public engagement, the visitor through riding the bicycle facilitates a low power signal within the now redundant band broadcasted out into the local vicinity of the museum. The signal consists of an animation generated by a small computer running Flood Fill, an algorithm that renders an animation of black and white pixels appearing almost as alignment of the snow-like fuzz received when the channel is dormant."

## Resources

[ITP Serial Communication Lab](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/)
[p5.serialcontrol application](https://github.com/vanevery/p5.serialcontrol/releases)
[p5.serialport library](https://github.com/vanevery/p5.serialport)

## Assignments

- pushbutton or Potentiometer controlling something on screen
- something on screen controlling LED

## Homework

- Finish Assignments
- Bring your arduino kit with you next week
