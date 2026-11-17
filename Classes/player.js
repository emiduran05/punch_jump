export class Player {
  constructor(image, posX, posY, width, height) {
    this.image = image;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  display() {
    image(this.image, this.posX, this.posY, this.width, this.height);
    // this.posY += 3;
  }

  moveLeft() {
    this.posX = this.posX - 10;
  }

  moveRight() {
    this.posX += 10;
  }
}
