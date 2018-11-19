import getMarkers from './helpers/getMarkers';
import { SET_MARKERS } from '../../actions';

const initialState = getMarkers(2, true);

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKERS:
      return getMarkers(action.payload);
    default:
      return state;
  }
};

export default markers;
