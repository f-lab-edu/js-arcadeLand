export default class Bricks {
    constructor(ctx) {
        this.ctx = ctx;
        this.column = 3;
        this.row = 10;
        this.list = [];
        for (let i = 0; i < this.column; i++) {
            for (let j = 0; j < this.row; j++) {
                this.list.push(new Brick(j, i, ctx));
            }
        }
    }

    draw() {
        this.list.forEach((brick) => brick.draw());
    }
}

class Brick {
    constructor(row, column, ctx) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.padding = 10;
        this.top = 50;
        this.x = row * (this.width + this.padding);
        this.y = column * (this.height + this.padding) + this.top;
    }

    draw() {
        this.ctx.fillStyle = 'skyblue';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
