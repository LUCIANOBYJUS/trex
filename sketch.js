var PLAY = 1; var END = 0; var gameState = PLAY
var cloudsGroup,invisibleGround;
var score =0;
var trex, trex_running, edges;
var groundImage;
var obstaclesGroup,cloudsGroup
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  nube=loadImage("cloud.png")
  groundImage = loadImage("ground2.png")
  obstacle1 = loadImage("obstacle1.png"); obstacle2 = loadImage("obstacle2.png"); obstacle3 = loadImage("obstacle3.png"); obstacle4 = loadImage("obstacle4.png"); obstacle5 = loadImage("obstacle5.png"); obstacle6 = loadImage("obstacle6.png");
}
  


function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //crear sprite de Trex
  trex = createSprite(100,height-10,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
   
  trex.x = 50
  ground=createSprite(200,height-30,400,20)
  ground.addImage(groundImage)
  ground.x=ground.width/2
  groundinvisible=createSprite(200,height-10,400,20)
  groundinvisible.visible=false
  //obstaclesGroup=createGroup();
  //cloudsGroup=createGroup();
}


function draw(){

  //establecer color de fondo.
  background("white");
  if(gameState === PLAY){ 
    //mover el suelo
     ground.velocityX = -4; //puntuación
      score = score + Math.round(frameCount/60);
       if (ground.x < 0){ ground.x = ground.width/2; }
        //hacer que el Trex salte al presionar la barra espaciadora 
        if(keyDown("space")&& trex.y >= 100) { trex.velocityY = -13; }
         //agregar gravedad
          trex.velocityY = trex.velocityY + 0.8 //aparecer nubes
           nubes(); //aparecer obstáculos en el suelo
            obstaculos();
            
         // if(obstaclesGroup.isTouching(trex))
         // { gameState = END;} 
        } 
          else if (gameState === END) { 
            ground.velocityX = 0; obstaclesGroup.setVelocityXEach(0); 
            cloudsGroup.setVelocityXEach(0); } 
            //evitar que el Trex caiga
             trex.collide(invisibleGround);

  drawSprites() 
}
function nubes(){
  if(frameCount %60 ===0){
    var nubes=createSprite(width,200,40,10)
      nubes.addImage(nube)
    nubes.y=Math.round(random(10,300))
    nubes.velocityX=-3
     nubes.depth=trex.depth
     //cloudsGroup.add(nubes);

     trex.depht=trex.depth+3
  }

}

function obstaculos(){
  if(frameCount %60 ===0){
    var obstacle=createSprite(width,height-50,10,40)
    obstacles.velocityX=-6
    var rand = Math.round(random(1,6)); 
    switch(rand) { 
      case 1: obstacle.addImage(obstacle1); break; 
      case 2:
      obstacle.addImage(obstacle2); break; 
      case 3: obstacle.addImage(obstacle3); break; 
      case 4: obstacle.addImage(obstacle4); break;
       case 5: obstacle.addImage(obstacle5); break; 
       case 6: obstacle.addImage(obstacle6); break;
        default: break; }
    //obstaclesGroup.add(obstacle);
        

  }
 }