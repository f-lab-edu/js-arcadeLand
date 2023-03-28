import CoreComponent from '../core/CoreComponent';
import bezel from '../../resource/bezel.png';
import '../style/CrtEffect.scss';

export default class SnakePage extends CoreComponent {
    setHTML() {
        return `
        <div id="retroContainer">
            <img src=${bezel} id="bezelImg"/>
            <canvas id="retroCanvas" width="1080" height="1080"></canvas>
            <div id="crt"></div>
        </div>
        `;
    }
    setup() {
        //1080px 기준
        const canvas = document.getElementById('retroCanvas');

        const ctx = canvas.getContext('2d');

        const snakeLocation = []; //뱀 좌표정보
        let tail = 1;

        //뱀 시작 좌표
        let snakeX = 1;
        let snakeY = 1;
        //먹이 시작 좌표
        let appleX = 4;
        let appleY = 4;
        //좌표 이동
        let xv = 0;
        let yv = 0;

        const gridSize = 20;
        let gridCountWidth = canvas.width / gridSize;
        let girdCountHeight = canvas.width / gridSize;

        document.addEventListener('keydown', keyDownHandler);

        function start() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snakeX += xv;
            snakeY += yv;
            if (snakeX < 0) {
                snakeX = gridCountWidth - 1;
            }
            if (snakeX > gridCountWidth) {
                snakeX = 0;
            }
            if (snakeY < 0) {
                snakeY = girdCountHeight - 1;
            }
            if (snakeY > girdCountHeight - 1) {
                snakeY = 0;
            }

            ctx.fillStyle = 'lime';

            for (let i = 0; i < snakeLocation.length; i++) {
                ctx.fillRect(snakeLocation[i].x * gridSize, snakeLocation[i].y * gridSize, gridSize - 2, gridSize - 2);
                if (snakeLocation[i].x == snakeX && snakeLocation[i].y == snakeY) {
                    tail = i + 1;
                }
            }
            snakeLocation.push({ x: snakeX, y: snakeY });
            while (snakeLocation.length > tail) {
                snakeLocation.shift();
            }
            if (appleX == snakeX && appleY == snakeY) {
                tail++;
                appleX = Math.floor(Math.random() * gridCountWidth);
                appleY = Math.floor(Math.random() * girdCountHeight);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
        }

        function keyDownHandler(e) {
            switch (e.key) {
                case 'ArrowLeft':
                    xv = -1;
                    yv = 0;
                    break;
                case 'ArrowUp':
                    xv = 0;
                    yv = -1;
                    break;
                case 'ArrowRight':
                    xv = 1;
                    yv = 0;
                    break;
                case 'ArrowDown':
                    xv = 0;
                    yv = 1;
                    break;
            }
        }

        setInterval(start, 60);
    }
}
