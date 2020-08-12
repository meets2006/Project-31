const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var ground
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,790,800,20)
    //for (var j = 40; j<=width-50; j=j+50)
    //{
     // plinkos.push(new Plinko(j,75));

//}
    
for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375));
 }
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); }
  for (var j = 0; j < particles.length; j++) { particles[j].display(); }
  for (var i = 0; i < plinkos.length; i++)
  {
   plinkos[i].display()                                                                                   ; //plinkos.push(new Plinko(j,75,30));

  }
  
  for (var k = 0;k < divisions.length; k++){
    divisions[k].display();
    //divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
    

  drawSprites();

}