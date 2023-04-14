import Apple from './Apple';
import Snake from './Snake';

export default class SnakeGame {
    #canvas;
    #ctx;
    #padding;
    #gridSize;
    #rowGridCount;
    #columnGridCount;
    #apple;
    #snake;
    #score;
    #animationId;

    constructor(canvas) {
        //canvas
        this.#canvas = canvas;
        this.#ctx = canvas.getContext('2d');
        this.#padding = 100;
        //grid
        this.#gridSize = 20;
        this.#rowGridCount = (this.#canvas.width - this.#padding * 2) / this.#gridSize;
        this.#columnGridCount = (this.#canvas.height - this.#padding * 2) / this.#gridSize;
        this.#score = 0;
        this.#attachEventListnerForStart();
    }

    #attachEventListnerForStart() {
        document.addEventListener(
            'keydown',
            (e) => {
                if (e.key === 'Enter') {
                    this.#animationId = setInterval(() => this.#animate(), 60);
                    this.#snake = new Snake(this.#ctx, this.#padding, this.#gridSize, this.#rowGridCount, this.#columnGridCount);
                    this.#apple = new Apple(this.#ctx, this.#padding, this.#gridSize, this.#rowGridCount, this.#columnGridCount);
                }
            },
            { once: true }
        );
    }

    #animate() {
        this.#prepareRender();
        this.#scoreRender();
        this.#snake.draw();
        this.#apple.draw();
        this.#snake.updateSnakeState();
        if (this.#snake.collisionCheck()) {
            this.#gameEnd();
        }
        this.#scoreCheck();
    }

    #prepareRender() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#ctx.strokeStyle = 'white';
        this.#ctx.strokeRect(this.#padding, this.#padding, this.#canvas.width - this.#padding * 2, this.#canvas.height - this.#padding * 2);
    }
    #scoreRender() {
        this.#ctx.font = 'bold 50px serif';
        this.#ctx.fillStyle = 'white';
        this.#ctx.fillText(`SCORE: ${this.#score}`, 100, 90);
    }

    #scoreCheck() {
        if (this.#apple.x === this.#snake.x && this.#apple.y === this.#snake.y) {
            this.#score += 10;
            this.#snake.tail += 1;
            this.#apple = new Apple(this.#ctx, this.#padding, this.#gridSize, this.#rowGridCount, this.#columnGridCount);
        }
    }

    #gameEnd() {
        clearInterval(this.#animationId);
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#ctx.font = 'bold 100px serif';
        this.#ctx.fillStyle = 'red';
        this.#ctx.fillText('GAME OVER', (this.#canvas.width - this.#ctx.measureText('GAME OVER').width) / 2, 500);
        this.#ctx.fillStyle = 'white';
        this.#ctx.font = 'bold 50px serif';
        this.#ctx.fillText(`SCORE: ${this.#score}`, (this.#canvas.width - this.#ctx.measureText(`SCORE: ${this.#score}`).width) / 2, 600);
    }
}
