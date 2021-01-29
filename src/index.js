import state from './redux/state.js';
import {renderEntireTree} from './render.js';
import {PostMessage} from './redux/state.js';

renderEntireTree(state,PostMessage);

