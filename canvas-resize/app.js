const COLORS = ["#175859", "#FA7E4A", "#F8EFE5", "#D2232A", "#ACDDFE"];
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const mouse = {
    x: undefined,
    y: undefined
};

const maxRadius = 100;
// const minRadius = 5;

// Circle Class
class Circle {
    constructor(x, y, dx, dy, radius, minRadius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = minRadius;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.strokeStyle = '#FFF';
        c.fill();
        c.stroke();
        this.update();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > innerWidth|| this.x - this.radius < 0) this.dx *= -1;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy *= -1;
        
        // interact with mouse
        if((mouse.x - this.x < 50 && mouse.x - this.x > -50) && 
            (mouse.y - this.y < 50 && mouse.y - this.y > -50)) {
            // increase circle size
            if(this.radius < maxRadius) {
                this.radius += 5;
            }
        }
        else if(this.radius > this.minRadius) {
            this.radius -= 1;
        }
        
    }

}

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

let circles = [];
function createObjects() {
    for(let i = 0; i < 200; i++) {
        let pos = randomPosition();
        let dx = Math.random() * 10;
        let dy = Math.random() * 10;
        let radius = Math.abs(Math.random() * 15) + 1;
        let color = randomColor(COLORS);
        circles.push(new Circle(pos.x, pos.y, dx, dy, radius, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for(let i=0; i < circles.length; i++) circles[i].draw();
}

function handleMove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}

function handleResize(e) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
}

// handle resize
function init(e) {
    circles = [];
    createObjects();
}

window.addEventListener('mousemove', handleMove);
window.addEventListener('resize', handleResize);

createObjects();
animate();