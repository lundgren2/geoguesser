import { NEW_LEVELS } from '../actions/levels';
import getMarkers from '../components/Map/Pin/getMarkers';

const initialState = [getMarkers(1), getMarkers(2, true)];

const levels = (state = initialState, action) => {
  switch (action.type) {
    case NEW_LEVELS:
      return [getMarkers(1), getMarkers(2, true)];
    default:
      return state;
  }
};

export default levels;
