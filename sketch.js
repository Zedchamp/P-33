const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowfall = [];

function preload() {
  bk = loadImage("snow3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(700, 400);
  if (frameCount % 150 === 0) {
    for (var i = 0; i < 100; i++) {
      snowfall.push(new Snow(random(0, 700), random(0, 400)));
    }
  }

  //createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine)
  background(bk);
  for (var i = 0; i < 100; i++) {
    snowfall[i].display();
    snowfall[i].updateY();
  }
  drawSprites();
}
