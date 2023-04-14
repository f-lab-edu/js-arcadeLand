export default class Apple {
    constructor(ctx, padding, gridSize, rowGridCount, columnGridCount) {
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * rowGridCount);
        this.y = Math.floor(Math.random() * columnGridCount);
        this.size = gridSize - 2;
        this.drawStartX = this.x * gridSize + padding;
        this.drawStarty = this.y * gridSize + padding;
    }
    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.drawStartX, this.drawStarty, this.size, this.size);
    }
}
