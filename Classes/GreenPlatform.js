export class Platform {
  constructor(image, posX, posY, width, height) {
    this.image = image;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  display() {
    image(this.image, this.posX, this.posY, this.width, this.height);
  }
}
