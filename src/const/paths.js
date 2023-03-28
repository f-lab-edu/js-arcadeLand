import TetrisPage from '../pages/TetrisPage';
import BallPage from '../pages/BallPage';
import SnakePage from '../pages/SnakePage';
import GalagaPage from '../pages/GalagaPage';
import MainPage from '../pages/MainPage';

const paths = [
    { path: '', component: MainPage },
    { path: 'Tetris', component: TetrisPage },
    { path: 'Ball', component: BallPage },
    { path: 'Snake', component: SnakePage },
    { path: 'Galaga', component: GalagaPage },
];

export default paths;
