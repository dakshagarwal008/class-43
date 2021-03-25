var mole,moleImg;
var bug,bugImg,bugGroup;
var bug1,bug2,bug3,bug4,bug5,bug6,bug7;
var score = 0;
var limit = 0;

function preload(){
  
    moleImg = loadImage("mole2.png");
  
    bugImg = loadImage("bug.png");  
    
  
}

function setup(){
  createCanvas(400,500);
  
  mole = createSprite(200,192,400,500);
  mole.addImage("mole1",moleImg);
  mole.scale = 1;
  
  bugGroup = new Group();
}

function draw(){
  background(255);
  
  if(mouseIsPressed && limit === 0){
    
      bug = createSprite(210,204,400,500);
      bug.addImage("bug1",bugImg);
      bug.scale = 0.1;
    
      limit = 1;
    
      bugGroup.add(bug);
        
  }
  
   if(mousePressedOver(bug) && limit === 1){
     bugGroup.destroyEach();
    
      bug1 = createSprite(183,120,400,500);
      bug1.addImage("bug1",bugImg);
      bug1.scale = 0.1;
      score += 1;
      limit = 2;
    
      bugGroup.add(bug1);
      
    
  }
  
   if(mousePressedOver(bug1) && limit === 2){
     bugGroup.destroyEach();
    
      bug2 = createSprite(69,80,400,500);
      bug2.addImage("bug1",bugImg);
      bug2.scale = 0.1;
      score += 1;
      limit = 3;
    
      bugGroup.add(bug2);
     
    
  }
   if(mousePressedOver(bug2) && limit === 3){
     bugGroup.destroyEach();
    
      bug3 = createSprite(342,254,400,500);
      bug3.addImage("bug1",bugImg);
      bug3.scale = 0.1;
      score += 1;
      limit = 4;
    
      bugGroup.add(bug3);
     
  }
  
    
   if(mousePressedOver(bug3) && limit === 4){
     bugGroup.destroyEach();
    
      bug4 = createSprite(56,178,400,500);
      bug4.addImage("bug1",bugImg);
      bug4.scale = 0.1;
      score += 1;
      limit = 5;
    
      bugGroup.add(bug4);
      
    
  }
  
   if(mousePressedOver(bug4) && limit === 5){
       bugGroup.destroyEach();
    
      bug5 = createSprite(324,102,400,500);
      bug5.addImage("bug1",bugImg);
      bug5.scale = 0.1;
      score += 1;
      limit = 6;
    
      bugGroup.add(bug5);
     
  }
  
   if(mousePressedOver(bug5) && limit === 6){
     bugGroup.destroyEach();
    
      bug6 = createSprite(126,281,400,500);
      bug6.addImage("bug1",bugImg);
      bug6.scale = 0.1;
      score += 1;
      limit = 7;
    
      bugGroup.add(bug6);
      
      }
  
   if(mousePressedOver(bug6) && limit === 7){
       bugGroup.destroyEach();
    
      bug7 = createSprite(362,164,400,500);
      bug7.addImage("bug1",bugImg);
      bug7.scale = 0.1;
      score += 1;
      limit = 0;
    
      bugGroup.add(bug7);
     
  }
  
  if(mousePressedOver(bug7) && limit === 0){
    
    bugGroup.destroyEach();
    
  }
  
  console.log(limit);
  textSize(28);
  fill("red")
  text("score : "+ score,20,20)
  
  drawSprites();
  
   //text(mouseX+","+mouseY,mouseX,mouseY);

  
}

