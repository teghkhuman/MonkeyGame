
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var ground
var score
var survivalTime=0;

function preload(){
  
  monkey_running =                  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  
 
  
}


function draw() {
  background(210);
  
  if (keyDown("space") && monkey.y>310){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(monkey.velocityY);
    
  food();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Surivial Time: " + survivalTime, 450,50);
  
  drawSprites();
}

function food(){
 if (frameCount%80===0){
    banana = createSprite(600,(Math.round(random(120,200))),20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 600;
    bananaGroup.add(banana);
  }
}
  

function obstacles(){
  if (frameCount%300===0){
    obstacle = createSprite(600,335.5,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstacle.lifetime = 600; 
  }
}




