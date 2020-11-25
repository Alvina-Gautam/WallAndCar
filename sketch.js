var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1500,400);
  
  car=createSprite(100, 200, 30, 30);
  car.shapeColor=(255,255,255);
  car.debug=true;

  wall=createSprite(1000, 200, 40, height/2);
  wall.shapeColor=(255,255,255);
  wall.debug=true;

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0,0,0); 
  
  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180){
        car.shapeColor=color(255,0,0);
        wall.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);
        wall.shapeColor=color(230,230,0);
      }
      if(deformation<100){
        car.shapeColor=color(0,255,0);
        wall.shapeColor=color(0,255,0);
      }
  }
  
  drawSprites();
}