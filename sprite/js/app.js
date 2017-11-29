import Sprite from './sprite.js';

const SONIC_URL = "../img/sonic.png";
export const canvas = document.querySelector('#sprite');
export const context = canvas.getContext('2d');


canvas.width = innerWidth;
canvas.height = innerHeight;

const objects = [];
function init() {
    const image = new Image();
    image.src = "./img/sonic.png";
    const options = {
        image: image,
        height: 200,
        width: 580/4,
        frames: 4
    };
    console.dir('test');
    const sonic = new Sprite(options);
    sonic.draw();
    objects.push(sonic);
    window.addEventListener('keydown', sonic.handleKeyDown);
    // window.addEventListener('keyup', sonic.handleKeyUp)
}

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(object => {
        object.update();
    });
}

init();
animate();