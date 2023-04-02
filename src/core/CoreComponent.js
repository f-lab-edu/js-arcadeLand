export default class CoreComponent {
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.render();
        this.appendChild();
        this.setEvent();
        this.setup();
    }

    setup() {}

    render() {
        this.$target.innerHTML = this.setHTML();
        if (this.props?.inner) {
            this.$target.replaceWith(...this.$target.childNodes);
        }
    }

    setHTML() {
        return ``;
    }

    appendChild() {}

    setEvent() {}

    addEvent(type, callback) {
        this.$target.addEventListener(type, (event) => {
            callback(event);
        });
    }
}
