import { Platform } from "./Classes/GreenPlatform.js";

export class BrownPlatform extends Platform {

    constructor(image, posX, posY, width, height, speed) {
        super(image, posX, posY, width, height);
        this.speed = speed;
    }

    moves() {
        this.posX += this.speed;

        if (this.posX <= 0 || this.posX + this.width >= 400) {
            this.speed = -this.speed;
        }
    }



}