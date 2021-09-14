class Canon{
  constructor(x,y,w,h,angle){
    this.w = w
    this.x = x 
    this.h = h
    this.y = y
    this.angle = angle
    this.imaga = loadImage("cannonBase.png")
    this.image = loadImage("canon.png")
  }
  method(){
    image(this.imaga,90,98,135,135)
    push();
    translate (this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
    if (keyIsDown(RIGHT_ARROW)&& this.angle < 113){
      this.angle = this.angle + 2
    }
    if (keyIsDown(LEFT_ARROW)&& this.angle > -43){
      this.angle = this.angle - 2
    }
    
  }
}