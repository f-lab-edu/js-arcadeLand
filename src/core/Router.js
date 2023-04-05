import paths from '../const/paths';
import ErrorPage from '../pages/ErrorPage';

class Router {
    #curRoute;
    constructor() {
        this.errorPage = ErrorPage;
        this.$target = document.querySelector('#app');
        this.paths = paths;
        this.interfaceNavigate();
    }

    render() {
        const curPath = window.location.pathname.slice(1);
        const routeTarget = this.paths.find((route) => route.path === curPath);
        if (routeTarget) {
            this.#curRoute = new routeTarget.component(this.$target);
        } else {
            new this.errorPage(this.$target);
        }
    }

    push(path) {
        this;
        window.history.pushState(null, null, path);
        this.render();
    }

    interfaceNavigate() {
        window.addEventListener('popstate', () => {
            this.#curRoute && this.#curRoute.clearEvent();
            this.render();
        });
    }
}

const router = new Router();

export default router;
