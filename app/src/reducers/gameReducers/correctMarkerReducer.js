import _ from 'lodash';

const initialState = {};

const markers = (state = initialState, action) => {
  switch (action.type) {
    case RANDOMIZE_CORRECT_MARKER:
      const id = _.random(0, state.game.markers.length - 1);
      const correctMarker = _.nth(state.game.markers, id);
      return correctMarker.id;
    default:
      return state;
  }
};

export default markers;
