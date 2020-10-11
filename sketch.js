
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
	world = engine.world;
  
  roof = new Roof(400, 50, 250, 30);
  bob1 = new Bob(400, 250, 20);
  bob2 = new Bob(360, 250, 20);
  bob3 = new Bob(320, 250, 20);
  bob4 = new Bob(440, 250, 20);
  bob5 = new Bob(480, 250, 20);
  rope1 = new Rope(bob1.body, {x: 400, y:50});
  rope2 = new Rope(bob2.body, {x: 360, y:50});
  rope3 = new Rope(bob3.body, {x: 320, y:50});
  rope4 = new Rope(bob4.body, {x: 440, y:50});
  rope5 = new Rope(bob5.body, {x: 480, y:50});

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  if (keyDown("up")){
    Body.applyForce(bob3.body, bob3.body.position, {x: -0.01, y: 0} );

  }
  
  bob1.display()
  roof.display()
  rope1.display()
  bob2.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob3.display();
  bob4.display();
  bob5.display();
}



