let punchImage; // Variable to store Punch's image
let backgroundImage; // Stores the jungle background
let greenBranchImage; // Stores the green branch image
let brownBranchImage; // Stores the brown branch image
let mossBranchImage; // Stores the moss branch image
// Loads the image before the game starts
function preload() {
  punchImage = loadImage("assets/punch.png");
  backgroundImage = loadImage("assets/background.png");
  greenBranchImage = loadImage("assets/branch-green.png");
  brownBranchImage = loadImage("assets/branch-brown.png");
  mossBranchImage = loadImage("assets/branch-moss.png");
// Runs once when the game starts
function setup() {
  createCanvas(400, 600);
}
// Runs continuously to draw the game
function draw() {
  image(backgroundImage, 0, 0, 400, 600); // Draws the jungle background
  image(greenBranchImage, 120, 450, 160, 60); // Draws the green platform
  image(brownBranchImage, 50, 250, 160, 60); // Draws the brown platform
  image(mossBranchImage, 220, 150, 160, 60); // Draws the moss platform
  //// Displays Punch's image on the screen
  image(punchImage, 170, 300, 60, 70);
}
