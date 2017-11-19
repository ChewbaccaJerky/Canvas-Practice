import * as Util from './util/util';
import Circle from './object/circle';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//set height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse
const mouse = {
    x: undefined,
    y: undefined
};

const COLORS = ["#BAC1B8", "#58A4B0", "#0C7C59", "#2B303A", "#D64933"];

// base event listeners
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', (e) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

// implementations
const createCircle = () => {
    const pos = Util.randomPosition();
    const r = Util.randomIntFromRange(2, 10);
    const dx = Util.randomIntFromRange(-5, 5);
    const dy = Util.randomIntFromRange(-5, 5);
    const color = Util.randomColor(COLORS);
    return new Circle(pos.x, pos.y, dx, dy, r, color, ctx);
};

let objects = [];
const init = () => {
    objects = [];

    for(let i = 0; i < 100; i++) {
       objects.push(createCircle());
    }
};

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(object => {
        object.draw();
    });
};

init();
animate();

window.GetDistance = Util.getDistance;