export default class Player {
    constructor(game) {
        
        this.height = 40,
        this.width = 40,
        this.size = 15,

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: 44,
            y: 44
        }

    }

    moveUp() {
        this.position.y -= 5;
        console.log("move up");
    }

    moveRight() {
        this.position.x += 5;
    }

    moveDown() {
        this.position.y += 5;
    }

    moveLeft() {
        this.position.x -= 5;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size ,0 ,2*Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
    }

    update(deltaTime) {
        
    }
}