import Tetromino from './Tetromino';

export default class TetrominoQueue {
    #blockCaseSet;
    #colors;
    constructor() {
        // prettier-ignore
        this.#blockCaseSet = [
            //I tetromino
            [1, 1, 1, 1],
            //L tetromino
            [1, 1, 1, 0, 
             1, 0, 0, 0],
            //T tetromino
            [0, 1, 0, 0,
             1, 1, 1, 0], 
            //O tetromino
            [1, 1, 0, 0,
             1, 1, 0, 0],
            //J Tetromino
            [1, 0, 0, 0,
             1, 1, 1, 0],
            //S tetromino
            [0, 1, 1, 0,
             1, 1, 0, 0],
            //Z tetromino
            [1, 1, 0, 0,
             0, 1, 1, 0], //Z
        ];
        this.#colors = ['aqua', 'blue', 'yellow', 'orange', 'lime', 'purple', 'red'];
        this.queue = Array.from(Array(7), (_, index) => {
            return new Tetromino(...this.#blockCaseSet.splice(Math.floor(Math.random() * (7 - index)), 1), this.#colors[index]);
        });
    }

    shift() {
        return this.queue.shift();
    }
}
