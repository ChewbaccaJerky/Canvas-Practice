import { createSprite } from './sprite';
const RUN = {
    url : './img/ninja/run.jpg',
    frames: 7
};

class Ninja{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        const image = new Image();
        image.src = RUN.url;
        const options = {
            height: 100,
            width: image.width/RUN.frames,
            image: image
        };
        this.sprite = createSprite(options);
    }

    draw() {
        this.sprite.ctx.drawImage(this.sprite.image, 0, 0);
    }

    update() {
        this.draw();
    }
}

export default Ninja;