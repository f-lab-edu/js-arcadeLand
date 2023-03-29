import CoreComponent from '../core/CoreComponent';
import '../style/LoadComponent.scss';

export default class LoadComponent extends CoreComponent {
    setHTML() {
        return `
        <div class="progressbarContainer">
            <label for="progressbar">Loading...</label>
            <progress class="progressbar" value="0" max="100"></progress>
        </div>
            `;
    }
}
