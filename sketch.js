var runner,runner_running;
var path, leftB, rightB, pathImage;
var coin, coinImage; 
var energyDrink, edImage;
var bomb, bombImage;
var edges;

function preload() {
    runner_running = loadAnimation("Runner-1.png","Runner-2.png");
    pathImage = loadImage("path.png");
    coinImage = loadImage("coin.png");
    edImage = loadImage("energyDrink.png");
    bombImage = loadImage("bomb.png");
    }

function setup() {
    createCanvas(400, 400);

   
    path = createSprite(200,200);
    path.addImage("path",pathImage);
    path.velocityY = 4;
    path.scale = 1.2;

    runner = createSprite(200,380,20,20);
    runner.addAnimation("runner", runner_running);
    runner.scale = 0.08;

    leftB = createSprite(0,0,20,800);
    leftB.visible=false; 

    rightB = createSprite(400,0,20,800);
    rightB.visible=false; 
    }


function draw() {
    background(0);
    path.velocityY = 4;
    runner.x= World.mouseX;
    
    
    edges=createEdgeSprites();
    runner.collide(edges[3]);
    runner.collide(leftB);
    runner.collide(rightB);

    if (path.y > 400) {
      path.y = path.height/2;
      }
    drawSprites();
    }
