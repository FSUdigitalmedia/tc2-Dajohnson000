function setup() {
 // Creates a canvas 66 px wide
 // and 400 high
  createCanvas(600, 400);
}

function draw() {
  // Sky blue background
  background(135, 206, 235);
  //sun in the top right corner
  fill("yellow"); //It is in fact yellow
  stroke("orange"); // the outline is orange (shocking)
  strokeWeight(20) //large outline
  circle (550, 50, 100);
  stroke(0); // Black outline
  strokeWeight(1); // the thiccness of the outline
  fill("green");
  rect(0, 200, 600, 200)
  //emoticons
  textSize(75)
  text("❤️", 100, 250) //flower but really it is a heart
  text("🐞", mouseX, mouseY) // ladybug
}
