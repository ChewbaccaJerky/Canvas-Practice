
class ParentObject {
    constructor(x, y, color, ctx) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
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