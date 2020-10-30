class Bob{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:1,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(230);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 50, 50);
    }
}