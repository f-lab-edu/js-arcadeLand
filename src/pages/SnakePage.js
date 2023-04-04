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

        const baseLocation = 100;

        const snakeLocation = []; //뱀 좌표정보
        let tail = 1;
        let gameStatus = false;

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
        const gridCountWidth = (canvas.width - baseLocation * 2) / gridSize;
        const girdCountHeight = (canvas.width - baseLocation * 2) / gridSize;

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

        let life = 3;
        let score = 0;
        function start() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(baseLocation, baseLocation, canvas.width - baseLocation * 2, canvas.height - baseLocation * 2);

            ctx.font = 'bold 50px serif';
            ctx.fillStyle = 'white';
            ctx.fillText(`LIFE: ${life}`, 100, 90);
            ctx.fillText(`SCORE: ${score}`, 700, 90);
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
                ctx.fillRect(snakeLocation[i].x * gridSize + baseLocation, snakeLocation[i].y * gridSize + baseLocation, gridSize - 2, gridSize - 2);
                if (snakeLocation.length != 1 && snakeLocation[i].x === snakeX && snakeLocation[i].y === snakeY) {
                    tail = i + 1;
                    life -= 1;
                    if (life == 0) {
                        clearInterval(intervalId);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        ctx.font = 'bold 100px serif';
                        ctx.fillStyle = 'red';
                        ctx.fillText('GAME OVER', (canvas.width - ctx.measureText('GAME OVER').width) / 2, 500);
                        ctx.fillStyle = 'white';
                        ctx.font = 'bold 50px serif';
                        ctx.fillText(`SCORE: ${score}`, (canvas.width - ctx.measureText(`SCORE: ${score}`).width) / 2, 600);
                    }
                }
            }
            snakeLocation.push({ x: snakeX, y: snakeY });
            while (snakeLocation.length > tail) {
                snakeLocation.shift();
            }
            if (appleX === snakeX && appleY === snakeY) {
                score += 10;
                tail++;
                appleX = Math.floor(Math.random() * gridCountWidth);
                appleY = Math.floor(Math.random() * girdCountHeight);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(appleX * gridSize + baseLocation, appleY * gridSize + baseLocation, gridSize - 2, gridSize - 2);
        }

        const intervalId = setInterval(() => {
            start();
        }, 60);
    }
}
