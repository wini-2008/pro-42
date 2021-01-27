var hr = hour();
var mn = minute();
var sc = second();
 
function setup() {
  createCanvas(800,400);
  //createSprite(200, 50, 50, 50);
  circle(50,55,200);
}

function draw() {
  background(255,255,255);  
   angleMode(DEGREES);
   scAngle = map(sc,0,60,0,360);
   push();
   rotate(scAngle);
   storke(255,0,0);
   strokeWeight(7);
   arc(50, 55, 50, 50, 0, HALF_PI);
   arc(50, 55, 60, 60, HALF_PI, PI);
   arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
   arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
   line(0,0,100,0);
   translate(width / 2, height / 2);
    pop();
  
  drawSprites();
}