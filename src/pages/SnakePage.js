import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
export default class SnakePage extends CoreComponent {
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
        let moveX = 0;
        let moveY = 0;

        const gridSize = 20;
        const gridCountWidth = canvas.width / gridSize;
        const girdCountHeight = canvas.width / gridSize;

        function keyDownHandler(e) {
            switch (e.key) {
                case 'ArrowLeft':
                    moveX = -1;
                    moveY = 0;
                    break;
                case 'ArrowUp':
                    moveX = 0;
                    moveY = -1;
                    break;
                case 'ArrowRight':
                    moveX = 1;
                    moveY = 0;
                    break;
                case 'ArrowDown':
                    moveX = 0;
                    moveY = 1;
                    break;
            }
        }

        document.addEventListener('keydown', keyDownHandler);

        function start() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snakeX += moveX;
            snakeY += moveY;
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
                if (snakeLocation[i].x === snakeX && snakeLocation[i].y === snakeY) {
                    tail = i + 1;
                }
            }
            snakeLocation.push({ x: snakeX, y: snakeY });
            while (snakeLocation.length > tail) {
                snakeLocation.shift();
            }
            if (appleX === snakeX && appleY === snakeY) {
                tail++;
                appleX = Math.floor(Math.random() * gridCountWidth);
                appleY = Math.floor(Math.random() * girdCountHeight);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
        }

        setInterval(start, 60);
    }
}
