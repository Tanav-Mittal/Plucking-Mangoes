class Mango
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic: true,
            restitution: 0,
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("mango.png")

        this.radius = radius;
        World.add(world,this.body)
    }

    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);  
    }
}