let  WIDTH  = 580;
let HEIGHT = 420;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(255,0,0);
  //test
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}