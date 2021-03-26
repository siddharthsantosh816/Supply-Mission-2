var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, helicopterBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="grey";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.45, isStatic:true});
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.45, isStatic:true});
	World.add(world, helicopterBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	box1=new Box(width/2+110,610,20,100);
	box2=new Box(width/2,640,200,20,{isStatic:true});
	box3=new Box(width/2-110,610,20,100); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
  helicopterSprite.x = helicopterBody.position.x;
  helicopterSprite.y = helicopterBody.position.y;
	
   box1.display(width/2+110,610);
   box2.display(width/2,650);
   box3.display(width/2-110,610);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)    
  }
 if (keyCode === LEFT_ARROW) {
	//Matter.Body.setStatic(helicopterBody, false)
	helicopterBody.position.x = helicopterBody.position.x - 10
	
	if (packageBody.position.y === 200 ) {
	   packageBody.position.x = packageBody.position.x - 10
	}
  }
  if (keyCode === RIGHT_ARROW) {
	//Matter.Body.setStatic(helicopterBody, false)
	helicopterBody.position.x = helicopterBody.position.x + 10
	if (packageBody.position.y === 200 ) {
	   packageBody.position.x = packageBody.position.x + 10
	}
  }
}
