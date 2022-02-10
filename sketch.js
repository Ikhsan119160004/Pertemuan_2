let j;
function setup() {
  // put setup code here
  createCanvas(500,500);
  j=0; 
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(8)
  fill(255, 0, 0);
  point(200,200);
  line(0,0,200,100);
  line(0,0,350,100);
  
  fill(28, 200, 0);
  rect(200,100,150,100);

  strokeWeight(2)
  fill(0,255,0);
  ellipse(150,120,20,20);
  ellipse(200,120,20,50);
  
  strokeJoin(ROUND)
  fill(255, 0, 0);
  triangle(35,10,120,100,50,60);
  arc(70,50, 40, 40, radians(0), radians(360));

  strokeWeight(5)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(200,150)
  endShape(CLOSE);
  
  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(PI*x/50)
    point(x,y)
  }
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 50 + 10*Math.sin(PI*j/20)
  j += 1
  fill(240, 192, 35)
  ellipse(300, y, r, r)
}