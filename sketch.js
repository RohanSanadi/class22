var car ,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  car.velocityX=speed;
  wall=createSprite(1500, 200,thickness, height/2);
}




function draw() {
  background(0);
if(Collider(car,wall)){
  car.velocityX=0
  var deformation =0.5*weight*speed*speed/22509
 if(deformation>10){
   car.shapeColor="red"
    } 

if(deformation<10){
  car.shapeColor="green"
  
}
}
  drawSprites();
}
function Collider(lbullet,lwall){
bulletRigthEdge =lbullet .x+ lbullet.width
wallleftedge= lwall.x
if(bulletRigthEdge>=wallleftedge){
  return true
  
}
return false 
}