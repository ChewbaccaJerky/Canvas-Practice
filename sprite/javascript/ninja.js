
class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.dx = 1;
        this.dy = 1;
        this.image = this.createImage();
        this.addKeyPressHandler();
    }

    createImage() {
        const image = document.createElement('img');
        image.src = "./img/rabbit.png";

        return image;
    }

    addKeyPressHandler(){
        document.addEventListener("keypress", (evt) => {        
            switch(evt.key) {
                case "w":
                    this.move("up");
                    break;
                case "d":
                    this.move("right");
                    break;
                case "s":
                    this.move("down");
                    break;
                case "a":
                    this.move("left");
                    break;

            }
        });
    }

    draw() {
        console.log(this.image);
        this.ctx.drawImage(this.image, 200, 200);
        this.update();
    }

    update() {
        
    }

    move(direction) {

        switch(direction) {

            case "up":
                
                break;

            case "down":
                break;

            case "right":
                break;

            case "left":
                break;

            default:
        }

    }
}

export default Ninja;