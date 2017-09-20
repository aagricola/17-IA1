# Welcome Back!

## What's up today:

- relative vs. absolute paths
- continuing conditional logic
- functions
- work time on non-linear narrative projects

## What happened last week?

There may have been several factors that played into the issues many of us were having serving to the local host from Atom last week. Keep this in mind if If you run a local server, run it from the root folder which is where the index.html exists. The index is always the entry point for a website. Wherever it lives is considered the root folder. Everything else is relative to that folder. If there are any misdirected paths in the index.html, it can prevent you from seeing the file in the browser. The best way to avoid this issue in the future is to serve from the root folder where the index.html exists.

## That being said

I'm happy for you to continue using Atom, but feel free to use the p5.js editor that you can download [here](https://github.com/processing/p5.js-editor/releases).  **You will have to open your security preferences, unlock, and allow p5.js to open the first time you run the program.** Using this editor is by no means a limitation. Each new project that you create with the p5.js editor is a happy and complete package ready to be hosted on a website whenever you're ready. Another benefit to using it is that it has helpful syntax error notifications and reminders.  

  ## Conditional statements

  Conditionals allow the draw loop to execute differently depending on something that is happening in the code. So the code can take different paths depending on whether certain conditions have been met and return true or false.

  Last week we looked at else if statements, which execute something totally different if the if statement returns false.

We also used && (and) and || (or)  to add more conditions to one conditional statement.

We looked at if (mouseIsPressed) to check if the user is holding down the mouse. This is different from using events (functions) like function mousePressed() or function keyPressed() which changes a state permanently.

  - let's refresh by making a boolean toggle button
  - typing
  - state-change continued

  ## functions

- functions are a means of taking the parts of our program and separating them
into modular pieces, making the code easier to read and understand (making your
future self happier) as well as revise or debug
- functions (calculate value), a.k.a. procedures (performs task), methods (java),
or subroutines
- calling a function is same as writing line(), rect(), fill(). (these are
built-in functions) vs. user-defined functions
- modularity - functions break down larger programs into smaller parts - makes
code more manageable and readable
- reusability- allows us to code without having to retype everything
- 3 parts: function , function name (whatever you want),
 (optional parameters) {}
- parameters (a.k.a. arguments) or values , passed into the function (variable declaration)
- note: in processing, in place of function, you would use a return type (such as void, int, float, or boolean)

## Resources

[Getting Started with p5.js](http://people.uncw.edu/tompkinsj/112/JavaScript/GettingStartedwithP5js.pdf) - This is the handbook for learning p5.js

## Homework

- Make sure to post your response to our discussion from last week by 11:59 tonight (in Canvas)
- Finish you non-linear narrative project. We will have a more in-depth critique/discussion of these than usual at the beginning of class next week. 
