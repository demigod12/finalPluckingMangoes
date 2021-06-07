class Stone{

    constructor(x, y, r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0, 
            density: 0, 
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        var stonePos = this.body.position;

        push();
        translate(stonePos.x, stonePos.y);
        
        rectMode(CENTER);
        fill(25, 0, 40);
        
        circle(stonePos.x, stonePos.y, this.r)
        pop();
    }
}