var score = 0;
var ball, wood;
var ballImg, woodImg;
var youwon, youwonImg;
var edges;
//var rgb;
//var rgbImg;

function preload()
{
    ballImg = loadImage("ball.png");
    woodImg = loadImage("wood.png");
    youwonImg = loadImage("youwon.jpg")
    //rgbImg = loadImage("rgb.png");
}

function setup() 
{
    createCanvas(500, 500);
 
    //rgb = createSprite(250,250);
    //rgb.addImage(rgbImg);
    //rgb.scale = 0.010;

    youwon = createSprite(250,200);
    youwon.addImage(youwonImg);
    youwon.scale = 4

    ball = createSprite(200,100);
    ball.addImage(ballImg);
    ball.scale = 0.010;

    wood = createSprite(270,475);
    wood.addImage(woodImg);
    wood.scale = 0.18;

    ball.velocityY=20;
    ball.velocityX=10;

}
function draw() 
{
    youwon.visible = false;
    background(0,0,0);

    if (ball.isTouching(wood))
    {
        score = score + 5;
    }

    
    if (score >=50)
    {
        wood.scale = 0.15;
    }
    if (score >=100)
    {
        wood.scale = 0.13;
    }
    if (score >=150)
    {
        wood.scale = 0.10;
    }
    if (score >=200)
    {
      youwon.visible = true;
      ball.velocityY=0;
      ball.velocityX=0;
      wood.velocityX=0;
      wood.velocityX=0;
      //ball = createSprite(200,100);
      text.visible = false;
      ball.visible = false;
      wood.visible = false;
      fill("white")
      textSize(50);
      text("YOU WON", 110,250)
    }
   
    

    textSize(22);
    fill("white");
    text("Score : " +score,350,50);

    edges = createEdgeSprites();
    //ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[0]);

    wood.bounceOff(edges[0]);
    wood.bounceOff(edges[1]);

    ball.bounceOff(wood);

    if(keyDown("RIGHT_ARROW")){
        wood.velocityX=9;
        //wood.velocityX=0;
      }
    if(keyDown("LEFT_ARROW")){
        wood.velocityX=-9;
        //wood.velocityX=0;
    }

    if (ball.y> 500)
    {
     textSize(50);
     fill("red");
     text("GAME OVER", 100,250);
     ball.velocityY=0;
     ball.velocityX=0;
     wood.velocityX=0;
     wood.visible = false;
     ball.visible = false;
    }

    drawSprites();
    textSize(15)
    fill ("white")
    text(mouseX + "," + mouseY, mouseX,mouseY)
}