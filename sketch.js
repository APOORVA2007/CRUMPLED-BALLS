
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paperObj,ground,dustbinObj;

 function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

   dustbinObj = new Dustbin(1200,650);
   paperObj = new Paper(200, 450, 40);
   ground = new Ground(width/2, 670, width, 20);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paperObj.display();
  ground.display();
  dustbinObj.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paperObj.body, paperObj.body.position, 
		   {x:15, y: -15})
	}

  }




