export default class CoreComponent {
    #events;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.#events = [];
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
        this.#events.push({ type, callback });
        this.$target.addEventListener(type, callback);
    }

    clearEvent() {
        this.#events.forEach(({ type, callback }) => {
            this.$target.removeEventListener(type, callback);
        });
    }
}
