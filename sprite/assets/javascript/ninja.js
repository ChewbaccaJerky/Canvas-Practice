
class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 20;
        this.y = window.innerHeight - 100;
        this.dx = 1;
        this.dy = 1;
        this.frame = 0;
        this.image = this.createImage();
        this.addKeyPressHandler();
    }

    createImage() {
        const image = document.createElement('img');
        image.src = "./assets/img/rabbit.png";
        image.height = 200;
        image.width = 200;
        return image;
    }

    addKeyPressHandler(){
        document.addEventListener("keypress", (evt) => { 

            switch(evt.code) {
                case "Space":
                case "UpArrow":
                    this.action("jump");
                    break;
                case "RightArrow":
                    this.action("run-right");
                    break;
                case "DownArrow":
                    this.action("duck");
                    break;
                case "LeftArrow":
                    this.action("run-left");
                    break;

                default:
            }
        });
    }

    draw() {
        // this.ctx.clearRect(this.x, this.y, 90, 100);
        this.ctx.drawImage(this.image, this.frame * 67 , 93, 80, 83, this.x, this.y, 90, 100);
        this.frame++;
        if(this.frame === 6) this.frame = 0;

        this.update();
    }

    update() {
        
        // handle gravity
        if(this.y < window.innerHeight - 100) {
            this.y += 2;
        }

    }

    action(direction) {

        switch(direction) {

            case "duck":
                break;

            case "run-right":
                break;

            case "run-left":
                break;

            case "jump":
                this.y-= 100;
                break;
            default:
        }

    }
}

export default Ninja;