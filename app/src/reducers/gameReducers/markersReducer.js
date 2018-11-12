import getMarkers from './helpers/getMarkers';
import { SET_MARKERS, SET_MARKERS_FORCE } from '../../actions';

const initialState = getMarkers(3, true);

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKERS:
      return getMarkers(action.payload, true);
    case SET_MARKERS_FORCE:
      return [action.payload];
    default:
      return state;
  }
};

export default markers;
