import CoreComponent from '../core/CoreComponent';
import RetroContainerComponent from '../components/RetroContainerComponent';
import Snake from '../gameLogic/Snake/Main';
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
        new Snake(document.getElementById('retroCanvas'));
    }
}
