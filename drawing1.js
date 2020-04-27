function drawing1(){
  noStroke();
  if(dw)
    rect(positionX, positionY, brushSize, brushSize);

  positionX += speedX;
  if(positionX > width) {
    positionX -= speedX;
  }
  if(positionX < 0){
    positionX -= speedX;
  }
  positionY += speedY;
  if(positionY > windowHeight - 120){
    positionY -= speedY;
  }
  if(positionY < 0){
    positionY -= speedY;
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    speedX = -3;
  }
  if(keyCode === RIGHT_ARROW){
    speedX = 3;
  }
  if(keyCode === UP_ARROW){
    speedY = -3;
  }
  if(keyCode === DOWN_ARROW){
    speedY = 3;
  }
  if(keyCode === 32){
    background(sliderBackground.value());
    firstTime = true;
  }
  if(keyCode === 90)
    dw = !dw;
}

function keyReleased(){
  if(keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW){
    speedX = 0;
  }
  if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){
    speedY = 0;
  }

}
