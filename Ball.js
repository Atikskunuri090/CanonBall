class Canonball{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
        var Options = {isStatic : true} 
        this.body = Bodies.circle(x,y,r,Options)  
        this.image = loadImage("cannonball.png") 
        World.add(world,this.body)
    }
    shoot(){
        var newangle = canon.angle-25
        newangle = newangle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newangle);
        velocity.mult(0.8)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x(180/3.14),y:velocity.y(180/3.14)})
    }
    method(){
    push();
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    pop();
    }
   
}
