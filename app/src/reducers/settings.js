import { TOGGLE_DEBUG, TOGGLE_GAME_MENU } from '../actions/settings';

const initialState = {
  debug: false,
  showGameMenu: true
};

const debug = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DEBUG:
      return { ...state, debug: !state.debug };
    case TOGGLE_GAME_MENU:
      return { ...state, showGameMenu: !state.showGameMenu };
    default:
      return state;
  }
};

export default debug;
