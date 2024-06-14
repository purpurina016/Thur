function setup() {
  createCanvas(600, 600);
  background("preto");
}

function draw() {
  
  stroke("blue");
  fill("red");

  // cs.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
