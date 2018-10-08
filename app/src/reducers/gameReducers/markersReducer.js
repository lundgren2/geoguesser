import getMarkers from './helpers/getMarkers';
import { CHOOSE_MARKERS } from '../../actions/actions';

const initialState = [];

const markers = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_MARKERS:
      return getMarkers(state.game.region, true);
    default:
      return state;
  }
};

export default markers;
