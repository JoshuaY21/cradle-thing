const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,ball2,ball3,ball4,ball5

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  
  world = engine.world;
 
  
  var options = {

    restitution: 1,
    frictionAir: 0.00

}




ball = Bodies.circle(398,350,25,options);
World.add(world, ball);

ball2 = Bodies.circle(449,350,25,options);
World.add(world, ball2);

ball3 = Bodies.circle(500,350,25,options);
World.add(world, ball3);

ball4 = Bodies.circle(551,350,25,options);
World.add(world, ball4);

ball5 = Bodies.circle(602,350,25,options);
World.add(world, ball5);


con_options = {
 
  pointA : {x:398, y:50},
  bodyB: ball,
  pointB: {x:0,y:0},
  length : 300,
  stiffness : 0
}

con_options2 = {
 
  pointA : {x:449, y:50},
  bodyB: ball2,
  pointB: {x:0,y:0},
  length : 300,
  stiffness : 0
}

con_options3 = {
 
  pointA : {x:500, y:50},
  bodyB: ball3,
  pointB: {x:0,y:0},
  length : 300,
  stiffness : 0
}

con_options4 = {
 
  pointA : {x:551, y:50},
  bodyB: ball4,
  pointB: {x:0,y:0},
  length : 300,
  stiffness : 0
}

con_options5 = {
 
  pointA : {x:602, y:50},
  bodyB: ball5,
  pointB: {x:0,y:0},
  length : 300,
  stiffness : 0
}




connection = Matter.Constraint.create (con_options);
connection2 = Matter.Constraint.create (con_options2);
connection3 = Matter.Constraint.create (con_options3);
connection4 = Matter.Constraint.create (con_options4);
connection5 = Matter.Constraint.create (con_options5);


World.add(world, connection);
World.add(world, connection2);
World.add(world, connection3);
World.add(world, connection4);
World.add(world, connection5);


}

function draw() {
  background(51);

  Engine.update(engine);
  ellipseMode(RADIUS)

push()
fill("blue");
stroke("yellow")
ellipse(ball.position.x,ball.position.y,25)
ellipse(ball2.position.x,ball2.position.y,25)
ellipse(ball3.position.x,ball3.position.y,25)
ellipse(ball4.position.x,ball4.position.y,25)
ellipse(ball5.position.x,ball5.position.y,25)
pop()

push()
strokeWeight(2);
stroke("white");
//x,y of starting point and x,y of ending point
line(connection.pointA.x, connection.pointA.y,ball.position.x,ball.position.y);
line(connection2.pointA.x, connection2.pointA.y,ball2.position.x,ball2.position.y);
line(connection3.pointA.x, connection3.pointA.y,ball3.position.x,ball3.position.y);
line(connection4.pointA.x, connection4.pointA.y,ball4.position.x,ball4.position.y);
line(connection5.pointA.x, connection5.pointA.y,ball5.position.x,ball5.position.y);


pop();
push()
fill(100)
rectMode(CENTER)
rect(connection3.pointA.x, connection3.pointA.y,500,40);
pop()


textSize(25)
text("left and right arrows to control the left ball",connection3.pointA.x - 230, connection3.pointA.y + 10)


}

function keyPressed(){

  if( keyCode === RIGHT_ARROW){
     Matter.Body.applyForce(ball, {x:0,y:0},{x: 0.1,y: 0});
  }

if( keyCode === LEFT_ARROW){
  Matter.Body.applyForce(ball, {x:0,y:0},{x: -0.1,y: 0});
}

}