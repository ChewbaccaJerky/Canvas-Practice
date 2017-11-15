
const COLORS = ["#175859", "#FA7E4A", "#F8EFE5", "#D2232A", "#ACDDFE"];
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Arc / Circle
function randomPosition() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    return {x: x, y: y};
}

function randomColor(colors) {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

class Circle {
    constructor(x, y, dx, dy, r, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.strokeStyle = '#FFF';
        c.fill();
        c.stroke();
        this.update();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > innerWidth - this.r || this.x < 0 + this.r) this.dx *= -1;
        if (this.y > innerHeight - this.r || this.y < 0 + this.r) this.dy *= -1;
    }
}

const circles = [];
function createObjects() {
    for(let i = 0; i < 100; i++) {
        let pos = randomPosition();
        let dx = Math.random() * 10;
        let dy = Math.random() * 10;
        let r = Math.random() * 10;
        let color = randomColor(COLORS);
        circles.push(new Circle(pos.x, pos.y, dx, dy, r, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for(let i=0; i < circles.length; i++) circles[i].draw();
}

createObjects();
animate();