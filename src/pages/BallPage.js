import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
import BallGame from '../gameLogic/Ball/Main';

export default class BallPage extends CoreComponent {
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
        new BallGame(canvas);
    }
}
