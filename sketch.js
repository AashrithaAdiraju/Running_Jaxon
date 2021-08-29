
var pathImg
var path

var runImg
var runner

var boundryL
var boundryR

function preload(){
  pathImg = loadImage("path.png")
  runImg = loadAnimation("Runner-2.png", "Runner-1.png")
}

function setup(){
  
  createCanvas(400,300);
  path = createSprite(200,0)
  path.addImage(pathImg)
  path.velocityY = 10
  path.scale = 1.2
  
  runner = createSprite(210,150)
  runner.addAnimation("runImg",runImg)
  runner.scale = .06
  
  boundryR = createSprite(140, 150, 3, 300)
  boundryL = createSprite(265, 150, 3, 300)
  
}

function draw() {
  background("black");
  if (path.y > 400){
    path.y = height/2;
  }
  
  runner.x = World.mouseX;
  
  runner.bounceOff(boundryL);
  runner.bounceOff(boundryR);

  drawSprites();
}
