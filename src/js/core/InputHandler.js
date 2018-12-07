import * as keys from '../config/Keys';

export default class InputHandler {
    constructor(player) {
        this.keys = keys;
        let mouse = {
            x: document.innerWidth / 2,
            y: document.innerHeight / 2
        }     

        this.isMouseDown = false;

        var pressed = {
            rightPressed: false,
            leftPressed: false,
            downPressed: false,
            upPressed: false,
        }

        window.addEventListener("mousemove", function(event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            console.log(mouse.x + mouse.y);
        });
       
        document.addEventListener("keydown", event => {
            console.log("Key down " + event.keyCode);
            if(event.keyCode == 39) {
                event.preventDefault();
                pressed.rightPressed = true;
                console.log("rightKey Presseddddddddddddddddd")
                player.moveRight();
            } else if(event.keyCode == 37) {
                event.preventDefault();
                pressed.leftPressed = true;
                player.moveLeft();
            } if(event.keyCode == 40) {
                event.preventDefault();
                pressed.downPressed = true;
                player.moveDown();
            } else if(event.keyCode == 38) {
                event.preventDefault();
                pressed.upPressed = true;
                player.moveUp();
            }
        });  

   

        document.addEventListener("keyup", event => {
            console.log("Key up " + event.keyCode);
        });  
       
        document.addEventListener('mousedown',function() {
            this.isMouseDown = true;
            if (this.isMouseDown) {
                console.log("mouse down firing");
            }
        });

    }

    keyDownHandler(event) {
        
    }
}
