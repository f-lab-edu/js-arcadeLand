import TetrisPage from '../pages/TetrisPage';
import BallPage from '../pages/BallPage';
import SnakePage from '../pages/SnakePage';
import GalagaPage from '../pages/GalagaPage';
import MainPage from '../pages/MainPage';
import BirdPage from '../pages/BirdPage.js';
const paths = [
    { path: '', component: MainPage },
    { path: 'Tetris', component: TetrisPage },
    { path: 'Ball', component: BallPage },
    { path: 'Snake', component: SnakePage },
    { path: 'Galaga', component: GalagaPage },
    { path: 'Bird', component: BirdPage },
];

export default paths;
