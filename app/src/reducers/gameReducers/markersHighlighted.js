import { SET_HIGHLIGHTED_MARKERS } from '../../actions';

const initialState = [];

const markersHighlighted = (state = initialState, action) => {
  switch (action.type) {
    case SET_HIGHLIGHTED_MARKERS:
      return action.payload;
    default:
      return state;
  }
};

export default markersHighlighted;
