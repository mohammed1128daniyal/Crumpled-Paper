const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject,paperObject;
var dustbinImage,paperImage;
var world,engine;

function preload() {
	
	dustbinImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper();
	groundObject=new ground(800,680,1600,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-90});
  
	}
}