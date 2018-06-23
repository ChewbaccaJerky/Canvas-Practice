import Ninja from "./ninja.js";

class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.objects = [];
    }

    start() {
        this.canvas.height = 1000;
        this.canvas.width = 1000;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    init() {
        this.objects.push(new Ninja(this.ctx));
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.clear();
        this.draw();
    }

    draw() {
        for(let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw();
            console.log(this.objects[i]);
        }
    }
}

export default Game;