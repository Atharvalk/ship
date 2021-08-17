var ship,shipimage
var sea,seaimage
function preload(){
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(100,100)
  sea.addImage("label",seaimage)
  sea.velocityX=-3
  ship=createSprite(200,200)
  ship.addAnimation("images",shipimage)
 ship.scale=0.3
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2
  }
 drawSprites()
}