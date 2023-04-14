export default class Snake {
    constructor(ctx, padding, gridSize, rowGridCount, columnGridCount) {
        this.tail = 1;
        this.ctx = ctx;
        this.rowGridCount = rowGridCount;
        this.columnGridCount = columnGridCount;
        this.bodyList = [];
        this.moveWeight = { x: 0, y: 0 };
        this.x = 1;
        this.y = 1;
        this.gridSize = gridSize;
        this.padding = padding;
        this.size = this.gridSize - 2;
        this.setEvent();
    }

    draw() {
        this.ctx.fillStyle = 'lime';
        this.bodyList.forEach((item) => {
            this.ctx.fillRect(item.x * this.gridSize + this.padding, item.y * this.gridSize + this.padding, this.size, this.size);
        });
    }

    collisionCheck() {
        for (let index = 0; index < this.bodyList.length - 1; index++) {
            if (this.bodyList[index].x === this.x && this.bodyList[index].y === this.y) {
                return true;
            }
        }
    }

    updateSnakeState() {
        this.checkMoveOutFromCanvas();

        this.x += this.moveWeight.x;
        this.y += this.moveWeight.y;
        this.bodyList.push({ x: this.x, y: this.y });
        while (this.bodyList.length > this.tail) {
            this.bodyList.shift();
        }
    }

    checkMoveOutFromCanvas() {
        if (this.x < 1) {
            this.x = this.rowGridCount;
        } else if (this.x > this.rowGridCount - 1) {
            this.x = 0;
        } else if (this.y < 1) {
            this.y = this.columnGridCount - 1;
        } else if (this.y > this.columnGridCount - 1) {
            this.y = 0;
        }
    }

    setEvent() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.moveWeight = { x: -1, y: 0 };
                    break;
                case 'ArrowUp':
                    this.moveWeight = { x: 0, y: -1 };
                    break;
                case 'ArrowRight':
                    this.moveWeight = { x: 1, y: 0 };
                    break;
                case 'ArrowDown':
                    this.moveWeight = { x: 0, y: 1 };
                    break;
            }
        });
    }
}
