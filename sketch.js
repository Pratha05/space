var astronaut, bg, sleep, brush, gym;
var eat, drink, move, bath;
var Edges,

function preLoad(){
  bg = loadImage("images/isSecureContext.png");
  sleep = addAnimation("images/sleep.png");
  brush = addAnimation("images/brush.png");
  gym = addAnimation("images/gym11.png","images/gym12.png");
  eat = addAnimation("images/eat1.png", "images/eat2.png");
  drink = addAnimation("images/drink1.png","images/drink2");
  move = addAnimation("images/move.png", "images/move2.png");
  bath = addAnimation("images/bath1.png","images/bath2.png");

}


function setup() {
  createCanvas(400, 400);
  astronaut.createSprite(200,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.2;

}

function draw() {
  background.addImage(bg);
  createEdgeSprites();
  astronaut.bounceOff(Edges);
 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("b")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }





  drawSprites();
}