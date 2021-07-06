var seaImg;
var shipImg1;
var shipnew;

function preload(){
seaImg =loadImage ("sea.png");
shipImg1 = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
createCanvas(500,500);
shipnew = createSprite(200,200,100,80);
shipnew.addAnimation("running",shipImg1);
shipnew.scale= 0.4;
}

function draw() {
  background(seaImg);
drawSprites();
}