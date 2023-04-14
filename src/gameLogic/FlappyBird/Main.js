import graidentText from '../utils/gradientText';
import textBlinkEffect from '../utils/textBlinkEffect';

export default class FlappyBird {
    #canvas;
    #ctx;
    #birdLocation;
    #pipeList = [];
    #fly = false;
    #latestTime = 0;
    #bottomPipeImage;
    #upperPipeImage;
    #birdImage;
    constructor(canvas, bottomPipeImage, upperPipeImage, birdImage) {
        this.#canvas = canvas;
        this.#ctx = canvas.getContext('2d');
        this.#bottomPipeImage = bottomPipeImage;
        this.#upperPipeImage = upperPipeImage;
        this.#birdImage = birdImage;
        this.#birdLocation = { x: 200, y: 500 };
        this.#beforeStart();
    }

    #beforeStart() {
        this.#attachEventListenerForStart();
        const textCenter = (text) => (this.#canvas.width - this.#ctx.measureText(text).width) / 2;
        this.#ctx.font = 'bold 100px VT323';
        graidentText(this.#ctx, textCenter('Yobi Bird'), 400, 'Yobi Bird', 'aqua', 'lime');
        this.#ctx.font = 'bold 60px VT323';
        textBlinkEffect(this.#ctx, 'press click to start', 60, 'white', textCenter('press click to start'), 800);
    }

    #attachEventListenerForStart() {
        document.addEventListener(
            'click',
            (e) => {
                this.#animate();
                this.#keydownHandler();
            },
            { once: true }
        );
    }

    #move() {
        if (this.#fly) {
            this.#birdLocation.y -= 10;
        } else {
            this.#birdLocation.y += 10;
        }
    }

    #keydownHandler() {
        document.addEventListener('click', (e) => {
            this.#fly = true;
            setTimeout(() => {
                this.#fly = false;
            }, 200);
        });
    }

    #renderPipeList() {
        this.#pipeList.forEach((pipe, index) => {
            const { upper, bottom, pipeWidth } = pipe;
            this.#ctx.drawImage(this.#upperPipeImage, upper.x, upper.y, pipeWidth, upper.height);
            this.#ctx.drawImage(this.#bottomPipeImage, bottom.x, bottom.y, pipeWidth, bottom.height);
            upper.x -= 5;
            bottom.x -= 5;
            if (upper.x < -pipeWidth) {
                this.#pipeList.shift();
            }
        });
    }

    #addPipeList(timeStamp) {
        if (timeStamp - this.#latestTime > 2000) {
            this.#latestTime = timeStamp;
            this.#pipeList.push(new Pipe(this.#canvas.width, this.#canvas.height));
        }
    }

    #animate(timeStamp) {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#ctx.drawImage(this.#birdImage, this.#birdLocation.x, this.#birdLocation.y, 50, 50);
        this.#addPipeList(timeStamp);
        this.#move();
        this.#renderPipeList();
        requestAnimationFrame((timeStamp) => this.#animate(timeStamp));
    }
}

class Pipe {
    #defaultHeight = 200;
    #pathSize = 100;
    #pipeWidth = 100;
    #pipeDividePoint;
    constructor(canvasWidth, canvasHeight) {
        this.#pipeDividePoint = Math.floor(this.#defaultHeight + Math.random() * (canvasHeight - this.#defaultHeight * 2));
        this.upper = { x: canvasWidth, y: 0, height: this.#pipeDividePoint - this.#pathSize };
        this.bottom = {
            x: canvasWidth,
            y: this.#pipeDividePoint + this.#pathSize,
            height: canvasHeight - this.#pipeDividePoint + this.#pathSize,
        };
    }
    get pipeWidth() {
        return this.#pipeWidth;
    }
}
