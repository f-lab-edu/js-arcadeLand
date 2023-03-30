import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
export default class TetrisPage extends CoreComponent {
    setHTML() {
        return `
        <div class="retroContainer"></div>
        `;
    }

    appendChild() {
        const retroContainer = document.querySelector('.retroContainer');
        new RetroContainerComponent(retroContainer);
    }

    setup() {
        const canvas = document.getElementById('retroCanvas');
        const ctx = canvas.getContext('2d');

        const gridSize = 30;
        const column = 20;
        const row = 10;
        const colors = ['aqua', 'blue', 'yellow', 'oragne', 'lime', 'purple', 'red'];
        const tetrominos = [
            [1, 1, 1, 1], //I
            [1, 1, 1, 0, 1], //L
            [0, 1, 0, 0, 1, 1, 1], //T
            [1, 1, 0, 0, 1, 1], //O
            [1, 0, 0, 0, 1, 1, 1], //J
            [0, 1, 1, 0, 1, 1], //S
            [1, 1, 0, 0, 0, 1, 1], //Z
        ];
        let curX = 5;
        let curY = 0;
        let board = Array.from(Array(column), (e) => new Array(row).fill(0));
        let curTetromino = Array.from(Array(4), (e) => new Array(4).fill(0));
        let clearRenderIntervalId;
        let clearGravityIntervalId;
        let color;
        const gameStart = () => {
            createNewTetromino();
            clearRenderIntervalId = setInterval(() => render(), 20);
            clearGravityIntervalId = setInterval(() => gravity(), 300);
        };
        const gameEnd = () => {
            clearInterval(clearRenderIntervalId);
            clearInterval(clearGravityIntervalId);
        };

        const render = () => {
            //보드 채우기
            ctx.clearRect(0, 0, gridSize * row, gridSize * column);
            ctx.strokeStyle = 'white';
            for (let y = 0; y < column; y++) {
                for (let x = 0; x < row; x++) {
                    ctx.strokeRect(x * gridSize, y * gridSize, gridSize - 2, gridSize - 2);
                    if (board[y][x]) {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(gridSize * x, gridSize * y, gridSize - 2, gridSize - 2);
                    }
                }
            }
            //새 테트로미노 채우기

            // ctx.fillStyle = 'red';
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    if (curTetromino[y][x]) {
                        ctx.fillStyle = color;
                        ctx.fillRect(gridSize * (curX + x), gridSize * (curY + y), gridSize - 2, gridSize - 2);
                    }
                }
            }
        };

        const createNewTetromino = () => {
            const randomIndex = Math.floor(Math.random() * 7);
            color = colors[Math.floor(Math.random() * 7)];
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    const index = 4 * y + x;
                    if (tetrominos[randomIndex][index] === 1) {
                        curTetromino[y][x] = 1;
                    }
                }
            }
            curX = 5;
            curY = 0;
        };

        const rotate = (cur) => {
            const rotatedCurTetromino = Array.from(Array(4), (e) => new Array(4));
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    rotatedCurTetromino[y][x] = curTetromino[3 - x][y];
                }
            }
            if (isValid(0, 0, rotatedCurTetromino)) {
                curTetromino = rotatedCurTetromino;
            }
        };

        const clearFilledLine = () => {
            for (let y = column - 1; y >= 0; y--) {
                let flag = true;
                for (let x = 0; x < row; x++) {
                    if (board[y][x] != 1) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    //1줄 다찼으면 위에서부터 내려와야함.
                    for (let resetY = y; resetY > 0; resetY--) {
                        board[resetY] = board[resetY - 1];
                    }
                    ++y;
                }
            }
        };

        //이동이 가능한지 혹은 붙었는지
        const isValid = (moveX, moveY, cur = curTetromino) => {
            const nextX = moveX + curX;
            const nextY = moveY + curY;
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    if (cur[y][x]) {
                        if (
                            board[nextY + y] === undefined ||
                            board[nextY + y][nextX + x] === undefined ||
                            nextY + y >= column ||
                            nextX + x < 0 ||
                            nextX + x >= row ||
                            board[nextY + y][nextX + x]
                        ) {
                            // 게임 종료조건 추가필요
                            if (nextY === 1) {
                                gameEnd();
                            }
                            return false;
                        }
                    }
                }
            }
            return true;
        };

        //접했다면
        const fixBoard = () => {
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    if (curTetromino[y][x]) {
                        board[curY + y][curX + x] = curTetromino[y][x];
                    }
                }
            }
            curTetromino = Array.from(Array(4), (e) => new Array(4).fill(0));
        };

        const gravity = () => {
            if (isValid(0, 1)) {
                //내려갈수있으면
                curY++;
            } else {
                fixBoard();
                clearFilledLine();
                createNewTetromino();
            }
        };

        const rowMoving = (direction) => {
            if (direction === 'Left') {
                if (isValid(-1, 0)) curX -= 1;
            } else {
                if (isValid(1, 0)) curX += 1;
            }
        };

        const keydownHandler = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    rowMoving('Left');
                    break;
                case 'ArrowUp':
                    rotate();
                    break;
                case 'ArrowRight':
                    rowMoving('Right');
                    break;
                case 'ArrowDown':
                    gravity();
                    break;
            }
        };

        gameStart();
        document.addEventListener('keydown', keydownHandler);
    }
}
