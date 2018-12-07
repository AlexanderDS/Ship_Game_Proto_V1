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
            if(event.keyCode == 39) {
                event.preventDefault();
                pressed.rightPressed = true;
            } else if(event.keyCode == 37) {
                event.preventDefault();
                pressed.leftPressed = true;
            } if(event.keyCode == 40) {
                event.preventDefault();
                pressed.downPressed = true;
            } else if(event.keyCode == 38) {
                event.preventDefault();
                pressed.upPressed = true;
            }
        });  

    }

}
