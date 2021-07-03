
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,670);
	paper = new Paper(100,450,20)

	Engine.run(engine);

  
}


function draw() {
 
  background(230);
  rectMode(CENTER);
  
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:145});
}
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
}

