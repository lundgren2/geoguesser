import getInitialMarkers from './helpers/getInitialMarkers';
import { SET_INITIAL_MARKERS, SET_USER_POSITION } from '../../actions';

const initialState = [];

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_MARKERS:
      return getInitialMarkers(action.payload);
    case SET_USER_POSITION:
      return action.payload;
    default:
      return state;
  }
};

export default markers;
