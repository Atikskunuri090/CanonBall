const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundimg, background;

var tower, towerimg, canon, canonimg;

var ball

function preload(){
backgroundimg = loadImage("background.gif");
towerimg = loadImage("tower.png")
}

function setup(){
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
angleMode(DEGREES)
angle = 15
canon = new Canon(175,180,100,100,angle)
var hi = {isStatic : true}
tower = Bodies.rectangle(150,360,100,200,hi)
World.add(world,tower)
ball = new Canonball(175,180,30)
}

function draw(){
background(0);
Engine.update(engine);
image(backgroundimg, 0, 0, 1200, 600);
push();
imageMode(CENTER);
image(towerimg,tower.position.x,tower.position.y,100,300)
pop();
canon.method()
ball.method()
}

function ballpressed(){
    if (keyIsDown(DOWN_ARROW)){
        ball.shoot();
    }
}