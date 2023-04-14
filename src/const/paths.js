import TetrisPage from '../pages/TetrisPage';
import BallPage from '../pages/BallPage';
import SnakePage from '../pages/SnakePage';
import BirdPage from '../pages/BirdPage';
import MainPage from '../pages/MainPage';

const BASE_PATH = '/js-arcadeLand';
const paths = [
    { path: `${BASE_PATH}/`, component: MainPage },
    { path: `${BASE_PATH}/Tetris`, component: TetrisPage },
    { path: `${BASE_PATH}/Ball`, component: BallPage },
    { path: `${BASE_PATH}/Snake`, component: SnakePage },
    { path: `${BASE_PATH}/Bird`, component: BirdPage },
];

export default paths;
