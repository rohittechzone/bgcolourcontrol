
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  fill("black");
    createCanvas(1200,400);
    background(255);
}


function draw(){
  //let maping = map(mouseX, mouseX, mouseX);
  let r = map(mouseX,1400,800,0,80);
  let g = map(mouseX,500,200,0,255);
  let b = map(mouseX,300,1800,0,190);
  background(r,g,b);
  fill("white");

  ellipseMode(RADIUS);
  ellipse(mouseX, mouseY, 25, 25);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 


  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}