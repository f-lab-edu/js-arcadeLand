import paths from '../const/paths';
import ErrorPage from '../pages/ErrorPage';

class Router {
    constructor() {
        this.errorPage = ErrorPage;
        this.$target = document.querySelector('#app');
        this.paths = paths;
        this.interfaceNavigate();
    }

    render() {
        const curPath = window.location.pathname;
        const routeTarget = this.paths.find((route) => route.path === curPath);
        if (routeTarget) {
            new routeTarget.component(this.$target);
        } else {
            new this.errorPage(this.$target);
        }
    }

    push(path) {
        window.history.pushState(null, null, path);
        this.render();
    }

    interfaceNavigate() {
        window.addEventListener('popstate', () => {
            this.render();
        });
    }
}

const router = new Router();

export default router;
