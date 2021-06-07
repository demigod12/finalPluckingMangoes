const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world,boy;

//Declare launcherObject and launchForce variable here
var ground1;
var mango1, mango2, mango3, mango4, mango5;
var stone1;
var boyImg;
var tree;

function preload() {
	//boyImg = loadImage("images/boy.png");

}

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;
  	ground1 = new Ground(200, 380, 400, 20);
	mango1 = new Mango(350, 20, 20);
	mango2 = new Mango(350, 40, 20);
	mango3 = new Mango(350, 60, 20);
	mango4 = new Mango(350, 80, 20);
	mango5 = new Mango(350, 100, 20);

	tree = new Tree(350, 350, 50, 100);

	stone1 = new Stone(100, 180, 50);

	//boy = createSprite(250, 250, 100, 100);
	//boy.addImage(boyImg);

	Engine.run(engine);
}

function draw() {

  background(230);
  text(mouseX+","+mouseY, mouseX, mouseY);

  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  tree.display();
  stone1.display();

  
}

//create mouseDragged function here


//create mouseReleased function here


//create keyPressed function here


