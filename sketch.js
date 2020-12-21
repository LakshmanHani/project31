const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles =[];
var plinkos = [];
var divisions,divisions2,divisions3,divisions4,divisions5
var divisionHeight =300


function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  divisions = new Divisions(300,570,10,243)
  divisions2 = new Divisions(450,570,10,243)
  divisions3 = new Divisions(600,570,10,243)
  divisions4 = new Divisions(150,570,10,243)
  divisions5 = new Divisions(30,570,10,243)

  for (var j = 0; j<=width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }
    for (var j = 0; j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,175));
  }
    for (var j = 0; j<=width;j = j+50){
    plinkos.push(new Plinko(j,275));
    }
      for (var j = 0; j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,375));
  }
  
}

function draw() {
  background(0); 
  for (var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display();
  }
    for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
ground.display();
divisions.display();
divisions2.display();
divisions3.display();
divisions4.display();
divisions5.display();
}