import Ninja from "./ninja.js";

class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.objects = [];
        this.animate = this.animate.bind(this);
        this.fps = 20;
    }

    start() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

    clear() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    init() {
        this.objects.push(new Ninja(this.context));
        this.animate();
    }

    animate() {
        setTimeout(()=>{
            requestAnimationFrame(this.animate);
            this.draw();
        }, 1000/ this.fps);
    }

    draw() {
        for(let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw();
        }
    }
}

export default Game;