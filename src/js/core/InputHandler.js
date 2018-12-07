import * as keys from '../config/Keys';

export default class InputHandler {
    constructor(player) {
        this.keys = keys;

        this.pressedKeys = {
            rightPressed: false,
            leftPressed: false,
            downPressed: false,
            upPressed: false,
        }

        document.addEventListener("keydown", event => {

            console.log('Key down' + event.keyCode);
            if(event.keyCode == keys.arrowUp) {
                this.pressedKeys.upPressed = true;
            } else if(event.keyCode == keys.arrowRight) {
                this.pressedKeys.rightPressed = true;
            } else if(event.keyCode == keys.arrowDown) {
                this.pressedKeys.downPressed = true;
            } else if(event.keyCode == keys.arrowLeft) {
                this.pressedKeys.leftPressed = true;
            }
        });  

        document.addEventListener("keyup", event => {
            if(event.keyCode == keys.arrowUp) {
                this.pressedKeys.upPressed = false;
            } else if(event.keyCode == keys.arrowRight) {
                this.pressedKeys.rightPressed = false;
            } else if(event.keyCode == keys.arrowDown) {
                this.pressedKeys.downPressed = false;
            } else if(event.keyCode == keys.arrowLeft) {
                this.pressedKeys.leftPressed = false;
            }
        });  

    }

}
