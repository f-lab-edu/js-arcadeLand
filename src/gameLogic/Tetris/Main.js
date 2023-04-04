import TetrominoQueue from './TetrominoQueue';

export default class Tetris {
    #ctx;
    #gridSize;
    #curTetromino;
    #nextTetromino;
    #gravityIntervalTime;
    #renderAnimationId;
    #gravityIntervalId;
    #tetrominoQueue;
    #row;
    #column;

    constructor($canvas) {
        this.#ctx = $canvas.getContext('2d');
        this.#gridSize = 30;
        this.#row = 10;
        this.#column = 20;
        this.#gravityIntervalTime = 400;
        this.#gameStart();
    }

    #clearFilledLine() {
        for (let y = this.column - 1; y >= 0; y--) {
            let flag = true;
            for (let x = 0; x < this.row; x++) {
                if (this.board[y][x].value != 1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                for (let resetY = y; resetY > 0; resetY--) {
                    this.board[resetY] = this.board[resetY - 1];
                }
                ++y;
            }
        }
    }

    #fixBoard() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.#curTetromino.block[y][x]) {
                    this.board[this.#curTetromino.curY + y][this.#curTetromino.curX + x].value = 1;
                    this.board[this.#curTetromino.curY + y][this.#curTetromino.curX + x].color = this.#curTetromino.color;
                }
            }
        }
        if (this.#tetrominoQueue.queue.length < 1) {
            this.#tetrominoQueue = new TetrominoQueue();
        }
        this.#curTetromino = this.#nextTetromino;
        this.#nextTetromino = this.#tetrominoQueue.shift();
    }

    #gameStart() {
        this.board = Array.from(Array(this.#column), () =>
            new Array(this.#row).fill(0).map((e) => {
                return { value: 0, color: 'black' };
            })
        );
        this.#tetrominoQueue = new TetrominoQueue();
        this.#curTetromino = this.#tetrominoQueue.shift();
        this.#nextTetromino = this.#tetrominoQueue.shift();
        this.#renderAnimationId = requestAnimationFrame(() => this.#canvasRender());
        this.#gravityIntervalId = setInterval(() => this.#gravity(), this.#gravityIntervalTime);
        this.#setEvent();
    }

    #gameEnd() {
        cancelAnimationFrame(this.#renderAnimationId);
        clearInterval(this.#gravityIntervalId);
    }

    #canvasRender(timeStamp) {
        this.#ctx.clearRect(0, 0, this.#row * this.#gridSize, this.#column * this.#gridSize);
        this.#ctx.strokeStyle = 'white';
        for (let y = 0; y < this.#column; y++) {
            for (let x = 0; x < this.#row; x++) {
                this.#ctx.strokeRect(x * this.#gridSize, y * this.#gridSize, this.#gridSize - 2, this.#gridSize - 2);
                if (this.board[y][x].value) {
                    this.#ctx.fillStyle = this.board[y][x].color;
                    this.#ctx.fillRect(x * this.#gridSize, y * this.#gridSize, this.#gridSize - 2, this.#gridSize - 2);
                }
            }
        }

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.#curTetromino.block[y][x]) {
                    this.#ctx.fillStyle = this.#curTetromino.color;
                    this.#ctx.fillRect(
                        this.#gridSize * (this.#curTetromino.curX + x),
                        this.#gridSize * (this.#curTetromino.curY + y),
                        this.#gridSize - 2,
                        this.#gridSize - 2
                    );
                }
            }
        }
        this.#renderAnimationId = requestAnimationFrame(() => this.#canvasRender());
    }

    #gravity() {
        if (this.isValid(0, 1, this.#curTetromino)) {
            this.#curTetromino.curY += 1;
        } else {
            this.#fixBoard();
            this.#clearFilledLine();
        }
    }
    isValid(moveX, moveY, checkBlock) {
        const nextX = moveX + checkBlock.curX;
        const nextY = moveY + checkBlock.curY;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (checkBlock.block[y][x]) {
                    if (
                        this.board[nextY + y] === undefined ||
                        this.board[nextY + y][nextX + x] === undefined ||
                        nextY + y >= this.#column ||
                        nextX + x < 0 ||
                        nextX + x >= this.#row ||
                        this.board[nextY + y][nextX + x].value
                    ) {
                        if (nextY === 1) {
                            return this.#gameEnd();
                        }
                        return false;
                    }
                }
            }
        }
        return true;
    }

    #setEvent() {
        const keydownHandler = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.#curTetromino.rowMoving('Left', this.isValid.bind(this));
                    break;
                case 'ArrowUp':
                    this.#curTetromino.rotate(this.isValid.bind(this));
                    break;
                case 'ArrowRight':
                    this.#curTetromino.rowMoving('Right', this.isValid.bind(this));
                    break;
                case 'ArrowDown':
                    this.#gravity();
                    break;
            }
        };
        document.addEventListener('keydown', keydownHandler);
    }
}
