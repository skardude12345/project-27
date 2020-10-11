class Rope {

    constructor(body1, pointB){

       

    var prop = {
        bodyA: body1, 
        
        
        pointB: pointB,

        length: 200,
        stiffness: 0.3
    }
    
    this.constraint = Matter.Constraint.create(prop);
    World.add(world, this.constraint);
    this.pointB = pointB
    
    
    
    }
    
    
    display(){
        var point1 = this.constraint.bodyA.position
        
    
    push();
    
    stroke(255);
    strokeWeight(3);
    line(point1.x, point1.y, this.pointB.x, this.pointB.y);
    
    
    pop();
    }
    
    
    
    }