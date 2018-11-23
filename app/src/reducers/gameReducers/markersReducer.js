import getInitialMarkers from './helpers/getInitialMarkers';
import { SET_INITIAL_MARKERS } from '../../actions';

const initialState = getInitialMarkers(1);

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_MARKERS:
      return getInitialMarkers(action.payload);
    default:
      return state;
  }
};

export default markers;
