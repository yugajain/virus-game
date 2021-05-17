var gameState, canvas, lab
var ratioBase
var next, next1, next2
var nextImg
var reportingBgImg,reportingImg ,reporter, reporterImg
var gameState2Img
var heart1, heart2, heart3
var score

function preload() {
  nextImg = loadImage("Untitled.png")
  reportingBgImg = loadImage("news.jpg")
  reporterImg = loadImage("images-removebg-preview.png")
  gameState2Img = loadImage("gamestate 2.jpeg")
}

function setup() {
  canvas = createCanvas(800,400);
  gameState = 0
  lab = new Lab()
  score = 0
  
}

function draw() {
  background(0);
  drawSprites();

  if(gameState === 0){
    lab.display()
    next = createSprite(700, 350, 100, 50)
    next.addImage(nextImg)
    if(mousePressedOver(next)){
      gameState = 1
    }
  }
  else if(gameState === 1){
    ratioBase = createSprite(400, 200, 800, 400)
 
    fill("black")
    stroke("red")
    textSize(24)
    text("scientists make blunder, a new virus has been created", 200, 50)
    text("day 1:100 people ",200,100)
    text("day 2 : 200 people", 200, 150)
    text("day 3: 399 people", 200, 200)
    text("day 4: 437 people", 200, 250)
    text("day 5: 548 people",200,300)
    text("The Virus is Named LAPIS Virus", 200, 350)
    text("the scientists have been arrested and are being interrogated.",150, 390)
    text("REPORTER", 45, 50)
    reportingImg = createSprite(400, 250, 0, 0)
    reportingImg.addImage("bg",reportingBgImg)
    reporter = createSprite(100, 130, 0, 0)
    reporter.addImage(reporterImg)
    reporter.scale = 0.7
   
    next1 = createSprite(700, 100, 100, 50)
    next1.addImage(nextImg)
    if(mousePressedOver(next1)){
      gameState = 2
    }
  }
  else if(gameState === 2){
    text("Game Rules and virus prevention tips", 200, 50)
    next1.destroy();
    reporter.destroy();
    reportingImg.addImage("bg",gameState2Img)
    reportingImg.scale = 1.7
    
    text("1 :don't come in contact with the virus particles", 200, 100)
    text("2: don't shake hands with other people",200, 150)
    text("3. collect all the vaccines and sanitizers",200, 200)
      text("4. collect 1000 vaccines to win the game",200,250 )
      text("5: use sanitizers and masks for bonus points",200,300)
      
      next2 = createSprite(700, 350, 100, 50)
    next2.addImage(nextImg)
    if(mousePressedOver(next2)){
      gameState = 3

    }
  }
  else if(gameState === 3){
   
    next2.destroy();
    heart1 = createSprite(15,40,20, 20)
    heart2 = createSprite(40,40,20,20)
    heart3 = createSprite(65,40,20,20)
    ground =createSprite(400, 390, 800, 10);
   
   
    textSize(19)
    text("VACCINES REQUIRED: 1000",500,40 )
    text("VACCINES COLLECTED: "+ score, 500, 70)

   
    }








    

}
