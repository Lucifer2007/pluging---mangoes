
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(1250,330,500,630);

	boy1  = new Boy(300,560,260,330);

	mango1 = new Mangoes(1300,200,25);
	mango2 = new Mangoes(1150,200,25);
	mango3 = new Mangoes(1200,270,25);
	mango4 = new Mangoes(1350,270,25);
	mango5 = new Mangoes(1450,270,25);
	mango6 = new Mangoes(1400,230,25);
	mango7 = new Mangoes(1250,100,25);
	mango9 = new Mangoes(1130,300,25);

stone = new Stone(220,590,30);

	slingShot = new Chain(stone.body,{x:220,y:490});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 
  mango9.display();
  stone.display();
  slingShot.display();


  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingShot.flow();
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:160, y:500});
	  chain.attach(stone.body);
	}
  }
  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }