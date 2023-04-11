import Apple from './Apple';

export default class Snake {
    #canvas;
    #ctx;
    #padding;
    #gridSize;
    #rowGridCount;
    #columnGridCount;
    #headSnakeLocation;
    #apple;
    #snakeLocationList;
    #tail;
    #score;
    #move;
    #snakeWidth;
    #snakeHeight;
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
        //default location
        this.#headSnakeLocation = { x: 1, y: 1 };
        this.#apple = new Apple(this.#ctx, this.#padding, this.#gridSize, this.#rowGridCount, this.#columnGridCount);
        this.#snakeLocationList = [];
        //information
        this.#tail = 1;
        this.#score = 0;
        this.#move = { x: 0, y: 0 };
        //snakeSize
        this.#snakeWidth = this.#gridSize - 2;
        this.#snakeHeight = this.#gridSize - 2;
        this.#attachEventListnerForStart();
    }

    #attachEventListnerForStart() {
        document.addEventListener(
            'keydown',
            (e) => {
                if (e.key === 'Enter') {
                    this.#animationId = setInterval(() => this.#animate(), 60);
                    this.#setEvent();
                }
            },
            { once: true }
        );
    }

    #animate() {
        this.#prepareRender();
        this.#scoreRender();
        this.#moveSnake();
        this.#resetOverFlowSnakeLocation();
        this.#snakeRender();
        this.#apple.draw();
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

    #resetOverFlowSnakeLocation() {
        if (this.#headSnakeLocation.x < 0) {
            this.#headSnakeLocation.x = this.#rowGridCount - 1;
        } else if (this.#headSnakeLocation.x > this.#rowGridCount) {
            this.#headSnakeLocation.x = 0;
        } else if (this.#headSnakeLocation.y < 0) {
            this.#headSnakeLocation.y = this.#columnGridCount - 1;
        } else if (this.#headSnakeLocation.y > this.#columnGridCount - 1) {
            this.#headSnakeLocation.y = 0;
        }
    }

    #moveSnake() {
        this.#headSnakeLocation.x += this.#move.x;
        this.#headSnakeLocation.y += this.#move.y;
        if (this.#apple.x === this.#headSnakeLocation.x && this.#apple.y === this.#headSnakeLocation.y) {
            this.#score += 10;
            this.#tail += 1;
            this.#apple = new Apple(this.#ctx, this.#padding, this.#gridSize, this.#rowGridCount, this.#columnGridCount);
        }
    }

    #snakeRender() {
        this.#ctx.fillStyle = 'lime';
        this.#snakeLocationList.forEach((_, index) => {
            this.#ctx.fillRect(
                this.#snakeLocationList[index].x * this.#gridSize + this.#padding,
                this.#snakeLocationList[index].y * this.#gridSize + this.#padding,
                this.#snakeWidth,
                this.#snakeHeight
            );
            if (
                this.#snakeLocationList.length != 1 &&
                this.#snakeLocationList[index].x === this.#headSnakeLocation.x &&
                this.#snakeLocationList[index].y === this.#headSnakeLocation.y
            ) {
                this.#gameEnd();
            }
        });

        this.#snakeLocationList.push(Object.assign({}, this.#headSnakeLocation));
        while (this.#snakeLocationList.length > this.#tail) {
            this.#snakeLocationList.shift();
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

    #setEvent() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.#move = { x: -1, y: 0 };
                    break;
                case 'ArrowUp':
                    this.#move = { x: 0, y: -1 };
                    break;
                case 'ArrowRight':
                    this.#move = { x: 1, y: 0 };
                    break;
                case 'ArrowDown':
                    this.#move = { x: 0, y: 1 };
                    break;
            }
        });
    }
}
