import TetrominoQueue from './TetrominoQueue';
import background1 from '../../../resource/TetrisBackground1.jpg';
import background2 from '../../../resource/TetrisBackground2.jpg';
import background3 from '../../../resource/TetrisBackground3.jpg';
import background4 from '../../../resource/TetrisBackground4.jpg';
import background5 from '../../../resource/TetrisBackground5.jpg';

export default class Tetris {
    #canvas;
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
    #level;
    #lines;
    #score;

    constructor($canvas) {
        this.#canvas = $canvas;
        this.#ctx = $canvas.getContext('2d');
        this.#ctx.font = 'bold 80px VT323';
        this.#gridSize = 40;
        this.#row = 10;
        this.#column = 20;
        this.centerX = this.#canvas.width / 2 - (this.#row / 2) * this.#gridSize;
        this.centerY = this.#canvas.height / 2 - (this.#column / 2) * this.#gridSize;
        this.backgroundImages = [background1, background2, background3, background4, background5];
        this.#gravityIntervalTime = 400;
        this.#level = 1;
        this.#lines = 0;
        this.#score = 0;
        this.#setBackgroundImage();
        this.#gameStart();
    }

    #setBackgroundImage() {
        this.#canvas.style.background = `center / 99% 99% no-repeat  url(${this.backgroundImages[this.#level - 1]}) `;
    }

    #levelUp() {
        if (this.#lines != 0 && this.#lines % 5 === 0) {
            this.#level += 1;
            this.#gravityIntervalTime *= 0.9;
            this.#canvas.dispatchEvent(new CustomEvent('levelUpPlay', { bubbles: true }));
            this.#setBackgroundImage();
        }
    }

    #clearFilledLine() {
        for (let y = this.#column - 1; y >= 0; y--) {
            let flag = true;
            for (let x = 0; x < this.#row; x++) {
                if (this.board[y][x].value != 1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.#lines += 1;
                this.#score += 100 * this.#level;
                this.#levelUp();
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
        this.#canvas.dispatchEvent(new CustomEvent('fixPlay', { bubbles: true }));
        this.#score += 10 * this.#level;
        this.#clearFilledLine();
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
        this.#canvas.dispatchEvent(new CustomEvent('startPlay', { bubbles: true }));
    }

    #gameEnd() {
        this.#canvas.dispatchEvent(new CustomEvent('gameOverPlay', { bubbles: true }));
        cancelAnimationFrame(this.#renderAnimationId);
        clearInterval(this.#gravityIntervalId);
    }

    #fillTextAsGradientColor(x, y, text, color) {
        this.#ctx.strokeStyle = 'purple';
        this.#ctx.strokeText(text, x, y);
        const gradient = this.#ctx.createLinearGradient(x, y, this.#ctx.measureText(text).width, y + 64);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(1, color);
        this.#ctx.fillStyle = gradient;
        this.#ctx.fillText(text, x, y);
    }
    #drawNext() {
        this.#fillTextAsGradientColor(100, 200, 'NEXT', 'red');
        this.#ctx.fillStyle = this.#nextTetromino.color;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.#nextTetromino.block[y][x]) {
                    this.#ctx.fillRect(100 + this.#gridSize * x, 250 + y * this.#gridSize, this.#gridSize - 2, this.#gridSize - 2);
                }
            }
        }
    }
    #drawInformation() {
        this.#fillTextAsGradientColor(100, 400, 'LEVEL', 'lime');
        this.#fillTextAsGradientColor(100, 500, `${this.#level}`, 'lime');
        this.#fillTextAsGradientColor(100, 600, 'SCORE', 'aqua');
        this.#fillTextAsGradientColor(100, 700, `${this.#score}`, 'aqua');
        this.#fillTextAsGradientColor(100, 800, 'LINES', 'orange');
        this.#fillTextAsGradientColor(100, 900, `${this.#lines}`, 'orange');
    }
    #drawBaord() {
        this.#ctx.strokeStyle = 'white';
        for (let y = 0; y < this.#column; y++) {
            for (let x = 0; x < this.#row; x++) {
                this.#ctx.strokeRect(this.centerX + x * this.#gridSize, this.centerY + y * this.#gridSize, this.#gridSize - 2, this.#gridSize - 2);
                if (this.board[y][x].value) {
                    this.#ctx.fillStyle = this.board[y][x].color;
                    this.#ctx.fillRect(this.centerX + x * this.#gridSize, this.centerY + y * this.#gridSize, this.#gridSize - 2, this.#gridSize - 2);
                }
            }
        }
    }

    #drawTetromino() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.#curTetromino.block[y][x]) {
                    this.#ctx.fillStyle = this.#curTetromino.color;
                    this.#ctx.fillRect(
                        this.centerX + this.#gridSize * (this.#curTetromino.curX + x),
                        this.centerY + this.#gridSize * (this.#curTetromino.curY + y),
                        this.#gridSize - 2,
                        this.#gridSize - 2
                    );
                }
            }
        }
    }

    #canvasRender(timeStamp) {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#drawNext();
        this.#drawInformation();
        this.#drawBaord();
        this.#drawTetromino();
        this.#renderAnimationId = requestAnimationFrame(() => this.#canvasRender());
    }

    #gravity() {
        if (this.isValid(0, 1, this.#curTetromino)) {
            this.#curTetromino.curY += 1;
        } else {
            this.#fixBoard();
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
