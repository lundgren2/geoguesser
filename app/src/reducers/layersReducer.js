import {
  TOGGLE_GAME_MENU,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST,
  START_GAME,
  STOP_GAME,
  GAME_OFF,
  GAME_ON,
  GAME_PAUSED,
} from '../actions';

const initialState = {
  gameMenu: false,
  mainMenu: true,
  gameStatus: GAME_OFF,
  gameWon: false,
  gameLost: false,
};

const layers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_GAME_MENU:
      return {
        ...state,
        gameMenu: !state.gameMenu,
        gameStatus: !state.gameMenu ? GAME_PAUSED : GAME_ON,
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
    case TOGGLE_GAME_WON:
      return { ...state, gameWon: !state.gameWon };
    case TOGGLE_GAME_LOST:
      return { ...state, gameLost: !state.gameLost };
    default:
      return state;
  }
};

export default layers;
