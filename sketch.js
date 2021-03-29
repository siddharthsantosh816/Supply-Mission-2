var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, helicopterBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3,ground1;

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
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.45, isStatic:true});
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.45, isStatic:true});
	World.add(world, helicopterBody);
	
	//Create a Ground
	
	Engine.run(engine);
	ground1 = new Ground(0,670,1600,15);
	box1=new Box(width/2+110,615,20,100);
	box2=new Box(width/2,655,200,20);
	box3=new Box(width/2-110,615,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
  helicopterSprite.x = helicopterBody.position.x;
  helicopterSprite.y = helicopterBody.position.y;
	
 
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)  
  }
 if (keyCode === LEFT_ARROW) {
	helicopterBody.position.x = helicopterBody.position.x - 15
	if (packageBody.position.y === 200) {
		Matter.Body.translate(packageBody,{x:-15,y:0});
	}
 }
  if (keyCode === RIGHT_ARROW) {
	helicopterBody.position.x = helicopterBody.position.x + 15
    if (packageBody.position.y === 200) {
		Matter.Body.translate(packageBody,{x:15,y:0});
	}
  }
}
