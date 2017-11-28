import { context } from '../app';

class ParentObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ctx = context;
    }

    draw() {
        // do stuff
    }

    update() {
        this.draw();

        // do more stuff
    }
}

export default ParentObject;