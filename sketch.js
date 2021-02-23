



function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  var h = hour();
var s = second();
var m = minute();
  angleMode(DEGREES)
  scAngle = map(s,0,60,0,360)
  mnAngle = map(m,0,60,0,360)
  hrAngle = map(h%12,0,12,0,360)
  //drawing second hand 
  push();
  translate(400,200)
  rotate(scAngle)
  stroke('red')
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  // drawing hour hand 
  push();
  translate(400,200)
  rotate(hrAngle)
  stroke('blue')
  strokeWeight(7)
  line(0,0,50,0)
  pop();
  //drawing minute hand 
  push();
  translate(400,200)
  rotate(mnAngle)
  stroke('green')
  strokeWeight(7)
  line(0,0,80,0)
  pop();

  drawSprites();
}