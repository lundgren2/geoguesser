import _ from 'lodash';

import getInitialMarkers from './helpers/getInitialMarkers';
import { SET_MARKERS, REMOVE_CORRECT_MARKER } from '../../actions';

const initialState = getInitialMarkers(1);

const markersLeft = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKERS:
      return getInitialMarkers(action.payload);
    case REMOVE_CORRECT_MARKER:
      return _.filter(state, marker => marker.id !== action.payload.id);
    default:
      return state;
  }
};

export default markersLeft;
