class Mango{

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
        var mangoPos = this.body.position;

        push();
        translate(mangoPos.x, mangoPos.y);
        
        rectMode(CENTER);
        fill(255, 0, 40);
        
        circle(mangoPos.x, mangoPos.y, this.r)
        pop();
    }
}