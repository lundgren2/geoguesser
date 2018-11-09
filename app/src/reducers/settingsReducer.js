import { TOGGLE_DEBUG } from '../actions';

const initialState = {
  debug: false
};

const debug = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DEBUG:
      return { ...state, debug: !state.debug };
    default:
      return state;
  }
};

export default debug;
