/*class Player */

import { Player } from "./Classes/player.js";
import { Platform } from "./Classes/GreenPlatform.js";
import { BrownPlatform } from "./Classes/BrownPlatform.js";
import { MossPLatform } from "./Classes/MossPlatform.js";

let punchImage; // Variable to store Punch's image
let backgroundImage; // Stores the jungle background
let greenBranchImage; // Stores the green branch image
let brownBranchImage; // Stores the brown branch image
let mossBranchImage; // Stores the moss branch image
let punch;
let greenPlatform;
let brownPlatform;
let mossPlatform;
let startScreenImage;
let gameStarted = false;

// Loads the image before the game starts
function preload() {
  startScreenImage = loadImage("assets/start-screen.png");
  punchImage = loadImage("assets/punch.png");
  backgroundImage = loadImage("assets/background.png");
  greenBranchImage = loadImage("assets/branch-green.png");
  brownBranchImage = loadImage("assets/branch-brown.png");
  mossBranchImage = loadImage("assets/branch-moss.png");
  punch = new Player(punchImage, 200, 0, 60, 70);
  greenPlatform = new Platform(greenBranchImage, 120, 400, 160, 60);
  brownPlatform = new BrownPlatform(brownBranchImage, 50, 250, 160, 60, 5);
  mossPlatform = new MossPLatform(mossBranchImage, 220, 150, 160, 60, true);
}

// Runs once when the game starts
function setup() {
  createCanvas(400, 600);
}
// Runs continuously to draw the game
function draw() {
  if (!gameStarted) {
    image(startScreenImage, 0, 0, 400, 600);
    return;
  }
  image(backgroundImage, 0, 0, 400, 600);
  greenPlatform.display();
  brownPlatform.display();
  msossPlatform.display();

  //// Displays Punch's image on the screen

  brownPlatform.moves();

  if (keyIsDown(LEFT_ARROW) === true) {
    punch.moveLeft();
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    punch.moveRight();
  }

  punch.display();

  if (punch.isColliding(greenPlatform) === true) {
    console.log("Choco");
  } else if (punch.isColliding(brownPlatform) === true) {
    console.log("Choco con brown");
  } else if (punch.isColliding(mossPlatform) === true) {
    mossPlatform.visible = false;
  }
}
function mousePressed() {
  if (gameStarted === false) {
    if (mouseX >= 100 && mouseX <= 300 && mouseY >= 450 && mouseY <= 530) {
      gameStarted = true;
    }
  }
}
