// importing scripts
import loadForm from './formEvents';

// importing styles
import '../styles/index.css';
import loadMainTile from './mainTile';
import loadInfoTile from './infoTile';
import getData from './getData';

loadForm();
loadMainTile();
loadInfoTile();
getData('pollachi');
