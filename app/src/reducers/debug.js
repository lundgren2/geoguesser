import { TOGGLE_DEBUG } from '../actions/settings';

const debug = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DEBUG:
      return !state;
    default:
      return state;
  }
};

export default debug;
