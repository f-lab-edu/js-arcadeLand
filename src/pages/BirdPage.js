import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
import FlappyBird from '../gameLogic/FlappyBird/Main.js';
import BirdBackground from '../../resource/BirdBackground.png';
import bottomPipe from '../../resource/bottom.png';
import upperPipe from '../../resource/upper.png';
import bird from '../../resource/bird.png';

export default class BirdPage extends CoreComponent {
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
        canvas.style.background = `center / 99% 99% no-repeat  url(${BirdBackground}) `;
        const bottomPipeImage = new Image();
        const upperPipeImage = new Image();
        const birdImage = new Image();
        bottomPipeImage.src = bottomPipe;
        upperPipeImage.src = upperPipe;
        birdImage.src = bird;
        new FlappyBird(canvas, bottomPipeImage, upperPipeImage, birdImage);
    }
}
