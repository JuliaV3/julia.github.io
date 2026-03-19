function setup() {
  createCanvas(400, 400);
  background('lightgray');
}

  //It is important that the number of arguments match the number of parameters that a function is expecting.

function draw() {
  circle(200, 200, 50);
  createCircle(300); //We don't need to add the function term at the beginning because the function has already been created.
  // what does it mean by 300 being an argument? It means that the value of 300 is being passed into the function as a parameter. In this case, the parameter is xPos, which is used to determine the horizontal position of the circle that is being created. So when createCircle(300) is called, it will create a circle at the x-coordinate of 300 and a y-coordinate of 100 with a diameter of 50.
  //can I add any number of arguments to a function? Yes, you can add as many arguments as you need to a function. The number of arguments you can add depends on the programming language you are using and the specific requirements of your function. In JavaScript, for example, you can define a function with multiple parameters, and when you call that function, you can pass in the corresponding number of arguments.
  createCircle(0); //This will create a circle at the x-coordinate of 0 and a y-coordinate of 100 with a diameter of 50.
  createCircle(400); //This will create a circle at the x-coordinate of 400 and a y-coordinate of 100 with a diameter of 50.
  createCircle(300, 100); //The first number is the x-position argument, the second is the y-position argument. 
  createCircle(300, 400);

  square(100, 300, 50);
  square(250, 200, 50);
  square(350, 350, 30);

}

function createCircle(xPos) { //function that creates a produces a circle when called. 
  circle(xPos, 100, 50);
}

function createCircle(xPos, yPos){ //it represents the y-position of our circle.
circle(xPos,yPos, 50);
}

function createSquare(xPos, yPos, diameter){ 
  createSquare(xPos, yPos, diameter);
}