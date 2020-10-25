

        var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
        var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage , balloons;

var red_balloon, blue_balloon, green_balloon, pink_balloon;
var score=0;
var redB, blueB, pinkB, greenB, arrowGroup;

        function preload(){

          backgroundImage = loadImage("background0.png");

          arrowImage = loadImage("arrow0.png");
          bowImage = loadImage("bow0.png");
          red_balloonImage = loadImage("red_balloon0.png");
          green_balloonImage = loadImage("green_balloon0.png");
          pink_balloonImage = loadImage("pink_balloon0.png");
          blue_balloonImage = loadImage("blue_balloon0.png");
          red_balloon = loadImage("red_balloon0.png");
          green_balloon = loadImage("green_balloon0.png");
          pink_balloon = loadImage("pink_balloon0.png");
          blue_balloon = loadImage("blue_balloon0.png");

        }

            function setup() {
              createCanvas(600, 600);

              //creating background
              background = createSprite(0,0,600,600);
              background.addImage(backgroundImage);
              background.scale = 3;

              // creating bow to shoot arrow
              bow = createSprite(480,220,20,50);
              bow.addImage(bowImage); 
              bow.scale = 1;



              // RAND 
              var rand=Math.round(random(1,600))
              console.log(rand)
              
                      //groups 
          redB= new Group();
          blueB=  new Group();
          pinkB= new Group();
          greenB= new Group();
          arrowGroup= new Group();

            }

        function draw() {
          // moving ground
            background.velocityX = -3 

            if (background.x < 0){
              background.x = background.width/2;
            }

          //moving bow
          bow.y = World.mouseY
          
  

           // release arrow when space key is pressed
          if (keyDown("space")) {
             createArrow();
            arrow.y=bow.y;
          }
          
          
        // generating balloons
   var abc = Math.round(random(1,4));

      switch(abc){
          
          case 1: redBalloons();
          break;
          
          case 2:  blueBalloons();
          break;
          
          case 3: greenBalloons();
          break;
          
          case 4: pinkBalloons();
          break;
      }
          
          if(arrowGroup.isTouching(redB)){
            redB.destroyEach();
            arrowGroup.destroyEach();
            score=score+1;
          }
          
          if(arrowGroup.isTouching(blueB)){
            blueB.destroyEach();
            arrowGroup.destroyEach();
            score=score+3;
          }
          
          if(arrowGroup.isTouching(pinkB)){
            pinkB.destroyEach();
            arrowGroup.destroyEach();
            score=score+5;
          }
          
          if(arrowGroup.isTouching(greenB)){
            greenB.destroyEach();
            arrowGroup.destroyEach();
            score=score+2;
          }
 
            drawSprites();
          // scoring system 
          
          
          text("score:"+score,400,100)

          }


          // Creating  arrows for bow
          function createArrow() {
            arrow= createSprite(360, 100, 10, 10);
            arrow.velocityX = -6;
            arrow.addImage(arrowImage);
            arrow.scale = 0.3;
            arrowGroup.add(arrow);
          }

    // creating balloons randomly 

        function balloons(){
    if(frameCount%60===0){
         var balloons = createSprite(0,Math.round(random(10,470)),10,10);
        balloons.velocityX=6;
    }
    }


      //spawning red balloons

          function redBalloons(){
            if(frameCount%60===0){
        var red = createSprite(0,Math.round(random(20,370)),10,10);
            red.addImage(red_balloonImage);
            red.velocityX=6;
            red.lifetime=100;
            red.scale=0.1;
              redB.add(red);
          }
      }

      //spawning blue balloons
          function blueBalloons(){
            if(frameCount%80===0){
        var blue = createSprite(0,Math.round(random(30,500)),10,10);
            blue.addImage(blue_balloonImage);
            blue.velocityX=6;
            blue.lifetime=100;
            blue.scale=0.1;
              blueB.add(blue);
          }
          }

      //spawning blue balloons
          function greenBalloons(){
            if(frameCount%40===0){
        var green = createSprite(0,Math.round(random(40,450)),10,10);
            green.addImage(green_balloonImage);
            green.velocityX=6;
            green.lifetime=100;
            green.scale=0.1;
              greenB.add(green);
            }
          }

      //spawning pink balloons

          function pinkBalloons(){
            if(frameCount%70===0){
        var pink = createSprite(0,Math.round(random(200,500)),10,10);
            pink.addImage(pink_balloonImage);
            pink.velocityX=6;
            pink.lifetime=100;
            pink.scale=1;
              pinkB.add(pink);
          }
      }