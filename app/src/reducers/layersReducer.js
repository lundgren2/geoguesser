import {
  TOGGLE_OPTIONS_MENU,
  TOGGLE_GAME_WON,
  TOGGLE_GAME_LOST
} from '../actions';

const initialState = {
  optionsMenu: false,
  gameWon: false,
  gameLost: false
};

const layers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTIONS_MENU:
      return { ...state, optionsMenu: !state.optionsMenu };
    case TOGGLE_GAME_WON:
      return { ...state, gameWon: !state.gameWon };
    case TOGGLE_GAME_LOST:
      return { ...state, gameLost: !state.gameLost };
    default:
      return state;
  }
};

export default layers;
