import Player from "./gameObjects/player/Player";
import InputHandler from "./core/InputHandler";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.player = new Player(this);
        new InputHandler(this);
    }


    draw(ctx) {
        this.player.draw(ctx);
    }

    update(delta) {
        this.player.update(delta);
    }
    
    start() {
        
    }

}