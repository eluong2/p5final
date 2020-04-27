function drawing2(){

}



function mouseClicked() {
  if(!mode && mouseY < windowHeight - 120 - (brushSize/2)){
    paint();
  }


}

function mouseDragged() {
  if(!mode && mouseY < windowHeight - 120 - (brushSize/2)){
    stroke(sliderR.value(),sliderG.value(),sliderB.value())
    if(checkbox.checked()){
      stroke(sliderBackground.value());
    }
    strokeWeight(brushSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}


function paint(){
  noStroke()
  if(checkbox.checked()){
    fill(sliderBackground.value());
  }
  ellipse(mouseX,mouseY,brushSize, brushSize)
}
