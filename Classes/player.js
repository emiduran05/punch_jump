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

    if(this.posY <= 500 - this.height){
      this.posY += 5;

    }else{

    }

  
  

    
  }

  moveLeft() {
    if(this.posX === 0){

    }else{
      this.posX = this.posX - 10;

    }
  }

  moveRight() {
    this.posX += 10;
  }

  isColliding(object) {
        if (
            Math.abs(this.posY + this.height - object.posY) < 5 &&
            this.posX + this.width >= object.posX &&
            this.posX <= object.posX + object.width
        ) {
            return true;
        }
        return false;
    }
}
