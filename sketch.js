


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  var h = hour();
  var s = second();
  var m = minute();
  translate(400,200)
  angleMode(DEGREES)
  noFill()
  strokeWeight(8);
  scAngle = map(s,0,60,0,360)
  stroke('red')
  arc(0, 0, 300, 300, 0, scAngle);
  mnAngle = map(m,0,60,0,360)
  stroke('blue')
  arc(0, 0, 280, 280, 0, mnAngle);
  hrAngle = map(h%12,0,12,0,360)
  stroke('green')
  arc(0, 0, 260, 260, 0, hrAngle);
  
  //drawing second hand 
  push();
  
  rotate(scAngle)
  stroke('red')
  strokeWeight(7)
  line(0,0,100,0)

  
  pop();
  // drawing hour hand 
  push();
  rotate(mnAngle)
  stroke('blue')
  strokeWeight(7)
  line(0,0,80,0)
  
  
  pop();
  //drawing minute hand 
  push();
  rotate(hrAngle)
  stroke('green')
  strokeWeight(7)
  line(0,0,50,0)
  

  pop();

  drawSprites();
}