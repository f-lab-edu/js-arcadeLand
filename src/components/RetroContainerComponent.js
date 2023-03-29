import bezel from '../../resource/bezel.png';
import CoreComponent from '../core/CoreComponent';
import '../style/CrtEffect.scss';

export default class RetroContainerComponent extends CoreComponent {
    setHTML() {
        return `
        <img src=${bezel} id="bezelImg"/>
        <canvas id="retroCanvas" width="1080" height="1080"></canvas>
        <div id="crt"></div>
        `;
    }
}
