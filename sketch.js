
var car,wall;
var speed,weight,thickness;
var bullte


function setup() {
createCanvas(1200,400);

speed=random(55,90);
weight=random(400,1100);

car = createSprite(50,200,50,50);
car.velocityX = speed;

thickness = random(22,83);
speed = random(223,321);
weight = random(30,52);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = (80,80,80);



}

function draw() {
background("black");  
 
if(wall.x-car.x < (car.width+wall.width)/2){

car.velocityX = 0;

var deformation =0.5 * weight * speed* speed/22509;
  
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}

if(deformation<108 && deformation<180)
{
  car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
  

}


if (hasCollided(bullte,wall))
{
  bullte.velocityX = 0;
  var damsge = 0.5 * weight * speed* speed/(thickness *thickness *thickness); 

  if(damsge>10)
  {

    wall.shapeColor=color(225,0,0);

  }

  if(damsge<10)
  {

    wall.shapeColor=color(0,225,0);

  }

}

drawSprites();

}

function hasCollided(Ibullte,Iwall)
{
  bullteRightEdge = Ibullte.x +Ibullte.weight;
  wallLeftEdge = Iwall.x;
  if(bullteRightEdge>=wallLeftEdge)
  {
    return true
  }

    return false;
}

