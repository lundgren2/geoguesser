import { TOGGLE_OPTIONS_MENU } from '../actions/settings';

const initialState = {
  optionsMenu: false
};

const debug = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTIONS_MENU:
      return { ...state, optionsMenu: !state.optionsMenu };
    default:
      return state;
  }
};

export default debug;
