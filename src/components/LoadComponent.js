import CoreComponent from '../core/CoreComponent';
export default class LoadComponent extends CoreComponent {
    setHTML() {
        return `
        <div class="progress-bar-container">
            <label for="progressbar">Loading...</label>
            <progress id="progressbar" value="0" max="100"></progress>
        </div>
            `;
    }
}
