var space, spacebg;
 var iss,issImg;
var spacecraft,spacecraftImg ;

function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
}

function preload() {

  spacebg=loadImage("spacebg.jpg")
   issImg=loadImage("iss.png");
 spacecraftImg=loadAnimation("spacecraft1,spacecraft2,spacecraft3,spacecraft4")
 
}

function draw() {
  background("white"); 
  
  space=createSprite(200,200,20,20);
  space.addImage("spacebg.jpg",spacebg)
  
   iss=createSprite(190,210,20,20);
   iss.addImage("iss.png",issImg);
   iss.scale=0.80;

   spacecraft=createSprite(150,240,20,20)
  spacecraft.addAnimation("spacecraft1,spacecraft2,spacecraft3,spacecraft4",spacecraftImg)
  spacecraft.scale=0.2;
  drawSprites();
}