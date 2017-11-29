import { context } from './app.js';

class Sprite {
    constructor(options) {
        this.ctx = context;
        this.sx = 0;
        this.sy = 0;
        this.height = options.height;
        this.width = options.width;
        this.frames = options.frames;
        this.frameIndex = 0;
        this.image = options.image;
        this.dx = 0;
        this.dy = window.innerHeight - options.height;
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    draw() {
        context.drawImage(this.image, this.sx, this.sy, this.width, this.height,
                                      this.dx, this.dy, 100, 100);
    }

    update() {
        this.draw();

        //handle physics
        if(this.dy < window.innerHeight - this.height) {
            this.dy += 5;
        }

        this.frameIndex++;
        this.sx = (this.width * this.frameIndex % (this.width * this.frames));
    }

    handleKeyDown(e) {
        if(e.key == 'ArrowRight') {
            this.dx += 20;
        }
        else if(e.key == 'ArrowLeft') {
            this.dx -= 20;
        }
        else if(e.key == ' ') {
            console.log('jump');
            this.dy -= 30;
        }
        
    }
}

export default Sprite;