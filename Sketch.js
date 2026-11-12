let punchImage;

function preload() {
  punchImage = loadImage("assets/punch.png");
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("beige");

  image(punchImage, 170, 300, 60, 70);
}
