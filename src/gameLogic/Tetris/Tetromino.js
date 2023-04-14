export default class Tetromino {
    constructor(targetBlock, color) {
        this.color = color;
        this.curX = 5;
        this.curY = 0;
        this.#createNewTetromino(targetBlock);
    }

    #createNewTetromino(targetBlock) {
        this.block = Array.from(Array(4), (e) => new Array(4).fill(0));
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (targetBlock[4 * y + x] === 1) {
                    this.block[y][x] = 1;
                }
            }
        }
    }

    rotate(isValid) {
        const rotatedCurTetromino = {
            block: Array.from(Array(4), (e) => new Array(4)),
            curX: this.curX,
            curY: this.curY,
        };
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                rotatedCurTetromino.block[y][x] = this.block[3 - x][y];
            }
        }
        if (isValid(0, 0, rotatedCurTetromino)) {
            this.block = rotatedCurTetromino.block;
        }
    }

    rowMoving(direction, isValid) {
        if (direction === 'Left') {
            if (isValid(-1, 0, this)) this.curX -= 1;
        } else {
            if (isValid(1, 0, this)) this.curX += 1;
        }
    }
}
