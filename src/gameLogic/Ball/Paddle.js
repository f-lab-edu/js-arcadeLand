export default class Paddle {
    constructor(ctx) {
        this.ctx = ctx;
        this.height = 20;
        this.width = 200;
        this.x = 100;
        this.y = 900;
        this.speed = 10;
        this.moveRight = false;
        this.moveLeft = false;
        this.setEvent();
    }

    draw() {
        this.ctx.fillStyle = 'lime';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
        if (this.moveRight) {
            this.x += this.speed;
        } else if (this.moveLeft) {
            this.x -= this.speed;
        }
    }

    setEvent() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.moveLeft = true;
                    break;
                case 'ArrowRight':
                    this.moveRight = true;
                    break;
            }
        });
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.moveLeft = false;
                    break;
                case 'ArrowRight':
                    this.moveRight = false;
                    break;
            }
        });
    }
}
