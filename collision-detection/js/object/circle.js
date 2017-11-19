
import ParentObject from './parent_object';
class Circle extends ParentObject {
    constructor(x, y, dx, dy, r, color, ctx) {
        super(x, y, color, ctx);
        this.dx = dx;
        this.dy = dy;
        this.r = r;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = "#000";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        this.update();
    }

    update() {

        // move circle
        this.x += this.dx;
        this.y += this.dy;

        if(this.x - this.r < 0 || this.x + this.r > innerWidth) this.dx = -this.dx;
        if(this.y - this.r < 0 || this.y + this.r > innerHeight) this.dy = -this.dy;
    }
}

export default Circle;