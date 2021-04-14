let WIDTH  = 500;
let HEIGHT = 500;

//objects
let theBall;
let playerPaddle;

console.log( true? 1:2)

let paddles = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  rectMode(CORNER);
  ellipseMode(CENTER);
  //test
  theBall = new ball(100, 200, 1, 0);
  paddles.push( new paddle( 10 ) );
  // I and K to move this othe rpaddle
  paddles.push( new paddle( WIDTH-20, 73, 75 ) );
}

function draw() {
  background(69,0,0);

  

  paddles.forEach(paddle => paddle.draw())
  theBall.draw();
  
  paddles.forEach(paddle => paddle.update())
  theBall.update( paddles );

}

