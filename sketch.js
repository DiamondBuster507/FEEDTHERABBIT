var garden,rabbit, apples;
var gardenImg,rabbitImg, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}
if(apple.collide(bunny)){
  apple.visible = false;
 
 }

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(keyDown("A")){
    rabbit.velocityX = -5;
  }
  if(keyDown("D")){
    rabbit.velocityX = 5;
  }
  var select_sprites = Math.round(random(1,2));


  if (frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
  }



  drawSprites();
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale = 0.05;
apple.velocityY = 4;
apple.lifetime = 150;


}

