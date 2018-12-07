import * as keys from '../config/Keys';

export default class InputHandler {
    constructor(player) {
        this.keys = keys;

        var pressed = {
            rightPressed: false,
            leftPressed: false,
            downPressed: false,
            upPressed: false,
        }

        document.addEventListener("keydown", event => {
            console.log("Key down " + event.keyCode);

            if(event.keyCode == keys.arrowUp) {
                pressed.upPressed = true;
            } else if(event.keyCode == keys.arrowRight) {
                pressed.rightPressed = true;
            } else if(event.keyCode == keys.arrowDown) {
                pressed.downPressed = true;
            } else if(event.keyCode == keys.arrowLeft) {
                pressed.leftPressed = true;
            }
        });  

    }

}
