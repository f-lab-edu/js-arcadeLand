export default class Ball {
    constructor(ctx) {
        this.radius = 10;
        this.x = 540;
        this.y = 540;
        this.speed = 3;
        this.dx = 1;
        this.dy = 1;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'orange';
        this.ctx.fill();
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }
}
