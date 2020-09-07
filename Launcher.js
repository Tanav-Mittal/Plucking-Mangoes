class Launcher
{
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 5 
        }

        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    display()
    {
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}