
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = 
    loadImage("rock-removebg-preview (1).png");
 
}



function setup() {
  //creating monkey
monkey=createSprite(80,315, 20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1
 ground = createSprite(400,350,900,10);
ground.velocityx=-4;
ground.x=ground.width/2;
console.log(ground.x);

  obstaclesGroup = createGroup();
  
}


function draw() {
background(rgb(257,257,257));
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  

  
  if(keyDown(                                                 "space")){
    monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);                                       
                                              
  console.log(monkey.y)                                         
                               
  
        spawnObstacles();

  drawSprites();
}


function spawnObstacles(){
 if (frameCount % 120 === 0){
   var obstacle = createSprite(600,280,10,10);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.collide(ground); 

 obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
}
}