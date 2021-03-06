/** TODO:
 * Raytracing collisions?
 * 
 * Add points system
 * Add unitvector(vel)*speed on every bounce [x]
 *  so every bounce has same speed
 *  regardless of vector direction/size
 * Multiply speed by a bit for every bounce
 * 
 * Different locations on paddle = different angle
 * 
 * Add max rounds system (maybe not yet)
 * Add multiple games at once (would allow for faster training) color could differentiate
 * 
 * Add AI to train
 * Actually train
 * 
 * Save/Load trained model
 * 
 * maybe menu screens
 */

/** CHANGELOG:
 * Changed pos, and velocity to vectors
 */
let WIDTH  = 560;
let HEIGHT = 420;

let theBall;
let playerPaddle;

let paddleFlagMap = new Map();

let paddles = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  rectMode(CORNER);
  ellipseMode(CENTER);
  //so basically what i changed was we can now call
  // theBall = new ball(100, 200, 2, 0);
  // For random start
  theBall = new ball();
  paddles.push( new paddle( 10 ) );
  // I and K to move this othe rpaddle
  paddles.push( new paddle( WIDTH-20, 73, 75 ) );

  paddleFlagMap.set( paddles[0], false );
  paddleFlagMap.set( paddles[1], false );
}

function draw() {
  // Refresh
  background('#171717');

  // Draw Mid Lines
  for ( let i in Array(20).fill(0).map( (v, i) => i ) ) {
    rect( (WIDTH / 2) - 2, ((i*HEIGHT)/20) + 7, WIDTH/105, HEIGHT/40 );
  }

  // Draw objects
  paddles.forEach(paddle => paddle.draw())
  theBall.draw();
  
  // Update objects
  paddles.forEach(paddle => paddle.update())
  theBall.update( paddles );
}

