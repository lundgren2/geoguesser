import {
  TOGGLE_PAUSE_MENU,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
} from '../actions';

const GAME_OFF = 'GAME_OFF';
const GAME_ON = 'GAME_ON';
const GAME_PAUSED = 'GAME_PAUSED';

const initialState = {
  pauseMenu: false,
  mainMenu: true,
  gameStatus: GAME_OFF,
};

const debug = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_PAUSE_MENU:
      return {
        ...state,
        pauseMenu: !state.pauseMenu,
        gameStatus: !state.pauseMenu ? 'GAME_PAUSED' : 'GAME_ON',
      };
    case STOP_GAME:
      return {
        ...state,
        mainMenu: true,
        pauseMenu: false,
        gameStatus: GAME_OFF,
      };
    case START_GAME:
      return {
        ...state,
        gameStatus: GAME_ON,
        mainMenu: false,
        pauseMenu: false,
      };
    default:
      return state;
  }
};

export default debug;
