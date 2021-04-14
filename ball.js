
class ball{
  constructor(x, y, xSpeed, ySpeed) {
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

      if ( distance < this.minDistance ) { 
        // Probably best place to put new direction for bounce
        // closestPoint.y as a fraction of paddle height or something to calculate bounce angle
        this.xSpeed *= -1;
        //this.ySpeed *= -1;
      }
    });
    
    if (this.x - this.radius < 0 || this.x + this.radius > WIDTH) {
      this.xSpeed *= -1;
    }
    
    
    if (this.y - this.radius < 0 || this.y + this.radius > HEIGHT) {
      this.ySpeed *= -1;
    }
  }

  draw() {
    //x, y, diameter
    circle(this.x, this.y, this.radius*2);
  }
} 