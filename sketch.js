//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  foodstock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(dogHappy);
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
  drawSprites();
  //add styles here

}



