//NameSpaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

function preload()
{
//loading Images
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//Helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "green";

	//Create Engine and add it to the WORLD
	engine = Engine.create();
	world = engine.world;

	//create and add package to the world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground and add to the World
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	//run the engine
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  //define positions x and y	
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
  drawSprites();
}

//function for key pressed
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //changing the state of the package to freefall
    Matter.Body.setStatic(packageBody, false);
  }
}
