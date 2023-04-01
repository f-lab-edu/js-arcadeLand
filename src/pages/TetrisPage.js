import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
import Tetris from '../gameLogic/Tetris';
export default class TetrisPage extends CoreComponent {
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
        new Tetris(canvas);
    }
}
