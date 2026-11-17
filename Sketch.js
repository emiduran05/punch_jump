class Player{

  constructor(image, posX, posY, width, height){
      this.image = image;
      this.posX = posX;
      this.posY = posY;
      this.width = width;
      this.height = height;
  }

  display(){
    image(this.image, this.posX, this.posY, this.width, this.height);

  }

  moveLeft(){
    this.posX = this.posX -10;
  }

  moveRight(){
    this.posX += 10;
  }

  

}





let punchImage; // Variable to store Punch's image
let backgroundImage; // Stores the jungle background
let greenBranchImage; // Stores the green branch image
let brownBranchImage; // Stores the brown branch image
let mossBranchImage; // Stores the moss branch image
let punch;



// Loads the image before the game starts
function preload() {
  punchImage = loadImage("assets/punch.png");
  backgroundImage = loadImage("assets/background.png");
  greenBranchImage = loadImage("assets/branch-green.png");
  brownBranchImage = loadImage("assets/branch-brown.png");
  mossBranchImage = loadImage("assets/branch-moss.png");
  punch = new Player(punchImage, 200, 300, 60, 70);
 
}

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


  if(keyIsDown(LEFT_ARROW) === true){
    punch.moveLeft();
  }

  if(keyIsDown(RIGHT_ARROW) === true){
    punch.moveRight();
  }

  punch.display();




}
