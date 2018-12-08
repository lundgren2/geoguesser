import {
  CLEAR_HIGHLIGHTED_MARKER,
  SET_HIGHLIGHTED_MARKER,
} from '../../actions';

const initialState = {
  markerId: -1,
  description: '',
};

const markerHighlighted = (state = initialState, action) => {
  switch (action.type) {
    case SET_HIGHLIGHTED_MARKER:
      return action.payload;
    case CLEAR_HIGHLIGHTED_MARKER:
      return initialState;
    default:
      return state;
  }
};

export default markerHighlighted;
