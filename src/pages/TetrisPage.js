import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
import Tetris from '../gameLogic/Tetris/Main';
import levelUpAudio from '../../resource/levelUp.mp3';
import backgroundAudio from '../../resource/TetrisBackgroundAudio.mp3';
import gameOverAudio from '../../resource/gameOver.mp3';
import fixBoardAudio from '../../resource/fixBoard.mp3';

export default class TetrisPage extends CoreComponent {
    setHTML() {
        return `
        <div class="retroContainer"></div>
        <audio id="backgroundAudio" loop src="${backgroundAudio}"></audio>
        <audio id="fixBoardAudio" src="${fixBoardAudio}"></audio>
        <audio id="levelUpAudio" src="${levelUpAudio}"></audio>
        <audio id="gameOverAudio" src="${gameOverAudio}"></audio>
        `;
    }

    appendChild() {
        const retroContainer = document.querySelector('.retroContainer');
        new RetroContainerComponent(retroContainer);
    }
    setup() {
        const canvas = document.getElementById('retroCanvas');
        new Tetris(canvas);
    }
    setEvent() {
        const backgroundAudio = document.getElementById('backgroundAudio');
        const fixBoardAudio = document.getElementById('fixBoardAudio');
        const levelUpAudio = document.getElementById('levelUpAudio');
        const gameOverAudio = document.getElementById('gameOverAudio');

        this.addEvent('startPlay', () => {
            backgroundAudio.play();
        });
        this.addEvent('fixPlay', () => {
            fixBoardAudio.play();
        });
        this.addEvent('levelUpPlay', () => {
            levelUpAudio.play();
        });
        this.addEvent('gameOverPlay', () => {
            backgroundAudio.pause();
            gameOverAudio.play();
        });
    }
}
