import { Platform } from "./Classes/GreenPlatform.js";

export class MossPLatform extends Platform {

    constructor(image, posX, posY, width, height, visible ){
        super(image, posX, posY, width, height);
        this.visible = visible;
    }

    display(){
        if(this.visible === true){
            image(this.image, this.posX, this.posY, this.width, this.height);
        }
    }



}