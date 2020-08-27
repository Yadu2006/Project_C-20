var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600, 400);
  
  //Car
  car = createSprite(50, 200, 100, 50);
  
  //Wall
  wall = createSprite(1500, 200, 60, 400/2);
  wall.shapeColor = color(80, 80, 80);
  
  //Speed and Weight
  speed = random(55, 90);
  weight = random(400, 1500);

}

function draw() {
 
  //background
  background(255,255,255);  
  
  //Setting the velocity x of the car
  car.velocityX = speed;
  
  //The condition if the collision happens
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {

    //Setting the velocity x of the car to zero 
    car.velocityX = 0;
    
    //deformation
    var deformation = 0.5 * weight * speed * speed/22500
    
    //The condition if the deformation is greater than 180
    if(deformation > 180)
    {
        //Setting the Colour of car
        car.shapeColor = color(255, 0, 0);

    }
    //The condition if the deformation is lesser than 180 and greater than 100
    if(deformation < 180 && deformation > 100)
    {
        //Setting the Colour of car
        car.shapeColor = color(230, 230, 0);

    }
    //The condition if the deformation is lesser than 180
    if(deformation < 180)
    {
        //Setting the Colour of car
        car.shapeColor = color(0, 255, 0);

    }


  }
  
  drawSprites();

  

}