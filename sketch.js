
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg = loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(550,330,450,650)
	ground = new Ground(400,640,1600,10)

	stone = new Stone(129,500,50);

	mango1 = new Mango(450,270,50)
	mango2 = new Mango(580,220,50)
	mango3 = new Mango(460,170,50)
	mango4 = new Mango(730,280,50)
	mango5 = new Mango(580,50,50)
	mango6 = new Mango(670,140,50)
	mango7 = new Mango(540,125,50)
	mango8= new Mango(660,270,50)

	launcher = new Launcher(stone.body,{x:143,y:515})
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);

  image(boyImg,100,445,250,250)
  tree.display();
  ground.display();
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  launcher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  drawSprites();
}

function mouseDragged()
{
	Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	launcher.fly();
}

function detectCollision(lstone,lmango)
{
		mangoBodyPosition = lmango.body.position
		stoneBodyPosition = lstone.body.position

		var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance <= lmango.radius + lstone.radius)
		{
			Body.setStatic(lmango.body,false);
		} 
}

function  keyPressed ()
{
	if (keyCode === 32)
	{
		Body.setPosition(stone.body,{x:129,y:565})
		launcher.attach(stone.body);
	}
}
