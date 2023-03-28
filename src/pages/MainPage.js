import LoadComponent from '../components/LoadComponent';
import CoreComponent from '../core/CoreComponent';
import World from '../three/World';

export default class MainPage extends CoreComponent {
    setHTML() {
        return `<div id="load"></div>
        <canvas id="world"></canvas>
        `;
    }
    appendChild() {
        const loadContainer = this.$target.querySelector('#load');
        new LoadComponent(loadContainer, { inner: true });
        new World(this.$target);
    }
}
