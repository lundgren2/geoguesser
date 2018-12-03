import {
  TOGGLE_GAME_MENU,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST,
  TOGGLE_MAIN_MENU,
  START_GAME,
  STOP_GAME,
  SETUP_GAME,
  GAME_OFF,
  GAME_ON,
  GAME_PAUSED,
  GAME_STARTING,
  GAME_NEXT_REGION,
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
    case TOGGLE_MAIN_MENU:
      return {
        ...state,
        mainMenu: !state.mainMenu,
        gameStatus: !state.mainMenu ? GAME_OFF : state.gameStatus,
      };
    case STOP_GAME:
      return {
        ...state,
        gameStatus: GAME_OFF,
      };
    case SETUP_GAME:
      return {
        ...state,
        gameStatus: GAME_STARTING,
      };
    case GAME_NEXT_REGION:
      return {
        ...state,
        gameStatus: GAME_NEXT_REGION,
      };
    case START_GAME:
      return {
        ...state,
        gameStatus: GAME_ON,
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
