var honeybee, honeybeeImage;
var fly, flyImage;
var bg, bgImage;
var score = 0;
var missedbees = 0;
var missedflies = 0;
function preload(){
honeybeeImage = loadAnimation("download.png","download (1).png");
flyImage = loadAnimation("download (2).png", "download (3).png");
//bgImage = loadImage("background.gif");

}

function setup() {
  createCanvas(400,400);
  honeybee = createSprite(410, random(10,350));
  honeybee.addAnimation("hb", honeybeeImage);
  honeybee.velocityX = random(-5,-10)
  honeybee.scale = 0.5;

  fly = createSprite(410, random(10,350));
  fly.addAnimation("fl", flyImage);
  fly.velocityX = random(-5,-10)
  fly.scale = 0.5;
}

function draw() {
  background("lightblue");
  textSize(25);
 fill("black");
 text("Score:"+score,275,30);
 textSize(16);
 text("Missed Bees:"+missedbees,25,30);
 text("Missed Flies:"+missedflies,25,50);
 if(honeybee.y>400 && honeybee.x!==0){
   score+=1;
 }
 if(fly.y>400 && fly.x!==0){
   score+=2;
 }
 if(honeybee.x<0 && honeybee.y!==400){
  missedbees+=1; 
 }
 if(fly.x<0 && fly.y!==400){
  missedflies+=1; 
 }
  if(mousePressedOver(fly)){
    fly.pause();
    fly.velocityX = 0;
    fly.velocityY = 10;
  }
  if(mousePressedOver(honeybee)){
    honeybee.pause();
    honeybee.velocityX = 0;
    honeybee.velocityY = 10;
  }
  if(fly.x<0 || fly.y>400){
    fly.play();
    fly.y = random(50,200);
    fly.x = 410;
    fly.velocityX = random(-8,-12);
    fly.velocityY = 0;
  }
  if(honeybee.x<0 || honeybee.y>400){
    honeybee.play();
    honeybee.y = random(10,300);
    honeybee.x = 410;
    honeybee.velocityX = random(-5,-10);
    honeybee.velocityY = 0;
  }
 
drawSprites();
}