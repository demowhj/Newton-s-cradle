class Roof{
    constructor(){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(400, 100, 400, 20, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, 400, 20);
    }
}