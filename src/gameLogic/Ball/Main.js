import Paddle from './Paddle';
import Ball from './Ball';
import Bricks from './Bricks';
export default class BallGame {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.paddle = new Paddle(this.ctx);
        this.ball = new Ball(this.ctx);
        this.bricks = new Bricks(this.ctx);
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.draw();
        this.bricks.draw();
        this.paddle.draw();
        this.paddle.move();
        this.CollisionChecker();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    CollisionChecker() {
        //x축
        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
            this.ball.dx *= -1;
        }
        //y축
        if (this.ball.y + this.ball.dy < this.ball.radius) {
            this.ball.dy *= -1;
        } else if (this.ball.y + this.ball.dy > this.paddle.y - this.ball.radius) {
            if (this.ball.x + this.ball.radius > this.paddle.x && this.ball.x - this.ball.radius < this.paddle.x + this.paddle.width) {
                this.ball.dy *= -1;
            } else {
                cancelAnimationFrame(this.animationId);
            }
        }
        //벽돌
        this.bricks.list.forEach((brick, index) => {
            if (
                brick.x < this.ball.x + this.ball.radius &&
                brick.x + brick.width > this.ball.x - this.ball.radius &&
                this.ball.y + this.ball.radius > brick.y &&
                this.ball.y + this.ball.radius < brick.y + brick.height
            ) {
                this.ball.dy *= -1;
                this.bricks.list.splice(index, 1);
            }
        });
    }
}
