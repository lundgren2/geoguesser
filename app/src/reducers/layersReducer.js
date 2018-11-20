import {
  TOGGLE_GAME_MENU,
  START_GAME,
  STOP_GAME,
  PAUSE_GAME,
} from '../actions';

const GAME_OFF = 'GAME_OFF';
const GAME_ON = 'GAME_ON';
const GAME_PAUSED = 'GAME_PAUSED';

const initialState = {
  gameMenu: false,
  mainMenu: false,
  gameStatus: GAME_ON,
};

const debug = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_GAME_MENU:
      return {
        ...state,
        gameMenu: !state.gameMenu,
        gameStatus: !state.gameMenu ? 'GAME_PAUSED' : 'GAME_ON',
      };
    case STOP_GAME:
      return {
        ...state,
        gameStatus: GAME_OFF,
        mainMenu: true,
        gameMenu: false,
      };
    case START_GAME:
      return {
        ...state,
        gameStatus: GAME_ON,
        mainMenu: false,
        gameMenu: false,
      };
    default:
      return state;
  }
};

export default debug;
