var fixedRect, movingRect;
var obg1 ,obg2,obg3,obg4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
obg1 =  createSprite (100,100,50,50);
obg2 = createSprite(200,100,50,50);
obg3 = createSprite(300,100,50,50);
obg4 =createSprite(400,100,50,50);
obg1.shapeColor = "green"
obg2.shapeColor = "green"
obg3.shapeColor = "green"
obg4.shapeColor = "green"
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
