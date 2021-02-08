var car, wall ;
var speed, weight ; 


function setup() {
  createCanvas(1500,1500);
  speed=random(55,90);
  weight=random (400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";
  wall=createSprite(1000,200,60,100);
  wall.shapeColor="white";
   
}

function draw() {
  background(0);  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5* speed*speed*weight / 22500;  
    if(deformation<180){
      car.shapeColor=("red");
    }
  }
  drawSprites();
}