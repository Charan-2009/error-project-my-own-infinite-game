var PLAY = 1;
var END = 0;
var gameState = PLAY
var ball, ballImage;
var obstacle, obstacleImage, obstacleGroup;
var backgroundImage, gameoverImage;
var gameover

function preload() {
  ballImage = loadImage("Infinity_game_her0_-removebg-preview.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("background.png");
  gameoverImage = loadImage("gameover.png")

}


function setup() {
  createCanvas(599, 489);

  ball = createSprite(320, 430, 50, 50);
  ball.addImage(ballImage);
  ball.scale = 0.5;

  obstacleGroup = new Group();

}

function draw() {
  background(backgroundImage);



  if (gameState === PLAY) {
    ball.x = World.mouseX;
    wall();


    if (ball.isTouching(obstacleGroup)) {
      obstacleGroup.velocity = 8
      ball.velocity = 0
      gameState = END;
      //text("Good Try",300,200)
      gameover = createSprite(300, 200, 50, 50);
      gameover.addImage(gameoverImage)
    }

  } else
  if (gameState == END) {

    if (ball.isTouching(obstacleGroup)) {
      obstacleGroup.velocity = 8
      ball.velocity = 0
      gameState = END;

    }

  }

  drawSprites();
}




function wall() {

  if (World.frameCount % 5 === 0) {
    obstacle = createSprite(400, 50, 50, 70);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5
    obstacle.velocityY = 8
    obstacleGroup.add(obstacle)

    position = Math.round(random(1, 12))
    if (position == 1) {
      obstacle.x = 50
    } else
    if (position == 2) {
      obstacle.x = 100
    } else
    if (position == 3) {
      obstacle.x = 150
    } else
    if (position == 4) {
      obstacle.x = 200
    } else
    if (position == 5) {
      obstacle.x = 250
    } else
    if (position == 6) {
      obstacle.x = 300
    } else
    if (position == 7) {
      obstacle.x = 350
    } else
    if (position == 8) {
      obstacle.x = 400
    } else
    if (position == 9) {
      obstacle.x = 450
    } else
    if (position == 10) {
      obstacle.x = 500
    } else
    if (position == 11) {
      obstacle.x = 5
    } else
    if (position == 12) {
      obstacle.x = 550
    }
    //console.log(obstacle.x)
  }

}