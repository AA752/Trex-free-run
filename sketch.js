var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ground1, invisibleGround1, groundImage1;
var ground2, invisibleGround2, groundImage2;
var ground3, invisibleGround3, groundImage3;
var ground4, invisibleGround4, groundImage4;
var cloud, cloudsGroup, cloudImage;
var obstacle, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var newImage;

function preload(){
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");

  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  groundImage1 = loadImage("ground2.png");
  groundImage2 = loadImage("ground2.png");
  groundImage3 = loadImage("ground2.png");
  groundImage4 = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -16;
  
  ground1 = createSprite(200,165,200,10);
  ground1.addImage("ground",groundImage);
  ground1.x = ground.width /2;
  ground1.velocityX = -8;
  
  ground2 = createSprite(200,150,200,10);
  ground2.addImage("ground",groundImage);
  ground2.x = ground.width /2;
  ground2.velocityX = -4;
  
  ground3 = createSprite(200,135,200,10);
  ground3.addImage("ground",groundImage);
  ground3.x = ground.width /2;
  ground3.velocityX = -2;
  
  ground4 = createSprite(200,120,200,10);
  ground4.addImage("ground",groundImage);
  ground4.x = ground.width /2;
  ground4.velocityX = -1;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  invisibleGround1 = createSprite(200,175,200,5);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(200,160,200,5);
  invisibleGround2.visible = false;
  
  invisibleGround3 = createSprite(200,145,200,5);
  invisibleGround3.visible = false;
  
  invisibleGround4 = createSprite(200,130,200,5);
  invisibleGround4.visible = false;  
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (ground1.x < 0){
    ground1.x = ground1.width/2;
  }
  
  if (ground2.x < 0){
    ground2.x = ground2.width/2;
  }
  
  if (ground3.x < 0){
    ground3.x = ground3.width/2;
  }
  
  if (ground4.x < 0){
    ground4.x = ground4.width/2;
  }
  
  trex.collide(invisibleGround);

  spawn();
  
  //spawn the clouds
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,110))
    cloud.scale = 0.4;
    cloud.velocityX = -0.5;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 1260
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawn(){
  
if(frameCount % 80 === 0) {
  
  obstacle = createSprite(600, 160, 10, 10);
  obstacle.velocityX = -16;
  obstacle.lifetime = 120;
  obstacle.scale = 0.5;
  
var Rand = Math.round(random(1,6))
switch(Rand) {
    
      case 1:obstacle.addImage(obstacle1);
    break;
      case 2:obstacle.addImage(obstacle2);
    break;
      case 3:obstacle.addImage(obstacle3);
    break;
      case 4:obstacle.addImage(obstacle4);
    break;
      case 5:obstacle.addImage(obstacle5);
    break;
      case 6:obstacle.addImage(obstacle6);
    break;
    default: break    
}

}
  
}