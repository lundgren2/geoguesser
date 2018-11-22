import { TOGGLE_OPTIONS_MENU, TOGGLE_GAME_WON } from '../actions';

const initialState = {
  optionsMenu: false,
  gameWon: false
};

const layers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTIONS_MENU:
      return { ...state, optionsMenu: !state.optionsMenu };
    case TOGGLE_GAME_WON:
      return { ...state, gameWon: !state.gameWon };
    default:
      return state;
  }
};

export default layers;
