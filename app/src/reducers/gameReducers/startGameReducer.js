import { TOGGLE_START_GAME } from '../../actions';

const initialState = false;

const markers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_START_GAME:
      return !state;
    default:
      return state;
  }
};

export default markers;
