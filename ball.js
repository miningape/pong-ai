randArray = [-2,-1,1,2]

class ball{
  // Default values spawn of screen causing automatic reset on next frame
  constructor(x=-10, y=-10, xSpeed=-10, ySpeed=-10) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.radius = 10;
    this.minDistance = this.radius * this.radius;
  }

  update( paddleArray ) {
    //console.log(paddlesArray)
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    paddleArray.forEach( paddle => {
      let closestPoint = paddle.closestPoint( this.x, this.y );
      
      let distance = (closestPoint.x - this.x)**2 + (closestPoint.y - this.y)**2;

      if ( distance <= this.minDistance && !paddleFlagMap.get(paddle) ) { 
        // Probably best place to put new direction for bounce
        // closestPoint.y as a fraction of paddle height or something to calculate bounce angle
        this.xSpeed *= -1;

        // On contact set flag
        paddleFlagMap.set(paddle, true);

      } 
      
      if ( distance > this.minDistance && paddleFlagMap.get(paddle) ) {
        paddleFlagMap.set(paddle, false);
      }
    });

    if (this.y - this.radius < 0 || this.y + this.radius > HEIGHT) {
      this.ySpeed *= -1;
    }

    if (this.x - this.radius < 0 || this.x + this.radius > WIDTH) { 
      this.reset();
    }
  } 
  reset() {
    this.x = WIDTH/2;
    this.y = HEIGHT/2;
    this.xSpeed = random(randArray);
    // Looks weird, basically adds 0 to the array so we can get horisontal movement
    this.ySpeed = random([...randArray, 0]);
  }

  draw() {
    //x, y, diameter
    fill('#f5f0f0');
    stroke(0);
    circle(this.x, this.y, this.radius*2);
  }
} 