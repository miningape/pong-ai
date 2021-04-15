class paddle {
    constructor( x, upkey=87, downkey=83 ) {
        this.x = x;
        this.y = 20;
        this.vel = 2;
        this.width = 10;
        this.height = 80;
        this.upkey = upkey;
        this.downkey = downkey;
    }

    // Algorithm for finding closest point inside rect to another point
    closestPoint( x, y ) {
      let rtn = {x: x, y: y};

      let yMax = this.y + this.height;
      let yMin = this.y;
      let xMax = this.x + this.width;
      let xMin = this.x;

      rtn.x = ( x > xMax ) ? xMax : rtn.x;
      rtn.x = ( x < xMin ) ? xMin : rtn.x;
      rtn.y = ( y > yMax ) ? yMax : rtn.y;
      rtn.y = ( y < yMin ) ? yMin : rtn.y;

      return rtn;
    }

    // Update function, at the moment it just does keypresses
    update() {
      // nam jef
      if ( this.y < 0 ) {
        this.y = 0;
      }
      if ( this.y + this.height > HEIGHT ) {
        this.y = HEIGHT - this.height;
      }

      if ( keyIsDown(this.upkey) ) {
        this.y -= this.vel;
      }
      if ( keyIsDown(this.downkey) ) {
        this.y += this.vel;
      }
    }

    draw() {
        strokeWeight(0);
        fill('#f5f0f0');

        // Code to see hitbox
        //stroke(255,0,0)
        //strokeWeight(1);
        //rect(this.x, this.y, this.width, this.height);
        //strokeWeight(0);
        rect(this.x, this.y, this.width, this.height, 10);
    }
}