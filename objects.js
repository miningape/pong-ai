class paddle {
    constructor( x ) {
        this.x = x;
        this.y = 20;
        this.width = 10;
        this.height = 50;
    }

    function move( dy ) {
        this.y += dy;
    }

    function closestPoint( x, y ) {}

    function draw() {
        
        rect(this.x, this.y, this.width, this.height);
    }
}

class ball{
    constructor() {
    }
}